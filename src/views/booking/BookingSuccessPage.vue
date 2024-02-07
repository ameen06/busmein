<template>
    <ion-page>
      <ion-content :fullscreen="true"> 
       <div class="h-screen flex flex-col justify-center items-center">
        <div class="flex flex-col  items-center">
          <div class="h-[250px] w-[250px] bg-gray-300"></div>
            <p class="text-2xl text-black font-[600] mt-5">Booking Successful</p>
            <p class="max-w-xs text-sm text-gray-500 font-[400] px-3">Congratulations! Your Butler has been booked</p>
            <p class="max-w-xs text-sm text-gray-500 font-[400] px-7">the details has been send to</p>
            <p class="max-w-xs text-sm text-gray-900 font-[700] px-7 mb-7">+91-8375982542</p>
        </div>
        <div class="absolute top-[85%] max-w-sm bg-blue-800 px-16 py-2 rounded-full mx-auto"> 
          <p class="text-white">Go To Booking Details</p>
        </div>
       </div>
    </ion-content>
  </ion-page>
</template>