<template>
  <div>
   this is count number : {{ count }}
    <br>
    <button v-on:click="increment">add</button>
  </div>
</template>

<script>
  export default {

    data () {
      return {
        count: 0
      }
    },

    methods: {
      increment () {
        this.count++
      }
    }

  }
</script>
