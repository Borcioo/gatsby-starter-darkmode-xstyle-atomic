import React from "react"
import { getColorModeInitScriptElement } from "@xstyled/styled-components"
import { RootWrapper } from "./src/components/RootWrapper"
import { PageWrapper } from "./src/components/PageWrapper"

export const wrapPageElement = ({ element, props }) => {
  return (
    <RootWrapper>
      <PageWrapper props={props}>{element}</PageWrapper>
    </RootWrapper>
  )
}

export const onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setBodyAttributes,
  setPostBodyComponents,
}) => {
  setHeadComponents([
    <link as="script" rel="preload" href="/scripts/preloader.js" />,
    <noscript>
      <link rel="stylesheet" href="/styles/noscript.css" />
    </noscript>,
  ])

  setPreBodyComponents([
    getColorModeInitScriptElement(),

    <div id="preloader">
      {/* Optional: */}
      <img
        src="/images/logo.png"
        alt="logo"
        style={{ height: "calc(3.23625vw + 77.86408px)" }}
      />
      <div className="preloader_animation"></div>
    </div>,
  ])
  setBodyAttributes({
    className: "preloader_active",
  })
  setPostBodyComponents([<script src="/scripts/preloader.js" />])
}
