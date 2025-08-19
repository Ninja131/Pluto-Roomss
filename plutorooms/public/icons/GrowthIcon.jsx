import * as React from "react"
const GrowthIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M17.417 1.583v15.834H1.583V1.583h15.834ZM1.583 0A1.583 1.583 0 0 0 0 1.583v15.834A1.584 1.584 0 0 0 1.583 19h15.834A1.584 1.584 0 0 0 19 17.417V1.583A1.583 1.583 0 0 0 17.417 0H1.583Zm10.542 5.938h3.278c.237 0 .43.193.43.432v3.276a.432.432 0 0 1-.738.304L14.02 8.873l-3.167 3.167a.792.792 0 0 1-1.12 0l-1.815-1.816-3.398 3.399a.792.792 0 1 1-1.121-1.121l3.958-3.958a.792.792 0 0 1 1.121 0l1.815 1.816 2.606-2.608-1.077-1.077a.432.432 0 0 1 .304-.737Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h19v19H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default GrowthIcon