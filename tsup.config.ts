import { defineConfig } from "tsup";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  entry: ["packages/index.ts"],
  format: ["cjs", "esm"],
  dts: false,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  treeshake: true,
  outDir: "dist",
  external: ["react", "react-dom", "styled-components", "react-query"],
  esbuildOptions(options) {
    options.alias = {
      "@": path.resolve(__dirname, "packages"),
    };
    options.assetNames = "assets/[name]-[hash]";
  },
  outExtension({ format }) {
    return {
      js: format === "cjs" ? ".cjs" : ".js",
    };
  },
});
