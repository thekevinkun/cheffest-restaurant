import { Button } from "../../components";

import "./subscribe.css";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="section__padding"> 
        <h2>For more support</h2>

        <div className="subscribe__features">
          <input type="text" className="input" placeholder="Enter Email"/>
          <Button 
            type="button"
            title="Subscribe"
            variant="btn-black"
          />
        </div>
      </div>
    </section>
  )
}

export default Subscribe;