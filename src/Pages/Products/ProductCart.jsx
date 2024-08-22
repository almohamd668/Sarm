import { Link } from "react-router-dom";
import img1 from "../../assets/p-2-rebg.png";

// import "./Product.css";

const ProductCart = ({ product, showButton }) => {
  return (
    <section>
      <div
        className="bg-darkSec rounded
       shadow-md text-white text-sm h-fit p-5 mb-20 border-0  element-center max-w-[1200px] mx-auto mt-[100px] "
      >
        <div className="bg-gradient-to-tr from-primary to-transparent rounded-3xl flex items-center justify-center">
          <img
            // src={product.image}
            src={img1}
            className="max-h-[500px] h-auto w-[700px] hover:scale-150 object-contain rounded-lg  bg-transparent"
            alt={product.title}
          />
        </div>

        <div className="p-4">
          <h4 className="text-lg font-bold">{product.title}</h4>
          <h5 className="my-4 text-xl">Price: {product.price}$</h5>
          {showButton ? (
            <Link
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-500"
              to={`product-info/${product.id}`}
            >
              info
            </Link>
          ) : (
            <p className="text-lg leading-6">{product.description}</p>
          )}
        </div>
      </div>
      <div className=" w-full h-[200px] mt-[100px] me-auto"></div>
    </section>
  );
};

export default ProductCart;
