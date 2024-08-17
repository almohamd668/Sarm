import { useEffect, useState } from "react";
import Product from "./productInfo/Product";
// import { Outlet } from "react-router-dom";

const ProductsList = () => {
  const apiUrl = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  function getData(api = "") {
    let setD;
    api === "categories" ? (setD = setCategories) : (setD = setProducts);

    fetch(`${apiUrl}/${api}`)
      .then((res) => res.json())
      .then((data) => setD(data));
  }

  useEffect(() => {
    getData();
    getData("categories");
  }, []);

  return (
    <section className="pt-[150px]">
      <h2 className="text-center text-white ">Our Products</h2>
      <div className="element-center my-5 gap-x-3">
        <button
          onClick={() => {
            getData();
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          All
        </button>

        {categories.map((cat) => {
          return (
            <button
              key={cat}
              onClick={() => {
                getData(`category/${cat}`);
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap mb-5 gap-2 justify-around">
        {products.map((product) => {
          return (
            <div className="w-1/3" key={product.id}>
              <Product product={product} showButton={true} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsList;
