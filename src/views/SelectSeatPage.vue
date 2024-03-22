<template>
  <ion-page>
    <ion-header class="bg-white shadow-none" :translucent="false">
        <div class="w-full h-full border-b border-gray-300 flex justify-between items-center px-4 py-2">
            <div class="flex items-center gap-4">
                <!-- back arrow -->
                <button v-on:click="$router.go(-1)" class="focus:outline-none focus:fill-blue-600">
                    <svg class="h-6 fill-black" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.939337 10.9393C0.35355 11.5251 0.35355 12.4749 0.939337 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939337 10.9393ZM3.3421 10.5L2 10.5V13.5L3.3421 13.5V10.5Z"/>
                    </svg>
                </button>
                <!-- details -->
                <div class="block">
                  <h2 class="text-xl font-extrabold text-black m-0">Select Seats</h2>
                  
                  <div class="flex items-center gap-3">
                      <p class="text-sm text-slate-600">{{ pickupPoint }}</p>
                      <svg class="h-3 fill-gray-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.8839 10.8839C19.372 10.3957 19.372 9.60427 18.8839 9.11612L10.9289 1.16117C10.4408 0.67301 9.6493 0.67301 9.16115 1.16117C8.67299 1.64932 8.67299 2.44078 9.16115 2.92893L16.2322 10L9.16115 17.0711C8.67299 17.5592 8.67299 18.3507 9.16115 18.8388C9.6493 19.327 10.4408 19.327 10.9289 18.8388L18.8839 10.8839ZM0.552612 11.25L18 11.25V8.75L0.552612 8.75L0.552612 11.25Z"/>
                      </svg>
                      <p class="text-sm text-slate-600">{{ droppingPoint }}</p>
                  </div>
                </div>
            </div>
        </div>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="w-full min-h-screen bg-slate-100 p-4">
        <div class="w-full flex justify-between items-center gap-4">
          <h2 class="m-0 text-xl font-bold text-gray-900">Pick Seats</h2>

          <button v-on:click="openSeatTypes = !openSeatTypes" type="button" class="text-gray-800 bg-slate-300 focus:outline-none focus:bg-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center gap-2">
            <svg class="h-4 fill-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
            </svg>
            Seat Types
          </button>
        </div>

        <div v-if="openSeatTypes" class="w-full mt-6 bg-transparent rounded-md border-2 border-gray-300 p-6">
          <div class="w-full grid grid-cols-3 gap-4">
            <!-- taken seat -->
            <div class="flex items-center gap-2 font-medium text-gray-800">
              <svg class="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h28v27H0z"/>
                  <path d="M4 10V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2z" class="fill-gray-400"/>
                  <path d="M22 2a2 2 0 0 1 2 2v6c1.105 0 2 .895 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2V4a2 2 0 0 1 2-2h16zM6 11H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1h-2v7.925a2.4 2.4 0 0 1-1.83 2.332 25.521 25.521 0 0 1-6.087.743 27.03 27.03 0 0 1-6.236-.75A2.4 2.4 0 0 1 6 18.914V11zm16-8H6a1 1 0 0 0-1 1v6h1a1 1 0 0 1 1 1v7.914a1.4 1.4 0 0 0 1.078 1.362 26.03 26.03 0 0 0 6.005.724c1.953 0 3.903-.238 5.85-.715A1.4 1.4 0 0 0 21 18.925V11a1 1 0 0 1 1-1h1V4a1 1 0 0 0-1-1z" class="fill-gray-700" fill-rule="nonzero"/>
                </g>
              </svg>
              Taken
            </div>
            <!-- available -->
            <div class="flex items-center gap-2 font-medium text-gray-800">
              <svg class="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h28v27H0z"/>
                  <path d="M4 10V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2z" class="fill-green-400"/>
                  <path d="M22 2a2 2 0 0 1 2 2v6c1.105 0 2 .895 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2V4a2 2 0 0 1 2-2h16zM6 11H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1h-2v7.925a2.4 2.4 0 0 1-1.83 2.332 25.521 25.521 0 0 1-6.087.743 27.03 27.03 0 0 1-6.236-.75A2.4 2.4 0 0 1 6 18.914V11zm16-8H6a1 1 0 0 0-1 1v6h1a1 1 0 0 1 1 1v7.914a1.4 1.4 0 0 0 1.078 1.362 26.03 26.03 0 0 0 6.005.724c1.953 0 3.903-.238 5.85-.715A1.4 1.4 0 0 0 21 18.925V11a1 1 0 0 1 1-1h1V4a1 1 0 0 0-1-1z" class="fill-green-700" fill-rule="nonzero"/>
                </g>
              </svg>
              Available
            </div>
            <!-- you selected -->
            <div class="flex items-center gap-2 font-medium text-gray-800">
              <svg class="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h28v27H0z"/>
                  <path d="M4 10V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2z" class="fill-blue-400"/>
                  <path d="M22 2a2 2 0 0 1 2 2v6c1.105 0 2 .895 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2V4a2 2 0 0 1 2-2h16zM6 11H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1h-2v7.925a2.4 2.4 0 0 1-1.83 2.332 25.521 25.521 0 0 1-6.087.743 27.03 27.03 0 0 1-6.236-.75A2.4 2.4 0 0 1 6 18.914V11zm16-8H6a1 1 0 0 0-1 1v6h1a1 1 0 0 1 1 1v7.914a1.4 1.4 0 0 0 1.078 1.362 26.03 26.03 0 0 0 6.005.724c1.953 0 3.903-.238 5.85-.715A1.4 1.4 0 0 0 21 18.925V11a1 1 0 0 1 1-1h1V4a1 1 0 0 0-1-1z" class="fill-blue-700" fill-rule="nonzero"/>
                </g>
              </svg>
              Selected
            </div>
          </div>
        </div>

        <div class="w-full mt-8 max-w-xs mx-auto bg-white pb-4 border border-gray-400 rounded-lg shadow-sm">
          <div class="w-full p-3 border-b border-gray-300">
            <svg class="h-6 fill-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 18.9863C15.238 18.7269 19 14.8028 19 10C19 8.87127 18.7922 7.79107 18.4128 6.79556L12.8825 9.1657C12.959 9.43056 13 9.71049 13 10C13 11.4865 11.9189 12.7205 10.5 12.9585V18.9863ZM10.5 19.9877C15.7906 19.7272 20 15.3552 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.3552 4.20944 19.7272 9.5 19.9877V20H10H10.5V19.9877ZM9.5 18.9863C4.76201 18.7269 1 14.8028 1 10C1 8.87132 1.20777 7.79116 1.58714 6.79569L7.11749 9.16584C7.04099 9.43066 7 9.71054 7 10C7 11.4865 8.08114 12.7205 9.5 12.9585V18.9863ZM18.0049 5.88239L12.4472 8.26429C11.9035 7.49917 11.0101 7 10 7C8.98988 7 8.09637 7.49923 7.55272 8.26441L1.99498 5.88252C3.48947 2.98287 6.51317 1 10 1C13.4868 1 16.5104 2.98281 18.0049 5.88239ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z" fill="#3E3E52"/>
            </svg>
          </div>

          <!-- seats -->
          <div class="w-full mt-4 px-6 py-4 space-y-2">
            <div v-for="seat in seats" :key="seat" class="w-full grid grid-cols-2 gap-6">
              <div class="w-full flex items-center justify-center gap-2">
                <div>
                  <input type="checkbox" id="react-option" v-model="selectedSeats" :value="seat[0]" class="hidden peer" required>
                  <label for="react-option" class="inline-flex items-center justify-between w-full bg-white rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-gray-600">
                      <svg class="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                        <g fill="none" fill-rule="evenodd">
                          <path d="M0 0h28v27H0z"/>
                          <path d="M4 10V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2z" class="fill-green-400 peer-checked:fill-blue-400"/>
                          <path d="M22 2a2 2 0 0 1 2 2v6c1.105 0 2 .895 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2V4a2 2 0 0 1 2-2h16zM6 11H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1h-2v7.925a2.4 2.4 0 0 1-1.83 2.332 25.521 25.521 0 0 1-6.087.743 27.03 27.03 0 0 1-6.236-.75A2.4 2.4 0 0 1 6 18.914V11zm16-8H6a1 1 0 0 0-1 1v6h1a1 1 0 0 1 1 1v7.914a1.4 1.4 0 0 0 1.078 1.362 26.03 26.03 0 0 0 6.005.724c1.953 0 3.903-.238 5.85-.715A1.4 1.4 0 0 0 21 18.925V11a1 1 0 0 1 1-1h1V4a1 1 0 0 0-1-1z" class="fill-green-700 peer-checked:fill-blue-700" fill-rule="nonzero"/>
                        </g>
                      </svg>
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="react-option" :value="seat[1]" v-model="selectedSeats" class="hidden peer" required>
                  <label for="react-option" class="inline-flex items-center justify-between w-full bg-white rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-gray-600">
                      <svg class="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                        <g fill="none" fill-rule="evenodd">
                          <path d="M0 0h28v27H0z"/>
                          <path d="M4 10V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2z" class="fill-green-400 peer-checked:fill-blue-400"/>
                          <path d="M22 2a2 2 0 0 1 2 2v6c1.105 0 2 .895 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2V4a2 2 0 0 1 2-2h16zM6 11H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1h-2v7.925a2.4 2.4 0 0 1-1.83 2.332 25.521 25.521 0 0 1-6.087.743 27.03 27.03 0 0 1-6.236-.75A2.4 2.4 0 0 1 6 18.914V11zm16-8H6a1 1 0 0 0-1 1v6h1a1 1 0 0 1 1 1v7.914a1.4 1.4 0 0 0 1.078 1.362 26.03 26.03 0 0 0 6.005.724c1.953 0 3.903-.238 5.85-.715A1.4 1.4 0 0 0 21 18.925V11a1 1 0 0 1 1-1h1V4a1 1 0 0 0-1-1z" class="fill-green-700 peer-checked:fill-blue-700" fill-rule="nonzero"/>
                        </g>
                      </svg>
                  </label>
                </div>
              </div>

              <div class="w-full flex items-center justify-center gap-2">
                <div>
                  <input type="checkbox" id="react-option" :value="seat[2]" v-model="selectedSeats" class="hidden peer" required>
                  <label for="react-option" class="inline-flex items-center justify-between w-full bg-white rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-gray-600">
                      <svg class="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                        <g fill="none" fill-rule="evenodd">
                          <path d="M0 0h28v27H0z"/>
                          <path d="M4 10V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2z" class="fill-green-400 peer-checked:fill-blue-400"/>
                          <path d="M22 2a2 2 0 0 1 2 2v6c1.105 0 2 .895 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2V4a2 2 0 0 1 2-2h16zM6 11H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1h-2v7.925a2.4 2.4 0 0 1-1.83 2.332 25.521 25.521 0 0 1-6.087.743 27.03 27.03 0 0 1-6.236-.75A2.4 2.4 0 0 1 6 18.914V11zm16-8H6a1 1 0 0 0-1 1v6h1a1 1 0 0 1 1 1v7.914a1.4 1.4 0 0 0 1.078 1.362 26.03 26.03 0 0 0 6.005.724c1.953 0 3.903-.238 5.85-.715A1.4 1.4 0 0 0 21 18.925V11a1 1 0 0 1 1-1h1V4a1 1 0 0 0-1-1z" class="fill-green-700 peer-checked:fill-blue-700" fill-rule="nonzero"/>
                        </g>
                      </svg>
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="react-option" :value="seat[3]" class="hidden peer" required>
                  <label for="react-option" class="inline-flex items-center justify-between w-full bg-white rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-gray-600">
                      <svg class="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                        <g fill="none" fill-rule="evenodd">
                          <path d="M0 0h28v27H0z"/>
                          <path d="M4 10V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2z" class="fill-green-400 peer-checked:fill-blue-400"/>
                          <path d="M22 2a2 2 0 0 1 2 2v6c1.105 0 2 .895 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2V4a2 2 0 0 1 2-2h16zM6 11H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1h-2v7.925a2.4 2.4 0 0 1-1.83 2.332 25.521 25.521 0 0 1-6.087.743 27.03 27.03 0 0 1-6.236-.75A2.4 2.4 0 0 1 6 18.914V11zm16-8H6a1 1 0 0 0-1 1v6h1a1 1 0 0 1 1 1v7.914a1.4 1.4 0 0 0 1.078 1.362 26.03 26.03 0 0 0 6.005.724c1.953 0 3.903-.238 5.85-.715A1.4 1.4 0 0 0 21 18.925V11a1 1 0 0 1 1-1h1V4a1 1 0 0 0-1-1z" class="fill-green-700 peer-checked:fill-blue-700" fill-rule="nonzero"/>
                        </g>
                      </svg>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- next button -->
        <router-link :to="{name: 'passenger-info-page'}" class="w-full block text-center mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-3 focus:outline-none">Select Boarding & Droppoing Point</router-link>
      </div>
    </ion-content>
    <ion-footer class="bg-white rounded-t-md shadow-2xl" :translucent="false">
      <button v-on:click="console.log('clicked')" class="w-full px-4 py-4">
        <div class="w-4/12 max-w-sm bg-gray-300 h-1.5 rounded-full mx-auto"></div>

        <div class="w-full mt-4 flex items-center justify-between gap-4">
          <h2 class="text-xl m-0 font-bold text-black">Bus Name</h2>

          <div class="w-fit px-2 py-1 bg-blue-800 rounded-md flex justify-center items-center">
              <svg class="h-3 fill-yellow-400" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.49999 0L6.79837 3.81966H11L7.6008 6.18034L8.8046 10L5.49999 7.63932L2.10081 10L3.39918 6.18034L0 3.81966H4.20162L5.49999 0Z"/>
              </svg>
              <p class="text-xs font-medium text-white pl-1 pt-[1px]">4.5</p>
          </div>
        </div>
      </button>
    </ion-footer>
  </ion-page>
</template>

<script setup>
import {
IonContent,
IonPage,
IonHeader,
IonFooter,
onIonViewDidEnter,
} from "@ionic/vue";
import IonicPreference from '@/store/IonicPreference';
import { ref } from "vue";

const pickupPoint = ref('')
const droppingPoint = ref('')
const openSeatTypes = ref(false)
const selectedSeats = ref([])
const seats = ref([
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16],
  [17,18,19,20],
  [21,22,23,24],
  [25,26,27,28],
  [29,30,31,32],
  [33,34,35,36],
  [37,38,39,40],
])

function add(value) {
 console.log(value)
}

async function getSearchPayload(){
  pickupPoint.value = await IonicPreference.getPreference('pickup_point')
  droppingPoint.value = await IonicPreference.getPreference('dropping_point')
}

onIonViewDidEnter(async () => {
await getSearchPayload()
})
</script>