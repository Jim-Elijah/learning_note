import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import todolist from '@/components/todolists/index'
import center from '../components/center'
import other from '../components/other'
import child1 from "../components/otherChild1";
import child2 from "../components/otherChild2";
import detail from '../components/detail'
import dynamic from '../components/dynamic'
Vue.use(Router)

const route =  new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: todolist
    },
    {
      path: '/center',
      name: 'center',
      component: center
    },
    {
      path: '/other',
      name: 'other',
      component: other,
      children: [
        {
          path: 'child1',
          name: 'child1',
          component: child1,
        },
        {
          path: '/other/child2',
          name: 'child2',
          component: child2,
        }
      ]
    },
    {
      path: '/dynamic', 
      component: dynamic
    },
    {
      path: '/detail/:id', //动态路由，匹配detail的子路由，/detail/aa的形式
      name: 'corner',
      component: detail
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})

// route.beforeEach((to, from, next) => {
//   console.log(to)
//   if(to.path === '/other/child1'){
//     alert('拦截');
//   }else {
//     next();
//   }
// })
export default route