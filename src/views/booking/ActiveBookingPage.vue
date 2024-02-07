<template>
  <ion-page>
    <ion-content :fullscreen="true">
        <div class="flex flex-col justify-center items-center">
          <!-- header -->
          <div class="w-full border-b-[1px] border-slate-500 flex items-end gap-2 pb-2 px-3 pt-10">
            <svg width="14" height="24" viewBox="0 0 14 24">
            <path d="M0.939337 10.9393C0.35355 11.5251 0.35355 12.4749 0.939337 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939337 10.9393ZM3.3421 10.5L2 10.5V13.5L3.3421 13.5V10.5Z" fill="black"/></svg>
            <p class="text-[20px] font-extrabold text-black ">Booking</p>
          </div>
          <!-- nav bar -->
          <div class="flex justify-center items-center">
            <BookingNavBar />
          </div>
          <!-- ticket container -->
          <div class="sticky w-full pt-3">
            <!-- ticket -->
            <div class="flex flex-col items-center mb-2 relative">
                <div class="absolute top-[55px]  ml-[-345px] w-[16px] h-[22px] bg-white rounded-r-full"></div>
                <div class="absolute top-[55px]  ml-[345px]  w-[16px] h-[22px] bg-white rounded-l-full"></div>
                <div class=" bg-indigo-50 border-b-[1px] border-slate-700 border-dashed rounded-2xl flex justify-center items-center px-10 py-3 ">
                    <div class="flex justify-between py-1 px-2">
                      <div class="flex flex-col">
                        <p class="text-[12px] font-[600] text-blue-900">Delhi</p>
                        <p class="text-[11px] font-[400] text-slate-500">Jan 17, 12:00am</p>
                      </div>
                    <!-- middle svg -->
                    <div class="flex justify-center items-center">
                      <!-- line svg -->
                      <svg width="36" height="4" viewBox="0 0 36 4">
                      <path d="M5 2L35 2" stroke="#C7C7C7" stroke-width="0.5" stroke-linecap="round" stroke-dasharray="3 3"/>
                      <circle cx="2" cy="2" r="1.5" stroke="#C7C7C7"/>
                      </svg>
                      <!-- bus svg -->
                      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.4">
                      <rect width="33" height="33" fill="bg-indigo-100"/>
                      <path d="M16.5526 9.90137C15.355 9.90034 13.7015 10.2424 13.0195 10.5294C12.3331 10.8127 11.8769 11.0976 11.7346 11.8071L11.2207 15.7613V21.2073H12.1059V22.0567C12.1052 23.0997 13.6283 23.0997 13.6263 22.0567V21.2073H19.372V22.0567C19.3731 23.0997 20.8962 23.0997 20.8993 22.0567V21.2073H21.7773V15.7613L21.2634 11.8071C21.1245 11.0976 20.6683 10.8127 19.986 10.5294C19.2999 10.2424 17.6468 9.90034 16.4526 9.90137" fill="#0223B9"/>
                      <path d="M20.1366 19.5005C20.5385 19.497 20.8657 19.1698 20.8647 18.7652C20.8657 18.363 20.5385 18.0357 20.1366 18.0371C19.7314 18.0357 19.4041 18.363 19.4014 18.7652C19.4041 19.1698 19.7314 19.497 20.1366 19.5005Z" fill="#F0F1F3"/>
                      <path d="M12.87 19.5014C12.4641 19.498 12.1372 19.1707 12.1348 18.7662C12.1372 18.364 12.4641 18.0367 12.87 18.0381C13.2712 18.0367 13.5985 18.364 13.5981 18.7662C13.5985 19.1707 13.2712 19.498 12.87 19.5014Z" fill="#F0F1F3"/>
                      <path d="M16.4464 11.5425H14.3265C13.9016 11.5391 13.9016 10.8976 14.3265 10.9004H18.6732C19.1012 10.8976 19.1012 11.5391 18.6732 11.5425H16.4464Z" fill="#F0F1F3"/>
                      <path d="M16.4458 12.1846H13.1768C12.7244 12.1863 12.6061 12.4159 12.5484 12.7628L12.1486 15.632C12.1149 15.9043 12.1943 16.1769 12.5769 16.1745H20.4285C20.8073 16.1769 20.8867 15.9043 20.8496 15.632L20.4498 12.7628C20.3955 12.4159 20.2773 12.1863 19.829 12.1846H16.4458Z" fill="#F0F1F3"/>
                      </g>
                      </svg>
                      <!-- line svg -->
                      <svg width="36" height="4" viewBox="0 0 36 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31 2H1" stroke="#C7C7C7" stroke-width="0.5" stroke-linecap="round" stroke-dasharray="3 3"/>
                      <circle cx="34" cy="2" r="1.5" transform="rotate(-180 34 2)" stroke="#C7C7C7"/>
                      </svg>
                    </div>
                    <div class="flex flex-col items-end">
                      <p class="text-[12px] font-[600] text-blue-900 ">Delhi</p>
                      <p class="text-[11px] font-[400] text-slate-500">Jan 17, 12:00am</p>
                    </div>
                  </div>
                </div>
                <div class=" bg-indigo-50 rounded-2xl flex justify-around gap-16 px-12 py-2 ">
                    <p class="text-[10px]  font-[500] text-slate-500 mx-2">Today</p>
                    <p class="text-[10px]  font-[500] text-slate-500 mx-2">1 Person</p>
                    <p class="text-[10px]  font-[500] text-slate-500 mx-2">$120</p>
                </div>
            </div>
          </div>
          <!-- no active booking page -->
          <div class="flex flex-col justify-center items-center">
            <p class="text-2xl text-blue-800 font-[600]">No Active Booking Found</p>
            <p class="max-w-xs text-sm text-gray-500 font-[400] px-3">We Can’t Found any Booking Made by you . But </p>
            <p class="max-w-xs text-sm text-gray-500 font-[400] px-7 mb-7">you can still Make Booking </p>
            <div class="px-5 py-1 border-gray-300 border-[2px] rounded-lg">
              <a href="/" class="text-md font-[600]">Book Ticket</a>
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
} from "@ionic/vue";
import NavigationBar from '@/components/NavigationBar.vue'
import BookingNavBar from '@/components/BookingNavBar.vue'
</script>