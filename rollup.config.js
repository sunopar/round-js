import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

const env = process.env.NODE_ENV;
const config = {
  input: 'src/index.js',
  output: {
    file: 'build/round.js',
    format: 'umd',
    name: 'round-js',
  },
  name: 'round-js',
  plugins: [
    resolve(), // so Rollup can find `ms`
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(), // so Rollup can convert `ms` to an ES module
  ],
};
if (env === 'production') {
  config.plugins.push(uglify({
    compress: {
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
      warnings: false,
    },
  }));
  config.output.file = 'build/round.min.js';
}
module.exports = config;
