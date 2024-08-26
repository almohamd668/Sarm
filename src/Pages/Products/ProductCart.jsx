import { Link } from "react-router-dom";
import img1 from "../../assets/p-2-rebg.png";

// import "./Product.css";

const ProductCart = ({ product, showButton }) => {
  return (
    <section className="sec-card">
      <div
        className="bg-darkSec rounded-lg
       shadow-md text-white text-sm border-0 element-center grid grid-cols-1"
      >
        <div className="bg-gradient-to-tr shadow-md from-primary to-transparent rounded-bl-lg rounded-tr-lg rounded-tl-lg rounded-br-lg w-full mx-auto">
          <img
            // src={product.image}
            src={img1}
            className="w-full hover:scale-125 transition-all object-contain rounded-bl-lg rounded-br-lg bg-transparent"
            alt={`Image of ${product.pname}`}
          />
        </div>

        <div className="p-4">
          <h4 className="text-lg font-bold">{product.pname}</h4>
          <h5 className="my-4 text-3xl font-extrabold">
            Price: {product.price}$
          </h5>
          <p className="text-lg leading-6">{product.description}</p>
          {showButton ? (
            <Link
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-500"
              to={`/product-info/${product.p_id}`}
            >
              Info
            </Link>
          ) : (
            <p className="text-lg leading-6">{product.description}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductCart;
