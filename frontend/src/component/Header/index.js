import React from "react";
import { Category, Search, Trending, Button } from "parts";
import { Link } from "react-router-dom";
import * as Bi from "react-icons/bi";
import * as Im from "react-icons/im";
import * as Fa from "react-icons/fa";
import * as Fi from "react-icons/fi";
import { Logo } from "assets";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const cartItems = cart.reduce((a, c) => a + c.qty, 0)

  return (
    <header className="w-full lg:w-lg z-50 border-b border-gray-200 fixed t-0 l-0 bg-white">
      <div className="bg-gray-100">
        <div className="flex justify-between text-sm font-light mx-10 sm:mx-5 md:mx-5">
          <Link to="/" className="flex items-center">
            <Im.ImMobile2 className="mr-2" />
            Download Tokopedia App
          </Link>
          <div className="w-1/2 flex items-center justify-between sm:justify-evenly sm:display-none">
            <Link to="/" className="sm:hidden md:hidden">
              Tentang Tokopedia
            </Link>
            <Link to="/" className="sm:hidden md:hidden">
              Mitra Tokopedia
            </Link>
            <Link to="/" className="sm:hidden md:hidden">
              Pusat Edukasi Seller
            </Link>
            <Link to="/" className="flex items-center sm:mr-2">
              <Fa.FaLanguage size={32} className="mr-2 text-primary" />
              <p>Bahasa</p>
            </Link>
            <Link to="/" className="flex items-center">
              <Fi.FiHelpCircle size={18} className="mr-2" />
              <p>Bantuan</p>
            </Link>
          </div>
        </div>
      </div>
      <nav className="grid grid-flow-col grid-cols-12 items-center h-80px mx-10 sm:mx-5 sm:flex sm:justify-between">
        <Link to="/" className="col-start-1 col-span-2">
          <img src={Logo} alt="tokopedia" />
        </Link>
        <Category outerClassName="col-start-3" />
        <Search outerClassName="col-start-4 col-end-8 sm:w-3/2" />
        <div className="col-start-8 col-end-13 flex items-center justify-around">
          <Trending outerClassName="w-32" />
          <div className="border-r border-gray-300 text-transparent">l</div>
          <Link to="/cart">
            <div className="p-5">
              {cartItems > 0 && (
                <span className="absolute bg-primary rounded-full text-white border-2 border-white text-xs p-1 px-2 ml-6 top-12">
                  {cartItems}
                </span>
              )}
              <Bi.BiCart size={40} className="text-primary" />
            </div>
          </Link>
          <div className="border-r border-gray-300 text-transparent">l</div>
          <Link to="/signin">
            <Button outerClassName="text-primary border-2 border-primary">
              Masuk
            </Button>
          </Link>
          <Link to="/signup">
            <Button outerClassName="text-primary border-2 border-primary">
              Daftar
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
