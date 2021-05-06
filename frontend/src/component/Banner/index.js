import React, { useState } from "react";
import * as Io from "react-icons/io";

const Banner = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <>
      <div className="absolute flex justify-between">
        <div className="bg-white rounded-full p-1 shadow-md">
          <Io.IoIosArrowBack size={24} className="text-gray-800 rounded" />
        </div>
        <div className="bg-white rounded-full p-1 shadow-md">
          <Io.IoIosArrowForward size={24} className="text-gray-800 rounded" />
        </div>
      </div>
      <section className="bg-gray-100 w-full ">
        <img
          src={data[currentSlide].image}
          alt="banner"
          className="w-full rounded-md"
        />
      </section>
    </>
  );
};

export default Banner;
