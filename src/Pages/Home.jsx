import About from "../Components/About";
import Footer from "../Components/Footer/Footer";
import Services from "../Components/Services";
import Slider from "./../Components/Slider";

const Home = () => {
  return (
    <main className=" w-full">
      <Slider />
      <About />
      <Services />
      <Footer />
    </main>
  );
};

export default Home;
