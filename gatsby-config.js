module.exports = {
  siteMetadata: {
    title: `Gatsby DarkMode xStyle Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@Borcioo`,
  },
  plugins: [
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
        // Setting a color is optional.
        color: `red`,
        // Disable the loading spinner.
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
          "@components": "src/components",
          "@pages": "src/pages",
          "@atoms": "src/components/atoms",
          "@molecules": "src/components/molecules",
          "@organisms": "src/components/organisms",
          "@assets": "src/assets",
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
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
