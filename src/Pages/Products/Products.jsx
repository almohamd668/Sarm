import { useEffect, useState } from "react";
import ProductCart from "../Products/ProductCart";
import useAxios from "../../API/axiosGlobal";
// 
const Products = () => {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleProducts, setVisibleProducts] = useState(6); // عدد المنتجات المعروضة في البداية


  let bySec = "get_products_by_section.php";
  const [categories, setCategories] = useState([]);
  //axios.defaults.baseURL = "https://titansmaxplus.com/titans/api/"

  let catApi = "categories.php"; //, name = null
  const fetchFun = async (url, setState, name = null) => {
    console.log(name);
    try {
      const response = await useAxios.post(url, { name: name });
      setState(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };


  const fetchProducts = async () => {
    try {
      const response = await useAxios.get("get_full_info.php");
      setProducts(response.data);
      // console.log(response.data[0]);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFun(catApi, setCategories);
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
          <h2 className="text-2xl md:text-4xl lg:text-6xl section-title mb-2 font-bold text-transparent text-trans1">
            SPECIAL PRODUCTS
          </h2>
        </div>
      </div>

  

        <div className="element-center mx-auto flex-wrap 
        items-center md:items-start md:ps-10 gap-2
          md:gap-4 my-5  md:gap-x-3 max-w-full w-[280px] md:w-auto">
          
    <button
      onClick={() => {
        fetchProducts();
      }}
      className="btn2"
    >
      All
    </button>

    {categories.map((cat) => {
      return (
        <button
          key={cat}
          onClick={() => {
            fetchFun(bySec, setProducts, cat);
          }}
          className="btn2"
        >
          {cat == "special_products" ? "Special" : cat}
        </button>
      );
    })}
  </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mb-5 gap-10  md:p-10">
        {products.slice(0, visibleProducts).map((product) => (
          <div
            className="rounded-lg shadow-lg p-5 transform transition duration-500"
            key={product.id}
          >
            <ProductCart product={product} showButton={true}  />
          </div>
        ))}
      </div>
      {visibleProducts < products.length && (
        <div className="text-center p-5">
          <button
            onClick={handleShowMore}
            className="bg-[#00ffff7d] hover:bg-[#00ffffaf] text-white px-4 py-2
             rounded transition-all duration-300 w-[80%] font-bold"
          >
            Show More + +
          </button>
        </div>
      )}
    </section>
  );
};

export default Products;
