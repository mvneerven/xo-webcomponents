// https://esbuild.github.io/api/
const esbuild = require("esbuild");

console.log("Building");

esbuild.build({
    entryPoints: ['src/index.js'],
    bundle: true,
    keepNames: true,
    watch: {
      onRebuild(error, result) {
        if (error) console.error('watch build failed:', error)
        else console.log('Build succeeded')
      },
    },
    outfile: 'dist/xo-webcomponents.js',
  }).catch(ex => {
    console.error(ex);
    process.exit(1)
  })