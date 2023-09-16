import React from 'react';

const Menu = ({ name, image, description, price }) => {
  return (
    <div className="menu-item">
      <div className="text-section">
        <h2>{name.toUpperCase()}</h2>
        <p>${(price / 100).toFixed(2)}</p>
        <p>{description}</p>
      </div>
      <div className="image-section">
        <img
          className="image-size"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            image
          }
          alt={name}
        />
      </div>
    </div>
  );
};

export default Menu;
