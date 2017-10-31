<template>
  <div>
   this is count number : {{ this.$store.state.globalCount }}
    <br>
    <button v-on:click="increment">add</button>
    <br>
    <router-link to="/mapState">go to mapStateCount</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    increment () {
      this.$store.commit('increment')
    }
  }

}
</script>
