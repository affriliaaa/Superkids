import Hero from "./sections/Hero";
import Offer from "./sections/Offer";
import ItemBenefit from "./sections/ItemBenefit";
import AboutUs from "./sections/AboutUs";
import Knowledge from "./sections/Knowledge";
import Testimonial from "./sections/Testimonial";

function App() {
  return (
    <div className="App">
      <Hero/>
      <Offer/>
      <ItemBenefit/>
      <AboutUs/>
      <Knowledge/>
      <Testimonial/>
    </div>
  );
}

export default App;
