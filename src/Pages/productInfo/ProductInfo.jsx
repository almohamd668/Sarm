import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

import useAxios from "../../API/axiosGlobal";

// import "./ProductInfo.css";

const ProductInfo = () => {

  const { productId } = useParams();

  const apiUrl = "get_product_by_id.php";
  const [product, setProduct] = useState({});
 console.log( "dljflskjdfsdf",product)


 console.log(  "no",productId);

  const fetchFun = async (url, setState) => {
   
    try {
      const response = await useAxios.post(url, { id: 18 });
      setState(response.data[0]);
      console.log(response.data[0]);

    } catch (error) {
      console.log(error.message);
    }
  };


  useEffect(() => {
    fetchFun(apiUrl, setProduct );
    
  }, []);

  return (
    <div className="info pt-[100px]">
      <Product product={product} showButton={false} />
    </div>
  );
  
};

export default ProductInfo;
