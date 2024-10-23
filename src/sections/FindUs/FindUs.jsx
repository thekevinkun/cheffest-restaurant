import { Button, CustomMap } from "../../components";

import "./findus.css";

const FindUs = () => {
  return (
    <section id="contact" className="app__bg-sub">
      <div className="section__padding findus">
        <div className="findus__information">
          <h2>Our Restaurants.<br/>Where to Find Us?</h2>
          <p>
            Want to have a superb meal in an exceptional setting with family, 
            friends or work colleagues, here are the addresses of our restaurants.
          </p>

          <Button 
            type="button"
            title="Find The Nearest Cheffest"
            variant="btn-white"
          />
        </div>

        <div className="findus__map">
            <CustomMap />
        </div>

        <div className="findus__information_mobile">
          <p>
            Want to have a superb meal in an exceptional setting with family, 
            friends or work colleagues, here are the addresses of our restaurants.
          </p>

          <Button 
            type="button"
            title="Find The Nearest Cheffest"
            variant="btn-white"
          />
        </div>
      </div>
    </section>
  )
}

export default FindUs;