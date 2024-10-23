import { data } from "../../constants";

import { ClientItem } from "../../components";

import "./testimonial.css";

const Testimonial = () => {
  return (
    <section className="section__padding testimonial">
      <h2>What Our Clients Are Saying</h2>

      <div className="testimonial__clients">
        {data.clients.map((client) => (
          <ClientItem 
            key={client.name}
            name={client.name}
            image={client.image}
            job={client.job}
            rating={client.rating}
            review={client.review}
          />
        ))}
      </div>
    </section>
  )
}

export default Testimonial;