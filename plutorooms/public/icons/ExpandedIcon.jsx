import * as React from "react"
const ExpandedIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 15H1v-5m9-9h5v5"
    />
  </svg>
)
export default ExpandedIcon
