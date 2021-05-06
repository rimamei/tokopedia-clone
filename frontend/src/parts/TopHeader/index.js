import React from "react";
import { Link } from "react-router-dom";
import * as Im from "react-icons/im";
import * as Fa from "react-icons/fa";
import * as Fi from "react-icons/fi";

const TopHeader = () => {
  return (
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
  );
};

export default TopHeader;
