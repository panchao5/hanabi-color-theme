const { writeFileSync, mkdirSync, existsSync } = require("node:fs")
const path = require("path")
const theme = require("./theme")

const THEME_DIR = path.resolve(__dirname, "..", "themes")

function buildTheme() {
  if (!existsSync(THEME_DIR)) {
    mkdirSync(THEME_DIR)
  }

  writeFileSync(
    path.join(THEME_DIR, "sylvan-color-theme.json"),
    JSON.stringify(theme, null, 2),
    {
      flag: "w",
    }
  )
}

module.exports = buildTheme

if (require.main === module) {
  buildTheme()
}
