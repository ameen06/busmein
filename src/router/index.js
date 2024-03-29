import { createRouter, createWebHistory } from '@ionic/vue-router';
import middlewares from "@/router/middleware"

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage.vue'),
    beforeEnter: [middlewares.checkForRoutes],
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
    ],
    beforeEnter: [middlewares.checkForRoutes],
  },
  {
    path: '/booking',
    component: () => import('@/views/BookingMaster.vue'),
    children: [
        {
          path: '',
          redirect: { name: 'active' },
          name: 'bookings',
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
    ],
    beforeEnter: [middlewares.checkForRoutes, middlewares.checkBearerToken],
  },
  {
    path: '/locations',
    component: () => import('@/views/locationMaster.vue'),
    children: [
        {
          path: '',
          redirect: { name: 'boarding-points' },
          name: 'locations',
        },
        {
            path: 'boarding-points',
            name: 'boarding-points',
            component: () => import('@/views/locations/BoardingPoint.vue'),
        },
        {
            path: 'dropping-points',
            name: 'dropping-points',
            component: () => import('@/views/locations/DroppingPoint.vue'),
        },
    ],
    //beforeEnter: [middlewares.checkForRoutes, middlewares.checkBearerToken],
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/ProfilePage.vue'),
    beforeEnter: [middlewares.checkForRoutes, middlewares.checkBearerToken],
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
    name: 'ticket-details',
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