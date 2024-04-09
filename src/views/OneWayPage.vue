<template>
    <ion-page>
        <ion-header class="bg-white shadow-none" :translucent="false">
            <div class="w-full h-full border-b border-gray-300 flex justify-between items-center px-4 py-2">
                <div class="w-full max-w-[80%] md:max-w-full flex items-center gap-4">
                    <!-- back arrow -->
                    <button v-on:click="$router.go(-1)" class="focus:outline-none focus:fill-blue-600">
                        <svg class="h-6 fill-black" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.939337 10.9393C0.35355 11.5251 0.35355 12.4749 0.939337 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939337 10.9393ZM3.3421 10.5L2 10.5V13.5L3.3421 13.5V10.5Z"/>
                        </svg>
                    </button>
                    <!-- details -->
                    <div class="block w-full max-w-[90%] md:max-w-[unset]">
                        <div class="w-full flex items-center gap-3">
                            <p class="m-0 text-xl font-extrabold text-black capitalize line-clamp-1">{{ pickupPoint }}</p>
                            <svg class="h-4 fill-gray-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.8839 10.8839C19.372 10.3957 19.372 9.60427 18.8839 9.11612L10.9289 1.16117C10.4408 0.67301 9.6493 0.67301 9.16115 1.16117C8.67299 1.64932 8.67299 2.44078 9.16115 2.92893L16.2322 10L9.16115 17.0711C8.67299 17.5592 8.67299 18.3507 9.16115 18.8388C9.6493 19.327 10.4408 19.327 10.9289 18.8388L18.8839 10.8839ZM0.552612 11.25L18 11.25V8.75L0.552612 8.75L0.552612 11.25Z"/>
                            </svg>
                            <p class="m-0 text-xl font-extrabold text-black capitalize line-clamp-1">{{ droppingPoint }}</p>
                        </div>
                        <div>
                            <p class="text-sm text-slate-600">{{ availableBuses.length }} Buses</p>
                        </div>
                    </div>
                </div>
                <button class="flex flex-col items-center gap-1">
                    <div class="bg-blue-800 rounded-full flex justify-center items-center px-3 py-1.5">
                        <p class="text-xs font-semibold text-white">{{ searchedDateDayMonth }}</p>
                    </div>
                    <p class="text-xs font-medium text-slate-600">{{ searchedDateWeekday }}</p>
                </button>
            </div>
        </ion-header>
        <ion-content :fullscreen="true">
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
                    <p class="text-lg font-semibold text-blue-900">Loading Available Buses</p>
                </div>
            </div>

            <div v-else class="w-full min-h-screen bg-slate-100 p-6">
                <div class="w-full flex justify-start items-center gap-4">
                    <!-- filer -->
                    <button class="bg-white rounded-lg focus:bg-gray-300">
                        <div class="w-full px-3 py-1 flex justify-center items-center gap-2 border-2 border-gray-300 rounded-lg">
                            <svg class="h-4 fill-black" viewBox="0 0 21 19" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.89443 15.5976C9.5721 15.5976 9.24977 15.5269 8.95675 15.3767C8.36094 15.0762 7.99954 14.5283 7.99954 13.9097V11.1878C7.99954 11.0199 7.85303 10.6929 7.70652 10.525L5.58698 8.51015C5.18652 8.14783 4.88373 7.51155 4.88373 7.0255V5.85015C4.88373 4.86922 5.70419 4.10922 6.74931 4.10922H14.2409C15.2665 4.10922 16.1065 4.86922 16.1065 5.79713V6.92829C16.1065 7.5469 15.7158 8.22736 15.3251 8.58085L12.854 10.5604C12.6977 10.6841 12.5316 10.9934 12.5316 11.2497V13.459C12.5316 14.0157 12.1605 14.6343 11.6623 14.8995L10.8907 15.3502C10.5879 15.5181 10.2461 15.5976 9.89443 15.5976ZM6.74931 5.4348C6.51489 5.4348 6.34884 5.61155 6.34884 5.85015V7.0255C6.34884 7.14038 6.48559 7.44085 6.64187 7.58225L8.81024 9.65015C9.14233 10.0302 9.46466 10.6399 9.46466 11.1878V13.9097C9.46466 14.0864 9.59163 14.1836 9.66977 14.219C9.77722 14.272 9.95303 14.3074 10.1093 14.219L10.8907 13.7595C10.9688 13.7064 11.0665 13.5297 11.0665 13.4413V11.232C11.0665 10.6046 11.4084 9.90643 11.8968 9.54411L14.3191 7.59992C14.4461 7.48504 14.6414 7.13155 14.6414 6.91062V5.79713C14.6414 5.60271 14.4558 5.4348 14.2409 5.4348H6.74931Z"/>
                                <path d="M13.4302 19H7.56977C2.26605 19 0 16.9498 0 12.1512V6.84884C0 2.05023 2.26605 0 7.56977 0H13.4302C18.734 0 21 2.05023 21 6.84884V12.1512C21 16.9498 18.734 19 13.4302 19ZM7.56977 1.32558C3.06698 1.32558 1.46512 2.77488 1.46512 6.84884V12.1512C1.46512 16.2251 3.06698 17.6744 7.56977 17.6744H13.4302C17.933 17.6744 19.5349 16.2251 19.5349 12.1512V6.84884C19.5349 2.77488 17.933 1.32558 13.4302 1.32558H7.56977Z"/>
                            </svg>
                            <!-- text -->
                            <p class="text-base font-medium text-gray-900">Filter</p>
                        </div>
                    </button>
                    <!-- sort -->
                    <button class="bg-white rounded-lg focus:bg-gray-300">
                        <div class="w-full px-3 py-1 flex justify-center items-center gap-2 border-2 border-gray-300 rounded-lg">
                            <svg class="h-6 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"></path>
                            </svg>
                            <!-- text -->
                            <p class="text-base font-medium text-gray-900">Sort</p>
                        </div>
                    </button>
                </div>

                <!-- contianer -->
                <div class="w-full mt-6">
                    <div v-if="availableBuses.length == 0" class="w-full text-center">
                        <p>No buses found for your search</p>
                    </div>
                    <!-- each one -->
                    <div v-else v-for="item in availableBuses" :key="item.bus.id" v-on:click="selectBus(item)" class="w-full">
                        <div class="shadow bg-white rounded-xl px-4 py-2 mt-3">
                            <div class="w-full border-b border-slate-400 border-dashed pb-3">
                                <div class="flex justify-between ">
                                    <div class="">
                                        <div class="">
                                            <p class="text-base font-bold text-black">{{ item.boarding_time }} - {{ item.dropping_time }}</p>
                                        </div>
                                        <div class="flex justify-between items-center gap-3">
                                            <p class="text-xs font-[600] text-slate-600">{{ item.total_hours }}</p>
                                            <p class="text-xs font-[600] text-slate-600">{{ item.bus.total_seats }} Seats</p>
                                        </div>
                                    </div>
                                    <div class="flex justify-center items-center">
                                        <div class="bg-blue-300 rounded-md flex justify-center items-center py-1 px-3">
                                            <p class="text-xs font-semibold text-blue-900 uppercase">{{ item.bus.badge }}</p>
                                        </div>
                                    </div>
                                </div>
                                <!-- bus details -->
                                <div class="pt-2">
                                    <p class="text-xl font-semibold text-black">{{ item.bus.bus_name }}</p>
                                    <p class="text-xs font-medium text-slate-600">{{ item.bus.subtext }}</p>
                                </div>
                            </div>
                            <!-- second div -->
                            <div class="mt-2 flex justify-between items-center ">
                                <div class="w-fit px-2 py-1 bg-blue-800 rounded-md flex justify-center items-center">
                                    <svg class="h-3 fill-yellow-400" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.49999 0L6.79837 3.81966H11L7.6008 6.18034L8.8046 10L5.49999 7.63932L2.10081 10L3.39918 6.18034L0 3.81966H4.20162L5.49999 0Z"/>
                                    </svg>
                                    <p class="text-xs font-medium text-white pl-1 pt-[1px]">{{ item.bus.rating }}</p>
                                </div>
                                <div>
                                    <p class="font-semibold text-black">${{ item.price }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonContent,
  IonPage,
  IonHeader,
  onIonViewDidEnter,
} from "@ionic/vue";
import IonicPreference from '@/store/IonicPreference'
import { ref } from "vue"
import axios from '@/axios'
import { useRouter } from "vue-router"

