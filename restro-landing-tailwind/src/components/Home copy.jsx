import React from "react";
import logo from "../assets/Logo.png";
import img from "../assets/home-banner-image.png";

const Home = () => {
  return (
    <>
      <div className="container-lg flex flex-col">
        <div className="header-container flex gap-2 p-4">
          <div className="header-option w-20 p-4">
            <img src={logo} alt="" />
          </div>
          <div className="nav-bar hidden md:flex p-4 gap-2">
            <nav>Home</nav>
            <nav>About</nav>
            <nav>Testimonials</nav>
            <nav>Contact</nav>
          </div>
          <div className="book p-4 bg-yellow-300 rounded-3xl">
            <button>Booking Now</button>
          </div>
        </div>
        <div className="cover-img w-full">
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
