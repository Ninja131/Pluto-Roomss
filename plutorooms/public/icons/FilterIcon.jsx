import * as React from "react"
const FilterIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M19.25 10H6.895m-4.361 0H.75m1.784 0a2.18 2.18 0 1 1 4.36 0 2.18 2.18 0 0 1-4.36 0Zm16.716 6.607h-5.748m0 0a2.182 2.182 0 0 1-4.361 0m4.361 0a2.18 2.18 0 0 0-4.361 0m0 0H.75m18.5-13.214h-3.105m-4.361 0H.75m11.034 0a2.18 2.18 0 1 1 4.36 0 2.18 2.18 0 0 1-4.36 0Z"
    />
  </svg>
)
export default FilterIcon
