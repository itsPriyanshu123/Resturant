const Menu = ({ description, name, price, image }) => {
  return (
    <div className="menu_card">
      <div className="info_div">
        <h3>{name}</h3>
        <p className="item_desc">{description}</p>
        <p>{price / 100} INR</p>
      </div>
      <div className="image_div">
        <img
          className="menu_img"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${image}`}
        />
      </div>
    </div>
  );
};
export default Menu;
