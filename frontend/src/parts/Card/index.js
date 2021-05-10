import * as Fa from "react-icons/fa";
import number from "utils/formatNumber";
import React, { useState } from "react";
import { official_store, star_store } from "assets";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { item } = props;
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <Link to={`/product/${item._id}`}>
      <figure
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        className="hover:shadow-xl hover:p-2 cursor-pointer col-span-1 m-10 h-300px border border-gray-200 bg-white text-sm m-auto rounded shadow leading-6"
      >
        <img
          src={item.image[0].imageUrl}
          alt={item.name}
          className="h-150px rounded-t w-full cover"
        />
        <figcaption className="p-2">
          <p className="text-gray-700 text-base">
            {item.name.length > 25 ? item.name.substring(0, 25) : item.name}
            ...
          </p>
          <p className="text-lg font-bold">
            {item.price.toString().length > 9
              ? `Rp${number(item.price).toString().substring(0, 10)}...`
              : `Rp${number(item.price)}`}
          </p>

          <div className="flex items-center">
            <img
              src={item.isOfficialStore === true ? official_store : star_store}
              alt=""
              className="h-5 w-5"
            />
            <p className="text-gray-500 cursor-pointer transition-all">
              &nbsp;
              {isMouseOver
                ? item.brand.length > 21
                  ? `${item.brand.substring(0, 18)}...`
                  : item.brand
                : item.city.length > 21
                ? `${item.city.substring(0, 18)}...`
                : item.city}
            </p>
          </div>
          <div className="flex items-center">
            <Fa.FaStar className="text-lg text-yellow-500 mr-1" />
            <p className="text-gray-500">
              {item.rating} | Terjual {item.terjual}
            </p>
          </div>
        </figcaption>
      </figure>
    </Link>
  );
};

export default Card;
