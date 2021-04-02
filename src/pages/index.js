import React from "react"
import { ColorModeSwitcher } from "../components/molecules/ColorModeSwitcher"
import SEO from "@atoms/Seo"
import { StaticImage } from "gatsby-plugin-image"
import { x } from "@xstyled/styled-components"
//import IconSvg from "@atoms/IconSvg"
import Icon from "@atoms/Icon"
import Section from "@atoms/Section"

const IndexPage = (props) => {
  return (
    <>
      <SEO lang="en" title="Home" />
      <x.div
        as="header"
        display="flex"
        justifyContent="flex-end"
        bg="blueviolet"
        w="100vw"
        px={4}
        py={1}
      >
        <ColorModeSwitcher />
      </x.div>
      <Section>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <p>DarkMode with xStyles</p>

        <Icon size="2rem" icon="person" spin className="test" />
        <x.div maxWidth={300}>
          <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </x.div>
      </Section>
      <Section></Section>
      <Section></Section>
      <Section></Section>
    </>
  )
}

export default IndexPage
