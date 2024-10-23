import { useState } from "react";
import { data } from "../../constants";

import { Button, EmblaCarousel, MenuItem } from "../../components";

import "./menu.css";

const getMenuListMobile = (data) => {
  return (
    data.map((item) => (
      <div key={item.name} className="embla__slide">
        <MenuItem 
          name={item.name}
          image={item.image}
          description={item.description}
          price={item.price}
          variantClass="embla-menu__slide__number"
        />
      </div>
    ))
  )
}

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState("all");

  const handleMenuOption = (e) => {
    setActiveMenu(e.target.id)
  }

  return (
    <section id="menu" className="menu">
      <h2>
        Our Best & Delicious Menu
      </h2>

      <div className="app__bg-sub">
        <div className="section__padding menu__content">
          <ul className="menu__content-options">
            {data.menu_options.map((option) => (
              <li 
                key={option}
                id={option.replace(/[^A-Z0-9]+/ig, "-")} 
                className={`menu__content-options-item 
                  ${activeMenu === option.replace(/[^A-Z0-9]+/ig, "-") && "active-menu"}`
                }
                onClick={(e) => handleMenuOption(e)}
              >
                {option}
              </li>
            ))}
          </ul>

          <div className="menu__content-list">
            {data.menu_items.map((item) => (
              <MenuItem 
                key={item.name}
                name={item.name}
                image={item.image}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
          
          <div className="menu__content-list_mobile">
            <EmblaCarousel 
              getSlides={getMenuListMobile(data.menu_items)}
            />
            
            <div className="menu__features-mobile">
              <Button 
                type="button"
                title="See All"
                variant="btn-white"
              />
            </div>
          </div>
        
          <div className="menu__features flex__center">
            <Button 
              type="button"
              title="See All"
              variant="btn-white"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu;