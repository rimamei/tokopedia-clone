import React, { useState } from "react";
import { official_store, star_store } from "assets";
import * as Ai from "react-icons/ai";
import number from "utils/formatNumber";
import * as Fa from "react-icons/fa";
import { addToCart } from "store/actions/CartActions";
import { Button } from "parts";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const [input, setInput] = useState(item.qty);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    if (e.target.value > item.stock) {
      setInput(item.stock);
    } else {
      setInput(e.target.value);
      dispatch(addToCart(item.id, e.target.value));
    }
  };

  return (
    <div key={item.id} className="my-5 mb-10 flex justify-between">
      <div>
        <div className="flex mb-3">
          <figure className="flex items-start">
            <img
              src={item.isOfficialStore ? official_store : star_store}
              alt="store"
              className="w-5 bg-cover mr-3"
            />
            <figcaption>
              <h3 className="font-semibold">
                <Link to={`/product/${item.product}`}>{item.seller}</Link>
              </h3>
              <p className="text-xs text-gray-500">{item.city}</p>
            </figcaption>
          </figure>
        </div>
        <div className="flex">
          <figure className="flex">
            <img
              src={item.image}
              alt={`img_${item.seller}`}
              className="w-24 h-24 bg-cover rounded shadow"
            />
            <figcaption className="flex flex-col ml-5 justify-evenly">
              <p className="text-sm">{item.name}</p>
              <h3 className="font-bold">Rp{number(item.price)}</h3>
              <div className="flex items-center">
                <Button
                  className={`p-1 rounded-full ${
                    item.stock > 0
                      ? "text-white bg-red-500 "
                      : "bg-gray-200 text-gray-500"
                  }`}
                  onClick=""
                >
                  <Fa.FaMinus size={12} />
                </Button>
                <input
                  className="w-10 text-center border-primary border-0 border-b rounded-none"
                  onChange={onChangeHandler}
                  value={input}
                />
                <Button
                  className={`p-1 rounded-full ${
                    item.stock > 0
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                  onClick=""
                >
                  <Fa.FaPlus size={12} />
                </Button>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="">
        <Ai.AiOutlineDelete size={24} />
      </div>
    </div>
  );
};

export default CartItem;
