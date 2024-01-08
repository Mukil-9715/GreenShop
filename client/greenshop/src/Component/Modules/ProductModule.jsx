import Footer from "../ReuseComponents/Footer";
import Nav from "../ReuseComponents/Nav";
import React from "react";
import ProductDetail from "../ReuseComponents/ProductDetail";
import RelatedProduct from "../ReuseComponents/RelatedProduct";
import Totop from "../ReuseComponents/Totop";

const ProductModule = () => {
  return (
    <>
      <Totop />
      <Nav />
      <div className="container">
        <ProductDetail />
        <RelatedProduct />
        <Footer />
      </div>
    </>
  );
};

export default ProductModule;
