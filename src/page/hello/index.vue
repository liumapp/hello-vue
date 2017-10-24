<template>
  <div class="hello">
    <h3 v-bind:title="message">{{ msg }}</h3>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        message: 'hello vue',
        hMsg: '页面加载于 ' + new Date().toLocaleString()
      }
    }
  }
</script>
