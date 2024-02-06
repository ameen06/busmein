<template>
<IonFooter class="bg-transparent shadow-none ion-padding">
    <div class="w-fit max-w-sm mx-auto rounded-full white z-10 shadow-md p-0">
        <div class="w-full flex justify-between items-center gap-4 py-1 px-2">

        <router-link :to="{name: 'active'}" class="flex justify-center items-center px-2  gap-2 rounded-full stroke-blue-900">
            <div class="nav-link-text flex justify-center items-center bg-blue-800 rounded-full py-2 px-4 m-0">
                <p class="text-[10px] font-extrabold text-center text-white">ACTIVE</p>
            </div>
        </router-link>

        <router-link :to="{name: 'completed'}" class="flex justify-center items-center px-2 gap-2 rounded-full stroke-white">
            <div class=" flex justify-center items-center bg-white rounded-full ">
                <p class="text-[10px] font-extrabold text-center text-blue-800">COMPLETED</p>
            </div>
        </router-link>

        <router-link :to="{name: 'cancelled'}" class="flex justify-center items-center px-2 gap-2 rounded-full stroke-white">
            <div class=" flex justify-center items-center bg-white rounded-full ">
                <p class="text-[10px] font-extrabold text-center text-blue-800">CANCELLED</p>
            </div>
        </router-link> 
        </div>
    </div>
</IonFooter>
</template>

<script setup>
import { IonFooter } from "@ionic/vue";
</script>