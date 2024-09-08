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
    <section
      className="bg-gray-900 min-h-[10%]"
      style={{
        backgroundImage: "linear-gradient(to right, #00ffff7b, #7c3aeda9)",
      }}
    >
      <div className="col-span-12 flex flex-col gap-6 lg:col-span-8 text-center lg:col-start-3 mb-8 pt-[150px]">
        <div className="flex flex-col text-center lg:col-start-3">
          <h2 className="text-3xl md:text-4xl lg:text-6xl section-title mb-2 font-bold text-transparent text-trans1">
            SPECIAL PRODUCTS
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mb-5 gap-10 p-10">
        {products.slice(0, visibleProducts).map((product) => (
          <div
            className="rounded-lg shadow-lg p-5 transform transition duration-500"
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
            className="bg-[#00ffff7d] hover:bg-[#00ffffaf] text-white px-4 py-2 rounded transition-all duration-300 w-[80%] font-bold"
          >
            Show More + +
          </button>
        </div>
      )}
    </section>
  );
};

export default Products;
