import { data } from "../../constants";

import "./countdown.css";

const Countdown = () => {
  return (
    <section className="section__padding countdown">
      <h2>
        We believe in making quality food
      </h2>

      <div className="countdown__list flex__between">
        {data.countdown.map((item) => (
          <div key={item.title} className="countdown__list-item">
            <p>{item.value}</p>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Countdown;