import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact-container my-[20px] w-[100%] flex flex-col items-center ">
        <div className="contact-desc w-[50%] text-center text-[#2b2424] text-[20px] xl:text-[15px] ">
          <h1 className="text-[#f4d319]  ">Have questions in mind?</h1>
          <h2>Let us help you</h2>
        </div>
        <div className="email-field mt-[20px] flex p-10px rounded-[10px] border-gray-400 justify-between ">
          <input type="email" placeholder="yourEmail@gmail.com" className="p-[10px] border-none "/>
          <button type="submit" className="p-[10px] rounded-[10px] bg-[yellow] ">Submit</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
