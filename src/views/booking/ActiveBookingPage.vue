<template>
  <ion-page>
    <ion-header class="w-full bg-white flex items-center gap-2 px-6 py-3 shadow-md">
      <IonTitle class="p-0 m-0 text-lg font-extrabold text-blue-900">My Bookings</IonTitle>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="w-full max-s-sm mx-auto mt-6 px-6 flex flex-col justify-center items-center">
        <!-- nav bar -->
        <div class="w-full flex justify-center items-center">
          <BookingNavBar />
        </div>

        <!-- ticket container -->
        <div class="w-full mt-6">
          <!-- ticket -->
          <TicketDiv />
          <TicketDiv />
          <TicketDiv />
          <TicketDiv />
          <TicketDiv />
        </div>
      </div>
    </ion-content>

    <NavigationBar />
  </ion-page>
</template>

<script setup>
import {
  IonContent,
  IonPage,
  IonHeader,
  IonTitle
} from "@ionic/vue";
import NavigationBar from '@/components/NavigationBar.vue'
import BookingNavBar from '@/components/BookingNavBar.vue'
import TicketDiv from '@/components/TicketDiv.vue'
</script>

<style scoped>
.in-toolbar .toolbar-container {
  min-height: unset !important;
}
</style>