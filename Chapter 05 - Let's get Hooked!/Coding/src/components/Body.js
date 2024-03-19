import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mokeData"

const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                <RestaurantCard resData={restaurantList} />
            </div>
        </div>
    )
}

export default Body