import React, {  useContext, useEffect } from "react";
import {DataContext, getData } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Slice } from "lucide-react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";


function Carousel() {
  const { data, fetchAllProducts } = getData()
  console.log(data);

  useEffect(() => {
    fetchAllProducts();
  }, []);

 const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute left-6 top-1/2 -translate-y-1/2 z-10 
                 border border-white text-white hover:bg-white hover:text-[#6E5494]
                 px-2 py-2 rounded-full cursor-pointer transition"
    >
      <AiOutlineArrowLeft size={30} />
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-6 top-1/2 -translate-y-1/2 z-10 
                 border border-white text-white hover:bg-white hover:text-[#6E5494]
                 px-2 py-2 rounded-full cursor-pointer transition"
    >
      <AiOutlineArrowRight size={30} />
    </div>
  );
};

  var settings = {
    dots: false,
    autoplay:true,
    autoplaySpeed:2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<SampleNextArrow to="next"/>,
    prevArrow: <SamplePrevArrow to="prev"/>
  };

  return (
    <div>
      <Slider {...settings}>
        {data?.slice(0, 7).map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10">
              <div className="flex flex-col md:flex-row gap-10 justify-center items-center h-[600px] my-20 md:my-0 item-center px-4">
                <div className="md:space-y-6 space-y-3">
                  <h3 className="text-blue-500 font-semibold font-sans text-sm">
                    Bringing the Best Electronics to Your Doorstep
                  </h3>
                  <h1 className="md:text-4xl text-xl font-bold uppercase line-clamp-2 md:line-clamp-3 md:w-[500px] text-white">
                    {item.title}
                  </h1>
                  <p className="md:w-[500px] line-clamp-3 text-gray-400 pr-7">
                    {item.description}
                  </p>
                  <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 font-semibold transition-all">
                    Shop Now
                  </button>
                </div>
                <div>
                  <img src={item.image} alt={item.title} className="rounded-full w-[550px] hover:scale-105 transition-all shadow-2xl shadow-red-400" />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousel;
