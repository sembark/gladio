const execSync = require("child_process").execSync
const path = require("path")

const babel = `${__dirname}/../node_modules/.bin/babel`
const tsc = `${__dirname}/../node_modules/.bin/tsc`

const exec = (command, extraEnv = {}) =>
  execSync(command, {
    stdio: "inherit",
    env: Object.assign({}, process.env, extraEnv),
  })

console.log("\nBuilding ES modules ...")
exec(
  `${babel} src -d es --config-file ${__dirname}/../babel.config.js --extensions '.ts,.tsx' --ignore *.test.js`,
  {
    BABEL_ENV: "es",
  }
)

console.log("\nBuilding Common JS modules ...")
exec(
  `${babel} src -d lib --config-file ${__dirname}/../babel.config.js --extensions '.ts,.tsx' --ignore *.test.js`,
  {
    BABEL_ENV: "cjs",
  }
)

console.log("\nExporting type definitions...")
exec(
  `${tsc} src/*.tsx --outDir types --emitDeclarationOnly --declaration true --jsx preserve --allowSyntheticDefaultImports true`
)
