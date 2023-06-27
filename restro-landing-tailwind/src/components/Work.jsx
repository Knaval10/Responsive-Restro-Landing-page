import React from "react";
import mealImg from "../assets/pick-meals-image.png";
import chooseImg from "../assets/choose-image.png";
import deliveryImg from "../assets/delivery-image.png";

const Work = () => {
  return (
    <>
      <div className="containaer-lg work-container flex mt-[30px] md:mt-[100px] text-center flex-col items-center text-[10px] md:text-[15px] w-full  ">
        <div className="work-desc w-[50%] ">
          <h1 className="text-[gold] text-[20px] font-[700] ">Work</h1>
          <h2 className="text-[20px] leading-[30px] font-[700] text-[#2b1e1e] ">How it works?</h2>
          <p className="text-[15px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus a sit eligendi reiciendis impedit incidunt quasi id
            nobis, voluptatum labore quis magnam cumque quod repudiandae ipsam
            dolore cupiditate velit corporis.
          </p>
        </div>

        <div className="services flex justify-between mt-[15px] gap-[10px] md:gap-[20px] w-[50%] ">
          <div className="meals-service">
            <img src={mealImg} alt="" />
            <h1>Pick Meals</h1>
            <p>Pick any meal you crave for</p>
          </div>
          <div className="meals-service">
            <img src={chooseImg} alt="" />
            <h1>Choose how often</h1>
            <p>Select the number of times you want to order the meals</p>
          </div>
          <div className="meals-service">
            <img src={deliveryImg} alt="" />
            <h1>Fast Delivery</h1>
            <p>Have an experience of rocket speed delivery at your place</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
