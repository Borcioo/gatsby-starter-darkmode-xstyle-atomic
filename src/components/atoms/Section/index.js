import React from "react"
import PropTypes from "prop-types"
import { x } from "@xstyled/styled-components"

const section = (props) => {
  return (
    <x.div
      as="section"
      backgroundImage="gradient-to-r"
      gradientFrom="purple-400"
      gradientVia="pink-500"
      gradientTo="red-500"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      container
      mx="auto"
      h="100vh"
      p={4}
      {...props}
    >
      {props.children}
    </x.div>
  )
}

section.propTypes = {}

export default section
