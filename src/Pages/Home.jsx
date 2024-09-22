import About from "../Components/About";
import TestimonialsSlid from "../Components/TestimonialsSlid/TestimonialsSlid";
import Services from "../Components/Services";
import Slider from "./../Components/Slider";
import BestSell from "../Components/BestSell/BestSell";
import VidioSlid from "../Components/CateVideoSlide/VidioSlid";
import ProductionStagesVid from "../Components/ProductionStagesVid";
// import TestApi from "./Products/TestApi";
import ComingSoon from './../Components/ComingSoon';

// <TestApi />

const Home = () => {
  return (
    <main className="w-full">
      <Slider />
      <About />
      <VidioSlid />
      <Services />
      <ProductionStagesVid/>
      <BestSell />
      <TestimonialsSlid />
      <ComingSoon/>
    </main>
  );
};
export default Home;
