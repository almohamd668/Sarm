import { Link } from "react-router-dom";
// import img1 from "../../assets/p-2-rebg.png";

// import "./Product.css";
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > 3) {
    return words.slice(1, 2).join(" ") + "           .........";
  }
  return text;
};

const ProductCart = ({ product, showButton }) => {
  console.log("console",product);
  return (
    <section className="sec-card neon-effect">
      <div className="bg-darkSec rounded-lg shadow-md text-white text-sm border-0 element-center grid grid-cols-1 hover:border-blue-500 m-0 p-0">
        <div className="bg-gradient-to-tr shadow-md overflow-hidden from-primary to-transparent rounded-bl-lg rounded-tr-lg rounded-tl-lg rounded-br-lg w-full mx-auto">
          <img
            src={product.img_url}
            className={`w-full ${product.sec_name == "tablet"  ?   "scale-[1.9] -translate-y-10" :  "scale-125 " } hover:-rotate-3 transition-all object-contain rounded-bl-lg rounded-br-lg bg-transparent`}
            alt={`Image of ${product.pname}`}
          />
        </div>

        <div className="p-4 flex flex-col md:flex-row justify-between items-center text-left">
          <div>
            <h4 className="text-[20px] italic text-purple-500 font-bold">
              {product.pname}
            </h4>
            <h5 className="my-4 text-xl md:text-3xl font-bold italic text-trans">
              Price: ${product.price}
            </h5>
            <p className="text-lg leading-6 text-trans font-semibold italic">
              {truncateText(product.description, 20)}
            </p>
          </div>
          {showButton ? (
            <Link
              className="bg-[#00ffff7b] hover:bg-[#00ffffad] text-white py-2 px-4 rounded transition duration-500 transform hover:scale-105 mt-4 md:mt-0 md:ml-4 font-bold italic"
              to={`/product-info/${product.p_id}`}
            >
              read more
            </Link>
          ) : (
            <p className="text-lg leading-6 ">{product.description}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductCart;
