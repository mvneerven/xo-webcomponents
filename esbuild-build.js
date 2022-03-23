// https://esbuild.github.io/api/
const esbuild = require("esbuild");
const { sassPlugin } = require('@es-pack/esbuild-sass-plugin');

esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  format: "esm",
  keepNames: true,
  minify: true,
  outfile: 'dist/xo-webcomponents.js',
}).catch(ex => {
  console.error(ex);
  process.exit(1)
})

