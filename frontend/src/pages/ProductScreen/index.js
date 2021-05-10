import React, { useEffect, useState } from "react";
import number from "utils/formatNumber";
import * as Fa from "react-icons/fa";
import { Button } from "parts";
import data from "json/data";

const ProductScreen = (props) => {
  const [input, setInput] = useState(0);

  useEffect(() => {
    document.title = "Tokopedia Clone";
    window.scrollTo(0, 0);
  }, []);

  const product = data.items.find((x) => x._id === props.match.params.id);

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <div className="flex mt-40 mb-20 mx-20">
      <figure className="flex-col-1 m-5">
        <img
          className="rounded border w-full"
          src={product.image[0].imageUrl}
          alt={product.name}
        />
      </figure>
      <div className="flex-col-2 m-5">
        <h1 className="font-bold text-gray-800 mb-2">{product.name}</h1>
        <div className="flex items-center text-gray-700 mb-5">
          <div className="flex items-center">
            <Fa.FaStar className="text-yellow-500" />
            <p className="font-semibold text-sm">
              &nbsp;{product.rating}&emsp;
            </p>
          </div>
          <p className="text-sm">
            Ulasan &nbsp;
            <span className="font-semibold">{product.numReviews}&emsp;</span>
          </p>
          <p className="text-sm">
            Diskusi &nbsp;
            <span className="font-semibold">25</span>
          </p>
        </div>
        <h1 className="font-bold text-3xl mb-2">Rp{number(product.price)}</h1>
        <p className="font-semibold">Deskripsi:</p>
        <p className="text-sm">{product.description}</p>
      </div>
      <div className="flex-col-1 m-5 p-5 border shadow rounded overflow-hidden">
        <p className="font-bold">Jumlah yang dibeli</p>
        <div className="flex items-center mb-5">
          <Button
            className={`p-1 rounded-full ${
              product.stock > 0
                ? "text-white bg-red-500 "
                : "bg-gray-200 text-gray-500"
            }`}
            onClick={() =>
              setInput((input) => {
                return input - 1 <= 0 ? 0 : input - 1;
              })
            }
          >
            <Fa.FaMinus size={12} />
          </Button>
          <input
            type="number"
            min="0"
            max={product.stock}
            value={input > product.stock ? product.stock : input}
            onChange={(e) => setInput(e.target.value)}
            className="min-w-3 w-10 outline-none border-0 border-b rounded-none"
          />
          <Button
            className={`p-1 rounded-full ${
              product.stock > 0
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-500"
            }`}
            onClick={() =>
              setInput((input) => {
                return input + 1 === product.stock ? product.stock : input + 1;
              })
            } 
          >
            <Fa.FaPlus size={12} />
          </Button>
          {product.stock > 0 ? (
            <>
              <p className="text-gray-500">&emsp;Stok &nbsp;</p>
              <span className="font-semibold">{product.stock}</span>
            </>
          ) : (
            <p className="font-semibold text-red-500">&emsp;Produk Habis</p>
          )}
        </div>
        <p className="text-gray-500 mb-5">
          Subtotal &nbsp;{" "}
          <span className="text-xl font-semibold text-black">
          {input > product.stock ? number(product.price * product.stock) : number(product.price * input)}
          </span>
        </p>
        <Button
          outerClassName={`flex items-center justify-center  my-2 w-full py-2 ${
            product.stock > 0
              ? "bg-primary text-white"
              : "bg-gray-200 text-gray-500"
          }`}
        >
          <Fa.FaPlus />
          &emsp;Keranjang
        </Button>
        <Button
          outerClassName={`border w-full py-2 ${
            product.stock > 0
              ? "text-primary border-primary"
              : "border-gray-200 text-gray-500"
          }`}
        >
          Beli Langsung
        </Button>
      </div>
    </div>
  );
};

export default ProductScreen;
