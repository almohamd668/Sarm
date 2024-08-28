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
      <div
        className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.631), rgba(0, 0, 0, 0.693)), url("https://cdn.msaaq.com/pages/239600/picinj2.jpg")`,
          backgroundAttachment: "fixed",
          height: "auto",
        }}
      ></div>
      <Swiper
        className="h-[80vh] flex items-center justify-center"
        modules={[Navigation, Pagination, Virtual, Keyboard]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{ delay: 3000 }}
        navigation={true}
        loop={true}
        keyboard={true}
        spaceBetween={50}
        slidesPerView={3}
        virtual
      >
        {products.map((product) => {
          return (
            <SwiperSlide
              className="w-full h-full"
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
