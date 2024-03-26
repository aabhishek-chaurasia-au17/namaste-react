import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mokeData"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);

    function getResFilter() {
        setAllRestaurants(
            allRestaurants.filter((item) => {
                return item.data.avgRating > 4
            })
        )
    }

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() => {
        const data = await fetch(`https://foodfire.onrender.com/api/restaurants?lat=12.991733&lng=77.713175&page_type=DESKTOP_WEB_LISTING`)
        const json = await data.json()
        
        async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {

          // initialize checkData for Swiggy Restaurant data
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

    const resData = await checkJsonData(json);
       setAllRestaurants(resData)
    }
    
    return allRestaurants.length === 0 ? <Shimmer/> : (
        <>
             <div className="search-container">
                <input
                type="text"
                className="search-input"
                placeholder="Search a restaurant you want..."
                />
                <button className="search-btn">Search</button>
        </div>
        
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={getResFilter}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            {allRestaurants.map((restaurant) => {
                return (
                    <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
                )}
            )}
            </div>
        </div>
        </>
    )
}

export default Body