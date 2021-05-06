import React from "react";
import * as Fa from "react-icons/fa";

const Category = (props) => {
  const { outerClassName } = props;
  
  return (
    <div className={`flex items-center ${outerClassName}`}>
      <h3 className="mr-1 font-normal text-sm">Kategori</h3>
      <Fa.FaChevronDown />
    </div>
  );
};

export default Category;
