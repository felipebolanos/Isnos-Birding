import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Category from "../views/Category.vue"
import Cart from "../views/Cart.vue"
import Noticias from '../views/Noticias.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/register',
    name: 'Register',
    component: Register
  },

   {
   path: '/noticias',
   name: 'Noticias',
   component:()=> import('../views/Noticias.vue') 
   },

   {
    path: '/ayudar',
    name: 'Ayudar',
    component:()=> import('../views/Ayudar.vue') 
    },

    {
      path: '/nosotros',
      name: 'Nosotros',
      component:()=> import('../views/Nosotros.vue') 
      },

      {
        path: '/servicios',
        name: 'Servicios',
        component:()=> import('../views/Servicios.vue') 
        },

  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },

  {
    path: '/:category',
    component: Category
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
