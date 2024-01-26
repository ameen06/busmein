import { createRouter, createWebHistory } from '@ionic/vue-router';
//import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterPage.vue'),
  },
  {
    path: '/verify-otp',
    name: 'verify-otp',
    component: () => import('@/views/VerifyPage.vue'),
  },
  {
    path: '/booking',
    name: 'booking Page',
    component: () => import('@/views/BookingPage.vue'),
  },
  {
    path: '/one-way',
    name: 'oneWay-selecting-page',
    component: () => import('@/views/OneWayPage.vue'),
  },
  {
    path: '/passenger-info',
    name: 'passenger-info-page',
    component: () => import('@/views/PassengerInfoPage.vue'),
  },
  {
    path: '/ticket-details',
    name: 'ticke-details',
    component: () => import('@/views/TicketDetailsPage.vue'),
  },
  {
    path: '/seat-selects',
    name: 'seat-selects',
    component: () => import('@/views/SelectSeatPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router