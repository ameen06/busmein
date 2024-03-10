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
                        <div class="flex items-center gap-3">
                            <p class="text-xl font-extrabold text-black capitalize">{{ pickupPoint }}</p>
                            <svg class="h-4 fill-gray-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.8839 10.8839C19.372 10.3957 19.372 9.60427 18.8839 9.11612L10.9289 1.16117C10.4408 0.67301 9.6493 0.67301 9.16115 1.16117C8.67299 1.64932 8.67299 2.44078 9.16115 2.92893L16.2322 10L9.16115 17.0711C8.67299 17.5592 8.67299 18.3507 9.16115 18.8388C9.6493 19.327 10.4408 19.327 10.9289 18.8388L18.8839 10.8839ZM0.552612 11.25L18 11.25V8.75L0.552612 8.75L0.552612 11.25Z"/>
                            </svg>
                            <p class="text-xl font-extrabold text-black capitalize">{{ droppingPoint }}</p>
                        </div>
                        <div>
                            <p class="text-sm text-slate-600">{{ items.length }} Buses</p>
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
            <div class="w-full min-h-screen bg-slate-100 p-6">
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
                    <!-- each one -->
                    <router-link v-for="item in items" :key="item.id" :to="{name: 'passenger-info-page'}" class="w-full">
                        <div class="shadow bg-white rounded-xl px-4 py-2 mt-3">
                            <div class="w-full border-b border-slate-400 border-dashed pb-3">
                                <div class="flex justify-between ">
                                    <div class="">
                                        <div class="">
                                            <p class="text-base font-bold text-black">12:00 - 6:00</p>
                                        </div>
                                        <div class="flex justify-between items-center gap-3">
                                            <p class="text-xs font-[600] text-slate-600">6h 10m</p>
                                            <p class="text-xs font-[600] text-slate-600">50 Seats</p>
                                        </div>
                                    </div>
                                    <div class="flex justify-center items-center">
                                        <div class="bg-blue-300 rounded-md flex justify-center items-center py-1 px-3">
                                            <p class="text-xs font-semibold text-blue-900">CHEAPEST</p>
                                        </div>
                                    </div>
                                </div>
                                <!-- bus details -->
                                <div class="pt-2">
                                    <p class="text-xl font-semibold text-black">Chartered Bus - HGS</p>
                                    <p class="text-xs font-medium text-slate-600">Volvo Multi Luxury Bus | Sleeper</p>
                                </div>
                            </div>
                            <!-- second div -->
                            <div class="mt-2 flex justify-between items-center ">
                                <div class="w-fit px-2 py-1 bg-blue-800 rounded-md flex justify-center items-center">
                                    <svg class="h-3 fill-yellow-400" viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.49999 0L6.79837 3.81966H11L7.6008 6.18034L8.8046 10L5.49999 7.63932L2.10081 10L3.39918 6.18034L0 3.81966H4.20162L5.49999 0Z"/>
                                    </svg>
                                    <p class="text-xs font-medium text-white pl-1 pt-[1px]">4.5</p>
                                </div>
                                <div>
                                    <p class="font-semibold text-black">$120</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
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

const items = [
    {
        id: '1',
        name: 'sdf'
    },
    {
        id: '2',
        name: 'sdf'
    },
    {
        id: '3',
        name: 'sdf'
    }
]
const pickupPoint = ref('')
const droppingPoint = ref('')
const searchedDateDayMonth = ref('')
const searchedDateWeekday = ref('')

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
    searchedDateDayMonth.value = convertDateToDayMonth(date)
    searchedDateWeekday.value = convertDateToWeekday(date)
}

onIonViewDidEnter(async () => {
  await getSearchPayload()
})
</script>