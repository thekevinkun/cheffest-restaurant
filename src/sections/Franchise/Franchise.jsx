import { Button } from "../../components";

import "./franchise.css";

const Franchise = () => {
  return (
    <section id="franchise" className="section__padding franchise">
      <h2>
        Start The Adventure Today And Become a Franchisee
      </h2>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>

      <div className="franchise__features flex__center">
        <Button 
          type="button"
          title="Become a Franchise"
          variant="btn-white"
        />
      </div>  
    </section>
  )
}

export default Franchise;