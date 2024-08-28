import { useEffect, useState } from "react";
import axios from "axios";
// import profile2 from "../../assets/profile-2.jpg";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video_2.mp4";
import quote from "../../assets/bg-quotes.png";
import TestimonialBox from "./VideoBox";
//Swiper imp//
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// <div className=" grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 relative z-10"></div>

const TestimonialsSlid = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  //axios.defaults.baseURL = "https://titansmaxplus.com/titans/api/"
  let vidApi = "get_videos.php";
  let catApi = "categories.php";
  const fetchFun = async (url, setState, name = null) => {
    try {
      const response = await axios.get(url, {
        body: {
          name: name,
        },
      });
      setState(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    // ctName
    fetchFun(catApi, setCategories);
    fetchFun(vidApi, setProducts,"tablet");
  }, []);

  return (
    <section className="">
      <div className="py-[150px] relative">
        <div
          className="absolute inset-0 z-[-1]  bg-cover  bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.331), rgba(0, 0, 0, 0.393)), url("https://cdn.msaaq.com/pages/242547/asset-pink-bg.svg")`,
            backgroundAttachment: "fixed",
            height: "100%",
            width: "120%",
            right: "30%",
          }}
        ></div>
        <h2 className="text-center text-white ">Our Products</h2>
        <div className="element-center my-5 gap-x-3">
          <button
            onClick={() => {
              fetchFun(vidApi, setProducts);
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            All
          </button>

          {categories.map((cat) => {
            return (
              <button
                key={cat}
                onClick={() => {
                  fetchFun(vidApi, setProducts, cat);
                }}
                className="bg-[#829fd1] hover:bg-primary text-white font-bold py-2 px-4 rounded"
              >
                {cat}
              </button>
            );
          })}
        </div>
        <div className="w-[100%]">
          <Swiper
            className="mySwiper h-full w-full rounded-[20%]"
            modules={[Autoplay]}
            // pagination parameter in modules up
            // pagination={{
            //   dynamicBullets: true,
            // }}
            autoplay={{ delay: 4000 }}
            loop={true}
            speed={1500}
          >
            {products.map((item, idx) => (
              <SwiperSlide key={idx} className="">
                <TestimonialBox image={item.vid_url} name={item.pname} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlid;
