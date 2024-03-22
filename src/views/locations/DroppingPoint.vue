<template>
  <ion-page>
    <ion-header class="shadow-none" :translucent="false">
      <div class="w-full border-b border-gray-300 flex items-center gap-4 px-4 py-2">
        <div class="w-fit h-6">
          <button v-on:click="$router.go(-1)">
            <svg class="h-6 fill-black" viewBox="0 0 14 24">
              <path d="M0.939337 10.9393C0.35355 11.5251 0.35355 12.4749 0.939337 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939337 10.9393ZM3.3421 10.5L2 10.5V13.5L3.3421 13.5V10.5Z"/>
            </svg>
          </button>
        </div>
        <div class="w-full">
          <p class="text-xl font-extrabold text-black">Select Boarding & Dropping</p>
          <div class="flex justify-start items-center gap-1">
            <p class="font-medium text-sm text-slate-600">Delhi</p>
            <svg class="h-2 fill-gray-500" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97634 0.269204 9.65976 0.269204 9.46449 0.464466C9.26923 0.659728 9.26923 0.976311 9.46449 1.17157L12.2929 4L9.46449 6.82843C9.26923 7.02369 9.26923 7.34027 9.46449 7.53553C9.65976 7.7308 9.97634 7.7308 10.1716 7.53553L13.3536 4.35355ZM0.921082 4.5L13 4.5V3.5L0.921082 3.5L0.921082 4.5Z"/>
            </svg>
            <p class="font-[500] text-sm text-slate-600">Pune</p>
          </div>
        </div>
      </div>
      <div class="w-full flex items-center justify-around">
          <div class="w-full text-center">
            <a href="/locations/boarding-points" class="text-black">
              <h5 class="text-black">Boarding Points</h5>
            </a>
          </div>
          <div class="w-full border-b-2 border-blue-500 text-center">
              <h5 class="text-black">Dropping Points</h5>
          </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" >
      <div class="w-full bg-slate-100">
        <div class="w-full max-s-sm mx-auto pt-6 px-6 flex flex-col justify-center items-center ">
          <div class="w-full rounded-lg shadow-2xl bg-white">
            <div class="w-full border-b-2  py-3 px-6">
              <p>All Boarding Point in</p>
            </div>
            <div class="flex items-center justify-around py-2 border-b-2 "> 
              <div>
                <p class="text-sm font-bold">12:00</p>
                <div class="flex items-center gap-1">
                  <p class="text-xs">17</p>
                  <p class="text-xs">Jan</p>
                </div>
              </div>
              <div>
                <p class="text-sm font-bold">Delhi NCR</p>
                <p class="text-xs">Beside Rajib Chow , New Delhi 7000123</p>
              </div>
              <div> <input type="radio"></div>
            </div>
            <div class=" flex items-center justify-around py-2 border-b-2"> 
              <div>
                <p class="text-sm font-bold">12:30</p>
                <div class="flex items-center gap-1">
                  <p class="text-xs">17</p>
                  <p class="text-xs">Jan</p>
                </div>
              </div>
              <div>
                <p class="text-sm font-bold">OLD Delhi</p>
                <p class="text-xs">Beside Rajib Chow , New Delhi 7000123</p>
              </div>
              <div> <input type="radio"></div>
            </div>
          </div>
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
///import BookingNavBar from '@/components/BookingNavBar.vue'
</script>

<style scoped>
.in-toolbar .toolbar-container {
  min-height: unset !important;
}
</style>