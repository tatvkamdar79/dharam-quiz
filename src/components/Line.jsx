import React from "react";

const Line = ({ thickness }) => {
  return (
    <div
      className={`${thickness === 0.5 && "h-0.5"} ${thickness === 1 && "h-1"} ${
        thickness === 2 && "h-2"
      } ${thickness === 0.5 && "h-0.5"} ${
        thickness === 3 && "h-3"
      } w-full bg-gray-300`}
    />
  );
};

export default Line;
