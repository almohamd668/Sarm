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
    <section className="w-full md:h-screen h-[350px] mt-0 pt-[80px]">
      <Swiper
        className="mySwiper h-full w-full"
        modules={[Pagination, Autoplay]}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{ delay: 4000 }}
        speed={1000}
        loop={true}
      >
        <SwiperSlide className="w-full md:h-full h-[214px]">
          <div className="relative w-full h-full">
            <img
              src={struction}
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-0 p-1 min-w-1 rounded-md bg-opacity-25 bg-black">
              <p className="text-white italic text-lg p-1 font-mono capitalize">
                The website aims to promote physical fitness and encourage
                people <br />
                to engage in sports by providing inspiring and useful content.{" "}
                <br />
                If you’re interested in sports and fitness🧑🏻‍🔬
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full md:h-full h-[214px]">
          <div className="relative w-full h-full">
            <img
              src={panad}
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-0 p-1 min-w-1 rounded-md bg-opacity-25 bg-black">
              <p className="text-white italic text-lg p-1 font-mono capitalize">
                The website aims to promote physical fitness and encourage
                people <br />
                to engage in sports by providing inspiring and useful content.{" "}
                <br />
                If you’re interested in sports and fitness✨
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full md:h-full h-[214px]">
          <div className="relative w-full h-full">
            <img
              src={picinj}
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-0 p-1 min-w-1 rounded-md bg-opacity-25 bg-black">
              <p className="text-white italic text-lg p-1 font-mono capitalize">
                The website aims to promote physical fitness and encourage
                people <br />
                to engage in sports by providing inspiring and useful content.{" "}
                <br />
                If you’re interested in sports and fitness😎
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full md:h-full h-[214px]">
          <div className="relative w-full h-full">
            <img
              src={hero2}
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-0 p-1 min-w-1 rounded-md bg-opacity-25 bg-black">
              <p className="text-white italic text-lg p-1 font-mono capitalize">
                The website aims to promote physical fitness and encourage
                people <br />
                to engage in sports by providing inspiring and useful content.{" "}
                <br />
                If you’re interested in sports and fitness🔍
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
