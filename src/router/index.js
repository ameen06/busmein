import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/auth',
    component: () => import('@/views/AuthMaster.vue'),
    children: [
        {
          path: '',
          redirect: { name: 'login' }
        },
        {
            path: 'login',
            name: 'login',
            component: () => import('@/views/auth/LoginPage.vue'),
        },
        {
            path: 'register',
            name: 'register',
            component: () => import('@/views/auth/RegisterPage.vue'),
        },
        {
          path: 'verify-otp',
          name: 'verify-otp',
          component: () => import('@/views/auth/VerifyPage.vue'),
        },
    ]
  },
  {
    path: '/booking',
    component: () => import('@/views/BookingMaster.vue'),
    children: [
        {
          path: '',
          redirect: { name: 'active' }
        },
        {
            path: 'active',
            name: 'active',
            component: () => import('@/views/booking/ActiveBookingPage.vue'),
        },
        {
            path: 'completed',
            name: 'completed',
            component: () => import('@/views/booking/CompletedBookingPage.vue'),
        },
        {
          path: 'cancelled',
          name: 'cancelled',
          component: () => import('@/views/booking/CancelledBookingPage.vue'),
        },
        {
          path: 'success',
          name: 'success',
          component: () => import('@/views/booking/BookingSuccessPage.vue'),
        },
    ]
  },
  {
    path: '/anything',
    name: 'select-page',
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
  {
    path: '/bus-details',
    name: 'bus-details',
    component: () => import('@/views/BusDetailsPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router