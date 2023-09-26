
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from './src/Components/Header';
import Body from './src/Components/Body';
import Restaurant from './src/Components/Restaurant';
import About from './src/Components/About';
import Contact from './src/Components/Contact';
import Error from './src/Components/Error';
import About from './src/Components/About';
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
      },
      {
        path: "/restaurant/:id",
        element:<Restaurant/>,
      }
    ],
    errorElement:<Error />
  }

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);
