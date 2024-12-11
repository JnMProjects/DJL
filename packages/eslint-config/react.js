const { resolve } = require("node:path");

const tscc = resolve(process.cwd(), "tsconfig.json");

const browser = require("@vercel/style-guide/eslint/browser");
const typescript = require("@vercel/style-guide/eslint/typescript");
const react = require("@vercel/style-guide/eslint/react");

/*
 * This is a custom ESLint configuration for use a library
 * that utilizes React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  ...browser,
  ...typescript,
  ...react,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: tscc,
  },
  plugins: ["only-warn", "react-hooks", "eslint-comments"],
  globals: {
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: tscc,
      },
    },
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    ".eslintrc.js",
    "**/*.css",
    "jest.config.ts",
    "coverage/",
    "babel.config.js",
    "eslint.config.js",
  ],
  // add rules configurations here
  rules: {
    "import/no-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "import/order": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-redundant-type-constituents": "off",
    "react/function-component-definition": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
