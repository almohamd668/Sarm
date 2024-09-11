import { Link } from "react-router-dom";
import vid1 from "../../assets/12.mp4";
import img1 from "../../assets/p-1.jpg";
import "./product.css";
// <strong className="ps-4">{product.num_of_pieces}</strong>
// {product.pname}
// {product.description}
// {`Price :  ${product.price} $`}
const Product = ({ product, showButton }) => {
  return (
    <section className="">
      <div className="container grid grid-cols-1 md:grid-cols-2 w-full mx-auto my-10 max-w-full md:min-w-[500px] min-h-[400px] rounded-lg ">
        <div
          className="con-img
      bg-gradient-to-r
    from-darkSec h-full md:min-h-[300px]
    to-primary  w-full max-w-full
      rounded-lg overflow-hidden"
        >
          <img
            src={img1}
            // src={product.img_url}
            className="card-img transform hover:rotate-6 mx-auto max-w-full"
            // alt={product.title}
          />
        </div>
        <div
          className="con-card bg-darkSec
     text-black text-sm border-0 w-full 
     my-auto rounded-tr-lg rounded-br-lg p-5 h-fit min-h-[300px] max-w-full"
        >
          <div className="address my-5 flex justify-between items-center">
            <h1 className="text-xl md:text-3xl  font-bold  text-white my-5">
              gcvxcc
            </h1>
            <h3 className="text-sm md:text-lg text-white">Contain </h3>
          </div>
          <h4 className="my-1 text-2xl md:text-4xl font-bold  text-white/95">
            xcvxcvxcSD
          </h4>
          <p className="text-sm md:text-[18px] leading-[1.3rem] text-white mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            saepe iure rerum amet laudantium? Illo, error sit placeat nesciunt
            ab accusantium similique. Libero possimus nobis explicabo nam, eum
            exercitationem sequi!
          </p>
        </div>
      </div>

      <div className="con-vid grid grid-cols-1 md:grid-cols-2  px-10 items-end">
        <div className="con-bar h-[200px] grid grid-rows-3 items-end w-full gap-5 ">
          <div className="con-bro1 grid w-full grid-rows-2 gap-3">
            <h3 className="text-white indent-5">html</h3>
            <div className="shadow-sm shadow-secondary bg-slate-600 h-6 rounded-full flex">
              <div className="bro-1 bg-gradient-to-r from-primary to-secondary w-[1] h-full flex justify-center items-center text-white font-bold rounded-full text-xl">
                50%
              </div>
            </div>
          </div>
          <div className="con-bro2 grid w-full grid-rows-2 gap-3">
            <h3 className="text-white indent-5">css</h3>
            <div className="shadow-sm shadow-secondary bg-slate-600 h-6 rounded-full flex">
              <div className="bro-2 bg-gradient-to-r from-primary to-secondary w-[1] h-full flex justify-center items-center text-white font-bold rounded-full text-xl">
                90%
              </div>
            </div>
          </div>
          <div className="con-bro3 grid w-full grid-rows-2 gap-3">
            <h3 className="text-white indent-5">javascript</h3>
            <div className="shadow-sm shadow-secondary bg-slate-600 h-6 rounded-full flex">
              <div className="bro-3 bg-gradient-to-r from-primary to-secondary w-[1] h-full flex justify-center items-center text-white font-bold rounded-full text-xl">
                70%
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full h-[200px] mt-[100px] mx-auto md:me-auto flex justify-center md:justify-end  mx-10">
          <div className="mySwiper flex items-center justify-center relative mx-2">
            <video
              src={vid1}
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
