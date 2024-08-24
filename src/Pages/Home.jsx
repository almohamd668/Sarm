import About from "../Components/About";
import Footer from "../Components/Footer/Footer";
import TestimonialsSlid from "../Components/TestimonialsSlid/TestimonialsSlid";
import Services from "../Components/Services";
import Slider from "./../Components/Slider";

const Home = () => {
  return (
    <main className=" w-full">
      <Slider />
      <About />
      <Services />
      <TestimonialsSlid />
      <Footer />
    </main>
  );
};

export default Home;
