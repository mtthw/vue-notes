<template>
  <div id="app">
    <editor></editor>
  </div>
</template>

<script>
import Editor from '@/components/Editor'



export default {
  name: 'app',
  components: {
    Editor
  }
}
</script>

<style>
#app {
  max-width: 600px;
  margin: 0 auto;
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

textarea {
  border: none;
  min-width: 100%;
  border-left: 2px solid #2c3e50;
  margin-left: -30px;
  padding-left: 30px;
  font-size: 2em;
  resize: both;
  overflow: auto;
}
</style>
