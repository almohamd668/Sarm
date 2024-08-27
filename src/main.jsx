import ReactDOM from "react-dom/client";
import "./index.css";
// import  './API/axios-global';
import { RouterProvider } from "react-router-dom";
import { rout } from "./Router";
import  './API/axiosGlobal';
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={rout} />
);
