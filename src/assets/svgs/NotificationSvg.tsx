import * as React from "react"
import { SVGProps } from "react"

const NotificationSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={17}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.788 14.661h15.38M1.749 7.932a6.73 6.73 0 0 1 6.729-6.73v0a6.73 6.73 0 0 1 6.73 6.73v6.73H1.747v-6.73Z"
      stroke="#091E46"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.813 14.661v-.5a.5.5 0 0 0-.433.25l.433.25Zm3.33 0 .433-.25a.5.5 0 0 0-.433-.25v.5Zm-3.088.961c0-.26.07-.502.19-.71l-.865-.501a2.414 2.414 0 0 0-.325 1.211h1Zm1.423 1.423a1.423 1.423 0 0 1-1.423-1.423h-1a2.423 2.423 0 0 0 2.423 2.423v-1Zm1.423-1.423c0 .786-.637 1.423-1.423 1.423v1a2.423 2.423 0 0 0 2.423-2.423h-1Zm-.19-.71c.12.208.19.45.19.71h1c0-.44-.118-.854-.325-1.211l-.865.5Zm.432-.75h-3.33v1h3.33v-1Z"
      fill="#091E46"
    />
  </svg>
)

export default NotificationSvg
