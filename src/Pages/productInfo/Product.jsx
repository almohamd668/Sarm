import { Link } from "react-router-dom";
import vid1 from "../../assets/Export_Video_2024-08-17.mov";
import img1 from "../../assets/sarm1.jpg";
// import "./Product.css";

const Product = ({ product, showButton }) => {
  return (
    <section>
      <div className=" w-full h-[100px] mt-[100px]">
        <video
          src={vid1}
          controls
          autoPlay
          loop
          muted
          className=" h-[200px]"
          width={700}
        ></video>
      </div>

      <div
        className="bg-white rounded
       shadow-md text-black text-sm h-fit p-5 mb-20 border-0  element-center max-w-[900px] mx-auto mt-[300px]"
      >
        <img
          // src={product.image}
          src={img1}
          className="max-h-[500px] h-auto w-[400px] object-contain rounded-lg"
          alt={product.title}
        />
        <div className="p-4">
          <h4 className="text-lg font-bold">{product.title}</h4>
          <h5 className="my-4 text-xl">Price: {product.price}$</h5>
          {showButton ? (
            <Link
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              to={`product-info/${product.id}`}
            >
              info
            </Link>
          ) : (
            <p className="text-lg leading-6">{product.description}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
