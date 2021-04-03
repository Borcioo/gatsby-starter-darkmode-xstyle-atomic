import React from "react"
import ReactPlayer from "react-player"
import Section from "@atoms/Section"
import heroVidwebm from "@assets/videos/room.webm"
import heroVidmp4 from "@assets/videos/room.mp4"
import styled, { useColorMode } from "@xstyled/styled-components"

const Player = ({ className }) => (
  <ReactPlayer
    className={className}
    width="100%"
    height="100%"
    playsinline
    loop
    muted
    volume={0}
    playing
    url={[
      { src: heroVidwebm, type: "video/webm" },
      { src: heroVidmp4, type: "video/mp4" },
    ]}
  />
)

const CoverPlayer = styled(Player)`
  transition: filter 1s ease-in-out;
  filter: ${(props) => props.hue};
  & video {
    object-fit: cover;
  }
`
const modeHue = {
  light: "filter",
  dark: "filter hueRotate",
}

const Hero = () => {
  const [mode] = useColorMode()
  const hue = modeHue[mode]

  return (
    <Section
      w="100vw"
      className={hue}
      p={0}
      backgroundImage="none"
      container={false}
    >
      <CoverPlayer />
    </Section>
  )
}

export default Hero
