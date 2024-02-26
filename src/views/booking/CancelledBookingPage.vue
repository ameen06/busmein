<template>
  <ion-page>
    <ion-header class="w-full bg-white flex items-center gap-2 px-6 py-3 shadow-md">
      <IonTitle class="p-0 m-0 text-lg font-extrabold text-blue-900">My Bookings</IonTitle>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="w-full max-s-sm mx-auto mt-6 px-6 flex flex-col justify-center items-center">
        <!-- nav bar -->
        <div class="flex justify-center items-center">
          <BookingNavBar/>
        </div>
        
        <!-- no active booking page -->
        <div class="w-full mt-12 flex flex-col justify-center items-center">
          <p class="text-2xl text-blue-800 font-semibold">No Cancelled Booking Found</p>
          <p class="mt-2 text-sm text-gray-500 px-3">You haven't made any cancellations</p>

          <router-link :to="{name: 'home'}" class="w-fit mt-6 py-2 px-5 font-medium text-blue-900 focus:outline-none bg-white rounded-lg border-2 border-gray-300 focus:bg-gray-100 focus:text-blue-700">Book Ticket</router-link>
        </div>
      </div>
    </ion-content>

    <!-- nav floating bar -->
     <NavigationBar /> 
  </ion-page>
</template>

<script setup>
import {
  IonContent,
  IonPage,
  IonHeader
} from "@ionic/vue";
import NavigationBar from '@/components/NavigationBar.vue'
import BookingNavBar from '@/components/BookingNavBar.vue'
</script>