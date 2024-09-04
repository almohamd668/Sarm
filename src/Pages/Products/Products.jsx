import { useEffect, useState } from "react";
import ProductCart from "../Products/ProductCart";
import useAxios from "../../API/axiosGlobal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleProducts, setVisibleProducts] = useState(6); // عدد المنتجات المعروضة في البداية

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await useAxios.get("get_full_info.php");
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleShowMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 3); // زيادة عدد المنتجات المعروضة
  };

  return (
    <section className="pt-[150px] bg-gray-900 min-h-[10%]">
      <h2 className="text-center text-white/70 text-4xl font-bold mb-1 bg-gradient-to-r from-[#a6a4fa] via-[#efc2eb]/80 to-[#6dfbfa] backdrop-blur w-full mx-auto p-2 rounded">
        Our Products
      </h2>

      {/* 

*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mb-5 gap-10 p-10">
        {products.slice(0, visibleProducts).map((product) => (
          <div
            className="rounded-lg shadow-lg p-5 transform transition duration-500 "
            key={product.id}
          >
            <ProductCart product={product} showButton={true} />
          </div>
        ))}
      </div>
      {visibleProducts < products.length && (
        <div className="text-center p-5">
          <button
            onClick={handleShowMore}
            className="bg-[#00ffffa2] hover:bg-[#00ffffaf] text-white px-4 py-2 rounded transition-all duration-300 w-[50%] font-bold  "
          >
            Show More + +
          </button>
        </div>
      )}
    </section>
  );
};

export default Products;
