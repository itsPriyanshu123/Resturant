
import Header from "./Components/Header";
import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
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
      <Outlet />
      {/* <Footer /> */}
    </React.Fragment>
  );
};
const router =createBrowserRouter([
  {
    path: "/",
    element:<AppLayout />,
    children:[
      {
        path: "/",
        element:<Body />,
      },
      {
        path: "/about",
        element:<About />,
      },
      {
        path: "/contact",
        element:<Contact/>,
      }
    ],
    errorElement:<Error />
  }

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);
