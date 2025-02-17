import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    { file: "dist/index.js", format: "cjs" },
    { file: "dist/index.esm.js", format: "esm" }
  ],
  plugins: [resolve(), commonjs(), typescript()],
  external: ["react", "framer-motion", "@dnd-kit/core"]
};