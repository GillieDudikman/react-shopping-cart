import {CartState} from "../context/Context";
import {useEffect, useState} from "react";
import Rating from "./Rating";
import {BsFillTrash3Fill} from "react-icons/bs";

const Cart = () => {

    const { state: { cart }, dispatch } = CartState();

    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(cart.reduce((acc, current) => acc + Number(current.price)*current.qty, 0))
    }, [cart])

    return (
        <div className="w-[100%] flex">
            <fieldset className="filter-container">
                <legend>Total {cart.length} item{cart.length > 1 ? "s" : ""}</legend>
                <span>Total: {total} $</span>
                <button type="button" disabled={cart.length === 0}>
                    Proceed to Checkout
                </button>
            </fieldset>
            <div className="flex w-[75%] p-[20px] mt-2.5 m-0.5 place-content-around flex-col">
                <ul className="cart-list">
                {
                    cart.map(prod => (
                        <li  key={prod.id}>
                            <div className="cart-list-items">
                                <span className="h-[20%] w-[20%]"><img className="rounded-full object-cover" alt={prod.name} src={prod.image}/></span>
                                <div className="flex flex-row w-[80%] justify-between p-16">
                                    <span>{prod.name}</span>
                                    <span>{prod.price.split(".")[0]} $</span>
                                    <span className="flex flex-row -m-2">{<Rating rating={prod.ratings} onClick={() => ""}/>}</span>
                                    <span>
                                        <select value={prod.qty} onChange={e => dispatch({
                                            type: "CHANGE QUANTITY",
                                            payload: {
                                                id: prod.id,
                                                qty: e.target.value,
                                            },
                                        })}>

                                            {[...Array(prod.inStock.length).keys()].map(x => (
                                                <option key={x+1}>{x+1}</option>
                                            ))}
                                        </select>
                                    </span>
                                    <span>
                                        <button onClick={() => { dispatch({
                                            type: "REMOVE FROM CART",
                                            payload: prod
                                        }) }}>
                                            <BsFillTrash3Fill className="ml-2 hover:text-slate-900"/>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </li>

                    ))
                }
                </ul>
            </div>
        </div>
    )

}

export default Cart;