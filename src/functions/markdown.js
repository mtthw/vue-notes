export default {
  before (markdown, lineNumber) {
    return markdown.split('\n')
                   .slice(0, lineNumber)
                   .join('\n')
  },

  current (markdown, lineNumber) {
    return markdown.split('\n')[lineNumber]
  },

  after (markdown, lineNumber) {
    var split = markdown.split('\n')
    return split.slice(lineNumber + 1, split.length)
                .join('\n')
  }
}