const router = useRouter()
const availableBuses = ref([])
const pickupPoint = ref('')
const droppingPoint = ref('')
const searchDate = ref()
const searchedDateDayMonth = ref('')
const searchedDateWeekday = ref('')
const isLoading = ref(true)

function convertDateToDayMonth(dateString) {
  const [year, month, day] = dateString.split("-");
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", { day: "2-digit", month: "short" });
}
function convertDateToWeekday(dateString) {
  const date = new Date(dateString);
  const dayOfWeek = date.getDay();
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return weekdays[dayOfWeek];
}

async function getSearchPayload(){
    pickupPoint.value = await IonicPreference.getPreference('pickup_point')
    droppingPoint.value = await IonicPreference.getPreference('dropping_point')
    const date = await IonicPreference.getPreference('search_date')
    searchDate.value = date
    searchedDateDayMonth.value = convertDateToDayMonth(date)
    searchedDateWeekday.value = convertDateToWeekday(date)
}


function selectBus(item) {
    IonicPreference.setNewPreference('selected_bus', JSON.stringify(item));
    router.push({name: 'seat-selects'});
}

async function getAvailableBuses(){
    await axios.post('auth/getBusForRoute', {
        'boarding_point': pickupPoint.value,
        'dropping_point': droppingPoint.value,
        'date': searchDate.value
    })
    .then((response) => {
        availableBuses.value = response.data.buses;
        isLoading.value = false
    })
    .catch(function(error){
        isLoading.value = false;
    });
}

onIonViewDidEnter(async () => {
    // await axios.get('sanctum/csrf-cookie', {baseURL: 'https://busmein.flypomo.com/'}).then(async function(){
        await getSearchPayload()
        await getAvailableBuses()
    // })
})
</script>