import React from 'react'
import johnImg from '../assets/john-doe-image.png';

const Testimonials = () => {
  return (
    <>
        <div className="testimonials-container flex mt-[50px] flex-col w-full items-center ">
            <div className="testimonial-desc w-[50%] flex flex-col text-center items-center text-[15px] ">
                <h1 className="text-[20px] text-[gold] ">Testimonial</h1>
                <h2 className='text-[20px] text-[#3d2f2f] font-[700] '>What do they say?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quo quos ea culpa hic ipsa labore quasi illo nemo odit ducimus dolor odio, vel, ad rem iste neque animi fugiat!</p>
            </div>
            <div className="testimony p-[10px] mt-[10px] flex flex-col w-[50%] items-center bg-[#f6eeee] ">
                <img src={johnImg} alt="" className='w-100px' />
                <p className="font-[500] text-center ">Foodie is one of the best in the town to have delicious meals of your choice at anytime of the day and get foods delivered instantly</p>
                <span className='font-[600] '>John Doe</span>
            </div>
        </div>
    </>
  )
}

export default Testimonials