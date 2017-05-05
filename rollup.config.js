import babel from "rollup-plugin-babel";
import resolve from 'rollup-plugin-node-resolve';
import commonjs from "rollup-plugin-commonjs";
import env from "rollup-plugin-env";

export default {
  entry: "./src/index.jsx",
  plugins: [
    resolve({ jsnext: true, main: true,
    customResolveOptions: {
      moduleDirectory: 'node_modules'
    } }),
    env({ NODE_ENV: "production" }),
    commonjs({
      exclude: 'node_modules/process-es6/**',
      include: [
        'node_modules/fbjs/**',
        'node_modules/object-assign/**',
        'node_modules/react/**',
        'node_modules/react-dom/**',
        'node_modules/prop-types/**'
      ]
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  external: ["granim", "react", "react-dom"],
  dest: "bundle.js",
  format: "cjs"
};
