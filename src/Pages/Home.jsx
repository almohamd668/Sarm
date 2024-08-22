import About from "../Components/About";
import Services from "../Components/Services";
import Slider from "./../Components/Slider";

const Home = () => {
  return (
    <main className=" w-full">
      <Slider />
      <About />
      <Services />
    </main>
  );
};

export default Home;
