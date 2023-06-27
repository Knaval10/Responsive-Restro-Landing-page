import React, { useState } from "react";
import { BsStack } from "react-icons/bs";
import logo from "../assets/Logo.svg";

const Navbar = () => {
  // const [draw, setDraw] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="header w-full flex">
        <div className="container-lg py-[10px] flex justify-between items-center gap-[25px] ">
          <div className="">
            <img src={logo} alt="" className="w-20" />
          </div>
          <div className="flex gap-5 items-center justify-center flex-row-reverse md:flex-row ">
            <div>
              {showSidebar ? (
                <>
                  <div className="absolute inset-0 bg-black1  ">
                    <div className="w-full flex justify-end">
                      <button
                        class="mt-[10px] mr-[10px] flex rounded-[50%] bg-transparent text-white text-[20px]  "
                        onClick={() => {
                          setShowSidebar();
                        }}
                      >
                        x
                      </button>
                    </div>
                    <nav className=" flex flex-col text-white text-center leading-[26px] font-[700] gap-[10px] h-full text-[30px] mt-[50px] ">
                      <div>Home</div>
                      <div>About</div>
                      <div>Testimonials</div>
                      <div>Contact</div>
                    </nav>
                  </div>
                </>
              ) : (
                <button
                  className=" flex md:hidden items-center justify-center rounded-[100%] border-none bg-transparent "
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  <BsStack
                    style={{
                      height: "50px",
                      width: "50px",
                      color: "rgb(69, 69, 7)",
                    }}
                  />
                </button>
              )}
              <nav className="hidden md:flex text-[21px] md:text-[15px] lg:text-[21px] leading-[26px] font-[700] gap-[10px] lg:gap-[30px] ">
                <div>Home</div>
                <div>About</div>
                <div>Testimonials</div>
                <div>Contact</div>
              </nav>
            </div>
            <div className="flex gap-5">
              <i class="fa-solid fa-light fa-cart-shopping"></i>
            </div>
            <button
              type="button"
              className="hidden md:flex rounded-[50px] py-[10px] px-5 bg-white text-[10px] text-[#d3c41a] md:text-[#000000e3] md:font-[700] lg:text-[15px]  md:border-none h-[10%] text-center  "
            >
              Booking Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
