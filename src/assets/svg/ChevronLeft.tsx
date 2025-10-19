import React from "react";
import { IconProps } from "../../interface/interface";

function ChevronLeft(props: IconProps) {
  const {
    width = 24,
    height = 24,
    fill = "currentColor",
    strokeWidth = 1.5,
    strokeColor = "",
  } = props;
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
      >
        <path
          fill={fill}
          strokeWidth={strokeWidth}
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 17.308L8.692 12L14 6.692l.708.708l-4.6 4.6l4.6 4.6z"
        />
      </svg>
    </div>
  );
}

export default ChevronLeft;
