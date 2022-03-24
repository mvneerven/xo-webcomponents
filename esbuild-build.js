// https://esbuild.github.io/api/
const esbuild = require("esbuild");
const fs = require("fs");

console.log("Building");

let d = fs.readdir("./src/web-components/", (err, files) => {
  let arr = files.map((i) => {
    return "src/web-components/" + i.toString();
  });

  console.log(arr);

  esbuild
    .build({
      entryPoints: arr,
      bundle: true,
      keepNames: true,
      minify: true,
      external: ["./node_modules/*"],
      outdir: "dist/",
    })
    .catch((ex) => {
      console.error(ex);
      process.exit(1);
    });
});
