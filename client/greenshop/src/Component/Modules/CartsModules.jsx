import React from "react";
import Footer from "../ReuseComponents/Footer";
import Nav from "../ReuseComponents/Nav";
import ProductCart from "../ReuseComponents/ProductCart";

const CartsModules = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <ProductCart />
        <Footer />
      </div>
    </>
  );
};

export default CartsModules;
