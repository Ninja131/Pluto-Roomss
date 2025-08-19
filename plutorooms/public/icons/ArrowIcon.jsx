import { ArrowUpIcon } from "lucide-react"
import * as React from "react"
const ArrowIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M.843 6.289 6.5.632l1.414 1.414-4.95 4.95 4.95 4.95L6.5 13.36.843 7.703a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </svg>
)
export default ArrowIcon
