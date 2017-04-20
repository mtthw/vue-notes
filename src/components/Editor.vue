<template>
  <div>
    <section v-html="compiledBefore"></section>
    <input v-model="current" v-on:keyup.down="incrementLineNumber" v-on:keyup.up="decrementLineNumber"></input>
    <section v-html="compiledAfter"></section>
  </div>
</template>

<script>
import marked from 'marked'
import markdown from '@/functions/markdown'
var initalMarkdown = `# Welcome to Vue notes

yo.
Paragraphs are dont work well.
Same reason as lists.
single newlines dont star new paragraphs…

## this is longer

 - list are a bit better than paragraphs.
 - Items work in isolation.
 - so that is good.

## Plan

find a way to parse output html and identify "blocks" that should be rendered as markdown.

## needs

 - generate blocks, likely from parsing the html of all the mardkdown. then mapping selection to the direct child that should displayed as mardkdown.
 - click to change selection.
 - enter for newline
 - content editable instead of a textarea or input. I think this is the only way to get resizing with content instead of overflow

`
export default {
  data () {
    return {
      before: markdown.before(initalMarkdown, 3),
      current: markdown.current(initalMarkdown, 3),
      after: markdown.after(initalMarkdown, 3),
      lineNumber: 3
    }
  },
  methods: {
    incrementLineNumber () {
      this.lineNumber++
      this.updateSections()
    },
    decrementLineNumber () {
      if (this.lineNumber > 0) {
        this.lineNumber--
        this.updateSections()
      }
    },
    updateSections () {
      var full = this.fullMarkdown()
      console.log(full)
      this.before = markdown.before(full, this.lineNumber)
      this.current = markdown.current(full, this.lineNumber)
      this.after = markdown.after(full, this.lineNumber)
    },
    fullMarkdown () {
      return this.before + '\n' + this.current + '\n' + this.after
    }
  },
  computed: {
    compiledBefore () {
      return marked(this.before)
    },
    compiledAfter () {
      return marked(this.after)
    }
  }
}
</script>
