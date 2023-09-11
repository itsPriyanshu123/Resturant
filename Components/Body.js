import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Restaurant_list_api } from "./constant";
function filterData(searchText, restaurants) {
  const resFilterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return resFilterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [clearSearch, setClearSearch] = useState(false);
  const [resList,setResList] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  useEffect(()=>{
    getRestaurant_list();
  },[])

  useEffect(() => {
    // Update filteredRestaurants whenever searchText changes
    searchData(searchText, allRestaurants);
  }, [searchText, allRestaurants]);

async function getRestaurant_list(){
try{
  const response =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.3176452&lng=82.9739144&restaurantId=190999&catalog_qa=undefined&submitAction=ENTER")
  const jsonData=await response.json();
  const result=jsonData?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

  console.log("res", result);

    async function checkRestaurantList(responseData){
      for(let i=0;i<responseData?.data?.cards.length;i++){
        const result = jsonData?.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemsCards;
        if(result!==undefined){
          return result;
        }
      }
    }

    const actual_data= await checkRestaurantList(jsonData);

    setResList(actual_data);
}catch(error){
  console.log(error);
}
}

  async function getRestaurants() {
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3176452&lng=82.9739144&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await response.json();

      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      const resData = await checkJsonData(json);

      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }

  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage(filteredData.length === 0 ? "No matches restaurant found" : "");
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  if (!allRestaurants) return null;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            if (searchText.trim() === "") {
              setClearSearch(true);
            } else {
              setClearSearch(false);
            }
            // No need to call searchData here, it's already updated through useEffect
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
