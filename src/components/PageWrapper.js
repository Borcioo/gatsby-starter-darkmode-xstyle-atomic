import React from "react"
import SmoothScroll from "@atoms/SmoothScroll"

export function PageWrapper({ children, props }) {
  return (
    <SmoothScroll>
      <main>{children}</main>
    </SmoothScroll>
  )
}
