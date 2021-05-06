import React from "react";
import * as Fi from "react-icons/fi";

const Search = (props) => {
  const { outerClassName } = props;
  
  return (
    <div className={`relative ${outerClassName}`}>
      <Fi.FiSearch className="absolute block text-xl top-2 right-5 text-primary" />
      <input
        type="text"
        className="outline-none cursor-pointer border border-primary px-5 py-2 pr-12 block rounded-full w-full text-sm"
        placeholder="Cari di Tokopedia"
      />
    </div>
  );
};

export default Search;
