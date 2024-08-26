import About from "../Components/About";
import Footer from "../Components/Footer/Footer";
import TestimonialsSlid from "../Components/TestimonialsSlid/TestimonialsSlid";
import Services from "../Components/Services";
import Slider from "./../Components/Slider";
import BestSell from "../Components/BestSell/BestSell";

// import TestApi from "./Products/TestApi";

// <TestApi />

const Home = () => {
  return (
    <main className=" w-full">
      <Slider />
      <About />
      <BestSell />
      <Services />
      <TestimonialsSlid />

      <Footer />
    </main>
  );
};

export default Home;
