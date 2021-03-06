import React from "react"
import { ColorModeSwitcher } from "../components/molecules/ColorModeSwitcher"
import SEO from "@atoms/Seo"
import { x } from "@xstyled/styled-components"
import Hero from "@organisms/Hero"

const IndexPage = (props) => {
  return (
    <>
      <SEO lang="en" title="Home" />
      <x.div
        as="header"
        display="flex"
        justifyContent="flex-end"
        w="100vw"
        px={4}
        py={1}
        zIndex={2}
        position="absolute"
      >
        <ColorModeSwitcher />
      </x.div>
      <Hero />
    </>
  )
}

export default IndexPage
