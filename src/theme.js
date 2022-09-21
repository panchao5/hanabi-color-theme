const ui = require("./ui")
const syntax = require("./syntax")

module.exports = {
  $schema: "vscode://schemas/color-theme",
  name: "Sylvan",
  colors: ui,
  tokenColors: syntax,
  semanticHighlighting: true,
  semanticTokenColors: {},
}
