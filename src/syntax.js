const colors = require("./colors")

const syntax = [
  // Basic Rules
  {
    scope: "emphasis",
    settings: {
      fontStyle: "italic",
    },
  },
  {
    scope: "strong",
    settings: {
      fontStyle: "bold",
    },
  },
  {
    name: "Comments",
    scope: ["comment", "punctuation.definition.comment"],
    settings: {
      foreground: colors.DESC,
    },
  },

  {
    name: "Constants",
    scope: ["constant"],
    settings: {
      foreground: colors.BRIGHT_PURPLE,
    },
  },
  {
    name: "Constant Characters",
    scope: ["constant.character"],
    settings: {
      foreground: colors.BRIGHT_PURPLE,
    },
  },
  {
    name: "Numbers",
    scope: ["constant.numeric"],
    settings: {
      foreground: colors.BRIGHT_ORANGE,
    },
  },
  {
    name: "Character Escapes",
    scope: [
      "constant.character.escape", // e.g. \n, \t
    ],
    settings: {
      foreground: colors.BRIGHT_PINK,
    },
  },
  {
    name: "Built-in Constants",
    scope: [
      "constant.language", // e.g. true, false
    ],
    settings: {
      foreground: colors.BRIGHT_PURPLE,
    },
  },

  {
    name: "Entity Names",
    scope: ["entity.name"],
    settings: {
      foreground: colors.BRIGHT_BLUE,
    },
  },
  {
    scope: ["entity.other.inherited-class"],
    settings: {
      foreground: colors.BRIGHT_CYAN,
    },
  },
  {
    name: "Function Names",
    scope: [
      "entity.name.function",
      "meta.method.groovy",
      "support.function.go",
      "support.function.misc.scss",
      "support.function.any-method.lua",
    ],
    settings: {
      foreground: colors.BRIGHT_YELLOW,
    },
  },
  {
    name: "Class Names",
    scope: ["entity.name.class", "entity.name.type.class"],
    settings: {
      foreground: colors.BRIGHT_BLUE,
      fontStyle: "italic",
    },
  },
  {
    name: "Namespaces",
    scope: [
      "entity.name.namespace",
      "entity.name.type.namespace",
      "entity.name.type.module", // TypeScript
    ],
    settings: {
      foreground: colors.BRIGHT_YELLOW,
    },
  },
  {
    name: "Type Parameters",
    scope: ["entity.name.type.parameter"],
    settings: {
      foreground: colors.BRIGHT_CYAN,
    },
  },
  {
    name: "HTML Tags",
    scope: ["entity.name.tag"],
    settings: {
      foreground: colors.BRIGHT_RED,
    },
  },
  {
    name: "HTML Attribute Names",
    scope: ["entity.other.attribute-name"],
    settings: {
      foreground: colors.BRIGHT_YELLOW,
    },
  },
  {
    name: "Section/Heading Names",
    scope: ["entity.name.section"],
    settings: {
      foreground: colors.BRIGHT_RED,
    },
  },
  {
    name: "Strings",
    scope: ["string", "punctuation.definition.string"],
    settings: {
      foreground: colors.BRIGHT_GREEN,
    },
  },
  {
    name: "Keywords",
    scope: ["keyword", "punctuation.definition.keyword"],
    settings: {
      foreground: colors.BRIGHT_RED,
    },
  },
  {
    name: "Variables",
    scope: ["variable.other"],
    settings: {
      foreground: colors.FG,
    },
  },
  {
    scope: [
      "punctuation.definition.variable", // SASS/Perl
    ],
    settings: {
      foreground: colors.BRIGHT_RED,
    },
  },
  {
    name: "Parameters",
    scope: [
      "entity.name.variable.parameter",
      "variable.parameter",
      "meta.at-rule.function variable", // Sass function params
      "meta.at-rule.mixin variable",
      "meta.function.parameters variable.other.php",
      "meta.function.parameters punctuation.definition.variable.php",
    ],
    settings: {
      foreground: colors.BRIGHT_BLUE,
    },
  },
  {
    name: "Bold Text",
    scope: ["markup.bold"],
    settings: {
      fontStyle: "bold",
    },
  },
  {
    name: "Italic Text",
    scope: ["markup.italic"],
    settings: {
      fontStyle: "italic",
    },
  },
  {
    name: "Underlined Text",
    scope: ["markup.underline"],
    settings: {
      fontStyle: "underline",
    },
  },
  {
    name: "Strikethroughed Text",
    scope: ["markup.strikethrough"],
    settings: {
      fontStyle: "strikethrough",
    },
  },
  {
    name: "Links",
    scope: ["markup.underline.link"],
    settings: {
      foreground: colors.BRIGHT_YELLOW,
    },
  },
  {
    name: "Section Headers",
    scope: ["markup.heading", "punctuation.definition.heading"],
    settings: {
      fontStyle: "bold",
      foreground: colors.BRIGHT_RED,
    },
  },
  {
    name: "List Markers",
    scope: ["markup.list punctuation.definition.list.begin"],
    settings: {
      foreground: colors.BRIGHT_CYAN,
    },
  },
  {
    name: "Blockquotes",
    scope: ["markup.quote", "punctuation.definition.quote.begin"],
    settings: {
      foreground: colors.BRIGHT_BLUE,
    },
  },
  {
    name: "Code",
    scope: [
      "markup.inline.raw",
      "punctuation.definition.raw",
      "markup.fenced_code.block punctuation.definition", // ```
    ],
    settings: {
      foreground: colors.BRIGHT_ORANGE,
    },
  },
  {
    name: "Math Markers",
    scope: ["punctuation.definition.math"],
    settings: {
      foreground: colors.BRIGHT_GREEN,
    },
  },

  {
    name: "[Markdown] Math Function Definition Markers",
    scope: ["meta.embedded.math.markdown punctuation.definition.function"],
    settings: {
      foreground: colors.BRIGHT_YELLOW,
    },
  },
  {
    name: "[Markdown] Math Operators",
    scope: ["meta.embedded.math.markdown punctuation.math.operator"],
    settings: {
      foreground: colors.BRIGHT_RED,
    },
  },
  {
    name: "[LaTeX] Math Punctuations",
    scope: ["text.tex.latex punctuation.math"],
    settings: {
      foreground: colors.FG,
    },
  },
  {
    name: "[LaTeX] Math Operators",
    scope: ["text.tex.latex punctuation.math.operator"],
    settings: {
      foreground: colors.BRIGHT_RED,
    },
  },
  {
    name: "[Diff] Inserted",
    scope: ["markup.inserted", "punctuation.definition.inserted"],
    settings: {
      foreground: colors.BRIGHT_GREEN,
    },
  },
  {
    name: "[Diff] Deleted",
    scope: ["markup.deleted", "punctuation.definition.deleted"],
    settings: {
      foreground: colors.BRIGHT_RED,
    },
  },
  {
    name: "[Diff] Changed",
    scope: ["markup.changed", "punctuation.definition.changed"],
    settings: {
      foreground: colors.BRIGHT_ORANGE,
    },
  },
  {
    name: "class, function, int, var, etc.",
    scope: ["storage.type"],
    settings: {
      foreground: colors.BRIGHT_RED,
    },
  },
  {
    name: "Storage Modifiers",
    scope: [
      "storage.modifier", // static, public, etc.
    ],
    settings: {
      foreground: colors.BRIGHT_RED,
    },
  },
  {
    name: "Imports/Packages",
    scope: [
      "entity.name.package.go",
      "entity.name.import.go",
      "storage.modifier.import.java",
      "storage.modifier.package.java",
      "storage.modifier.import.groovy",
      "storage.modifier.package.groovy",
    ],
    settings: {
      foreground: colors.BRIGHT_YELLOW,
    },
  },
  {
    scope: ["support"],
    settings: {
      foreground: colors.BRIGHT_BLUE,
    },
  },
  {
    scope: ["support.function"],
    settings: {
      foreground: colors.BRIGHT_YELLOW,
    },
  },
  {
    scope: ["support.type"],
    settings: {
      foreground: colors.BRIGHT_CYAN,
    },
  },
  {
    scope: ["support.constant"],
    settings: {
      foreground: colors.BRIGHT_PURPLE,
    },
  },
  {
    scope: ["support.variable"],
    settings: {
      foreground: colors.FG,
    },
  },
  {
    scope: ["invalid.illegal"],
    settings: {
      fontStyle: "italic underline",
    },
  },
  {
    scope: ["invalid.deprecated"],
    settings: {
      fontStyle: "italic underline",
    },
  },
  // Enhancements
  {
    scope: [
      "punctuation.section.embedded", // PHP
    ],
    settings: {
      foreground: colors.BRIGHT_RED,
    },
  },
  {
    scope: [
      "punctuation.definition.decorator", // Python
      "punctuation.decorator", // TypeScript/JavaScript
    ],
    settings: {
      foreground: colors.BRIGHT_RED,
    },
  },
  {
    name: "Formatting Placeholders",
    scope: [
      "constant.other.placeholder", // Formatting placeholders
      "constant.character.format.placeholder", // Python-style formatting placeholders
    ],
    settings: {
      foreground: colors.BRIGHT_PINK,
    },
  },
  {
    name: "Constant Variables",
    scope: [
      "entity.name.constant", // constant variable names
      "variable.other.constant", // constant variable names
    ],
    settings: {
      foreground: colors.BRIGHT_PURPLE,
    },
  },
  {
    name: "Keyword - new",
    scope: [
      "keyword.control.new",
      "keyword.operator.new",
      "keyword.other.new",
      "keyword.symbol.new",
    ],
    settings: {
      fontStyle: "bold",
    },
  },
  {
    name: "super, this, etc.",
    scope: [
      "variable.language",
      "variable.language punctuation.definition.variable", // the "$" symbol in $this
      "variable.other.readwrite.instance.ruby",
      "variable.other.readwrite.instance.ruby punctuation.definition.variable",
      "keyword.other.this", // C#
      "keyword.other.new",
    ],
    settings: {
      foreground: colors.BRIGHT_PINK,
    },
  },
  {
    name: "Special Parameters",
    scope: ["variable.parameter.function.language.special"],
    settings: {
      fontStyle: "bold",
      foreground: colors.BRIGHT_PINK,
    },
  },
  {
    name: "Enum Members",
    scope: ["variable.other.enummember"],
    settings: {
      foreground: colors.BRIGHT_PURPLE,
    },
  },
  {
    name: "Annotations",
    scope: ["storage.type.annotation", "punctuation.definition.annotation"],
    settings: {
      foreground: colors.BRIGHT_CYAN,
    },
  },
  {
    name: "[JavaScript] JSDoc Keywords",
    scope: ["comment.block.documentation storage.type.class"],
    settings: {
      foreground: colors.BRIGHT_RED,
    },
  },
  {
    name: "[JavaScript] JSDoc Types",
    scope: [
      "comment.block.documentation entity.name.type",
      "comment.block.documentation entity.name.type punctuation.definition.bracket",
    ],
    settings: {
      foreground: colors.BRIGHT_CYAN,
      fontStyle: "italic",
    },
  },
  {
    name: "[JavaScript] JSDoc Comment Parameters",
    scope: ["comment.block.documentation variable.other"],
    settings: {
      foreground: colors.BRIGHT_BLUE,
    },
  },
  {
    name: "[JavaScript] JSX Tags",
    scope: ["entity.name.tag support.class.component"],
    settings: {
      foreground: colors.BRIGHT_RED,
    },
  },
  {
    name: "[JavaScript] Embedded Expressions in Template Literals",
    scope: ["meta.template.expression meta.embedded.line"],
    settings: {
      foreground: colors.FG,
    },
  },
  {
    name: "[JavaScript] Substitution Brackets",
    scope: [
      "meta.template.expression punctuation.definition.template-expression",
    ],
    settings: {
      foreground: colors.BRIGHT_PINK,
    },
  },
  {
    name: "[RegExp] Literals",
    scope: [
      "string.regexp",
      "string.regexp punctuation.definition.string",
      "constant.other.character-class.regexp",
      "constant.character.escape.backslash.regexp",
    ],
    settings: {
      foreground: colors.BRIGHT_BLUE,
    },
  },
  {
    name: "[RegExp] Quantifiers",
    scope: ["keyword.operator.quantifier"],
    settings: {
      foreground: colors.BRIGHT_YELLOW,
    },
  },
  {
    name: "[RegExp] Assertions",
    scope: ["punctuation.definition.group.assertion"],
    settings: {
      foreground: colors.BRIGHT_RED,
    },
  },
  {
    name: "[RegExp] Anchors",
    scope: ["keyword.control.anchor.regexp"],
    settings: {
      foreground: colors.BRIGHT_RED,
    },
  },
  {
    name: "[RegExp] Back References",
    scope: ["keyword.other.back-reference.regexp"],
    settings: {
      foreground: colors.BRIGHT_PURPLE,
    },
  },
  {
    name: "[JSON] Property Keys",
    scope: [
      "support.type.property-name",
      "punctuation.support.type.property-name",
    ],
    settings: {
      foreground: colors.BRIGHT_YELLOW,
    },
  },
  {
    name: "CSS Custom Properties",
    scope: [
      "variable.prop.css",
      "punctuation.definition.variable.property.css",
    ],
    settings: {
      foreground: colors.BRIGHT_BLUE,
    },
  },
  {
    name: "[CSS/Less/SASS] Property Keys",
    scope: [
      "meta.property-name support.type.property-name.css",
      "meta.property-list entity.name.tag",
    ],
    settings: {
      foreground: colors.BRIGHT_CYAN,
    },
  },
  {
    name: "[SASS] Variables",
    scope: ["variable.scss"],
    settings: {
      foreground: colors.BRIGHT_BLUE,
    },
  },
  {
    name: "[SASS] Interpolation Brackets",
    scope: [
      "punctuation.definition.interpolation.begin.bracket.curly.scss",
      "punctuation.definition.interpolation.end.bracket.curly.scss",
    ],
    settings: {
      foreground: colors.BRIGHT_PINK,
    },
  },
  {
    name: "[SASS] Interpolation Variable",
    scope: ["variable.interpolation.scss"],
    settings: {
      foreground: colors.FG,
    },
  },
  {
    name: "[Less] Parent Selectors",
    scope: ["entity.other.attribute-name.parent-selector"], // Less parent selectors
    settings: {
      foreground: colors.BRIGHT_RED,
    },
  },
  {
    name: "[Python] Codetags",
    scope: ["comment keyword.codetag.notation"],
    settings: {
      foreground: colors.BRIGHT_CYAN,
    },
  },
  {
    name: "[Python] Magic Functions",
    scope: ["support.function.magic"],
    settings: {
      foreground: colors.BRIGHT_PINK,
    },
  },
  {
    name: "[Rust] Primitive Types",
    scope: ["entity.name.type.primitive.rust", "entity.name.type.numeric.rust"],
    settings: {
      foreground: colors.BRIGHT_CYAN,
    },
  },
  {
    name: "[Rust] Macro Rules",
    scope: ["entity.name.function.macro.rules.rust"],
    settings: {
      foreground: colors.BRIGHT_RED,
    },
  },
  {
    name: "[Rust] Attribute Markers",
    scope: [
      "punctuation.definition.attribute.rust",
      "punctuation.brackets.attribute.rust",
    ],
    settings: {
      foreground: colors.BRIGHT_CYAN,
    },
  },
  {
    name: "[Rust] Interpolation Brackets",
    scope: ["meta.interpolation", "punctuation.definition.interpolation.rust"],
    settings: {
      foreground: colors.BRIGHT_PINK,
    },
  },
  {
    name: "[C/CPP] Pointer Access Opeartors",
    scope: ["punctuation.separator.pointer-access"],
    settings: {
      foreground: colors.BRIGHT_RED,
    },
  },
  {
    name: "[C/CPP] Primitive Types",
    scope: ["storage.type.built-in.primitive"],
    settings: {
      foreground: colors.BRIGHT_RED,
    },
  },
  {
    name: "[Java] Primitive Types",
    scope: "storage.type.primitive.java",
    settings: {
      foreground: colors.BRIGHT_RED,
    },
  },
  {
    name: "[Markdown] Horizontal Rule",
    scope: ["meta.separator.markdown"],
    settings: {
      foreground: colors.DESC,
    },
  },
  {
    name: "[Markdown] Link Titles & Image Alt Text",
    scope: ["string.other.link.title", "string.other.link.description"],
    settings: {
      foreground: colors.BRIGHT_GREEN,
    },
  },
  {
    name: "[Markdown] Reference Links",
    scope: ["constant.other.reference.link"],
    settings: {
      foreground: colors.BRIGHT_PURPLE,
    },
  },
  {
    name: "[Diff] Headers",
    scope: ["meta.diff.header"],
    settings: {
      foreground: colors.DESC,
    },
  },
  {
    name: "[Diff] From File",
    scope: [
      "source.diff meta.diff.header.from-file",
      "punctuation.definition.from-file",
    ],
    settings: {
      foreground: colors.BRIGHT_RED,
    },
  },
  {
    name: "[Diff] To File",
    scope: [
      "source.diff meta.diff.header.to-file",
      "punctuation.definition.to-file",
    ],
    settings: {
      foreground: colors.BRIGHT_GREEN,
    },
  },
  {
    name: "[Diff] Ranges",
    scope: ["meta.diff.range", "punctuation.definition.range"],
    settings: {
      foreground: colors.BRIGHT_PURPLE,
    },
  },
  {
    name: "[Diff] Separators",
    scope: ["meta.separator.diff"],
    settings: {
      foreground: colors.DESC,
    },
  },
  {
    name: "[INI] Keys",
    scope: ["keyword.other.definition.ini"],
    settings: {
      foreground: colors.BRIGHT_YELLOW,
    },
  },
  {
    name: "[XML] DocTypes",
    scope: ["keyword.other.doctype.xml", "keyword.other.entity.xml"],
    settings: {
      foreground: colors.BRIGHT_RED,
    },
  },
  {
    scope: [
      "variable.language.documentroot.xml",
      "variable.language.entity.xml",
    ],
    settings: {
      foreground: colors.BRIGHT_YELLOW,
    },
  },
  {
    name: "[YAML] Aliases",
    scope: ["variable.other.alias.yaml"],
    settings: {
      fontStyle: "italic underline",
      foreground: colors.BRIGHT_YELLOW,
    },
  },
  {
    name: "[Ruby] String Interpolation Brackets",
    scope: [
      "punctuation.section.embedded.begin.ruby",
      "punctuation.section.embedded.end.ruby",
    ],
    settings: {
      foreground: colors.BRIGHT_PINK,
    },
  },
]

module.exports = syntax
