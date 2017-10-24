import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MouseOver from '@/components/MouseOver'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/mouseOver',
      name: 'mouse',
      component: MouseOver
    }
  ]
})
