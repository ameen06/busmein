<template>
<IonFooter class="bg-transparent shadow-none">
    <div class="w-fit mx-auto white z-10  p-0">
        <div class="w-full flex justify-between items-center gap-6 py-2">

        <router-link :to="{name: 'active'}" class="flex justify-center items-center rounded-full shadow-md">
            <div class="flex justify-center items-center bg-blue-800 rounded-full py-2 px-4 m-0">
                <p class="font-semibold text-center text-white">ACTIVE</p>
            </div>
        </router-link>

        <router-link :to="{name: 'completed'}" class="flex justify-center items-center  rounded-full shadow-md ">
            <div class="flex justify-center items-center bg-white rounded-full py-2 px-4 m-0">
                <p class="font-semibold text-center text-blue-800">COMPLETED</p>
            </div>
        </router-link>

        <router-link :to="{name: 'cancelled'}" class="flex justify-center items-center  rounded-full shadow-md">
            <div class=" flex justify-center items-center bg-white rounded-full py-2 px-4 m-0">
                <p class="font-semibold text-center text-blue-800">CANCELLED</p>
            </div>
        </router-link> 
        </div>
    </div>
</IonFooter>
</template>

<script setup>
import { IonFooter } from "@ionic/vue";
</script>