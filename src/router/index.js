import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/HomePage'
import Work from '@/pages/WorkPage'
import Contact from '@/pages/ContactPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    // path: '/',
    // name: 'HelloWorld',
    // component: HelloWorld
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
