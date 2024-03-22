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
        
        <!-- page loader -->
        <div v-if="isLoading" class="w-full mt-8">
          <div class="w-full flex justify-center items-center gap-4">
            <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 text-gray-300 animate-spin fill-blue-600" viewBox="0 0 100 101" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
            <p class="text-lg font-semibold text-blue-900">Loading Your Active Bookings</p>
          </div>
        </div>

        <!-- tickets -->
        <div v-else-if="!isLoading && cancelledBookings.length > 0" class="w-full mt-6">
          <TicketDiv v-for="booking in cancelledBookings" :key="booking.booking_id" :booking="booking" />
        </div>

        <!-- no active booking -->
        <div v-else class="w-full mt-12 flex flex-col justify-center items-center">
          <p class="text-2xl text-blue-800 font-semibold">No Cancelled Booking Yet</p>
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
  IonHeader,
  IonTitle,
  onIonViewDidEnter
} from "@ionic/vue";
import NavigationBar from '@/components/NavigationBar.vue'
import BookingNavBar from '@/components/BookingNavBar.vue'
import TicketDiv from '@/components/TicketDiv.vue'
import { ref } from "vue"
import axios from '@/axios'

// variables
var cancelledBookings = ref([])
var isLoading = ref(true)

// functions
async function getCancelledBookings(){
  await axios.get('bookings?filter=cancelled')
    .then((response) => {
      cancelledBookings.value = response.data.bookings;
      isLoading.value = false
    });
}

onIonViewDidEnter(async () => {
  await getCancelledBookings()
})
</script>