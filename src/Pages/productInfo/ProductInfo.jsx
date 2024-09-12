import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import axios from "axios";


// import "./ProductInfo.css";

const ProductInfo = () => {

  const { productId } = useParams();
  const apiUrl = "get_product_by_id.php";
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.post(apiUrl, {id:productId})
      .then(response => {
        setProduct(response.data[0]);
      })
      .catch(error => {
        console.error(error);
      });
  }, [productId]);


  return (
    <div className="info pt-[150px]">
      <Product product={product} showButton={false} />
    </div>
  );
  
};

export default ProductInfo;
