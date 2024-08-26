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
    <Swiper
      className="h-[50vh] w-5/6"
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
  );
};

export default BestSell;
