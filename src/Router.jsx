import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductInfo from "./Pages/productInfo/ProductInfo";
import Products from "./Pages/Products/Products";
// import Notfound from "./Notfound";

import Home from "./Pages/Home";
import ContactForm from "./Components/ContactForm/ContactFrom";

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
        element: <Products />,
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
        element: <ContactForm />,
      },
    ],
  },
  // {
  //   path: "",
  //   element: <Notfound />,
  // },
]);
