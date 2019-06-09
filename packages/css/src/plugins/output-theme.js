const fs = require("fs")
const path = require("path")

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
    "theme.json"
  )
  process.stdout.write(`Exporting theme to ${outputFile}...`)
  fs.writeFileSync(
    path.join(pkgRoot, outputFile),
    JSON.stringify(theme, null, 2)
  )
  process.stdout.write("Done\n")
}
