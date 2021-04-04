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
  ])

  setPreBodyComponents([
    getColorModeInitScriptElement(),

    <div id="preloader">
      <div id="terminal"></div>
    </div>,
  ])
  setBodyAttributes({
    className: "preloader_active",
  })
  setPostBodyComponents([<script src="/scripts/preloader.js" />])
}
