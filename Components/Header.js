import { useState } from "react";
import logoImage from "/common/logo.jpg";
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;