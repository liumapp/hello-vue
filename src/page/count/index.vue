<template>
  <div>
   this is count number : {{ this.$store.state.globalCount }}
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
      this.$store.commit('increment')
      console.log(this.$store)
      this.count++
    }
  }

}
</script>
