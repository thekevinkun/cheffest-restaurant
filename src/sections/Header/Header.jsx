import { Button } from "../../components";

import "./header.css";

const Header = () => {
  return (
    <header id="welcome" className="header">
      <div className="header__overlay"></div>
      
      <div className="section__padding header__text">
        <h1>
          Welcome!<br />
          We Made Delicious Food For You
        </h1>

        <p>
          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <Button 
          type="button"
          title="Order Online"
          variant="btn-white"
        />
      </div>
      
    </header>
  )
}

export default Header;