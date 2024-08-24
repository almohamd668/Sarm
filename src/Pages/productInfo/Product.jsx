import { Link } from "react-router-dom";
import vid1 from "../../assets/12.mp4";
import img1 from "../../assets/p-2-rebg.png";
// import "./Product.css";

const Product = ({ product, showButton }) => {
  return (
    <section className="px-72">
      <div className="grid grid-cols-2 w-fit">
      <div className=" bg-gradient-to-r from-darkSec to-primary rounded" >
          <img
            // src={product.image}
            src={img1}
            className="w-full object-contain rounded-lg "
            alt={product.title}
          />
        </div>
      
        <div className="card-con bg-darkSec rounded
       shadow-md shadow-primary text-black text-sm p-5 border-0  element-center my-5 mx-auto h-auto">
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
      <div className=" w-full h-[200px] mt-[100px] me-auto">
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
    </section>
  );
};

export default Product;
