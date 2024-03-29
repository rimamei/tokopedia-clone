import React, { useEffect, useState } from "react";
import * as Io from "react-icons/io";

const Banner = ({ banner }) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      return prev + 1 === banner.length + 1 ? 1 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      return prev - 1 === 0 ? banner.length : prev - 1;
    });
  };

  useEffect(() => {
    const changeSlide = setInterval(() => {
      setCurrentSlide((prev) => {
        return prev + 1 === banner.length + 1 ? 1 : prev + 1;
      });
    }, 4000);
    return () => {
      clearInterval(changeSlide);
    };
  }, [banner]);

  return (
    <>
      {banner.slice(currentSlide - 1, currentSlide).map((item) => (
        <div key={item._id} className="h-1/2">
          <div className="flex justify-between">
            <div className="absolute top-72 left-16 bg-white rounded-full p-1 shadow-md">
              <Io.IoIosArrowBack
                onClick={prevSlide}
                size={24}
                className="text-gray-800 rounded cursor-pointer"
              />
            </div>
            <div className="absolute top-72 right-16 bg-white rounded-full p-1 shadow-md">
              <Io.IoIosArrowForward
                onClick={nextSlide}
                size={24}
                className="text-gray-800 rounded cursor-pointer"
              />
            </div>
          </div>
          <section className="bg-gray-100 w-full">
            <img src={item.imageUrl} alt="banner" className="w-full rounded-md select-none" />
          </section>
        </div>
      ))}
    </>
  );
};

export default Banner;
