import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  external: ['react', 'react-dom'],
  output: [
    {
      file: pkg.module || 'dist/index.esm.js',
      format: 'es',
      sourcemap: true,
    },
    {
      file: pkg.main || 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions: ['.js', '.jsx', '.json'] }),
    commonjs(),
    postcss({ extract: true }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      include: ['src/**'],
      extensions: ['.js', '.jsx'],
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    terser(),
  ],
};
