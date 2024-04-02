import React from "react";

const Bulletpointicon = ({width="15",height="15",color="#ff9e06",className}) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 15 15"
      >
        <circle
          id="Ellipse_6"
          data-name="Ellipse 6"
          cx="7.5"
          cy="7.5"
          r="7.5"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Bulletpointicon;
