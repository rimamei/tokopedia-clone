import React from "react";
import * as Bi from "react-icons/bi";

const Cart = (props) => {
  const { outerClassName } = props;
  return (
    <div className={outerClassName}>
      <Bi.BiCart size={28} className="text-primary" />
    </div>
  );
};

export default Cart;
