import { images } from "../../constants";

import { FaQuoteLeft } from "react-icons/fa";

import "./clientitem.css";

const ClientItem = ({name, image, job, rating, review}) => {
  const ratings = [];

  for (let i = 0; i < rating; i++) {
    ratings.push(
        <img key={i + 1} src={images.star} alt="Rating Star"/>
    )
  }
 
  return (
    <div className="glassmorphism testimonial__clients-item">
        <div className="client-profile">
            <img src={image} alt="Client" />

            <div className="profile-name">
                <h4>{name}</h4>
                <p>{job}</p>
                
                <div className="ratings">
                    {ratings}
                </div>
            </div>
        </div>

        <div className="client-quote">
            <FaQuoteLeft className="quote"/>
            <div className="quote-border"></div>
        </div>

        <div className="client-review">
            <p>{review}</p>
        </div>
    </div>
  )
}

export default ClientItem;