import React from "react";
import * as Im from "react-icons/im";

const Loading = (props) => {
  return (
    <div className="flex items-center text-xl justify-center my-60">
      <Im.ImSpinner2 className="animate-spin text-primary" />
      &emsp;{props.children}
    </div>
  );
};

export default Loading;
