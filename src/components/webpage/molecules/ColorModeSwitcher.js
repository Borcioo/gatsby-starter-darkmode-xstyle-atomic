import React from "react"
import { x, useColorMode } from "@xstyled/styled-components"
import Icon from "@atoms/Icon"

const modeIcons = {
  light: "dark_mode",
  dark: "light_mode",
}

function getInverseMode(mode) {
  return mode === "light" ? "dark" : "light"
}

export const ColorModeSwitcher = React.forwardRef((props, ref) => {
  const [mode, setMode] = useColorMode()
  const iconName = modeIcons[mode]
  return (
    <x.button
      line-height="0.5rem"
      padding={0}
      w="2.5rem"
      h="2.5rem"
      lineHeight={0}
      bg="button"
      color="text"
      ref={ref}
      type="button"
      transition
      transitionDuration={200}
      onClick={() => setMode(getInverseMode)}
      {...props}
    >
      <Icon icon={iconName} style={{ width: 24, height: 24 }} />
    </x.button>
  )
})
