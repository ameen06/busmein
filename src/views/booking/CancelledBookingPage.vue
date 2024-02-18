<template>
  <ion-page>
    <ion-content :fullscreen="true">
        <div class="flex flex-col justify-center items-center">
          <!-- header -->
          <ion-header class="w-full border-b-[1px] border-slate-500 flex items-end gap-2 pb-2 px-3 pt-10">
            <svg width="14" height="24" viewBox="0 0 14 24">
            <path d="M0.939337 10.9393C0.35355 11.5251 0.35355 12.4749 0.939337 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939337 10.9393ZM3.3421 10.5L2 10.5V13.5L3.3421 13.5V10.5Z" fill="black"/></svg>
            <p class="text-[20px] font-extrabold text-black ">Booking</p>
          </ion-header>
          <!-- nav bar -->
          <div class="flex justify-center items-center">
            <BookingNavBar/>
          </div>
           <!-- no active booking page -->
           <div class="w-full mt-6 flex flex-col justify-center items-center">
            <p class="text-2xl text-blue-800 font-[600]">No Active Booking Found</p>
            <p class="max-w-xs text-sm text-gray-500 font-[400] px-3">We Can’t Found any Booking Made by you . But </p>
            <p class="max-w-xs text-sm text-gray-500 font-[400] px-7 mb-7">you can still Make Booking </p>
            <div class="px-5 py-1 border-gray-300 border-[2px] rounded-lg">
              <router-link :to="{name: 'home'}" class="text-md font-[600]">Book Ticket</router-link>
            </div>
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