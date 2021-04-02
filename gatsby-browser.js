import React from "react"
import { RootWrapper } from "./src/components/RootWrapper"
import { PageWrapper } from "./src/components/PageWrapper"
import "./src/styles/preloader.scss"

export const wrapRootElement = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>
}

export const wrapPageElement = ({ element, props }) => {
  return <PageWrapper props={props}>{element}</PageWrapper>
}
