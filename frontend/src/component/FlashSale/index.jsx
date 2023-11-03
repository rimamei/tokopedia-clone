import React from 'react';
import { Button, Card, Counter } from '@/parts';
import { flash_sale } from '@/assets';

const FlashSale = ({ data }) => {
  return (
    <section className="w-full mb-10 pb-12 border-b border-gray-200">
      <div className="flex items-end justify-between mb-5">
        <div className="flex items-center">
          <h1 className="text-3xl sm:text-xl md:text-xl font-bold">
            Kejar Diskon Spesial
            <span className="text-xl sm:hidden md:text-sm font-normal text-gray-500">
              &emsp;berakhir dalam&emsp;
            </span>
          </h1>
          <Counter />
        </div>
        <Button
          type="button"
          outerClassName="flex flex items-center sm:text-sm md:text-sm focus:border-none"
        >
          Lihat Semua
        </Button>
      </div>
      <div className="flex items-center relative mt-10 overflow">
        <div className="z-0 absolute">
          <div className="bg-primary h-330px w-234px rounded-10px relative">
            <img
              src={flash_sale}
              alt="flash_sale animasi"
              className="h-300px w-176px"
            />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-8 z-30 scrolling-touch overflow-x-auto sm:auto-cols-fr sm:grid-flow-cols">
          <div className="h-300px"></div>
          {data.slice(0, 5).map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
