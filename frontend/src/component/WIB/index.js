import React from "react";
import * as Hi from "react-icons/hi";
import { Button, Card } from "parts";
import data from "json/data";

const WIB = () => {
  return (
    <section className="w-full mb-10 pb-12 border-b border-gray-200">
      <div className="flex items-end justify-between mb-5">
        <h1 className="text-3xl font-bold">Produk Populer WIB</h1>
        <Button outerClassName="flex flex items-center cursor-pointer outline-none sm:text-sm md:text-sm focus:border-none">
          Lihat Semua
          <Hi.HiChevronDoubleRight size={18} />
        </Button>
      </div>
      <div>
        <div className="mt-10 grid grid-flow-col grid-cols-6 gap-8 overflow-x-auto scrolling-touch">
          {data.items.slice(0, 6).map((item) => (
            <Card item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WIB;
