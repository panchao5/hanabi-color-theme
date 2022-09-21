const colors = require("./colors")

module.exports = {
  // Base Colors
  focusBorder: colors.DESC,
  foreground: colors.FG,
  disabledForeground: colors.DISABLED,
  "selection.background": colors.GREEN,
  descriptionForeground: `${colors.BRIGHT_WHITE}cc`,
  errorForeground: colors.BRIGHT_RED,
  "icon.foreground": colors.FG,

  // Text Colors
  "textBlockQuote.border": colors.BLUE,
  "textBlockQuote.background": colors.BRIGHT_BG,
  "textCodeBlock.background": colors.DARK_BG,
  "textLink.activeForeground": colors.BRIGHT_GREEN,
  "textLink.foreground": colors.BRIGHT_GREEN,
  "textPreformat.foreground": colors.BRIGHT_YELLOW,
  "textSeparator.foreground": colors.BRIGHTER_BG,

  // Button Control
  "button.background": colors.GREEN,
  "button.foreground": colors.DARKER_BG,
  "button.separator": colors.DARKER_BG,
  "button.secondaryBackground": colors.DARK_BG,
  "button.secondaryForeground": colors.BRIGHT_GREEN,

  // Dropdown Control
  "dropdown.border": colors.DARKER_BG,
  "dropdown.background": colors.DARK_BG,
  "dropdown.foreground": colors.FG,

  // Input Control
  "input.border": colors.DARKER_BG,
  "input.background": colors.BG,
  "input.foreground": colors.FG,
  "input.placeholderForeground": colors.DESC,
  "inputOption.activeBorder": colors.GREEN,
  "inputValidation.infoBorder": colors.BLUE,
  "inputValidation.warningBorder": colors.YELLOW,
  "inputValidation.errorBorder": colors.RED,

  // Badge
  "badge.background": colors.GREEN,
  "badge.foreground": colors.DARKER_BG,

  // Progress Bar
  "progressBar.background": colors.YELLOW,

  // lists & trees
  "list.activeSelectionBackground": colors.SELECTION,
  "list.activeSelectionForeground": colors.FG,
  "list.dropBackground": colors.SELECTION,
  "list.focusBackground": `${colors.SELECTION}5a`,
  "list.highlightForeground": colors.BRIGHT_CYAN,
  "list.hoverBackground": `${colors.SELECTION}5a`,
  "list.hoverForeground": colors.FG,
  "list.inactiveSelectionBackground": `${colors.SELECTION}5a`,
  "list.warningForeground": colors.BRIGHT_YELLOW,
  "list.errorForeground": colors.BRIGHT_RED,
  "tree.indentGuidesStroke": `${colors.BRIGHT_WHITE}1a`,
  "listFilterWidget.background": colors.BRIGHT_BG,
  "listFilterWidget.outline": colors.BRIGHTER_BG,
  "listFilterWidget.noMatchesOutline": colors.BRIGHT_RED,

  // Activity Bar
  "activityBar.background": colors.BRIGHT_BG,
  "activityBar.inactiveForeground": colors.DESC,
  "activityBar.foreground": colors.FG,
  "activityBar.activeBorder": `${colors.GREEN}cc`,
  "activityBar.activeBackground": `${colors.BLUE}20`,
  "activityBarBadge.background": colors.GREEN,
  "activityBarBadge.foreground": colors.DARKER_BG,

  // Side Bar
  "sideBar.foreground": colors.FG,
  "sideBar.background": colors.DARK_BG,
  "sideBarTitle.foreground": colors.FG,
  "sideBarSectionHeader.background": colors.BG,
  "sideBarSectionHeader.foreground": colors.FG,

  // Minimap
  "minimap.findMatchHighlight": `${colors.ORANGE}cc`,
  "minimap.selectionHighlight": `${colors.BLUE}66`,

  // Editor Groups & Tabs
  "editorGroup.border": colors.GREEN,
  "editorGroupHeader.tabsBackground": colors.DARKER_BG,
  "tab.activeBackground": colors.BG,
  "tab.activeForeground": colors.FG,
  "tab.border": colors.DARKER_BG,
  "tab.activeBorderTop": `${colors.YELLOW}cc`,
  "tab.inactiveBackground": colors.DARK_BG,
  "tab.inactiveForeground": colors.DESC,

  // Editor Colors
  "editor.background": colors.BG,
  "editor.foreground": colors.FG,
  "editorLineNumber.foreground": colors.DESC,
  "editorLineNumber.activeForeground": colors.FG,
  "editor.selectionBackground": colors.SELECTION,
  "editor.selectionHighlightBackground": colors.BRIGHTER_BG,
  "editor.foldBackground": `${colors.DARK_BG}cc`,

  "editor.wordHighlightBackground": `${colors.BRIGHT_BLUE}80`,
  "editor.wordHighlightStrongBackground": `${colors.BRIGHT_GREEN}80`,

  "editor.findMatchBackground": `${colors.BRIGHT_ORANGE}cc`,
  "editor.findMatchHighlightBackground": `${colors.BRIGHT_WHITE}66`,
  "editor.findRangeHighlightBackground": `${colors.SELECTION}5a`,
  "editor.hoverHighlightBackground": `${colors.BRIGHT_BLUE}80`,

  "editor.lineHighlightBorder": colors.SELECTION,

  "editorLink.activeForeground": colors.BRIGHT_BLUE,
  "editor.rangeHighlightBackground": `${colors.BRIGHT_BLUE}26`,

  "editorWhitespace.foreground": `${colors.BRIGHT_WHITE}1a`,
  "editorIndentGuide.background": `${colors.BRIGHT_WHITE}1a`,
  "editorIndentGuide.activeBackground": `${colors.BRIGHT_WHITE}73`,
  "editorRuler.foreground": `${colors.BRIGHT_WHITE}1a`,

  "editorBracketHighlight.foreground1": colors.FG,
  "editorBracketHighlight.foreground2": colors.BRIGHT_ORANGE,
  "editorBracketHighlight.foreground3": colors.BRIGHT_YELLOW,
  "editorBracketHighlight.foreground4": colors.BRIGHT_CYAN,
  "editorBracketHighlight.foreground5": colors.BRIGHT_BLUE,
  "editorBracketHighlight.foreground6": colors.BRIGHT_PURPLE,
  "editorBracketHighlight.unexpectedBracket.foreground": colors.BRIGHT_RED,

  "editorError.foreground": colors.BRIGHT_RED,
  "editorWarning.foreground": colors.BRIGHT_YELLOW,

  "editorGutter.modifiedBackground": `${colors.BLUE}cc`,
  "editorGutter.addedBackground": `${colors.GREEN}cc`,
  "editorGutter.deletedBackground": `${colors.RED}cc`,

  "editorCodeLens.foreground": colors.DESC,

  // Editor Overview Ruler
  "editorOverviewRuler.border": colors.DARKER_BG,
  "editorOverviewRuler.selectionHighlightForeground": `${colors.BRIGHT_WHITE}66`,
  "editorOverviewRuler.findMatchForeground": colors.BRIGHT_ORANGE,
  "editorOverviewRuler.wordHighlightForeground": colors.BRIGHT_BLUE,
  "editorOverviewRuler.wordHighlightStrongForeground": colors.BRIGHT_GREEN,
  "editorOverviewRuler.modifiedForeground": `${colors.BLUE}cc`,
  "editorOverviewRuler.addedForeground": `${colors.GREEN}cc`,
  "editorOverviewRuler.deletedForeground": `${colors.RED}cc`,
  "editorOverviewRuler.warningForeground": colors.YELLOW,
  "editorOverviewRuler.errorForeground": colors.RED,
  "editorOverviewRuler.currentContentForeground": colors.GREEN,
  "editorOverviewRuler.incomingContentForeground": `${colors.YELLOW}cc`,

  "editorMarkerNavigation.background": colors.DARK_BG,

  "problemsErrorIcon.foreground": colors.BRIGHT_RED,
  "problemsWarningIcon.foreground": colors.BRIGHT_YELLOW,
  "problemsInfoIcon.foreground": colors.BRIGHT_BLUE,

  // Diff Editor Colors
  "diffEditor.insertedTextBackground": `${colors.GREEN}33`,
  "diffEditor.removedTextBackground": `${colors.RED}80`,

  // Editor Widget Colors
  "editorWidget.background": colors.DARK_BG,
  "editorWidget.border": colors.DESC,
  "editorSuggestWidget.background": colors.DARK_BG,
  "editorSuggestWidget.foreground": colors.FG,
  "editorSuggestWidget.border": colors.DESC,
  "editorSuggestWidget.selectedBackground": colors.SELECTION,
  "editorHoverWidget.background": colors.BG,
  "editorHoverWidget.border": colors.DESC,

  // Peek View Colors
  "peekView.border": colors.DESC,
  "peekViewEditor.background": colors.BG,
  "peekViewEditor.matchHighlightBackground": `${colors.YELLOW}cc`,
  "peekViewResult.background": colors.DARK_BG,
  "peekViewResult.fileForeground": colors.FG,
  "peekViewResult.lineForeground": colors.FG,
  "peekViewResult.matchHighlightBackground": `${colors.YELLOW}cc`,
  "peekViewResult.selectionBackground": colors.SELECTION,
  "peekViewResult.selectionForeground": colors.FG,
  "peekViewTitle.background": colors.DARK_BG,
  "peekViewTitleDescription.foreground": colors.DESC,
  "peekViewTitleLabel.foreground": colors.FG,

  // Merge Conflicts Colors
  "merge.currentHeaderBackground": `${colors.GREEN}e5`,
  "merge.incomingHeaderBackground": `${colors.YELLOW}e5`,
  "merge.commonHeaderBackground": colors.BLUE,

  // Panel
  "panel.background": colors.BG,
  "panel.border": colors.PRIMARY,
  "panelTitle.activeBorder": colors.YELLOW,
  "panelTitle.activeForeground": colors.FG,
  "panelTitle.inactiveForeground": colors.DESC,

  // Status Bar Colors
  "statusBar.background": colors.DARKER_BG,
  "statusBar.foreground": colors.FG,
  "statusBar.debuggingBackground": colors.YELLOW,
  "statusBar.debuggingForeground": colors.DARKER_BG,
  "statusBar.noFolderBackground": colors.DARKER_BG,
  "statusBar.noFolderForeground": colors.FG,
  "statusBarItem.prominentBackground": colors.YELLOW,
  "statusBarItem.prominentForeground": colors.DARKER_BG,
  "statusBarItem.remoteBackground": colors.GREEN,
  "statusBarItem.remoteForeground": colors.DARKER_BG,

  // Title Bar Colors
  "titleBar.activeBackground": colors.DARK_BG,
  "titleBar.activeForeground": colors.FG,
  "titleBar.inactiveBackground": colors.DARKER_BG,
  "titleBar.inactiveForeground": colors.DESC,

  // Notification Colors
  "notificationCenterHeader.background": colors.BRIGHT_BG,
  "notifications.background": colors.BG,
  "notificationsWarningIcon.foreground": colors.BRIGHT_YELLOW,
  "notificationsErrorIcon.foreground": colors.BRIGHT_RED,
  "notificationsInfoIcon.foreground": colors.BRIGHT_BLUE,

  // Extension Colors
  "extensionIcon.starForeground": colors.YELLOW,
  "extensionIcon.sponsorForeground": colors.PINK,
  "extensionIcon.preReleaseForeground": colors.PURPLE,
  "extensionIcon.verifiedForeground": colors.PRIMARY,

  // Quick Picker Colors
  "pickerGroup.border": colors.DARKER_BG,
  "pickerGroup.foreground": colors.BRIGHT_YELLOW,

  // Integrated Terminal Colors
  "terminal.background": colors.BG,
  "terminal.foreground": colors.FG,
  "terminal.ansiBlack": colors.BLACK,
  "terminal.ansiRed": colors.RED,
  "terminal.ansiGreen": colors.GREEN,
  "terminal.ansiYellow": colors.YELLOW,
  "terminal.ansiBlue": colors.BLUE,
  "terminal.ansiMagenta": colors.PURPLE,
  "terminal.ansiCyan": colors.CYAN,
  "terminal.ansiWhite": colors.WHITE,
  "terminal.ansiBrightBlack": colors.BRIGHT_BLACK,
  "terminal.ansiBrightRed": colors.BRIGHT_RED,
  "terminal.ansiBrightGreen": colors.BRIGHT_GREEN,
  "terminal.ansiBrightYellow": colors.BRIGHT_YELLOW,
  "terminal.ansiBrightBlue": colors.BRIGHT_BLUE,
  "terminal.ansiBrightMagenta": colors.BRIGHT_PURPLE,
  "terminal.ansiBrightCyan": colors.BRIGHT_CYAN,
  "terminal.ansiBrightWhite": colors.BRIGHT_WHITE,

  // Debug Colors
  "debugToolBar.background": colors.DARKER_BG,

  // Welcome Page Colors
  "welcomePage.progress.background": colors.BG,
  "welcomePage.progress.foreground": colors.YELLOW,
  "walkThrough.embeddedEditorBackground": colors.DARK_BG,

  // Git Colors
  "gitDecoration.modifiedResourceForeground": colors.BRIGHT_BLUE,
  "gitDecoration.deletedResourceForeground": colors.BRIGHT_RED,
  "gitDecoration.addedResourceForeground": colors.BRIGHT_GREEN,
  "gitDecoration.ignoredResourceForeground": colors.DISABLED,
  "gitDecoration.untrackedResourceForeground": colors.DESC,
  "gitDecoration.conflictingResourceForeground": colors.BRIGHT_ORANGE,

  // Settings Editor Colors
  "settings.headerForeground": colors.FG,
  "settings.modifiedItemIndicator": colors.BLUE,
  "settings.sashBorder": colors.DARKER_BG,
  "settings.dropdownBorder": colors.DARKER_BG,
  "settings.dropdownBackground": colors.DARK_BG,
  "settings.dropdownForeground": colors.FG,
  "settings.checkboxBorder": colors.DARKER_BG,
  "settings.checkboxBackground": colors.DARK_BG,
  "settings.checkboxForeground": colors.FG,
  "settings.textInputBorder": colors.DARKER_BG,
  "settings.textInputBackground": colors.DARK_BG,
  "settings.textInputForeground": colors.FG,
  "settings.numberInputBorder": colors.DARKER_BG,
  "settings.numberInputBackground": colors.DARK_BG,
  "settings.numberInputForeground": colors.FG,

  // Breadcrumbs Colors
  "breadcrumb.background": colors.BG,
  "breadcrumb.foreground": colors.DESC,
  "breadcrumb.focusForeground": colors.FG,
  "breadcrumb.activeSelectionForeground": colors.FG,
  "breadcrumbPicker.background": colors.DARKER_BG,

  // Snippets Colors
  "editor.snippetTabstopHighlightBackground": colors.SELECTION,
  "editor.snippetFinalTabstopHighlightBackground": colors.SELECTION,
  "editor.snippetFinalTabstopHighlightBorder": colors.YELLOW,
}
