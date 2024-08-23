import { useEffect, useState } from "react";
import ProductCart from "../Products/ProductCart";
// import { Outlet } from "react-router-dom";

const Products = () => {
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

      <div className="grid grid-cols-3 w-full mb-5 gap-1 justify-around">
        {products.map((product) => {
          return (
            <div className="w-11/12" key={product.id}>
              <ProductCart product={product} showButton={true} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
