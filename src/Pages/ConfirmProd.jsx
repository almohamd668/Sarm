import { Link } from "react-router-dom";

import img1 from "../assets/p-1.jpg";
// import "./product.css";
import SuccessSection from "./../Components/SuccessCart";

const ConfirmProd = () => {
  return (
    <>
      <section className="pt-[100px]">
        <SuccessSection />
        <div className="dad-card grid grid-cols-3 w-full mx-auto my-10 rounded-lg">
          <div className="con-img bg-gradient-to-r from-darkSec h-full to-primary  w-full rounded-lg overflow-hidden">
            <img
              // src={product.image}
              src={img1}
              className="card-img transform hover:rotate-6 mx-auto "
              // alt={product.title}
              />
              </div>
          <div
            className="con-card bg-darkSec
       text-black text-sm border-0 w-full h-5/6 my-auto rounded-tr-lg rounded-br-lg p-5"
          >
            <div className="address my-5">
              <h1 className="text-xl md:text-3xl  font-bold  text-white my-5">
                Hellooooo 
              </h1>
              <p className="text-lg text-white">
                1-customer review | add review
              </p>
            </div>
            <h4 className="my-1 text-sm md:text-3xl text-white">
              Hellooooo Frooooooo Eyadooooo
            </h4>
            {/*  showButton ? (
            <Link
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              to={`product-info/${product.id}`}
            >
              info
            </Link>
          ) : (
            <p className="text-lg leading-6 text-white mt-3 mb-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptates accusantium asperiores cumque recusandae quaerat, porro
              doloribus beatae explicabo in natus alias itaque expedita et
              consequuntur unde eum quasi quod. Optio?
            </p>
          )  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ConfirmProd;
