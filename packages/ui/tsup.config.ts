import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: [
    "./src/index.ts",
    "./src/tailwind.js",
    "./src/*.tsx",
    "./src/fx/*.tsx",
  ],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  tsconfig: "./tsconfig.json",
  ...options,
}));
