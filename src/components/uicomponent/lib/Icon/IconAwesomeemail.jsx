import React from "react";

const IconAwesomeemail = ({
  color = "#c1c1c1",
  width = "28.75",
  height = "23",
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 28.75 23"
    >
      <path
        id="Icon_material-email"
        data-name="Icon material-email"
        d="M28.875,6h-23A2.871,2.871,0,0,0,3.014,8.875L3,26.125A2.883,2.883,0,0,0,5.875,29h23a2.883,2.883,0,0,0,2.875-2.875V8.875A2.883,2.883,0,0,0,28.875,6Zm0,5.75-11.5,7.187L5.875,11.75V8.875l11.5,7.187,11.5-7.187Z"
        transform="translate(-3 -6)"
        fill={color}
      />
    </svg>
  );
};

export default IconAwesomeemail;
