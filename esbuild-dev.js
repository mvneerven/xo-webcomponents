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
      watch: {
        onRebuild(error, result) {
          if (error) console.error("watch build failed:", error);
          else console.log("Build succeeded");
        },
      },
      external: ["./node_modules/*"],
      outdir: "dist/",
    })
    .catch((ex) => {
      console.error(ex);
      process.exit(1);
    });
});
