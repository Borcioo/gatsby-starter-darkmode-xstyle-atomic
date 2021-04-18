module.exports = {
  siteMetadata: {
    title: `Gatsby DarkMode xStyle Starter`,
    description: `Kick off your next, great Gatsby project with this DarkMode xStyle starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@Borcioo`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: false,
        disable: true,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `red`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400", "700", "900"],
              subsets: ["latin"],
              fontDisplay: "swap",
              strategy: "base64",
            },
            {
              family: "Material Icons",
              strategy: "base64",
            },
          ],
        },
        useMinify: true,
        usePreload: true,
        usePreconnect: true,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@hooks": "src/hooks",
          "@utils": "src/utils",
          "@components": "src/components/",
          "@pages": "src/pages",
          "@atoms": "src/components/webpage/atoms",
          "@molecules": "src/components/webpage/molecules",
          "@organisms": "src/components/webpage/organisms",
          "@assets": "src/assets",
          "@game": "src/components/game",
          "@Gatoms": "src/components/game/atoms",
          "@Gmolecules": "src/components/game/molecules",
          "@Gorganisms": "src/components/game/organisms",
        },
        extensions: ["js", "jsx"],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        ssr: true,
        topLevelImportPaths: [
          "@xstyled/styled-components",
          "@xstyled/styled-components/no-tags",
          "@xstyled/styled-components/native",
          "@xstyled/styled-components/primitives",
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/assets/videos`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-xstyled`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        ignore: ["/preloader.scss"], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
  ],
}
