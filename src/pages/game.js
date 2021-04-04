import React from "react"
import { ColorModeSwitcher } from "../components/molecules/ColorModeSwitcher"
import SEO from "@atoms/Seo"
import { x } from "@xstyled/styled-components"
import Game from "@organisms/Game"
import Section from "@atoms/Section"

const DinoGame = (props) => {
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
      <Section w="100vw" p={0} backgroundImage="none" container={false}>
        <Game />
      </Section>
    </>
  )
}

export default DinoGame
