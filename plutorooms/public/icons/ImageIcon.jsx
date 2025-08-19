import * as React from "react"
const ImageIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M2 18c-.55 0-1.02-.196-1.412-.587A1.93 1.93 0 0 1 0 16V2C0 1.45.196.98.588.588A1.93 1.93 0 0 1 2 0h14c.55 0 1.021.196 1.413.588.392.392.588.863.587 1.412v14c0 .55-.196 1.021-.587 1.413A1.92 1.92 0 0 1 16 18H2Zm0-2h14V2H2v14Zm1-2h12l-3.75-5-3 4L6 10l-3 4Z"
    />
  </svg>
)
export default ImageIcon
