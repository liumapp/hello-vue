<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <router-link to="/Hello/hello/">Go to mouseOver</router-link>
    <br>
    <router-link to="/foo">Go to foo</router-link>
    <br>
    <router-link to="/bar">Go to Bar</router-link>
    <br>
    <router-link to="/user/1">User1</router-link>&nbsp;<router-link to="/user/2">User2</router-link>
    <br>
    <router-link to="/product/1">product1</router-link>&nbsp;<router-link to="/product/2">product2</router-link>
    <br>
    <router-link to="/history/1/first-example">go to history</router-link>
    <br>
    <router-link to="/multyView">go to multy-view</router-link>
    <br>
    <router-link to="/count">go to count</router-link>
    <br>
    <router-link to="/toast">plugin test , by toast</router-link>
    <br>
    <router-link to="/jwt">go to jwt link</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: 'hello vue',
      hMsg: '页面加载于 ' + new Date().toLocaleString()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
