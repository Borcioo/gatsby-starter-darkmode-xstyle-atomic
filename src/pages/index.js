import React from "react"
import { ColorModeSwitcher } from "../components/molecules/ColorModeSwitcher"
import SEO from "@atoms/Seo"
import { StaticImage } from "gatsby-plugin-image"
import { x } from "@xstyled/styled-components"

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
      >
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <p>DarkMode with xStyles</p>

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
      </x.div>
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
      >
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <p>DarkMode with xStyles</p>

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
      </x.div>
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
      >
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <p>DarkMode with xStyles</p>

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
      </x.div>
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
      >
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <p>DarkMode with xStyles</p>

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
      </x.div>
    </>
  )
}

export default IndexPage
