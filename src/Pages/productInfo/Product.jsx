import { Link } from "react-router-dom";
import  { useRef } from 'react';

import "./product.css";
import ProgressBar from "../../Components/ProgressBar";
import useOnScreen from '../../Helpers/useIntersectionObserver';


// md:min-w-[500px]
const Product = ({ product, showButton }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <section className="">
      <div className=" px-[10px] md:px-5  grid grid-cols-1  w-full mx-auto mb-10 max-w-full relative min-h-[200px] rounded-lg ">
        <div className="con-img bg-gradient-to-r from-darkSec md:min-h-[400px]  mb-1 z-10 to-primary w-full max-w-[650px] mx-auto rounded-lg overflow-hidden">
          <img
            // src={img1}
            src={product.img_url}
            className="card-img transform hover:rotate-6 hover:scale-[1.4] scale-[1.19] mx-auto max-w-full h-auto object-cover"
            // alt={product.title}
          />
        </div>
        <div className="con-card  bg-darkSec relative z-50
        text-black text-sm border-0 w-full my-auto rounded-tr-lg rounded-br-lg p-2 md:px-10 md:p-5 h-fit min-h-[300px] max-w-full">
          <div className="address my-1 flex justify-between items-center">
            <h1 className="text-xl md:text-3xl font-bold text-white my-2 italic">
             {product.pname} 
            </h1>
       <h3 className="text-sm text-end md:text-lg text-white italic">Contain <strong className="ps-4">{product.num_of_pieces}</strong></h3>
          </div>
          <h4 className="my-1 text-2xl md:text-4xl font-bold text-white/95 italic">
          {`Price :  ${product.price} $`}
          </h4>
          <p className="text-sm md:text-[18px] leading-5 md:leading-7 text-white mt-4 px-2 ">
          {product.description}
          </p>
        </div>
      </div>

      <div className="con-vid mt-28 md:mt-7 mb-28 grid grid-cols-1 md:grid-cols-2 px-3  md:px-10 items-end">
    
     {!isVisible && <div ref={ref} className="con-bar h-[200px] grid grid-rows-5 items-end w-full gap-y-16">
        <ProgressBar width={`${product.strength}%`}  name={"Strength"} num={product.strength} />
        <ProgressBar width={`${product.side_effects}%`}  name={"Side effects"} num={product.side_effects} />
        <ProgressBar width={`${product.muscle_gain}%`}  name={"Muscle gain"} num={product.muscle_gain} />
        <ProgressBar width={`${product.keep_gains}%`}  name={"Keep gains"} num={product.keep_gains} />
        <ProgressBar width={`${product.fat_water}%`}  name={"Fat water"} num={product.fat_water} />
       </div>
     }

        <div className=" w-full h-[200px]  mt-[150px] mx-auto md:me-auto flex justify-center md:justify-end ">
          <div className="mySwiper flex items-center justify-center relative mx-2">
            <video
              src={product.vid_url}
              loop
              muted
              autoPlay
              className=" h-[300px] md:h-[400px] w-full md:w-[90%] object-cover rounded-[20%] bg-opacity-10"
            ></video>
            <div className="absolute inset-0 flex items-end justify-center pb-4">
              <span
                className="block text-lg md:text-4xl font-bold italic bg-gradient-to-r
                from-primary via-cyan/80 to-[#5e33ff] bg-200% text-transparent animate-gradientX z-50"
                style={{
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
