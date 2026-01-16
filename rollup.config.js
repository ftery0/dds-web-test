import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";
import dts from "rollup-plugin-dts";
import copy from "rollup-plugin-copy";
import replace from "@rollup/plugin-replace";
import alias from "@rollup/plugin-alias";
import { fileURLToPath } from "url";
import path from "path";
import pkg from "./package.json" assert { type: "json" };

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Path alias plugin
const pathAliasPlugin = alias({
  entries: [{ find: "@", replacement: path.resolve(__dirname, "packages") }],
});

const external = ["react", "react-dom", "styled-components"];

export default [
  {
    input: "packages/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
    ],
    external,
    plugins: [
      pathAliasPlugin,
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: [/\.test.(js|jsx|ts|tsx)$/, /\.stories.(js|jsx|ts|tsx|mdx)$/],
        declaration: true,
        emitDeclarationOnly: true,
        declarationDir: "dist/cjs/types",
      }),
      image(),
      svgr(),
      postcss(),
      url({
        include: ["**/*.otf"],
        limit: 0,
        fileName: "assets/fonts/[name][extname]",
      }),
    ],
  },
  {
    input: "packages/index.ts",
    output: [
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    external,
    plugins: [
      pathAliasPlugin,
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: [/\.test.(js|jsx|ts|tsx)$/, /\.stories.(js|jsx|ts|tsx|mdx)$/],
        declaration: true,
        emitDeclarationOnly: true,
        declarationDir: "dist/esm/types",
      }),
      image(),
      svgr(),
      postcss(),
      url({
        include: ["**/*.otf"],
        limit: 0,
        fileName: "assets/fonts/[name][extname]",
      }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [
      dts(),
      url({
        include: ["**/*.otf"],
        limit: Infinity,
      }),
      replace({
        delimiters: ["", ""],
        preventAssignment: true,
        values: {
          "var ": "declare const ",
        },
      }),
      copy({ targets: [{ src: "package.json", dest: "dist" }] }),
    ],
  },
];
