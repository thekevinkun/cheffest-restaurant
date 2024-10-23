import { useState } from "react";

import { data, images } from "../../constants";

import { Button } from "../../components";

import { MdMenu } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";
import { LuUtensilsCrossed } from "react-icons/lu";

import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="nav">
      <ul className="nav__list">
        {data.nav_link.map((link) => (
          <li key={link.title} className="nav__list-item">
            <a href={link.href} className="nav-item">
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav__logo">
        <img src={images.logo} alt="Restaurant Logo" />
      </div>

      <div className="nav__features">
        <MdMenu 
          className="features-menu" 
          onClick={() => setToggleMenu(true)}
        />

        <FaCartShopping className="features-cart" />

        <FiSearch className="features-search" />

        <Button 
          type="button"
          title="Become a member"
          variant="btn-white"
        />
      </div>

      {toggleMenu &&
        <div className="glassmorphism-menu nav__small-screen slide-bottom">
          <LuUtensilsCrossed 
            className="close-menu"
            onClick={() => setToggleMenu(false)}
          />
          <ul className="nav__list-mobile">
            {data.nav_link.map((link) => (
              <li key={link.title} className="nav__list-mobile_item">
                <a 
                  href={link.href} 
                  className="nav-item"
                  onClick={() => setToggleMenu(false)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      }
    </nav>
  )
}

export default Navbar;