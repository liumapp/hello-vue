<template>
<div class="product" v-on:click="init">
  this is history index , which id is {{ $route.params.id }} , name is {{ $route.params.name }}
</div>
</template>

<script>
  export default {
    name: 'History',
    methods: {
      init: function (event) {
        console.log(this.$route)
      }
    }
  }
</script>
