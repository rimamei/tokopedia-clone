import { Logo } from "assets";
import React from "react";
import { Link } from "react-router-dom";

const IconText = (props) => {
  const { outerClassName } = props;
  
  return (
    <Link to="/" className={outerClassName}>
      <img src={Logo} alt="tokopedia" />
    </Link>
  );
};

export default IconText;
