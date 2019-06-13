const fs = require("fs")
const path = require("path")

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath)
  if (fs.existsSync(dirname)) {
    return true
  }
  ensureDirectoryExistence(dirname)
  fs.mkdirSync(dirname)
}

module.exports = function outputTheme({ config }) {
  const pkgRoot = process.env.PWD || process.cwd()
  const theme = config("theme")
  const args = process.argv.slice(3)
  let outputCssPath = "lib/styles.css"
  let i = 0
  do {
    if (args[i] === "-o" || args[i] === "--ouput") {
      outputCssPath = args[i + 1]
      break
    }
    i++
  } while (i < args.length)
  const outputFile = path.join(
    outputCssPath
      .split("/")
      .slice(0, -1)
      .join("/"),
    "theme.js"
  )
  process.stdout.write(`Exporting theme to ${outputFile}...`)
  const filePath = path.join(pkgRoot, outputFile)
  ensureDirectoryExistence(filePath)
  fs.writeFileSync(
    filePath,
    `module.exports = ${JSON.stringify(theme, null, 2)}`
  )
  process.stdout.write("Done\n")
}
