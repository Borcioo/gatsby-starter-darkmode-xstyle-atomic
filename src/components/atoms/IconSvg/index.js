import React from "react"
import _ from "lodash"
import { Icon } from "@mdi/react"

const IconSvg = (props) => {
  const MDIcons = require("@mdi/js")
  const icon = MDIcons[props.icon]

  if (!icon) {
    console.error(`Could not find ${props.icon} in Material Design Icons`)
    icon = MDIcons.mdiCancel
  }

  const iconName = props.icon
  const className = props.className ? props.className : ``
  const spin = props.spin ? "spin" : ``

  const cutprops = _.omit(props, [
    "icon",
    "className",
    "spin",
    "aria-labelledby",
    "id",
  ])

  return (
    <Icon
      id={iconName}
      aria-label={iconName}
      path={icon}
      className={`MuiSvgIcon-root ${spin} ${className}`}
      title={iconName}
      aria-hidden="true"
      {...cutprops}
    />
  )
}

export default IconSvg
