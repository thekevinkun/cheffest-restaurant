import { Navbar } from "./components";
import { Header, About, Menu, Countdown, 
  Franchise, Testimonial, Subscribe, FindUs, Footer } from "./sections";

import "./App.css";
import "./components/EmblaCarousel/embla.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <About />
        <Menu />
        <Countdown />
        <Franchise />
        <Testimonial />
        <Subscribe />
        <FindUs />
        <Footer />
      </main>
    </>
  )
}

export default App;