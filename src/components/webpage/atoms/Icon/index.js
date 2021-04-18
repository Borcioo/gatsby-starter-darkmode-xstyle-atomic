import React from "react"
import Icon from "@material-ui/core/Icon"

//Icon names get from https://fonts.google.com/icons?selected=Material+Icons

function Ico({ icon, className, spin, size }) {
  const cname = className ? className : ``
  const rotation = spin ? "spin" : ``
  const sizeStyle = size ? { fontSize: size } : ``

  return (
    <Icon style={{ ...sizeStyle }} className={(cname, rotation)}>
      {icon}
    </Icon>
  )
}

export default Ico
