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
    path: '/sign-up',
    name: 'signUp',
    component: () => import('@/views/RegisterPage.vue'),
  },
  {
    path: '/verify',
    name: 'verify Page',
    component: () => import('@/views/verifyPage.vue'),
  },
  {
    path: '/booking',
    name: 'booking Page',
    component: () => import('@/views/BookingPage.vue'),
  },
  {
    path: '/oneWay',
    name: 'oneWay selecting Page',
    component: () => import('@/views/oneWayPage.vue'),
  },
  {
    path: '/passengerInfo',
    name: 'passenger Info Page',
    component: () => import('@/views/PassengerInfoPage.vue'),
  },
  {
    path: '/ticketDetails',
    name: 'ticke details',
    component: () => import('@/views/TicketDetailsPage.vue'),
  },
  {
    path: '/seatSelects',
    name: 'seat selects',
    component: () => import('@/views/selectSeatsPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router