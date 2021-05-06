import React from "react";
import { Category, IconText, Search, Trending, Cart, TopHeader, Button } from "parts";

const Header = () => {
  return (
    <header className="w-full lg:w-lg z-50 border-b border-gray-200 fixed t-0 l-0 bg-white">
      <div className="bg-gray-100">
        <TopHeader />
      </div>
      <nav className="grid grid-flow-col grid-cols-12 items-center h-80px mx-10 sm:mx-5 sm:flex sm:justify-between">
        <IconText outerClassName="col-start-1 col-span-2" />
        <Category outerClassName="col-start-3" />
        <Search outerClassName="col-start-4 col-end-8 sm:w-3/2" />
        <div className="col-start-8 col-end-13 flex items-center justify-around">
          <Trending outerClassName="w-32" />
          <div className="border-r border-gray-300 text-transparent">l</div>
          <Cart outerClassName="p-5" />
          <div className="border-r border-gray-300 text-transparent">l</div>
          <Button outerClassName="text-primary border-2 border-primary">Masuk</Button>
          <Button outerClassName="text-primary border-2 border-primary">Daftar</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
