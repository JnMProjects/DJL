import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["./src/index.tsx", "./src/tailwind.js", "./src/fx.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  ...options,
}));
