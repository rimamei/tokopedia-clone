import React from "react";

const MessageBox = (props) => {
  return (
    <div
      className={`flex items-center text-xl justify-center my-30 p-5 ${
        props.variant || "bg-yellow-200 text-yellow-500"
      } ${props.outerClassName}`}
    >
      {props.children}
    </div>
  );
};

export default MessageBox;
