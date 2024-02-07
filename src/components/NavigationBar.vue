<template>
<IonFooter class="bg-transparent shadow-none ion-padding">
    <div class="w-fit max-w-sm mx-auto rounded-full bg-blue-800 z-10 shadow-md p-0">
        <div class="w-full flex justify-between items-center gap-2 p-1.5">

        <router-link :to="{name: 'home'}" class="flex justify-center items-center px-4 py-2 gap-2 rounded-full stroke-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 fill-transparent stroke-[2.5px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <p class="nav-link-text hidden font-semibold text-blue-800">Home</p>
        </router-link>

        <router-link :to="{name: 'active'}" class="flex justify-center items-center px-4 py-2 gap-2 rounded-full stroke-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 fill-transparent stroke-[1.8px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
            </svg>
            <p class="nav-link-text hidden font-semibold text-blue-800">Bookings</p>
        </router-link>

        <router-link :to="{name: 'select-page'}" class="flex justify-center items-center px-4 py-2 gap-2 rounded-full stroke-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 fill-transparent stroke-[1.8px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <p class="nav-link-text hidden font-semibold text-blue-800">Profile</p>
        </router-link>
        
        </div>
    </div>
</IonFooter>
</template>

<script setup>
import { IonFooter } from "@ionic/vue";
</script>