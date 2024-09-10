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

const BestSell = () => {
  const width = useScreenWidth();
  const apiUrl = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
 // const swiper = useSwiper();
  let slideView =  width >= 768 ? 3: 1;
  // let slideView = width >= 1200 ? 4 : width >= 768 ? 3 : 1;
  const getProducts = async () => {
    const products = await axios.get(apiUrl);
    setProducts(products.data);
  };
 
  useEffect(() => {
    getProducts();
    console.log(products);
    
  }, []);

  return (
    <section className="relative">
      <div className="col-span-12 flex flex-col gap-6 lg:col-span-8 text-center lg:col-start-3 mb-2 md:mb-8 pt-[30px] md:pt-[100px]">
        <div className="flex flex-col text-center lg:col-start-3">
          <h2 className="text-xl md:text-4xl lg:text-6xl section-title md:mb-2 font-bold text-transparent text-trans">
            SPECIAL PRODUCTS
          </h2>
        </div>
      </div>
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat bg-gradient-to-r from-[rgba(5,8,77,0.631)] to-[rgba(0,0,0,0.693)] bg-[url('https://cdn.msaaq.com/pages/239600/picinj2.jpg')] bg-fixed h-auto blur-sm"
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
        virtual
      >
        {products.map((product) => {
          return (
            <SwiperSlide
              className="w-full h-full container"
              key={product.id}
              virtualIndex={product.id}
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
