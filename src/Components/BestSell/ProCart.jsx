import { Link } from "react-router-dom";
import img1 from "../../assets/p-1.jpg";

// import "./Product.css";

const ProCart = ({ product, showButton }) => {
  return (
    <div className="flex  items-center justify-center  ">
      <div className="relative mb-8 rounded-4xl flex items-center justify-center shadow-lg max-w-4xl mx-auto ">
        <img
          src={product.img_url}
          className={` min-w-32 w-[225px] md:w-[400px] h-[220px] md:h-[320px]   transition-transform duration-500 object-cover rounded-[30%] bg-transparent`}
          alt="ATEM"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-cyan bg-opacity-[0.25] rounded-[30%] backdrop-filter backdrop-blur-[3px]  p-4 opacity-0 hover:opacity-100 transform -translate-y-1 hover:translate-y-0 transition-all duration-500">
          <h4 className="text-[40px]  font-bold text-center text-transparent bg-clip-text bg-[#FFCBA4] text-transf ">
            {product.pname}
          </h4>

          <h5 className="my-4 text-[30px] font-bold text-center text-transf">
            Price: ${product.price}
          </h5>
          {showButton ? (
            <Link
              className="bg-gradient-to-r from-[#f1c2ec] to-[#5e33ff]/35 hover:from-[#5e33ff] hover:to-[#f1c2ec] text-white font-bold py-2 px-4 rounded transition duration-800 block text-center z-50"
              to={`/product-info/${product.p_id}`}
            >
              Read More
            </Link>
          ) : (
            <p className="text-lg leading-6 text-center text-white z-50">
              This Product is unavailable
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProCart;
