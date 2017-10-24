<template>
  <div class="product">
    this is product , which id is {{ $route.params.id }}
    <router-link to="detail">go detail</router-link>&nbsp;<router-link to="list">go list</router-link>
    <router-view></router-view>
  </div>
</template>

