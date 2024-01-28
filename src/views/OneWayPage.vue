<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <div class="flex flex-col justify-center items-center">
            <div class="w-full border-[1px] border-b-slate-600 flex  justify-between items-end pb-2 px-4 pt-4">
                <div class="flex items-center gap-3">
                    <!-- back arrow -->
                    <button>
                        <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.939337 10.9393C0.35355 11.5251 0.35355 12.4749 0.939337 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939337 10.9393ZM3.3421 10.5L2 10.5V13.5L3.3421 13.5V10.5Z" fill="black"/>
                        </svg>
                    </button>
                    <!-- details -->
                    <div class="block">
                            <div class="flex items-center gap-3">
                                <p class="text-[20px] font-[800] text-slate-800">Delhi</p>
                                    <div class="w-[17px] h-2 mb-2">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.8839 10.8839C19.372 10.3957 19.372 9.60427 18.8839 9.11612L10.9289 1.16117C10.4408 0.67301 9.6493 0.67301 9.16115 1.16117C8.67299 1.64932 8.67299 2.44078 9.16115 2.92893L16.2322 10L9.16115 17.0711C8.67299 17.5592 8.67299 18.3507 9.16115 18.8388C9.6493 19.327 10.4408 19.327 10.9289 18.8388L18.8839 10.8839ZM0.552612 11.25L18 11.25V8.75L0.552612 8.75L0.552612 11.25Z" fill="#D9D9D9"/>
                                        </svg>
                                    </div>
                                <p class="text-[20px] font-[800] text-slate-800">Pune</p>
                            </div>
                            <div>
                                <p class="text-[13px] font-[500] text-slate-600">10 Buses</p>
                            </div>
                    </div>
                </div>
                <button class="flex flex-col items-center">
                    <div class="bg-blue-700 rounded-full flex justify-center items-center px-3 py-2">
                        <p class="text-[11px] font-[700] text-white">15 Jan</p>
                    </div>
                    <p class="text-[10px] font-[600] text-slate-600">Mon</p>
                </button>
            </div>
            <div class="flex justify-center items-center gap-4 py-2">
                <!-- another -->
                <button>
                    <div class="rounded-lg shadow-lg flex justify-center items-center gap-1 px-2 py-1 border-[1px] border-slate-600">
                    <svg width="23" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.89443 15.5976C9.5721 15.5976 9.24977 15.5269 8.95675 15.3767C8.36094 15.0762 7.99954 14.5283 7.99954 13.9097V11.1878C7.99954 11.0199 7.85303 10.6929 7.70652 10.525L5.58698 8.51015C5.18652 8.14783 4.88373 7.51155 4.88373 7.0255V5.85015C4.88373 4.86922 5.70419 4.10922 6.74931 4.10922H14.2409C15.2665 4.10922 16.1065 4.86922 16.1065 5.79713V6.92829C16.1065 7.5469 15.7158 8.22736 15.3251 8.58085L12.854 10.5604C12.6977 10.6841 12.5316 10.9934 12.5316 11.2497V13.459C12.5316 14.0157 12.1605 14.6343 11.6623 14.8995L10.8907 15.3502C10.5879 15.5181 10.2461 15.5976 9.89443 15.5976ZM6.74931 5.4348C6.51489 5.4348 6.34884 5.61155 6.34884 5.85015V7.0255C6.34884 7.14038 6.48559 7.44085 6.64187 7.58225L8.81024 9.65015C9.14233 10.0302 9.46466 10.6399 9.46466 11.1878V13.9097C9.46466 14.0864 9.59163 14.1836 9.66977 14.219C9.77722 14.272 9.95303 14.3074 10.1093 14.219L10.8907 13.7595C10.9688 13.7064 11.0665 13.5297 11.0665 13.4413V11.232C11.0665 10.6046 11.4084 9.90643 11.8968 9.54411L14.3191 7.59992C14.4461 7.48504 14.6414 7.13155 14.6414 6.91062V5.79713C14.6414 5.60271 14.4558 5.4348 14.2409 5.4348H6.74931Z" fill="#292D32"/>
                        <path d="M13.4302 19H7.56977C2.26605 19 0 16.9498 0 12.1512V6.84884C0 2.05023 2.26605 0 7.56977 0H13.4302C18.734 0 21 2.05023 21 6.84884V12.1512C21 16.9498 18.734 19 13.4302 19ZM7.56977 1.32558C3.06698 1.32558 1.46512 2.77488 1.46512 6.84884V12.1512C1.46512 16.2251 3.06698 17.6744 7.56977 17.6744H13.4302C17.933 17.6744 19.5349 16.2251 19.5349 12.1512V6.84884C19.5349 2.77488 17.933 1.32558 13.4302 1.32558H7.56977Z" fill="#292D32"/>
                    </svg>
                    <!-- text -->
                    <p class="text-[15px] font-[500] text-black">Filter</p>
                </div>
                </button>
                <!-- another -->
                <button>
                    <div class="rounded-lg shadow-lg flex justify-center items-center gap-1 px-2 py-1 border-[1px] border-slate-600">
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H16M4 6H13M7.75 11H9.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    <!-- text -->
                    <p class="text-[15px] font-[500] text-black">Sort</p>
                </div>
                </button>
                 <!-- another -->
                 <button>
                    <div class="rounded-lg shadow-lg flex justify-center items-center gap-1 px-2 py-1 border-[1px] border-slate-600">
                    <svg width="23" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.89443 15.5976C9.5721 15.5976 9.24977 15.5269 8.95675 15.3767C8.36094 15.0762 7.99954 14.5283 7.99954 13.9097V11.1878C7.99954 11.0199 7.85303 10.6929 7.70652 10.525L5.58698 8.51015C5.18652 8.14783 4.88373 7.51155 4.88373 7.0255V5.85015C4.88373 4.86922 5.70419 4.10922 6.74931 4.10922H14.2409C15.2665 4.10922 16.1065 4.86922 16.1065 5.79713V6.92829C16.1065 7.5469 15.7158 8.22736 15.3251 8.58085L12.854 10.5604C12.6977 10.6841 12.5316 10.9934 12.5316 11.2497V13.459C12.5316 14.0157 12.1605 14.6343 11.6623 14.8995L10.8907 15.3502C10.5879 15.5181 10.2461 15.5976 9.89443 15.5976ZM6.74931 5.4348C6.51489 5.4348 6.34884 5.61155 6.34884 5.85015V7.0255C6.34884 7.14038 6.48559 7.44085 6.64187 7.58225L8.81024 9.65015C9.14233 10.0302 9.46466 10.6399 9.46466 11.1878V13.9097C9.46466 14.0864 9.59163 14.1836 9.66977 14.219C9.77722 14.272 9.95303 14.3074 10.1093 14.219L10.8907 13.7595C10.9688 13.7064 11.0665 13.5297 11.0665 13.4413V11.232C11.0665 10.6046 11.4084 9.90643 11.8968 9.54411L14.3191 7.59992C14.4461 7.48504 14.6414 7.13155 14.6414 6.91062V5.79713C14.6414 5.60271 14.4558 5.4348 14.2409 5.4348H6.74931Z" fill="#292D32"/>
                        <path d="M13.4302 19H7.56977C2.26605 19 0 16.9498 0 12.1512V6.84884C0 2.05023 2.26605 0 7.56977 0H13.4302C18.734 0 21 2.05023 21 6.84884V12.1512C21 16.9498 18.734 19 13.4302 19ZM7.56977 1.32558C3.06698 1.32558 1.46512 2.77488 1.46512 6.84884V12.1512C1.46512 16.2251 3.06698 17.6744 7.56977 17.6744H13.4302C17.933 17.6744 19.5349 16.2251 19.5349 12.1512V6.84884C19.5349 2.77488 17.933 1.32558 13.4302 1.32558H7.56977Z" fill="#292D32"/>
                    </svg>
                    <!-- text -->
                    <p class="text-[15px] font-[500] text-black">Filter</p>
                </div>
                </button>
                <!-- another -->
                <button>
                    <div class="rounded-lg shadow-lg flex justify-center items-center gap-1 px-2 py-1 border-[1px] border-slate-600">
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H16M4 6H13M7.75 11H9.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    <!-- text -->
                    <p class="text-[15px] font-[500] text-black">Sort</p>
                </div>
                </button>
            </div>
                                
                              
            <!-- contianer -->
            <div class="w-full sm:px-10 px-4">
                <!-- each one -->
                <a href="">
                    <div class="shadow-lg shadow-indigo-200 rounded-xl px-4 py-2 mt-6">
                        <div class="border-b-[1px] border-slate-600 border-dashed px-2 py-1">
                            <div class="flex justify-between ">
                                <div class="">
                                    <div class="flex justify-center items-center gap-3">
                                        <p class="sm:text-[25px] text-[15px]  font-[800] text-black">12:00</p>
                                        <p class="sm:text-[25px] text-[15px] font-[800] text-black">12:00</p>
                                    </div>
                                    <div class="flex justify-between items-center gap-3">
                                        <p class="sm:text-[15px] text-[9px] font-[600] text-slate-600">6h 10m </p>
                                        <p class="sm:text-[15px] text-[9px] font-[600] text-slate-600">6h 10m </p>
                                    </div>
                                </div>
                                <div class="flex justify-center items-center">
                                    <div class=" bg-[#0223B963] rounded-md flex justify-center items-center py-1 px-3">
                                        <p class="sm:text-[15px] text-[9px] font-[700] text-[#0223B9]">CHEAPEST</p>
                                    </div>
                                </div>
                            </div>
                            <!-- bus details -->
                            <div class="pt-2">
                                <p class="sm:text-[25px] text-[15px] font-[700] text-black">Chartered Bus - HGS</p>
                                <p class="sm:text-[15px] text-[9px] font-[500] text-slate-600">Volvo Multi Luxury Bus | Sleeper</p>
                            </div>
                        </div>
                        <!-- second div -->
                        <div class="flex justify-between items-center ">
                            <div class="w-[36px] h-[17px] bg-blue-800 rounded-md flex justify-center items-center ">
                                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.49999 0L6.79837 3.81966H11L7.6008 6.18034L8.8046 10L5.49999 7.63932L2.10081 10L3.39918 6.18034L0 3.81966H4.20162L5.49999 0Z" fill="#FFE600"/>
                                </svg>
                                <p class="text-[9px] font-[500] text-white pl-1 pt-[1px]">4.5</p>
                            </div>
                            <div>
                                <p class="font-[700] text-[15px] text-black">$120</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div class="shadow-lg shadow-indigo-200 rounded-xl px-4 py-2 mt-6">
                        <div class="border-b-[1px] border-slate-600 border-dashed px-2 py-1">
                            <div class="flex justify-between ">
                                <div class="">
                                    <div class="flex justify-center items-center gap-3">
                                        <p class="sm:text-[25px] text-[15px]  font-[800] text-black">12:00</p>
                                        <p class="sm:text-[25px] text-[15px] font-[800] text-black">12:00</p>
                                    </div>
                                    <div class="flex justify-between items-center gap-3">
                                        <p class="sm:text-[15px] text-[9px] font-[600] text-slate-600">6h 10m </p>
                                        <p class="sm:text-[15px] text-[9px] font-[600] text-slate-600">6h 10m </p>
                                    </div>
                                </div>
                                <div class="flex justify-center items-center">
                                    <div class=" bg-[#1baaf256] rounded-md flex justify-center items-center py-1 px-3">
                                        <p class="sm:text-[15px] text-[9px] font-[700] text-[#1BABF2]">FASTEST</p>
                                    </div>
                                </div>
                            </div>
                            <!-- bus details -->
                            <div class="pt-2">
                                <p class="sm:text-[25px] text-[15px] font-[700] text-black">Chartered Bus - HGS</p>
                                <p class="sm:text-[15px] text-[9px] font-[500] text-slate-600">Volvo Multi Luxury Bus | Sleeper</p>
                            </div>
                        </div>
                        <!-- second div -->
                        <div class="flex justify-between items-center ">
                            <div class="w-[36px] h-[17px] bg-blue-800 rounded-md flex justify-center items-center ">
                                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.49999 0L6.79837 3.81966H11L7.6008 6.18034L8.8046 10L5.49999 7.63932L2.10081 10L3.39918 6.18034L0 3.81966H4.20162L5.49999 0Z" fill="#FFE600"/>
                                </svg>
                                <p class="text-[9px] font-[500] text-white pl-1 pt-[1px]">4.5</p>
                            </div>
                            <div>
                                <p class="font-[700] text-[15px] text-black">$120</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div class="shadow-lg shadow-indigo-200 rounded-xl px-4 py-2 mt-6">
                        <div class="border-b-[1px] border-slate-600 border-dashed px-2 py-1">
                            <div class="flex justify-between ">
                                <div class="">
                                    <div class="flex justify-center items-center gap-3">
                                        <p class="sm:text-[25px] text-[15px]  font-[800] text-black">12:00</p>
                                        <p class="sm:text-[25px] text-[15px] font-[800] text-black">12:00</p>
                                    </div>
                                    <div class="flex justify-between items-center gap-3">
                                        <p class="sm:text-[15px] text-[9px] font-[600] text-slate-600">6h 10m </p>
                                        <p class="sm:text-[15px] text-[9px] font-[600] text-slate-600">6h 10m </p>
                                    </div>
                                </div>
                                <div class="flex justify-center items-center">
                                    <div class="bg-[#ed525a3f] rounded-md flex justify-center items-center py-1 px-3">
                                        <p class="sm:text-[15px] text-[9px] font-[700] text-[#ED5259]">MODERATE</p>
                                    </div>
                                </div>
                            </div>
                            <!-- bus details -->
                            <div class="pt-2">
                                <p class="sm:text-[25px] text-[15px] font-[700] text-black">Chartered Bus - HGS</p>
                                <p class="sm:text-[15px] text-[9px] font-[500] text-slate-600">Volvo Multi Luxury Bus | Sleeper</p>
                            </div>
                        </div>
                        <!-- second div -->
                        <div class="flex justify-between items-center ">
                            <div class="w-[36px] h-[17px] bg-blue-800 rounded-md flex justify-center items-center ">
                                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.49999 0L6.79837 3.81966H11L7.6008 6.18034L8.8046 10L5.49999 7.63932L2.10081 10L3.39918 6.18034L0 3.81966H4.20162L5.49999 0Z" fill="#FFE600"/>
                                </svg>
                                <p class="text-[9px] font-[500] text-white pl-1 pt-[1px]">4.5</p>
                            </div>
                            <div>
                                <p class="font-[700] text-[15px] text-black">$120</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </ion-content>
  </ion-page>
</template>