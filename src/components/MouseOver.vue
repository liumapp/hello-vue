<template>
  <div class="mouseOver">
    <h3 v-bind:title="message">{{ msg }}</h3>
  </div>
</template>

<script>
  export default {
    name: 'MouseOver',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        message: 'hello vue'
      }
    }
  }
</script>
