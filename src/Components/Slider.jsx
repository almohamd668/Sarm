import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import struction from "../assets/hero6.jpg";
import panad from "../assets/hero8.jpg";
import picinj from "../assets/hero1.jpg";
import hero2 from "../assets/hero.jpg";

const Slider = () => {
  return (
    <section className="w-[100vw] md:h-[100vh] h-[350px] mt-0 pt-[85px]">
      <Swiper
        className="mySwiper h-full w-full"
        modules={[Pagination, Autoplay]}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{ delay: 1500 }}
        loop={true}
      >
        <SwiperSlide className="w-full md:h-full h-[214px]  ">
          <img
            src={struction}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={panad}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={picinj}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={hero2}
            alt="Slide 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
