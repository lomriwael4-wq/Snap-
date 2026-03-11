import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import cleanCSS from 'rollup-plugin-clean-css';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'public/dist/bundle.js',
      format: 'iife'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    cleanCSS({
      advanced: true
    })
  ]
};
