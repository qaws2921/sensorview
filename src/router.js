import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MainBody from './components/MainBody'
import AdminRoutes from './templates/admin/routes/index'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/admin',
      name: 'Home',
      component: MainBody,
      children: [
        ...AdminRoutes
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
