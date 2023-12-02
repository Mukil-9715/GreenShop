import React from "react";
import AuthenticationModule from "./AuthenticationModule";
import Nav  from "../ReuseComponents/Nav";
import CarouselElement from "../ReuseComponents/CarouselElement";
import Footer from "../ReuseComponents/Footer";
import Cardsection from "../ReuseComponents/Cardsection";
import Blog from "../ReuseComponents/Blog";
import Postscard from "../ReuseComponents/Postscard";

const Landingmodule = () => {
  return (
    <div >
      <AuthenticationModule />
      <Nav />
      <CarouselElement />
      <Cardsection />
      <Postscard />
      <Blog />
      <Footer />
    </div>
  );
};

export default Landingmodule;
