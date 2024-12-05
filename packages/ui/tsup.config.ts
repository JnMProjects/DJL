import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["./src/index.ts", "./src/tailwind.js", "./src/fx.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  ...options,
}));
