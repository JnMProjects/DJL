import pluginJest from "eslint-plugin-jest";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const LintRC = compat.extends("@repo/eslint-config/react.js");

/** @type {import("@eslint/eslintrc").FlatConfig[]} */
export default [
  ...LintRC,
  {
    files: ["**/*.spec.ts", "**/*.spec.tsx", "**/*.test.ts", "**/*.test.tsx"],
    plugins: {
      jest: pluginJest,
    },
    languageOptions: {
      globals: {
        ...pluginJest.environments.globals.globals,
      },
    },
    rules: {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  },
];
