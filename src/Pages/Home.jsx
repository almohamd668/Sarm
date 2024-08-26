import About from "../Components/About";
import Footer from "../Components/Footer/Footer";
import TestimonialsSlid from "../Components/TestimonialsSlid/TestimonialsSlid";
import Services from "../Components/Services";
import Slider from "./../Components/Slider";
import BestSell from "../Components/BestSell/BestSell";
import ContactForm from "../Components/ContactForm/ContactFrom";

const Home = () => {
  return (
    <main className=" w-full">
      <Slider />
      <About />
      <BestSell />
      <Services />
      <TestimonialsSlid />
      <ContactForm/>
      <Footer />
      
    </main>
  );
};

export default Home;
