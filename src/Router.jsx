import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductInfo from "./Pages/productInfo/ProductInfo";
import ProductsList from "./Pages/ProductsList";
// import Notfound from "./Notfound";
import Home from "./Pages/Home";

export const rout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <ProductsList />,
      },
      {
        path: "products/product-info/:productId",
        element: <ProductInfo />,
      },
      {
        path: "about",
        element: <div>About</div>,
      },
      {
        path: "contact",
        element: <div>Contact</div>,
      },
    ],
  },
  // {
  //   path: "",
  //   element: <Notfound />,
  // },
]);
