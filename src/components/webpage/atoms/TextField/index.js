import React from "react"
import { x } from "@xstyled/styled-components"
import Seo from "@organisms/"

const TextField = (props) => {
  return (
    <x.div
      backgroundImage="gradient-to-r"
      gradientFrom="purple-400"
      gradientVia="pink-500"
      gradientTo="red-500"
      container
      borderRadius="lg"
      w={100}
      p={0.5}
      {...props}
    >
      {props.children}
    </x.div>
  )
}

export default TextField
