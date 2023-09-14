import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Restaurant = () => {
  // ================== state ======================
  const [resInfo, setResInfo] = useState(null);

  //   ===================Api Calls =====================
  useEffect(() => {
    getResInfo();
  }, []);

  //   ====================== functions =====================
  const getResInfo = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.3176452&lng=82.9739144&restaurantId=234903&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    setResInfo(json?.data);
    console.log(resInfo)
  };

  // console.log(resInfo?.cards[0]?.card?.card?.info);
  console.log(resInfo)

  

  if (resInfo === null || resInfo === undefined) {
    return (
      <div style={{ marginTop: "80px" }}>
        <Shimmer />
      </div>
    );
  }

  const { name, locality, costForTwoMessage, cuisines,cloudinaryImageId  } = resInfo?.cards[0]?.card?.card?.info;
  const{itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log("info",itemCards);
  return (
    <div style={{ marginTop: "80px" }}>
      <h1>{name}</h1>
      <h3>{locality} - {costForTwoMessage} :{cloudinaryImageId}</h3>
      <p>{cuisines?.join(", ")}</p>
      {
        itemCards.map((item)=>{
          return(
            <li kry={item.card.info.id}>{item.card.info.name}</li>
          )
        })
      }
    </div>
  );
};

export default Restaurant;
