
import Header from "./Components/Header";
// import RestaurantCard from "./Components/RestaurantCard";
// import Dishlogo from "./common/foodDish1.jpg";

// import restaurantList from "./Utills/RestaurantList";

import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";


/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// AppLayout component to render: Header, Body and Footer Component
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      {/* <Footer /> */}
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
