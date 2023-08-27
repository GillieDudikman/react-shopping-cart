import {createContext, useContext, useReducer} from "react";
import {cartReducer, filterReducer} from "./Reducers";
import { faker } from '@faker-js/faker';

const Cart = createContext();
const Context = ({children}) => {

    const products = [...Array(18)].map(() => ({
            id: faker.string.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            image: faker.image.url(),
            inStock: faker.helpers.arrayElements([0,3,5,6,7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.helpers.arrayElements([1,2,3,4,5])
        }
    ))

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    });

    const [filterState, filterDispatch] = useReducer(filterReducer, {
        byStock: false,
        byDelivery: false,
        byRating: 0,
        searchQuery: ""
    })

    return <Cart.Provider value={{state, dispatch, filterState, filterDispatch}}>
        {children}
    </Cart.Provider>

}

export default Context;

export const CartState = () => {
    return useContext(Cart);
}