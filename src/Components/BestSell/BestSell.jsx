import axios from "axios";
import { useEffect, useState } from "react";
import ProductCart from "./ProCart";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/virtual";
import "swiper/css/navigation";
import { useScreenWidth } from "../../Helpers/useWindowSize";
import {
  Pagination,
  Autoplay,
  Virtual,
  Keyboard,
  Navigation,
} from "swiper/modules";
import useAxios from "../../API/axiosGlobal";




const BestSell = () => {
  const width = useScreenWidth();
  let bySec = "get_products_by_section.php";
  const [SarmProducts, setSarmProducts] = useState([]);
  const [SpisProducts, setSpisProducts] = useState([]);
  const [mergedProducts, setMergedProducts] = useState([]);
 // const swiper = useSwiper();
  let slideView =  width >= 768 ? 3: 1;
  // let slideView = width >= 1200 ? 4 : width >= 768 ? 3 : 1;



  const fetchFun = async (url, setState, name = null) => {
    console.log(name);
    try {
      const response = await useAxios.post(url, { name: name });
      setState(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log("bestsel", mergedProducts);
  useEffect(() => {
    fetchFun(bySec, setSarmProducts,"sarms" );
    fetchFun(bySec, setSpisProducts, "special_products");

    console.log("bestsel", mergedProducts);
    
  }, []);

  useEffect(() => {
    setMergedProducts([...SarmProducts, ...SpisProducts]);
    
  }, [SarmProducts, SpisProducts]);

  return (
    <section className="relative">
      <div className="col-span-12 flex flex-col gap-6 lg:col-span-8 text-center lg:col-start-3 mb-2 md:mb-8 pt-[30px] md:pt-[75px]">
        <div className="flex flex-col text-center lg:col-start-3">
          <h2 className="text-xl md:text-4xl lg:text-6xl section-title md:mb-10 font-bold text-transparent text-trans">
             Best Sell
          </h2>
        </div>
      </div>
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat  bg-[url('https://cdn.msaaq.com/pages/239600/picinj2.jpg')] bg-fixed h-auto blur-sm"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.493),#4e325163 ),
           url("https://cdn.msaaq.com/pages/239600/picinj2.jpg")`,
          backgroundAttachment: "fixed",
          height: "auto",
          filter: "blur(2px)",
          WebkitFilter: "blur(1px)", // for Safari support
        }}
      ></div>
      <Swiper
        className="flex items-center justify-center mt-[50px]"
        modules={[Navigation, Pagination, Keyboard]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{ delay: 3000 }}
        navigation={true}
        loop={true}
        spaceBetween={2}
        slidesPerView={ slideView }
      
      >
        {  mergedProducts.map((product) => {
          return (
            <SwiperSlide
              className="w-full h-full container"
              key={product.p_id}
              
            >
              <ProductCart product={product} showButton={true} />
            </SwiperSlide>
          );
        })}
  

      </Swiper>
    </section>
  );
};

export default BestSell;
