import React from "react";
import Category from "./Category";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";
import HeroBanner from "./HeroBanner";
import NewArrival from "./NewArrival";
import NewCollection from "./NewCollection";
import Testimonial from "./Testimonial";
import Product from "./Product";

const Homepage = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <Category />
      <NewArrival />
      <Product />
      <Gallery />
      <NewCollection />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Homepage;
