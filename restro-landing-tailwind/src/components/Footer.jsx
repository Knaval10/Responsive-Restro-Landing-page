import React from "react";
import logo from "../assets/Logo.svg";
import { GrFacebook } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
const getStyles = (h = "20px") => {
  return { height: h, width: "20px", color: "rgb(69, 69, 7)" };
};

const Footer = () => {
  return (
    <>
      <div className="p-[10px] footer-container flex justify-between gap-[5px] bg-[#f6eeee] sl:p-[10px] ">
        <div className="restro-logo-media flex gap-[10px] flex-col ">
          <img src={logo} alt="" className="w-[50px] sl:w-[60px] md:w-[80px] " />
          <div className="media flex flex-col gap-[10px] md:flex-row ">
            <GrFacebook style={getStyles()} />
            <GrInstagram style={getStyles()} />
            <GrLinkedin style={getStyles()} />
            <GrTwitter style={getStyles()} />
          </div>
        </div>

        <div className="extra-services">
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Careers</span>
          <span>Work</span>
          <span>Testimonials</span>
        </div>
        <div className="extra-services">
          <span>01-234-567-890</span>
          <span>hello@food.com</span>
          <span>address@food.com</span>
          <span>contact@food.com</span>
        </div>
        <div className="extra-services">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
