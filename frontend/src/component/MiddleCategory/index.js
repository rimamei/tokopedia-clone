import React from "react";
import { Link } from 'react-router-dom';
import { cat_1, cat_2, cat_3, cat_4, cat_5, cat_6 } from "assets";

const MiddleCategory = () => {
  return (
    <section className="flex justify-evenly my-12 text-normal">
      <Link className="bg-middle-category">
        <img src={cat_1} alt="" className="middle-category" />
        <p>Official Store</p>
      </Link>
      <Link className="bg-middle-category">
        <img src={cat_2} alt="" className="middle-category" />
        <p>Produk Indonesia</p>
      </Link>
      <Link className="bg-middle-category">
        <img src={cat_6} alt="" className="middle-category" />
        <p>Terlaris</p>
      </Link>
      <Link className="bg-middle-category">
        <img src={cat_3} alt="" className="middle-category" />
        <p>Top-Up dan Tagihan</p>
      </Link>
      <Link className="bg-middle-category">
        <img src={cat_5} alt="" className="middle-category scale-125" />
        <p>Promo dan Kupon</p>
      </Link>
      <Link className="bg-middle-category">
        <img src={cat_4} alt="" className="middle-category" />
        <p>Lihat Semua</p>
      </Link>
    </section>
  );
};

export default MiddleCategory;
