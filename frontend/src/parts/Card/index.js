import * as Fa from "react-icons/fa";
import number from "utils/formatNumber";
import React, { useState } from "react";
import { official_store, star_store } from "assets";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  console.log('name length: ', item.name.length)
  return (
    <figure
      key={item._id}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      className="hover:shadow-xl hover:p-2 cursor-pointer col-span-1 m-10 h-300px border border-gray-200 bg-white text-sm m-auto rounded shadow leading-6"
    >
      <Link to={`/product/${item._id}`}>
        <img
          src={item.imageId[0].imageUrl}
          alt={item.name}
          className="h-150px rounded-t w-full cover"
        />
      </Link>
      <figcaption className="p-2">
        <Link to={`/product/${item._id}`}>
          <p className="text-gray-700 text-base">
            {item.name.length > 25 ? item.name.substring(0, 25) : item.name}
            ...
          </p>
        </Link>
        <p className="text-lg font-bold">
          {item.price.toString().length > 9
            ? `Rp${number(item.price).toString().substring(0, 10)}...`
            : `Rp${number(item.price)}`}
        </p>

        <div className="flex items-center">
          <img
            src={item.isOfficialStore === true ? official_store : star_store}
            alt="store"
            className="h-5 w-5"
          />
          <p className="text-gray-500 cursor-pointer transition-all">
            &nbsp;
            {isMouseOver
              ? item.seller.length > 21
                ? `${item.seller.substring(0, 18)}...`
                : item.seller
              : item.city.length > 21
              ? `${item.city.substring(0, 18)}...`
              : item.city}
          </p>
        </div>
        <div className="flex items-center">
          <Fa.FaStar className="text-lg text-yellow-500 mr-1" />
          <p className="text-gray-500">
            {item.rating} | Terjual {item.sold}
          </p>
        </div>
      </figcaption>
    </figure>
  );
};

export default Card;