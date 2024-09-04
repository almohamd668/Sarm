import SuccessSection from "./../Components/SuccessCart";
import { useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

const ConfirmProd = () => {

  let confLink = "get_p_by_link.php";
  let DeletProd = "delete_link.php"; //, name = null 
  const {productId} = useParams();
  const navigate = useNavigate();
  console.log(productId);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState({});
  const [deletionResponse, setDeletionResponse] = useState({});

  const fetchProduct = async (url, id) => {
    try {
      const response = await axios.post(url, { id: id });
      setProduct(response.data[0]);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteProduct = async (url, id) => {
    try {
      const response = await axios.post(url, { id: id });
      setDeletionResponse(response);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    // Replace 'param' with your actual query parameter name
    if (productId) {
      const visitedParams =
        JSON.parse(localStorage.getItem("visitedParams")) || {};
      if (visitedParams[productId]) {
        // Navigate to home if the same parameter is found
        navigate("/");
      } else {
        // Store the parameter in localStorage
        visitedParams[productId] = true;
        localStorage.setItem("visitedParams", JSON.stringify(visitedParams));
      }
    }

  
    setIsLoading(true);
    fetchProduct(confLink, productId);

    const handlePageLeave = async () => {
      await deleteProduct(DeletProd, productId);
    };

    window.addEventListener("beforeunload", handlePageLeave);

    const timer = setTimeout(() => {
      handlePageLeave();
      navigate("/");
    }, 6000);

    return () => {
      window.removeEventListener("beforeunload", handlePageLeave);
      clearTimeout(timer);
    };
  }, [productId]);

  return (
    <>
      <section className="pt-[85px] ">
        <SuccessSection />
        <div className="container grid grid-cols-1 md:grid-cols-2 w-full mx-auto my-10 max-w-full md:min-w-[500px] min-h-[400px] rounded-lg ">
          <div
            className="con-img
              bg-gradient-to-r
            from-darkSec h-full md:min-h-[300px]
            to-primary  w-full max-w-full
              rounded-lg overflow-hidden"
          >
            <img
              //   src={img1 }
              src={product.img_url}
              className="card-img transform hover:rotate-6 mx-auto max-w-full"
              // alt={product.title}
            />
          </div>
          <div
            className="con-card bg-darkSec
             text-black text-sm border-0 w-full 
             my-auto rounded-tr-lg rounded-br-lg p-5 h-fit min-h-[300px] max-w-full"
          >
            <div className="address my-5">
              <h1 className="text-xl md:text-3xl  font-bold  text-white my-5">
                {product.pname}
              </h1>
              <p className="text-lg text-white">product.price</p>
            </div>
            <h4 className="my-1 text-sm md:text-lg text-white/95">
              {product.description}
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConfirmProd;
