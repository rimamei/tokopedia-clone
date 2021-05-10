import React from "react";
import * as Fa from "react-icons/fa";

export default function Rating(props) {
  const { rating, numReviews, caption } = props;
  return (
    <div className="flex">
      <span>
        <i
          className={
            rating >= 1 ? (
              <Fa.FaStar />
            ) : rating >= 0.5 ? (
              <Fa.FaStarHalfAlt />
            ) : (
              <Fa.FaRegStar />
            )
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 2 ? (
              <Fa.FaStar />
            ) : rating >= 1.5 ? (
              <Fa.FaStarHalfAlt />
            ) : (
              <Fa.FaRegStar />
            )
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 3 ? (
              <Fa.FaStar />
            ) : rating >= 2.5 ? (
              <Fa.FaStarHalfAlt />
            ) : (
              <Fa.FaRegStar />
            )
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 4 ? (
              <Fa.FaStar />
            ) : rating >= 3.5 ? (
              <Fa.FaStarHalfAlt />
            ) : (
              <Fa.FaRegStar />
            )
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 5 ? (
              <Fa.FaStar />
            ) : rating >= 4.5 ? (
              <Fa.FaStarHalfAlt />
            ) : (
              <Fa.FaRegStar />
            )
          }
        ></i>
      </span>
      {caption ? (
        <span>{caption}</span>
      ) : (
        <span>{numReviews + " reviews"}</span>
      )}
    </div>
  );
}
