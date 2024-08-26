import { useEffect, useState } from "react";
import ProductCart from "../Products/ProductCart";
// import { Outlet } from "react-router-dom";
import axios from "axios";

const Products = () => {
  // const apiUrl = "https://titansmaxplus.com/titans/api";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // State to handle loading status
  const [isLoading, setIsLoading] = useState(true);
  // State to handle any error
  const [error, setError] = useState(null);

  console.log(products);

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

  return (
    <section className="pt-[150px]">
      <h2 className="text-center text-white ">Our Products</h2>
      <div className="element-center my-5 gap-x-3">
        {/*<button
          onClick={() => {
            getData();
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          All
        </button>

      categories.map((cat) => {
          return (
            <button
              key={cat}
              onClick={() => {
                getData(`category/${cat}`);
              }}
              className="bg-[#829fd1] hover:bg-primary text-white font-bold py-2 px-4 rounded"
            >
              {cat}
            </button>
          );
        })*/}
      </div>
      <div className="grid grid-cols-3 w-full mb-5 gap-20 p-10">
        {products.map((product) => {
          return (
            <div className="w-10/12 mx-auto" key={product.id}>
              <ProductCart product={product} showButton={true} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
