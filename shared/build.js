const execSync = require("child_process").execSync
const path = require("path")

const babel = `${__dirname}/../node_modules/.bin/babel`
const tsc = `${__dirname}/../node_modules/.bin/tsc`

const exec = (command, extraEnv = {}) =>
  execSync(command, {
    stdio: "inherit",
    env: Object.assign({}, process.env, extraEnv),
  })

const [, , ...args] = process.argv

function parseOptions(args) {
  let options = {}
  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    let key, value
    switch (true) {
      case /^--.+=/.test(arg):
        // when --options=value
        var m = arg.match(/^--([^=]+)=([\s\S]*)$/)
        key = m[1]
        value = m[2]
        options[key] = value
        break
      case /^--.+/.test(arg):
        // when --options value
        key = arg.match(/^--(.+)/)[1]
        value = args[i + 1]
        // check for boolean values
        if (!value || /^--.+/.test(value)) {
          // another option encountered, means it's a boolean
          options[key] = true
        } else {
          options[key] = value
        }
        break
      default:
        break
    }
  }
  return options
}

const options = parseOptions(args)

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
// tsc is creating some issue when executed with `tsc src/*.tsx src/*.ts`
// if one of the glob returns zero matched files
exec(
  `${tsc} ${
    options.onlyTs ? "src/*.ts" : "src/*.tsx"
  } --outDir types --emitDeclarationOnly --declaration true --jsx preserve --target es5 --allowSyntheticDefaultImports true`
)
