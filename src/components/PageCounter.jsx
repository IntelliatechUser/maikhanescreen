import React from "react";

const PageCounter = ({ page = 1 }) => {
  return (
    <div className="grid grid-flow-col justify-center p-6 w-[400px] gap-x-4">
      <div className="w-11">
        <div
          className={
            "border-2 border-gray w-10 h-10 rounded-full " +
            (page == 1 ? "bg-yellow-dark" : "")
          }
        ></div>
      </div>
      <div className="w-11">
        <div
          className={
            "border-2 border-gray w-10 h-10 rounded-full " +
            (page == 2 ? "bg-yellow-dark" : "")
          }
        ></div>
      </div>
      <div className="w-11">
        <div
          className={
            "border-2 border-gray w-10 h-10 rounded-full " +
            (page == 3 ? "bg-yellow-dark" : "")
          }
        ></div>
      </div>
    </div>
  );
};

export default PageCounter;
