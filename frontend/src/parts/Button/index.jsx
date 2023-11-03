import React from "react";

const Button = (props) => {
  const { outerClassName, ...rest } = props;

  return (
    <div>
      <button
        className={`font-medium outline-none px-3 py-1 rounded cursor-pointer ${outerClassName}`}
        {...rest}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
