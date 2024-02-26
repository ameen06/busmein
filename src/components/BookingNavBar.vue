<template>
<nav class="w-full flex justify-between items-center gap-4" id="bookingsNav">
    <router-link :to="{name: 'active'}" class="w-full block text-blue-800 bg-white focus:bg-blue-800 font-medium rounded-xl text-sm px-4 py-2 focus:outline-none shadow border border-gray-200">
        ACTIVE
    </router-link>
    <router-link :to="{name: 'completed'}" class="w-full block text-blue-800 bg-white focus:bg-blue-800 font-medium rounded-xl text-sm px-4 py-2 focus:outline-none shadow border border-gray-200">
        COMPLETED
    </router-link> 
    <router-link :to="{name: 'cancelled'}" class="w-full block text-blue-800 bg-white focus:bg-blue-800 font-medium rounded-xl text-sm px-4 py-2 focus:outline-none shadow border border-gray-200">
        CANCELLED
    </router-link> 
</nav>
</template>

<script setup>
import { IonFooter } from "@ionic/vue";
</script>     
       