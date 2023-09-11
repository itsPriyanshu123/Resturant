import { useState } from "react";
import logoImage from "/common/logo.jpg";
import { Link } from "react-router-dom";
// Title component for display logo
const Title = () => (
  <a href="/">
    <img className="logo" src={logoImage} alt="Food Fire Logo" />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const[auth,setAuth]=useState("login");
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <button type='submit' onClick={()=>setAuth(auth==="login"?"logout":"login")}>{auth}</button>
          <li>
            <Link to="/">Home</Link>
          </li>
         <li>
          <Link to="/about">About US</Link>
         </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;