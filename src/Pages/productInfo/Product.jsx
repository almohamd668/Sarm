import { Link } from "react-router-dom";
import vid1 from "../../assets/12.mp4";
import img1 from "../../assets/p-1.jpg";
import "./product.css";

const Product = ({ product, showButton }) => {
  return (
    <section className="">
      <div className="dad-card grid grid-cols-3 w-full mx-auto hover:shadow-md hover:shadow-primary my-10 rounded-lg">
      <div className=" bg-gradient-to-r from-darkSec to-primary  w-full relative rounded-tl-lg rounded-bl-lg" >
          <img
            // src={product.image}
            src={img1}
            className="w-full rounded-lg transform hover:rotate-6 mx-auto"
            alt={product.title}
          />
        </div>
      
        <div className="card-con bg-darkSec
         text-black text-sm border-0  element-center w-full p-5 grid rounded-tr-lg rounded-br-lg">
          <h4 className="text-lg font-bold text-white">{product.title}</h4>
          <h5 className="my-4 text-xl text-white">Price: {product.price}$</h5>
          {showButton ? (
            <Link
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              to={`product-info/${product.id}`}
            >
              info
            </Link>
          ) : (
            <p className="text-lg leading-6 text-white">{product.description}</p>
          )}
        </div>
        </div>
          <div className="con-vid grid grid-cols-2 px-10">
      <div className="con-bar h-32 flex self-end">
      <div className="shadow-sm shadow-secondary bg-slate-600 h-4 rounded-full mx-10 flex">
          <div className="bg-gradient-to-r from-primary to-secondary w-[50%] h-full text-xs flex justify-center items-center text-white font-bold rounded-full">
          50%
          </div>
      </div>
      <div className="shadow-sm shadow-secondary bg-slate-600 h-4 rounded-full mx-10 flex">
          <div className="bg-gradient-to-r from-primary to-secondary w-[90%] h-full text-xs flex justify-center items-center text-white font-bold rounded-full">
          90%
          </div>
      </div>
      <div className="shadow-sm shadow-secondary bg-slate-600 h-4 rounded-full mx-10 flex">
          <div className="bg-gradient-to-r from-primary to-secondary w-[70%] h-full text-xs flex justify-center items-center text-white font-bold rounded-full">
          70%
          </div>
      </div>
      </div>
      <div className=" w-full h-[200px] mt-[100px] me-auto flex justify-end mx-10">
        <video
          src="https://res.cloudinary.com/dqrzcmaxm/video/upload/v1724429046/12_chd9rw.mp4"
          controls
          autoPlay
          loop
          muted
          className=" h-[200px]"
          width={700}
        ></video>
      </div>
      </div>
    </section>
  );
};

export default Product;
