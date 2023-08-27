import {CartState} from "../context/Context";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";

const Home = () => {

    const { state: {products},
    filterState: { sort, byStock, byDelivery, byRating, searchQuery }} = CartState();

    const transformProducts = () => {
        let sortedProducts = products;

        if(sort){
            sortedProducts = sortedProducts.sort((a,b) => (
                sort === "lowToHigh" ? a.price-b.price : b.price-a.price
            ))
        }

        if(!byStock) {
            sortedProducts = sortedProducts.filter(prod => prod.inStock)
        }

        if(byDelivery){
            sortedProducts = sortedProducts.filter(prod => prod.fastDelivery)
        }

        if(byRating){
            sortedProducts = sortedProducts.filter(prod => prod.ratings >= byRating)
        }

        if(searchQuery){
            sortedProducts = sortedProducts.filter(prod => prod.name.toLowerCase().includes(searchQuery))
        }

        return sortedProducts
    }

    return (
        <div className="w-[100%] flex">
            {<Filters />}
            <div className="products-container">
                {transformProducts().map((product) => {
                    return <SingleProduct product={product} key={product.id}/>

                })}
            </div>

        </div>
    )

}

export default Home;