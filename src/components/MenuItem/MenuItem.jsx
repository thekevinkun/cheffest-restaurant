import { MdOutlineShoppingCart } from "react-icons/md";

import "./menuitem.css";

const MenuItem = ({name, image, description, price, variantClass}) => {
  return (
    <div className={`glassmorphism menu__content-list_item ${variantClass}`}>
      <img src={image} alt="Meal"/>

      <div className="item-info">
        <h3>{name}</h3>
        <p>{description}</p>

        <div className="item-info_price">
          <p>{price}</p>
          
          <div className="item-cart">
            <MdOutlineShoppingCart className="cart"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuItem;