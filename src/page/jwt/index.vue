<template>
  <div>
    <button @click="test()">test</button>
  </div>
</template>

<script>
  export default {
    methods: {
      test () {
        this.jwt.getToken()
        console.log(this.jwt.token)
      }
    }
  }
</script>

