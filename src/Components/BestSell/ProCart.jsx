import { Link } from "react-router-dom";
import img1 from "../../assets/p-1.jpg";

// import "./Product.css";

const ProCart = ({ product, showButton }) => {
  return (
    <div className="relative bg-gradient-to-tr from-primary to-transparent rounded-3xl flex items-center justify-center shadow-lg">
      <img
        src={img1}
        className="h-full min-w-32 w-full md:w-[700px] transition-transform duration-500 object-cover rounded-lg bg-transparent "
        alt="ATEM"
      />
      <div className="absolute inset-0  flex flex-col items-center justify-center bg-cyan bg-opacity-[0.15] rounded-3xl p-4 opacity-0 hover:opacity-100 transform -translate-y-1/2 hover:translate-y-0 transition-transform duration-500">
        <h4 className="text-lg font-bold text-center text-white">ATEM</h4>
        <h5 className="my-4 text-xl text-center text-white">Price: $100</h5>
        {showButton ? (
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-800 block text-center"
            to={`product-info/1`}
          >
            Read More
          </Link>
        ) : (
          <p className="text-lg leading-6 text-center text-white">
            This Product is unavailable
          </p>
        )}
      </div>
    </div>
  );
};

export default ProCart;
