import * as React from "react";
import { SVGProps } from "react";
const BookHeartSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
    />
    <path
      stroke="#BAB0C2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5Zm0 0A2.5 2.5 0 0 1 6.5 17H20"
    />
    <path
      fill="#FF529B"
      stroke="#FF2883"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6C10 11.1 12 13 12 13s2-1.9 3.3-3.1c.4-.4.7-1 .7-1.7Z"
    />
  </svg>
);
export default BookHeartSVG;
