import babel from 'rollup-plugin-babel'
import { terser } from "rollup-plugin-terser";
import external from 'rollup-plugin-peer-deps-external'
import copy from 'rollup-plugin-copy'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    copy({
      targets: [
        { src: 'src/retry.svg', dest: 'dist/' },
      ]
    }),
    terser()
  ]
}
