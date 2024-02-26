<template>
    <ion-page>
      <ion-content :fullscreen="true"> 
        <div class="h-screen flex flex-col justify-center items-center">
          <div class="flex flex-col  items-center">
            <div class="">
              <img src="https://img.freepik.com/free-vector/flight-booking-concept-illustration_114360-2413.jpg?w=740&t=st=1707356538~exp=1707357138~hmac=7805b8b33f91b30d1e2a053af4353e97fb91717619ac64a3cc5aac2f7f5a4c58" class="w-full max-w-sm mx-auto" alt=""/>
            </div>
            <p class="text-2xl text-black font-[600]">Booking Successful</p>
            <p class="max-w-xs text-sm text-gray-500 font-[400] px-3">Congratulations! Your Butler has been booked</p>
            <p class="max-w-xs text-sm text-gray-500 font-[400] px-7">the details has been send to</p>
            <p class="max-w-xs text-sm text-gray-900 font-[700] px-7 mb-7">+91-8375982542</p>
          </div>
          <router-link :to="{name: 'active'}" class="absolute top-[85%]">
            <div class=" bg-blue-800 px-16 py-2 rounded-full mx-auto"> 
              <p class="text-white">Go To Booking Details</p>
            </div>
          </router-link>
        </div>
    </ion-content>
  </ion-page>
</template>