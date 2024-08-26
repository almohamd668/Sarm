import About from "../Components/About";
import Footer from "../Components/Footer/Footer";
import TestimonialsSlid from "../Components/TestimonialsSlid/TestimonialsSlid";
import Services from "../Components/Services";
import Slider from "./../Components/Slider";
import BestSell from "../Components/BestSell/BestSell";
import ContactForm from "../Components/ContactForm/ContactFrom";

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
      <ContactForm/>
>>>>>>> 1c1d59716d68123693848261e6438a2c17721960
      <Footer />
    </main>
  );
};

export default Home;
