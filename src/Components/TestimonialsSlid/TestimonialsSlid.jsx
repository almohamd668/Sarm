import { useState } from "react";
import profile1 from "../../assets/profile-1.jpg";
import profile2 from "../../assets/profile-2.jpg";
import profile3 from "../../assets/profile-3.jpg";
import quote from "../../assets/22.png";
import TestimonialBox from "./TestimonialBox";
import { useScreenWidth } from "../../Helpers/useWindowSize";

//Swiper imp//
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {
  Pagination,
  Autoplay,
  Virtual,
  Keyboard,
  Navigation,
} from "swiper/modules";


// <div className=" grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 relative z-10"></div>

const TestimonialsSlid = () => {
  const width = useScreenWidth();
  let slideView =  width >= 768 ? 3: 1;

  const [testData, setTestData] = useState([
    {
      id: 1,
      desc: `The products offered by this company 
      are of the best types available in stores
    `,
      image: profile1,
      position: "Customer",
      name: "Jhon Northel",
    },

    {
      id: 2,
      desc: `One of the best companies that offer high-level 
      products in addition to taking care of your health
    `,
      image: profile2,
      position: "Trainer",
      name: "Ropenson Edward",
    },
    {
      id: 3,
      desc: `One of the most successful 
      companies globally in addition to overall satisfaction 
    `,
      image: profile3,
      position: "Blogger ",
      name: "Jiff Helman",
    },
    {
      id: 4,
      desc: `The products offered by this company 
      are of the best types available in stores
    `,
      image: profile1,
      position: "Customer",
      name: "Jhon Northel",
    },

    {
      id: 5,
      desc: `One of the best companies that offer high-level 
      products in addition to taking care of your health
    `,
      image: profile2,
      position: "Trainer",
      name: "Ropenson Edward",
    },
    {
      id: 6,
      desc: `One of the most successful 
      companies globally in addition to overall satisfaction 
    `,
      image: profile3,
      position: "Blogger ",
      name: "Jiff Helman",
    },
    {
      id: 7,
      desc: `One of the best companies that offer high-level 
      products in addition to taking care of your health
    `,
      image: profile2,
      position: "Trainer",
      name: "Ropenson Edward",
    },
    {
      id: 8,
      desc: `One of the most successful 
      companies globally in addition to overall satisfaction 
    `,
      image: profile3,
      position: "Blogger ",
      name: "Jiff Helman",
    },
  ]);

  return (
    <section className="">
      <div className=" relative py-[100px]">
        <div
          className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(60, 78, 111, 0.5), rgba(12, 25, 36, 0.531)), url("https://res.cloudinary.com/dqrzcmaxm/image/upload/v1724872797/hero5_ykmovn.jpg")`,
            backgroundAttachment: "fixed",
            height: "100%",
            width: "100%", // تعديل العرض ليكون 100%
            right: "0", // تعديل الموضع ليكون 0
          }}
        ></div>

        <div className="col-span-12 flex flex-col gap-6 lg:col-span-8 text-center lg:col-start-3 mb-8">
          <div className="flex flex-col text-center lg:col-start-3">
            <h2 className="text-2xl md:text-4xl lg:text-6xl section-title mb-2 font-bold text-transparent text-trans1">
              Customer Reviews
            </h2>
          </div>
        </div>
        <div className="absolute left-[-10px] top-[-60px] ">
          <img src={quote} alt="quote" width={100} />
        </div>
        <Swiper
        className="flex items-center justify-center"
        modules={[Navigation, Pagination, Virtual, Keyboard]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{ delay: 3000 }}
        navigation={true}
        loop={true}
        keyboard={true}
        spaceBetween={2}
        slidesPerView={ slideView }
      
        >
          {testData.map((item) => (
            <SwiperSlide key={item.id} className="overflow-visible">
              <TestimonialBox
                desc={item.desc}
                image={item.image}
                position={item.position}
                name={item.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default TestimonialsSlid;
