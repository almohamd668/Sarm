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

let  vidApi = "get_videos.php" ;

  useEffect(() => {

    const fetchFun = async (url,setState) => {
      try {
        const response = await axios.get(url, {
          params: {
            name: name && "",
          },
        });
        setState(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    // ctName
    fetchFun(vidApi,setProducts);
    fetchFun(vidApi,setProducts);
    

  }, []);

  return (
    <section className="pt-[150px]">
      <div className="container relative">
        <div className="absolute left-[20px] top-[-35px] ">
          <img src={quote} alt="quote" />
        </div>
        <div className="w-[80%]">
          <Swiper
            className="mySwiper h-full w-full rounded-[10%]"
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
              <SwiperSlide
                key={idx}
                className="bg-gradient-to-r from-blue-500 via-green-500 to-purple-500"
              >
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
