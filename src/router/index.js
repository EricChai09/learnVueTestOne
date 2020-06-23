import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
 //路由懒加载
const About = () => import('../views/About.vue')
const Car = () => import('../views/Car.vue')
const Profile = () => import('../views/Profile.vue')
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/car',
    name: 'Car',
    component: Car
  },{
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
