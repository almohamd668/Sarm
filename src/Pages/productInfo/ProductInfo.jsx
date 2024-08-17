import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
// import "./ProductInfo.css";

const ProductInfo = () => {
  const { productId } = useParams();
  const apiUrl = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`${apiUrl}/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <div className="info pt-[150px]">
      <Product product={product} showButton={false} />
    </div>
  );
};

export default ProductInfo;
