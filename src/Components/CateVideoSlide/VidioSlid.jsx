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
  let vidApi = "get_videos.php";

  const [categories, setCategories] = useState([]);
  //axios.defaults.baseURL = "https://titansmaxplus.com/titans/api/"

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
     
    
      <div className="py-[60px]">
        <div
          className="absolute inset-0 z-[-1]  bg-cover  bg-center bg-no-repeat h-full w-full"
          style={{
            backgroundImage: `
       linear-gradient(rgba(0, 0, 0, 0.331), 
       rgba(0, 0, 0, 0.393)),
        url("https://cdn.msaaq.com/pages/242547/asset-pink-bg.svg")`,
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div className=" element-center  container md:ps-26 flex-col md:flex-row gap-3 md:gap-6 justify-around">
          <div className="flex flex-col ">  
              <h2 className=" text-2xl md:text-3xl md:ms-9 w-[270px] text-center  md:font-bold text-transparent text-trans1">
                 OUR PRODUCTS
              </h2>
                <div className="element-center md:flex-col flex-wrap 
                items-center md:items-start md:ps-10 gap-2
                md:gap-4 my-5  md:gap-x-3 max-w-full w-[280px] md:w-auto">
                  
            <button
              onClick={() => {
                fetchFun(vidApi, setProducts);
              }}
              className="btn2"
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
                  className="btn2"
                >
                  {cat == "special_products" ? "Exclusives" : cat}
                </button>
              );
            })}
          </div>
          </div>

          <div className="w-full max-w-[90%] ">
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
