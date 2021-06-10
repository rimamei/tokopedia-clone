import React, { useEffect, useState } from "react";
import { Button } from "parts";

const Language = (props) => {
  const { outerClassName } = props;
  const [isBahasa, setIsBahasa] = useState(false);

  const onClick = () => {
    setIsBahasa(!isBahasa);
  };

  return (
    <div className="bg-gray-200 flex rounded-md">
      <Button
        type="button"
        outerClassName={
          !isBahasa
            ? "bg-primary text-white p-1 mr-1"
            : "text-gray-700 bg-gray-200 mr-1"
        }
        onClick={onClick}
      >
        Inggris
      </Button>
      <Button
        type="button"
        outerClassName={
          isBahasa
            ? "bg-primary text-white p-1 ml-1"
            : "text-gray-700 bg-gray-200 ml-1"
        }
        onClick={onClick}
      >
        Indonesia
      </Button>
    </div>
  );
};

export default Language;
