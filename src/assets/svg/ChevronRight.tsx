import React from "react";
import { IconProps } from "../../interface/interface";

function ChevronRight(props: IconProps) {
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
        d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z"
        />
      </svg>
    </div>
  );
}

export default ChevronRight;
