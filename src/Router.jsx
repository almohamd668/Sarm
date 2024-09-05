import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductInfo from "./Pages/productInfo/ProductInfo";
import Products from "./Pages/Products/Products";


import Home from "./Pages/Home";
import Notfound from "./Notfound";
import ContactForm from "./Components/ContactForm/ContactFrom";
import ConfirmProd from "./Pages/ConfirmProd";

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
      {
        path: "confirm/:productId",
        element: <ConfirmProd />,
      },
    ],
  },
  {
    path: "*",
    element: <Notfound /> ,
  },
]);
