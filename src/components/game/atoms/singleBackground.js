import React from "react"
import { x } from "@xstyled/styled-components"

function singleBackground(props) {
  return (
    <x.div
      w={props.w}
      h={props.h}
      backgroundImage={`url(${props.gamebg})`}
      backgroundRepeat="repeat-x"
      position={props.position}
      bottom={props.bottom}
    ></x.div>
  )
}

export default singleBackground
