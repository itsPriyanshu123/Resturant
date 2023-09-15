import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import Menu from "./Menu";
const Restaurant = () => {
  // ================== state ======================
  const [resInfo, setResInfo] = useState(null);

  //   ===================Api Calls =====================
  useEffect(() => {
    getResInfo();
  }, []);

  const {id}=useParams();
  //   ====================== functions =====================
  const getResInfo = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.3176452&lng=82.9739144&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();

    setResInfo(json?.data);
    console.log(resInfo)
  };
  if (resInfo === null || resInfo === undefined) {
    return (
      <div style={{ marginTop: "80px" }}>
        <Shimmer />
      </div>
    );
  }

  const { name, locality, costForTwoMessage, cuisines  } = resInfo?.cards[0]?.card?.card?.info;
  const{itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log("info",itemCards);
  return (
    <div style={{ marginTop: "80px" }}>
      <h1>{name}</h1>
      <h3>{locality} - {costForTwoMessage} </h3>
      <p>{cuisines?.join(", ")}</p>
      {
        itemCards.map((item)=>{
        return(<div>
        
          <Menu key={item.card.info.id} name={item.card.info.name}  image={item.card.info.imageId} description={item.card.info.description}  price={item.card.info.price}/>
        </div>)
        })
      }
     
    </div>
  );

  


};

export default Restaurant;
