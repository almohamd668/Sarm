import { useState } from "react";
import profile1 from "../../assets/profile-1.jpg";
import profile2 from "../../assets/profile-2.jpg";
import quote from "../../assets/bg-quotes.png";
import TestimonialBox from "./TestimonialBox";
//Swiper imp//
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

// <div className=" grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 relative z-10"></div>

const TestimonialsSlid = () => {
  const [testData, setTestData] = useState([
    {
      id: 1,
      desc: `Lorem ipsum dolor sit amet
     consectetur adipisicing elit. Dolor, 
     culpa fugiat perspiciatis non voluptatem quos itaque.
    `,
      image: profile1,
      position: "SEO & Founder",
      name: "Ahmed",
    },

    {
      id: 2,
      desc: `Lorem ipsum dolor sit amet
     consectetur adipisicing elit. Dolor, 
     culpa fugiat perspiciatis non voluptatem quos itaque.
    `,
      image: profile2,
      position: "Backed Dev",
      name: "Majeed",
    },
    {
      id: 3,
      desc: `Lorem ipsum dolor sit amet
     consectetur adipisicing elit. Dolor, 
     culpa fugiat perspiciatis non. voluptatem quos itaque
    `,
      image: profile2,
      position: "Fronted Dev ",
      name: "Waleed",
    },
  ]);

  return (
    <section className="pt-[150px]">
      <div className="container relative">
        <div className="absolute left-[20px] top-[-35px] ">
          <img src={quote} alt="quote" />
        </div>
        <Swiper
          className="mySwiper h-full w-full"
          modules={[Pagination, Autoplay]}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{ delay: 1500 }}
          loop={true}
        >
          {testData.map((item) => (
            <SwiperSlide key={item.id}>
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
