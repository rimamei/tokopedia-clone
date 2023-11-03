import React, { useEffect, useState } from "react";
import * as Io from "react-icons/io";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
    <Carousel transitionTime={500} autoPlay={true} infiniteLoop={true}>
      {banner.map((item) => (
        <section key={item._id} className="h-1/2">
          <section className="bg-gray-100 w-full">
            <img
              src={item.imageUrl}
              alt="banner"
              className="w-full rounded-md select-none"
            />
          </section>
        </section>
      ))}
    </Carousel>
  );
};

export default Banner;
