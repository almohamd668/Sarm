import { useState } from "react";
import profile1 from "../../assets/profile-1.jpg";
import profile2 from "../../assets/profile-2.jpg";
import quote from "../../assets/22.png";
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
    <section className="">
      <div className=" relative overflow-visible py-[150px]">
        <div
          className="absolute inset-0 z-[-1]  bg-cover  bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.431), rgba(0, 0, 0, 0.493)),
             url("https://res.cloudinary.com/dqrzcmaxm/image/upload/v1724872797/hero5_ykmovn.jpg")`,
            backgroundAttachment: "fixed",
            height: "100%",
            width: "120%",
            right: "30%",
          }}
        ></div>
        <div className="absolute left-[-10px] top-[-60px] ">
          <img src={quote} alt="quote" width={100} />
        </div>
        <Swiper
          className="mySwiper h-full w-full overflow-visible container"
          modules={[Pagination, Autoplay]}
          pagination={{
            dynamicBullets: true,
          }}
          loopFillGroupWithBlank={true} // add this line
          slidesPerView={3} // add this line
          spaceBetween={30} // add this line to add space between cards
          autoplay={{ delay: 1500 }}
          loop={true}
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
