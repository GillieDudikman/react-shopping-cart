import Rating from "./Rating";
import {CartState} from "../context/Context";

const SingleProduct = ({product}) => {

    const { state: { cart }, dispatch } = CartState();

    return (
        <div className="product">
            <div className="product-top">
                <img alt={product.name} src={product.image}/>
            </div>
            <div className="product-dits">
                <h1>{product.name}</h1>
                <span className="text-center text-gray-800 mt-1">{product.price.split(".")[0]} $</span>
                <div className="fast-delivery">
                    {product.fastDelivery ? (
                        <div>Fast Delivery</div>
                    ) : (<div>4 days delivery</div>
                    )}
                </div>
                <div className="flex flex-row">
                    <Rating rating={product.ratings} onClick={() => ""}/>
                </div>
                <div className="button-product">
                    {
                        cart.some(p => p.id === product.id) ? (
                            <button onClick={() => {
                                dispatch({
                                    type: "REMOVE FROM CART",
                                    payload: product,
                                })
                            }} className="button-remove">
                            Remove from Cart
                        </button>
                        ) :
                            (
                                <button onClick={() => {
                                    dispatch({
                                        type: "ADD TO CART",
                                        payload: product,
                                    })
                                }} disabled={!product.inStock} className="button-add">
                                {!product.inStock ? "Out of Stock" : "Add to Cart"}
                            </button>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;