import React from "react";

export const Commonheading = ({
  img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvoDpETXEh0BUvReWb7nTOygdv7ZL7Yb5MQA&s",
  heading = "default text",
}) => {
  return (
    <div className="p-1 flex-1">
      <img width="50px" src={img} className="rounded max-h-[30px]" />
      <p>{heading}</p>
    </div>
  );
};
export const BarsOwner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-5">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvoDpETXEh0BUvReWb7nTOygdv7ZL7Yb5MQA&s"
        className="w-10 h-10 rounded-full"
      />
      <p className="text-xs">Shanshank Owner</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ex,
        repudiandae est ipsam quasi, porro neque nobis nisi quam accusamus
        nihil.
      </p>
    </div>
  );
};
