// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// import Navbar from "./Components/Navbar2";

function App() {
  return (
    <>
     <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
