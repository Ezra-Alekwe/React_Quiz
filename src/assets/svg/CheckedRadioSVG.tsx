import React from "react";
import { IconProps } from '../../interface/interface';

function CheckedRadioSVG(props: IconProps) {
  const {
    width = 24,
    height = 24,
    fill = "none",
    strokeWidth = 1.5,
    strokeColor = "#808080",
  } = props;
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
      >
        <g
          fill={fill}
          strokeWidth={strokeWidth}
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0" />
          <path d="m8.667 12.633l1.505 1.721a1 1 0 0 0 1.564-.073L15.333 9.3" />
        </g>
      </svg>
    </div>
  );
}

export default CheckedRadioSVG;
