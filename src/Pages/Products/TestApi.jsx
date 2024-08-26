import { useState, useEffect } from "react";
import axios from "axios";

function YourComponent() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // UseEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://titansmaxplus.com/titans/api/get_full_info.php"
        );
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {products.map((product, index) => (
        <div key={index} className="text-white  lg:text-black ">
          <h2>Product Details</h2>
          <p>ID: {product.p_id}</p>
          <p>Name: {product.pname}</p>
          <p>Description: {product.description}</p>
          {/* Display other product details as needed */}
        </div>
      ))}
    </div>
  );
}

export default YourComponent;
