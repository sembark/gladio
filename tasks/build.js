// this gets run from the package directory

const execSync = require("child_process").execSync
const path = require("path")

const pkg = path.basename(process.env.PWD || process.cwd())
const compiler = `${__dirname}/../node_modules/.bin/tsc`

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: "inherit",
    env: Object.assign({}, process.env, extraEnv),
  })

console.log("\nBuilding ES modules ...")
exec(
  `${compiler} src/*.tsx --outDir lib -m CommonJS --jsx react --moduleResolution node`
)
