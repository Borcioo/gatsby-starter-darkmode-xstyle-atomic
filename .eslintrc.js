module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "react-app",
    "airbnb",
    "prettier",
    "prettier/react",
  ],
  rules: {
    "jsx-a11y/href-no-hash": ["off"],
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
      },
    ],
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".js", ".jsx"],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/core-modules": [],
    "import/resolver": {
      alias: {
        map: [
          ["@src", "./src"],
          ["@hooks", ".src/hooks"],
          ["@utils", "./src/utils"],
          ["@components", "./src/components"],
          ["@pages", "./src/pages"],
          ["@atoms", "./src/components/atoms"],
          ["@molecules", "./src/components/molecules"],
          ["@organisms", "./src/components/organisms"],
          ["@assets", "./src/assets"],
        ],
        extensions: [".ts", ".js", ".jsx", ".json"],
      },
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
}
