import SuccessSection from "./../Components/SuccessCart";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import img1 from "../assets/22.png";
import loader from "../assets/Spinner.svg";
import { useEffect, useState  } from "react";
import useAxios from "../API/axiosGlobal";

const ConfirmProd = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  let confLink = "get_p_by_link.php";
  let prodApi = "get_product_by_id.php";
  let DeletProd = "delete_link.php"; //, name = null
  console.log(productId);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const [deletionResponse, setDeletionResponse] = useState({});
  
  const fetchProduct = async (url, id) => {
    console.log("fetchProductNum : ", id);
    try {
      const response = await useAxios.post(url, { id: id });
      if (response.data !== null) {
        const res = await useAxios.post(prodApi, { id: response.data });
        setProduct(res.data[0]);
        setIsLoading(false);

        // console.log("res img is :", res.data[0].product.img_url);
      } else {
        console.log("Response data is null, skipping second request.");
        navigate("/*", { replace: true });
      }

      console.log("response is : ", response.data);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    
    }
  };

  const deleteProduct = async (url, id) => {
    try {
      const response = await useAxios.post(url, { id: id });
      setDeletionResponse(response);
    } catch (error) {
      setError(error.message);
    }
  };




  useEffect(() => {
    // Fetch the product when the component mounts or productId changes
    fetchProduct(confLink, productId);

    const handlePageLeave = async () => {
      await deleteProduct(DeletProd, productId);
    };

    // Set a timer for 5 minutes (300000 milliseconds)
    const timer = setTimeout(() => {
      handlePageLeave();
   
    }, 1000);

    // Listen for location changes
    const unlisten = () => {
      // This function will be called when the component unmounts
      window.removeEventListener('beforeunload', handlePageLeave);
    
    };

    // Add beforeunload event listener
    window.addEventListener('beforeunload', handlePageLeave);
    
    // Effect cleanup
    return () => {
      unlisten();
      window.removeEventListener('beforeunload', handlePageLeave);
    };
  }, [productId, confLink, DeletProd, navigate, location]);


  return (
    <>
      {isLoading ? (
        <div
          style={{
            height: "100vh",
            position: "absolute",
            width: "100vw",
            top: "0",
            left: "0",
            zIndex: "100",
          }}
          className="bg-darkSec flex items-center justify-center"
        >
          <img src={loader} alt="" />
        </div>
      ) : (
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
                // src={img1 }

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
              <div className="address my-5 flex justify-between items-center">
                <h1 className="text-xl md:text-3xl  font-bold  text-white my-5">
                  {product.pname}
                </h1>
                <h3 className="text-sm md:text-lg text-white">
                  Contain {" "}
                  <strong className="ps-4">{product.num_of_pieces}</strong>
                </h3>
              </div>
              <h4 className="my-1 text-2xl md:text-4xl font-bold  text-white/95">
                {`Price :  ${product.price} $`}
              </h4>
              <p className="text-sm md:text-[18px] leading-[1.3rem] text-white mt-4">
                {" "}
                {product.description}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ConfirmProd;
