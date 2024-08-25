import { Link } from "react-router-dom";
import vid1 from "../../assets/12.mp4";
import img1 from "../../assets/p-1.jpg";
import "./product.css";

const Product = ({ product, showButton }) => {
  return (
    <section className="">
      <div className="dad-card grid grid-cols-3 w-full mx-auto my-10 rounded-lg">
      <div className="con-img bg-gradient-to-r from-darkSec h-full to-primary  w-full rounded-lg overflow-hidden" >
          <img
            // src={product.image}
            src={img1}
            className="card-img transform hover:rotate-6 mx-auto"
            alt={product.title}
          />
        </div>
      
        <div className="con-card bg-darkSec
         text-black text-sm border-0 w-full h-5/6 my-auto rounded-tr-lg rounded-br-lg p-5">
          <div className="address my-10">
          <h1 className="text-5xl font-bold text-white my-5">Hellooooo Frooooooo Eyadooooo</h1>
          <p className="text-lg text-white">1-customer review | add review</p>
          </div>
          <h2 className="my-4 text-3xl text-white">Hellooooo Frooooooo Eyadooooo</h2>
          {showButton ? (
            <Link
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              to={`product-info/${product.id}`}
            >
              info
            </Link>
          ) : (
            <p className="text-lg leading-6 text-white mt-3 mb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates accusantium asperiores cumque recusandae quaerat, porro doloribus beatae explicabo in natus alias itaque expedita et consequuntur unde eum quasi quod. Optio?</p>
          )}
          <div className="add-cart">
            <div className="button-cart inline-block">
              <button className="py-2 px-4  text-white border-solid border-[1px] border-black">-</button>
              <button className="py-2 px-4  text-white border-solid border-[1px] border-black">5</button>
              <button className="py-2 px-4  text-white border-solid border-[1px] border-black">+</button>
            </div>
          <button className="bg-black text-white mx-5 py-2 px-4">
          ADD TO CART
          </button>
          </div>
          
        </div>
        </div>
          <div className="con-vid grid grid-cols-2 px-10 items-end">
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
