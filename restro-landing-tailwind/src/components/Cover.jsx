import React from "react";
import img from "../assets/home-banner-image.png";

const Cover = () => {
  return (
    <>
      <div className="container-lg flex p-[10px] md:p-0 justify-start mx-auto my-[10px] items-center flex-col-reverse md:flex-row gap-y-[20px] ">
        <div className="px-[20px] md:w-1/2 text-center md:text-left flex flex-col text-[20px] items-center md:items-start text-[#4c4c4c] ">
          <h1 className="hidden lg:text-[50px] lg:leading-[73px] ">
            Your Favourite Food <br /> Delivered Hot & <br /> Fresh
          </h1>
          <p className="text-[#828282] lg:text-[25px] lg:leading-10 ">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="my-[10px] bg-[#fe9e0d] py-[10px] lg:py-[30px] lg:px-[55px] px-[20px] lg:leading-[25px] border-[hidden] rounded-[40px] text-[20px] font-[700] text-white text-center ">
            Order Now &nbsp; &rarr;
          </button>
        </div>
        <div className=" w-[80%] ">
          <img
            src={img}
            alt=""
            className="w-full md:w-1/2 lg:w-[80%] lg:max-w-[800px] "
          />
        </div>
      </div>
    </>
  );
};

export default Cover;
