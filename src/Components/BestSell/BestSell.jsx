import axios from "axios";
import { useEffect, useState } from "react";
import ProductCart from "./ProCart";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/virtual";
import "swiper/css/navigation";

import {
  Pagination,
  Autoplay,
  Virtual,
  Keyboard,
  Navigation,
} from "swiper/modules";

const BestSell = () => {
  const apiUrl = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const swiper = useSwiper();

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
      <div className="col-span-12 flex flex-col gap-6 lg:col-span-8 text-center lg:col-start-3 mb-8 pt-[100px]">
        <div className="flex flex-col text-center lg:col-start-3">
          <h2 className="text-3xl md:text-4xl lg:text-6xl section-title mb-2 font-bold text-transparent text-trans">
            SPECIAL PRODUCTS
          </h2>
        </div>
      </div>
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 192, 203, 0.231), rgba(138, 43, 226, 0.193)), url("https://cdn.msaaq.com/pages/239600/picinj2.jpg")`,
          backgroundAttachment: "fixed",
          filter: "blur(4px)",
          height: "auto",
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
        slidesPerView={3}
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
