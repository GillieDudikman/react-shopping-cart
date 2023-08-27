import Rating from "./Rating";
import {CartState} from "../context/Context";

const Filters = () => {

    const {filterState: { byStock, byDelivery, byRating, sort }, filterDispatch} = CartState();

    return (
        <fieldset className="filter-container">
            <legend>Filter</legend>
            <span>
                <input className="peer/ascending" type="radio" name="order" id="ascending"
                       onChange={() => filterDispatch({
                           type: "SORT BY PRICE",
                           payload: "lowToHigh"
                       })}
                       checked={sort === "lowToHigh" ? true : false}
                />
                <label className="peer-checked/ascending:text-sky-500" htmlFor="ascending">Ascending</label>
            </span>
            <span>
                <input className="peer/descending" type="radio" name="order" id="descending"
                onChange={() => filterDispatch({
                    type: "SORT BY PRICE",
                    payload: "highToLow"
                })}
                checked={sort === "highToLow" ? true : false}/>
                <label className="peer-checked/descending:text-sky-500" htmlFor="descending">Descending</label>
            </span>
            <span>
                <input type="checkbox" id="out-of-stock" name="filter" onChange={() => filterDispatch({
                    type: "FILTER STOCK"
                })}
                checked={byStock}/>
                <label htmlFor="out-of-stock">Include Out of Stock</label>
            </span>
            <span>
                <input type="checkbox" id="fast-delivery" name="filter" onChange={() => filterDispatch({
                    type: "FILTER DELIVERY"
                })}
                checked={byDelivery}/>
                <label htmlFor="fast-delivery">Fast Delivery Only</label>
            </span>
            <span className="rating">
                <label>Rating: </label>
                <Rating rating={byRating} onClick={(i) => filterDispatch({
                    type: "FILTER RATING",
                    payload: i+1
                })} />
            </span>
            <button onClick={() => filterDispatch({
                type: "CLEAR FILTERS"
            })}>Clear Filters</button>


        </fieldset>
    )
}

export default Filters;