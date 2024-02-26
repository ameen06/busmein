<template>
    <ion-page class="bg-slate-100">
      <ion-header class="bg-white shadow-none" :translucent="false">
        <div class="w-full border-b border-gray-300 flex items-center gap-4 px-4 py-4">
          <div class="w-fit h-6">
            <button v-on:click="$router.go(-1)">
              <svg class="h-6 fill-black" viewBox="0 0 14 24">
                <path d="M0.939337 10.9393C0.35355 11.5251 0.35355 12.4749 0.939337 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939337 10.9393ZM3.3421 10.5L2 10.5V13.5L3.3421 13.5V10.5Z"/>
              </svg>
            </button>
          </div>
          <IonTitle class="p-0 m-0 text-xl font-extrabold text-black">My Bookings</IonTitle>
        </div>
      </ion-header>
      <ion-content :fullscreen="true">
        <div class="w-full h-full bg-slate-200 flex flex-col justify-center items-center">
          <!-- ticket details -->
          <div class="w-full max-w-xs bg-white rounded-2xl mt-7 px-4 relative bg-slate-00">
            <div class="mt-6">
              <img src="https://ik.imagekit.io/k4cixy45r/assets/busmein-logo_S4V_D21jj.png?updatedAt=1706453127454" class="h-6" alt="">
            </div>
            <!-- ticket -->
            <div class="flex flex-col items-center mb-2">
              <div class="w-full border-b border-gray-400 border-dashed pb-4 mt-7">
                <div class="flex justify-between py-1">
                <div class="flex flex-col">
                  <p class="text-[12px] font-[600] text-blue-900">Delhi</p>
                  <p class="text-[11px] font-[400] text-slate-500">Jan 17, 12:00am</p>
                </div>
                <!-- middle svg -->
                <div class="flex justify-center items-center">
                  <!-- line svg -->
                  <svg width="34" height="4" viewBox="0 0 36 4" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <svg width="34" height="4" viewBox="0 0 36 4" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </div>
            <!-- passenger details -->
            <div class="absolute top-[340px] left-0  w-[22px] h-[26px] bg-slate-200  rounded-r-full"></div>
            <div class="absolute top-[340px] right-0 w-[22px] h-[26px] bg-slate-200 rounded-l-full"></div>
            
            <div class="w-full border-b border-dashed border-gray-400 p-4">
              <div class="flex flex-col gap-5">
                <div class="flex justify-between gap-4">
                  <div>
                    <p class="text-[10px] font-[400] text-slate-500">Passengers</p>
                    <p class="text-[11px] font-[500] text-black">2 Adults</p>
                  </div>
                  <div>
                    <p class="text-[10px] font-[400] text-slate-500">Seat no.</p>
                    <p class="text-[11px] font-[500] text-black">S11,W10</p>
                  </div>
                  <div>
                    <p class="text-[10px] font-[400] text-slate-500">Ticket no.</p>
                    <p class="text-[11px] font-[500] text-black">2WLd94</p>
                  </div>
                </div>
                <div class="flex justify-between gap-4">
                  <div>
                    <p class="text-[10px] font-[400] text-slate-500">Passenger name</p>
                    <p class="text-[11px] font-[500] text-black">demo</p>
                  </div>
                  <div>
                    <p class="text-[10px] font-[400] text-slate-500">Ticket fare</p>
                    <p class="text-[11px] font-[500] text-black">$100</p>
                  </div>
                  <div>
                    <p class="text-[10px] font-[400] text-slate-500">Rest stops</p>
                    <p class="text-[11px] font-[500] text-black">1 Stop</p>
                  </div>
                </div>

                <div class="text-center mt-8 mb-6">
                  <p class="text-[12px] font-[500]">Ticket Status : CONFIRMED</p>
                </div>
              </div>
             
            </div>
            <div class="w-full  flex justify-center items-center py-7">
              <svg class="h-16 fill-gray-800" viewBox="0 0 184 70" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0.624023H5.2858V69.3748H0V0.624023ZM8.52092 69.3748H11.4968V0.624023H8.52092V69.3748ZM13.6417 69.3748H16.6117V0.624023H13.6417V69.3748ZM20.5186 69.3748H27.0242V0.624023H20.5186V69.3748ZM32.2334 69.3748H35.4862V0.624023H32.2334V69.3748ZM40.5303 69.3748H54.013V0.624023H40.5303V69.3748ZM75.6629 69.3748H80.0943V0.624023H75.6629V69.3748ZM83.9599 0.624023V69.3748H90V0.624023H83.9599ZM59.4225 69.3748H62.3217V0.624023H59.4225V69.3748ZM66.4761 69.3748H69.3754V0.624023H66.4761V69.3748Z"/>
                <path d="M184 69.375L178.714 69.375L178.714 0.624267L184 0.624268L184 69.375ZM175.479 0.624267L172.503 0.624267L172.503 69.375L175.479 69.375L175.479 0.624267ZM170.358 0.624266L167.388 0.624266L167.388 69.375L170.358 69.375L170.358 0.624266ZM163.481 0.624266L156.976 0.624265L156.976 69.375L163.481 69.375L163.481 0.624266ZM151.767 0.624265L148.514 0.624264L148.514 69.375L151.767 69.375L151.767 0.624265ZM143.47 0.624264L129.987 0.624263L129.987 69.375L143.47 69.375L143.47 0.624264ZM108.337 0.624261L103.906 0.624261L103.906 69.375L108.337 69.375L108.337 0.624261ZM100.04 69.375L100.04 0.62426L94 0.62426L94 69.375L100.04 69.375ZM124.577 0.624262L121.678 0.624262L121.678 69.375L124.577 69.375L124.577 0.624262ZM117.524 0.624262L114.625 0.624262L114.625 69.375L117.524 69.375L117.524 0.624262Z"/>
              </svg>
            </div>
          </div>

          <!-- track bus -->
          <router-link :to="{name: 'home'}" class="w-full max-w-xs mx-auto bg-blue-900 rounded-lg flex justify-center items-center my-10 py-2 px-4"> 
            <p class="text-base font-extrabold text-white">Go Home</p>
          </router-link>
        </div>
      </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonContent,
  IonPage,
  IonTitle,
  IonHeader
} from "@ionic/vue";
</script>