import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Pages/Homepage";
import Display from "./Pages/Display";
import Cart from "./Pages/Cart";
import Allproducts from "./Pages/Allproducts";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Allproducts" element={<Allproducts />} />

          <Route path="/Cart" element={<Cart />} />
          <Route path="/display/:productid" element={<Display />} />
          <Route path="/cart" element={<cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
