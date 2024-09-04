import { useEffect, useState } from "react";
import useAxios from "../../API/axiosGlobal";
// import profile2 from "../../assets/profile-2.jpg";

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
  let catApi = "categories.php"; //, name = null
  const fetchFun = async (url, setState, name = null) => {
    console.log(name);
    try {
      const response = await useAxios.post(url, { name: name });
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
    fetchFun(vidApi, setProducts);
  }, []);

  return (
    <section className="relative ">
      <div className="col-span-12 flex flex-col gap-6 lg:col-span-8 text-center lg:col-start-3 mb-1 pt-[80px]">
        <div className="flex flex-col text-center lg:col-start-3">
          <h2 className="text-3xl md:text-4xl lg:text-6xl section-title mb-2 font-bold text-transparent text-trans">
            OUR PRODUCTS
          </h2>
        </div>
      </div>
      <div className="py-[20px]">
        <div
          className="absolute inset-0 z-[-1]  bg-cover  bg-center bg-no-repeat"
          style={{
            backgroundImage: `
       linear-gradient(rgba(0, 0, 0, 0.331), 
       rgba(0, 0, 0, 0.393)),
        url("https://cdn.msaaq.com/pages/242547/asset-pink-bg.svg")`,
            backgroundAttachment: "fixed",
            height: "100%",
            width: "120%",
            right: "30%",
          }}
        ></div>
        <div className=" element-center  container ps-36 ">
          <div className="element-center flex-col items-start ps-10 gap-4 my-5 gap-x-3">
            <button
              onClick={() => {
                fetchFun(vidApi, setProducts);
              }}
              className=" text-white font-bold py-2 px-4 rounded btn2"
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
                  className="btn2 text-white font-bold py-2 px-4 "
                >
                  {cat}
                </button>
              );
            })}
          </div>
          <div className="w-[100%] ps-20">
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
      </div>
    </section>
  );
};

export default TestimonialsSlid;
