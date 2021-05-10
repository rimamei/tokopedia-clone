import React from "react";
import * as Hi from "react-icons/hi";
import { Button, Card } from "parts";

const WIB = (props) => {
  const { data } = props;
  return (
    <section className="w-full mb-10 pb-12 border-b border-gray-200">
      <div className="flex items-end justify-between mb-5">
        <h1 className="text-3xl font-bold">{props.children}</h1>
        <Button outerClassName="flex flex items-center cursor-pointer outline-none sm:text-sm md:text-sm focus:border-none">
          Lihat Semua
          <Hi.HiChevronDoubleRight size={18} />
        </Button>
      </div>
      <div>
        <div className="mt-10 grid grid-flow-col grid-cols-6 gap-8 overflow-x-auto scrolling-touch">
          {data.slice(0, 6).map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WIB;
