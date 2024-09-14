import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import struction from "../assets/hero2.jpg";
import panad from "../assets/hero8.jpg";
import picinj from "../assets/hero1.jpg";
import hero2 from "../assets/hero.jpg";

const slides = [
  {
    id: 1,
    image: panad,
    alt: "Slide 1",
  },
  {
    id: 2,
    image: picinj,
    alt: "Slide 3",
  },
  {
    id: 3,
    image: struction,
    alt: "Slide 1",
  },
  {
    id: 4,
    image: hero2,
    alt: "Slide 4",
  },
];

const Slider = () => {
  return (
    <section className="w-full h-screen mt-0 pt-[80px]">
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
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="w-full md:h-full h-[214px]">
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div
                className=" bottom-9 left-1 md:left-5 -top-[70%] md:-top-[450px]  relative  md:p-5 bg-gradient-to-r from-[#11609da6] to-[#739eb4a6] backdrop-blur-[2px] 
               rounded-r-[10%] bg-opacity-20 bg-white   w-[55%]  md:w-[20%]"
              >
                <p className="text-white text-[13px] md:text-lg p-1  font-mono capitalize md:leading-relaxed">
                  The website aims to promote physical fitness and encourage
                  people <br />
                  to engage in sports by providing inspiring and useful content.{" "}
                  <br />
              If you’re interested in sports and fitness🧑🏻‍🔬
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
