
<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's xStyled DarkMode Atomic
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/02d90e9b-4b84-49c4-8ed7-e2a3f5fd51ed/deploy-status)](https://app.netlify.com/sites/lucid-payne-d52ded/deploys)

Gatsby starter with good, opinionated defaults.

It includes my favourite dependencies, configurations, and thinks i like.

A complete list of dependencies is in package.json. These are the primary ones:

## **Core**
 - **Gatsby**
 - **React**
## **Development**
 - **Webpack bundle analyser**
 - **ESLint** (linting)
 - **Prettier** (code formatter)

## **Styles**

 - **xStyled** (powerfull CSS-in-JS framework):
   
    ***CSS-in-JS*** CSS-in-JS allows you to write CSS directly in
   JavaScript. Writing CSS-in-JS has several advantages:
    - ***Local Scoping***: In CSS-in-JS, classnames are auto-generated, it means you can't clash with other libraries. Encapsulation: Style is defined directly in components. Two benefits from this: maintenance is easier and it ensures the separation of concern, your style is private to your component.
    - ***Portability***: Since components have their own styled, they can easily be shared or reused in other projects.
    - **Dynamic:** JavaScript makes your CSS dynamic, you can apply complex color transformations, interact with user, creates complex animation on the fly... It is really a game changer. Emotion and styled-components are the two main CSS-in-JS library for React. xstyled is built on top of them, the library is the core of xstyled, but you don't have to know specifity, just pick one and start coding.
 - **PurgeCSS** (removes unused CSS)
 - **Dark Mode**
 - **GlobasStyle**
 - **Theme:** 
	 - xstyled includes a `defaultTheme`, recommended to start a project, it	 includes colors, type scale, fonts, breakpoints, border radii, and more. It is very easy to extends thanks to object spread operator.
	 - more in `src\utils\theme.js`


	~~~scss 
    colors: {
        ...defaultTheme.colors,
        text: "#000",
        background: "#fff",
        primary: "#07c",
        scroll: "rgba(0, 0, 0, 0.4)",
        barr: "rgba(0, 0, 0, 0.1)",
        button: "rgba(255, 255, 255, 0.4)",
        modes: {
          dark: {
            text: "#fff",
            background: "#000",
            primary: "#0cf",
            scroll: "rgba(255, 255, 255, 0.4)",
            barr: "rgba(255, 255, 255, 0.1)",
            button: "rgba(0, 0, 0, 0.4)",
          },
        },
      },
      ~~~
 - **Tailwind colors**
 - **Styled components / Magic Styled Components**
 - **Webfont loader** (config in `gatsby-config.js`)
	
	
	~~~js
	{
	  resolve: `gatsby-plugin-webfonts`,
	  options: {
	    fonts: {
	      google: [
	        {
	          family: "Montserrat",
	          variants: ["300", "400", "500", "600", "700", "800", "900"],
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
	    usePreconnect: false,
	  },
	},
	~~~
 - **Dynamic Icons** 
	Just import :  
    ~~~js
   import Icon from  "@atoms/Icon"
	~~~
	and just type the name of icon from Material Design in icon prop from [Material Design - Google Fonts](https://fonts.google.com/icons?selected=Material+Icons:face)
	~~~js
	// props: size="2rem" / spin / className=""
	<Icon icon="name of icon" />
	~~~
## Misc
 - **Preloader**
 - **SmoothScroll**
 - **Custom Scrollbar** (css) with `scroll-behavior: smooth;`
 - **Atomic design** with organised directory tree

![filetree](https://i.postimg.cc/QM40zg0r/image.png)

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this starter.

    ```shell
    # create a new Gatsby site using this starter 😘
    gatsby new my-extra-starter https://github.com/Borcioo/gatsby-starter-darkmode-xstyle-atomic
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-extra-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-extra-starter` directory in your code editor of choice and edit `src/pages/index.js`
    Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

![enter image description here](https://i.postimg.cc/QM40zg0r/image.png)

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[Build, Deploy, and Host On The Only Cloud Built For Gatsby](https://www.gatsbyjs.com/cloud/)

Gatsby Cloud is an end-to-end cloud platform specifically built for the Gatsby framework that combines a modern developer experience with an optimized, global edge network.

![enter image description here](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Netlify_logo.svg/200px-Netlify_logo.svg.png)
An intuitive Git-based workflow and powerful serverless platform to build, deploy, and collaborate on web apps
<!-- AUTO-GENERATED-CONTENT:END -->
