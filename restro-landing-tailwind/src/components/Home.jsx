import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Cover from "./cover";
import bgImg from "../assets/home-banner-background.png";
import Work from "./Work";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="bg-image ">
        <img src={bgImg} alt="" className="w-[50%] max-w-[900px] absolute top-0 right-0 z-[-1]" />
      </div>
      {/* <Navbar />
      <Cover />
      <About />
      <Work />
      <Testimonials />
      <Contact/>
      <Footer/> */}
    </>
  );
};

export default Home;
