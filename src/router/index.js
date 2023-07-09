import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: () => import('../views/WishlistView.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/profile',
    name: 'Profil',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/OrderView.vue')
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.tokenAccess;

  if (typeof token === 'undefined' || token === '') {
    if (to.name === 'Cart' || to.name === 'Wishlist' || to.name === 'Profil' || to.name === 'Order') {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else if (to.name === 'Login' && typeof token !== 'undefined') {
    next({ name: 'Home' });
  }
  else next()
})

export default router
