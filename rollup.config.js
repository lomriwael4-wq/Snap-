import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'validation.js',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'iife'
    }
  ],
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' })
  ]
};
