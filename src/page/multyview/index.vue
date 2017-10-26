<template>
  <div class="product" v-on:click="init">
    this is history index , which id is {{ id }} , name is {{ name }}

    <button v-on:click="addId">add id</button>
    &nbsp;
    <button v-on:click="testPush">route-push</button>
    <br>
    <router-view class="view one"></router-view>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'history',
    data () {
      return {
        id: Number(this.$route.params.id),
        name: this.$route.params.name
      }
    },
    methods: {
      init: function (event) {
        console.log(this.$route)
      },
      addId: function (event) {
        this.id += 1
      },
      testPush: function (event) {
//        push与router-link的点击类似
        this.$router.push({ path: `/history/${this.id}/${this.name}` })
      }
    }
  }
</script>
