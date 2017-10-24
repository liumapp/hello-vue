import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MouseOver from '@/components/MouseOver'

Vue.use(Router)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
      children: [{
        path: '/hello',
        component: r => require.ensure([], () => r(require('../page/hello')), 'hello')
      }]
    },
    {
      path: '/mouseOver',
      name: 'mouse',
      component: MouseOver
    },
    {
      path: '/foo',
      component: Foo
    },
    {
      path: '/bar',
      component: Bar
    }

  ]
})
