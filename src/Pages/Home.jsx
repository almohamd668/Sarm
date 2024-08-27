import About from "../Components/About";
import Footer from "../Components/Footer/Footer";
import TestimonialsSlid from "../Components/TestimonialsSlid/TestimonialsSlid";
import Services from "../Components/Services";
import Slider from "./../Components/Slider";
import BestSell from "../Components/BestSell/BestSell";
import ContactForm from "../Components/ContactForm/ContactFrom";
import Vi from "../Components/CateVideoSlide/Vi";

// import TestApi from "./Products/TestApi";

// <TestApi />

const Home = () => {
  return (
    <main className="w-full">
      <Slider />
      <About />
      <BestSell />
      <Services />
      <TestimonialsSlid />
<<<<<<< HEAD
      <ContactForm />
=======
      
      <ContactForm />
      <Vi/>
>>>>>>> 0b91f15a035d78ac192588b02167cb380aca0e51
      <Footer />
    </main>
  )
};

export default Home;
