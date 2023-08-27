
export const cartReducer = (state, action) => {
    switch(action.type){
        case "ADD TO CART":
            return {...state,
                cart:[...state.cart, {...action.payload, qty: 1}]}
        case "REMOVE FROM CART":
            return {...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)}
        case "CHANGE QUANTITY":
            return {...state,
                cart: state.cart.filter(item => item.id === action.payload.id ?
                    item.qty = action.payload.qty : item.qty)}
        default:
            return state;

    }
}

export const filterReducer = (state, action) => {
    switch(action.type){
        case "SORT BY PRICE":
            return {...state,
                sort: action.payload
            }
        case "FILTER STOCK":
            return {
                ...state,
                byStock: !state.byStock
            }
        case "FILTER DELIVERY":
            return {
                ...state,
                byDelivery: !state.byDelivery
            }
        case "FILTER RATING":
            return {
                ...state,
                byRating: action.payload
            }
        case "FILTER SEARCH":
            return {
                ...state,
                searchQuery: action.payload
            }
        case "CLEAR FILTERS":
            return {
                byStock: false,
                byDelivery: false,
                byRating: 0,
                searchQuery: ""
            }
        default:
            return state
    }

}