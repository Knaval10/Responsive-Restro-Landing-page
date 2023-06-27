import React from "react";
import bgImg from "./assets/home-banner-background.png";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Cover from "./components/cover";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './index.css';

const App = () => {
  return (
    <>
      <div className="bg-image ">
        <img
          src={bgImg}
          alt=""
          className="w-[50%] max-w-[900px] absolute top-0 right-0 z-[-1]"
        />
      </div>
      <Navbar />
      <Cover />
      <About />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
