<template>
  <ion-page class="bg-slate-100">
      <ion-header class="bg-white shadow-none" :translucent="false">
        <div class="w-full border-b border-gray-300 flex items-center gap-4 px-4 py-2">
          <div class="w-fit h-6">
            <button v-on:click="$router.go(-1)">
              <svg class="h-6 fill-black" viewBox="0 0 14 24">
                <path d="M0.939337 10.9393C0.35355 11.5251 0.35355 12.4749 0.939337 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939337 10.9393ZM3.3421 10.5L2 10.5V13.5L3.3421 13.5V10.5Z"/>
              </svg>
            </button>
          </div>
          <div class="w-full">
            <p class="text-xl font-extrabold text-black">Passenger Information</p>
            <div class="flex justify-start items-center gap-1">
              <p class="font-medium text-sm text-slate-600">Delhi</p>
              <svg class="h-2 fill-gray-500" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97634 0.269204 9.65976 0.269204 9.46449 0.464466C9.26923 0.659728 9.26923 0.976311 9.46449 1.17157L12.2929 4L9.46449 6.82843C9.26923 7.02369 9.26923 7.34027 9.46449 7.53553C9.65976 7.7308 9.97634 7.7308 10.1716 7.53553L13.3536 4.35355ZM0.921082 4.5L13 4.5V3.5L0.921082 3.5L0.921082 4.5Z"/>
              </svg>
              <p class="font-[500] text-sm text-slate-600">Pune</p>
            </div>
          </div>
        </div>
      </ion-header>
      <ion-content :fullscreen="true">
        <div class="w-full min-h-screen bg-slate-100">
          <!-- traveling bus details -->
          <div class="w-full bg-white flex flex-col py-4 px-4">
            <p class="text-sm font-medium text-slate-600 text-center">Chartered Bus - HGS</p>
            <div class="w-full flex justify-between items-start gap-1 mt-3">
              <!-- from -->
              <div>
                <p class="text-base font-bold text-black">Wed, 17 Jan - 12:00</p>
                <p class="text-xs font-medium text-slate-600">Delhi</p>
              </div>
              <!-- arrow-svg -->
              <div class="w-4 h-4 flex flex-col mt-2">
                <svg class="h-2 fill-gray-400" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97634 0.269204 9.65976 0.269204 9.46449 0.464466C9.26923 0.659728 9.26923 0.976311 9.46449 1.17157L12.2929 4L9.46449 6.82843C9.26923 7.02369 9.26923 7.34027 9.46449 7.53553C9.65976 7.7308 9.97634 7.7308 10.1716 7.53553L13.3536 4.35355ZM0.921082 4.5L13 4.5V3.5L0.921082 3.5L0.921082 4.5Z"/>
                </svg>
              </div>
              <!-- to -->
              <div class="flex flex-col items-end">
                <p class="text-base font-bold text-black">Wed, 20 Jan - 06:00</p>
                <p class="text-xs font-medium text-slate-600">Pune</p>
              </div>
            </div>
            <div class="w-fit text-xs font-medium text-indigo-700 rounded-full bg-indigo-300 mt-3 px-4 py-1">
              1 Seat
            </div>
          </div>
  
          <div class="w-full px-3 mt-4">
            <!-- create new account -->
            <div class="w-full bg-white rounded-lg shadow p-4">
              <h1 class="m-0 text-lg font-extrabold">Ticket Info Will Be Sent To</h1>
              <div class="w-full mt-2">
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-4 h-4 fill-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg>
                  </div>
                  <input type="text" id="input-group-1" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full ps-10 p-2.5 focus:outline-none focus:ring-4" placeholder="name@email.com">
                </div>
                <div class="relative mt-4">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="h-5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
                    </svg>
                  </div>
                  <input type="text" id="input-group-1" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full ps-10 p-2.5 focus:outline-none focus:ring-4" placeholder="9658745698">
                </div>
              </div>
            </div>

            <!-- passenger info -->
            <div class="w-full rounded-lg bg-white shadow mt-2 p-4">
              <p class="m-0 text-xl font-extrabold">Passenger Details</p>

              <div class="relative mt-4">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg class="w-4 h-4 fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
                  </svg>
                </div>
                <input type="text" id="passenger-name" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-500 block w-full ps-10 p-2.5 focus:outline-none focus:ring-4" placeholder="Full Name">
              </div>

              <div class="w-full mt-2 flex justify-center items-center gap-4">
                <input type="number" placeholder="Age" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 focus:outline-none">
                  
                <input type="text" placeholder="Gender" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 focus:outline-none">
              </div>
            </div>
          </div>
        </div>
      </ion-content>
      <!-- paynow button -->
      <IonFooter class="w-full p-4 shadow-none border-none" :translucent="false">
        <router-link :to="{name: 'success'}" class="w-full bg-blue-900 rounded-lg flex justify-center items-center py-3"> 
          <p class="text-lg font-extrabold text-white">Pay Now</p>
        </router-link>
      </IonFooter>
  </ion-page>
</template>

<script setup>
import {
  IonContent,
  IonPage,
  IonHeader,
  IonFooter,
} from "@ionic/vue";
</script>