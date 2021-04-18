import React from "react"
import { ColorModeSwitcher } from "../components/webpage/molecules/ColorModeSwitcher"
import { x } from "@xstyled/styled-components"
import MainGame from "@Gorganisms"
import Section from "@atoms/Section"

const Game = (props) => {
  return (
    <Section w="100vw" p={0} backgroundImage="none" container={false}>
      <MainGame />
    </Section>
  )
}

export default Game
