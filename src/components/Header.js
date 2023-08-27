import {BsCartFill, BsFillTrash3Fill, BsSearch} from "react-icons/bs";
import { useState} from "react";
import {Link} from "react-router-dom";
import {CartState} from "../context/Context";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { state: { cart }, dispatch, filterDispatch } = CartState();

    return (
        <nav
            className="navbar">
            <div className="navbar-logo">
                <Link to="/react-shopping-cart">
                    Shopping Cart
                </Link>
            </div>

            <div className="nav-search">
                <input
                    type="search"
                    className="nav-search-input"
                    aria-describedby="button-addon2"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(event) => filterDispatch({
                        type: "FILTER SEARCH",
                        payload: event.target.value
                    })}/>
                    <BsSearch className="absolute mt-1.5 ml-[290px]" color="white" fontSize="20px"/>
            </div>
            <div className="inline-flex">
                <button className="nav-dropdown" onClick={() => isOpen ? setIsOpen(false):setIsOpen(true)}>
                    <BsCartFill fontSize="25px"/>
                </button>
                <span className="cart-items">{cart.length}</span>
                {isOpen?
                    <div className="dropdown-ul">
                        <ul>
                            {cart.map(prod => {
                                return (
                                    <li key={prod.id} className="dropdown-item">
                                        <img className="object-cover h-10 w-10 rounded-full" alt={prod.name} src={prod.image}/>
                                        <span className="flex pl-2">{prod.name}</span>
                                        <div className="flex flex-col flex-1 px-[20px]">
                                            <span className="rounded-lg bg-slate-300 my-3">{prod.price.split(".")[0]}$</span>
                                            <button onClick={() => { dispatch({
                                                type: "REMOVE FROM CART",
                                                payload: prod
                                            }) }}>
                                                <BsFillTrash3Fill className="ml-2 hover:text-slate-900"/>
                                            </button>
                                        </div>
                                    </li>
                                )
                            })}

                            <Link to="/react-shopping-cart/cart">
                                <button onClick={() => setIsOpen(false)} className="w-[50%] items-center justify-center rounded-full m-2 ml-14 py-1 px-2 bg-slate-600 text-white hover:bg-slate-700 active:bg-slate-600">
                                    Go to Cart
                                </button>
                            </Link>

                        </ul>
                    </div>
                    : ""}

            </div>
        </nav>
    )
}

export default Header;