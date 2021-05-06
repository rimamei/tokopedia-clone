import React from "react";
import { official_store } from "assets";

const CartScreen = () => {
  return (
    <div className="grid grid-cols-12 pt-40">
      <div className="mx-10 col-start-1 col-end-8">
        <h2 className="text-2xl font-bold">Keranjang</h2>
        <div className="flex justify-between">
          <div className="flex items-center">
            <input type="checkbox" className="w-5 h-5" />
            <h3>&emsp;Pilih Semua</h3>
          </div>
          <div>
            <h3>Hapus</h3>
          </div>
        </div>
    <div className="border-2"></div>
        <div>
          <div>
            <input type="checkbox" className="w-5 h-5" />
            <div>
              <div className="flex">
                <img src={official_store} alt="" />
                <h3>Collins Official</h3>
              </div>
              <p>Jakarta Pusat</p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CartScreen;
