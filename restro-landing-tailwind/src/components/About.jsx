import React from "react";
import img from "../assets/about-background-image.png";
import abtBg from "../assets/about-background.png";
import { MdOutlineVideoLibrary } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className="w-full flex relative xs:flex-col md:mt-[250px] ">
        <div className="">
          <img src={abtBg} alt="" className="w-[50%] xs:w-[30%] md:w-[20%] lg:w-[18%] max-w-[900px] xs:max-w-[150px] lg:max-w-[200px] absolute top-0 left-0 z-[-1] md:block  " />
        </div>
        <div className="pl-[10px] flex mt-[40%] xs:mt-0 xs:items-center md:mt-[10%] flex-col md:flex-row md:justify-between ">
          <img src={img} alt="" className="w-[300px] md:w-[400px] " />
          <div className="md:w-[70%] ">
            <div className="about-desc">
              <div className="mt-[25%] md:mt-0 text-left xs:text-center xs:mt-0 md:text-left ">
                <h2 className="text-[20px] lg:text-[30px] lg:leading-[30px] text-[#f4d107] font-[700] leading-[30px] ">About</h2>
                <h1 className="text-[20px] lg:text-[25px] text-[#2d2727] ">
                  Food is an important <br /> part of a balanced <br /> diet
                </h1>
                <p className="xs:mt-[10px] xs:text-center xs:text-[15px] lg:text-[20px] md:text-left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, minus blanditiis quo repudiandae laudantium
                  itaque. Ut maiores illum, nihil iste doloremque incidunt
                  architecto, necessitatibus veritatis nulla accusamus neque.
                  Aperiam, repellendus.
                </p>
              </div>
            </div>
            <div className="flex mt-[10px] md:justify-start text-[15px] text-center gap-[50px] xs:justify-center ml-[20px] ">
              <button className="rounded-[20px] px-5 bg-[#fe9e0d] text-[12px] text-[#2d2727] border-[none] ">Learn More</button>
              <div className="flex text-center">
                <h1>
                  <MdOutlineVideoLibrary
                    style={{
                      height: "50px",
                      width: "50px",
                      color: "rgb(69, 69, 7)",
                    }}
                  />
                </h1>
                <p>Watch Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
