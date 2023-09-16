const Menu = ({name,image,description,price}) => {
  return (
    <>
<div className="main_div">
  <div className="text_section" >
<h2>{name.toUpperCase()}</h2>
<p>{price/100}</p>
<p>{description}</p>
  </div>
  <div className="image_section" >
    <img className="image_size" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+image}/>
  </div>
</div>
<hr/>
</>
  );
};
export default Menu;
