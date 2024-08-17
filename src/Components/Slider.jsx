import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import struction from "../assets/struction.jpg";
import panad from "../assets/panad.jpg";
import picinj from "../assets/picInj.jpg";

const Slider = () => {
  return (
    <section className="w-[100vw] h-[79vh] ">
      <Swiper
        className="mySwiper h-full w-full"
        modules={[Pagination, Autoplay]}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{ delay: 1500 }}
        loop={true}
      >
        <SwiperSlide className="w-full h-full">
          <img src={struction} alt="Slide 1" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={panad} alt="Slide 1" className="w-full " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={picinj} alt="Slide 1" className="w-full " />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
