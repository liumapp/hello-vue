import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MouseOver from '@/components/MouseOver'
import Product from '@/page/product/index'
import ProductDetail from '@/page/product/detail'
import ProductList from '@/page/product/list'
import ProductNone from '@/page/product/none'

Vue.use(Router)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const User = {
  template: '<div>this is user number {{ $route.params.id}}</div>',
  watch: {
    '$route' (to, from) {
      console.log('to is')
      console.log(to)
      console.log('from is' + from)
      console.log(from)
    }
  }
}

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
    },
    {
      path: '/user/:id',
      component: User
    },
    {
      path: '/product/:id',
      component: Product,
      children: [
        {
          path: 'detail',
          component: ProductDetail
        },
        {
          path: 'list',
          component: ProductList
        },
        {
          path: '',
          component: ProductNone
        }
      ]
    }

  ]
})
