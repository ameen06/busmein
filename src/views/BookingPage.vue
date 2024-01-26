<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <div class="flex flex-col justify-center items-center">
          <!-- header -->
          <div class="h-[105px] w-full border-b-[1px] border-slate-500 flex items-end pb-2">
            <p class="text-[20px] font-[800] text-black pl-7">Booking</p>
          </div>
          <!-- nav bar -->
          <div class="flex justify-center items-center gap-3 p-3">
            <div class="w-[115px] h-[30px] flex justify-center items-center bg-blue-800 rounded-full">
                <p class="text-[10px] font-[700] text-center text-white">ACTIVE</p>
            </div>
            <div class="w-[115px] h-[30px] flex justify-center items-center bg-white rounded-full">
                <p class="text-[10px] font-[700] text-center text-blue-800">COMPLETED</p>
            </div>
            <div class="w-[115px] h-[30px] flex justify-center items-center bg-white rounded-full">
                <p class="text-[10px] font-[700] text-center text-blue-800">CANCELLED</p>
            </div>
          </div>
          <!-- ticket container -->
          <div class="sticky w-full pt-3">
            <!-- ticket -->
            <div class="flex flex-col items-center mb-2 relative">
                <div class="absolute top-[55px] ml-[-345px] w-[16px] h-[22px] bg-white rounded-r-full "></div>
                <div class="absolute top-[55px] ml-[345px] w-[16px] h-[22px] bg-white rounded-l-full"></div>
                  <div class="w-[361px] h-[68px] bg-indigo-100 border-b-[1px] border-slate-700 border-dashed rounded-2xl flex justify-center items-center">
                    <div class="w-[276px] h-[40px] flex justify-between pt-1">
                    <div class="flex flex-col">
                      <p class="text-[12px] font-[600] text-blue-900">Delhi</p>
                      <p class="text-[11px] font-[400] text-slate-500">Jan 17, 12:00am</p>
                    </div>
                    <!-- middle svg -->
                    <div class="flex justify-center items-center">
                      <!-- line svg -->
                      <svg width="36" height="4" viewBox="0 0 36 4" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div class="w-[361px] h-[34px] bg-indigo-100 rounded-2xl">
                  <div class="flex justify-around pt-2">
                    <p class="text-[10px] font-[500] text-slate-500">Today</p>
                    <p class="text-[10px] font-[500] text-slate-500">1 Person</p>
                    <p class="text-[10px] font-[500] text-slate-500">$120</p>
                  </div>
                </div>
            </div>
          </div> 
            <!-- nav floating bar -->
          <div class="absolute top-[755px] w-[240px] h-[50px] rounded-full bg-blue-800 z-10 shadow-md px-2">
            <div class="h-full flex justify-between items-center px-2">
              <!-- Home -->
              <div class="flex justify-center items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style="fill: rgb(252, 252, 252); transform: ; msfilter: "
                >
                  <path
                    d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"
                  ></path>
                </svg>
              
              </div>
            
                <!-- ticket -->
                <div class="w-[100px] h-[40px] rounded-full bg-white flex justify-center items-center gap-1">
                  <div class="w-[24px] h-[24px]"> 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 512 512"
                    viewBox="0 0 512 512"
                    id="Ticket"
                  >
                    <path
                      d="M505.081,196.611c3.82,0,6.919-3.097,6.919-6.919V123.56c0-18.536-15.081-33.615-33.617-33.615H33.613
	C15.077,89.945,0,105.024,0,123.56v66.133c0,3.822,3.099,6.919,6.919,6.919c32.748,0,59.387,26.642,59.387,59.387
	s-26.64,59.387-59.387,59.387c-3.82,0-6.919,3.097-6.919,6.919v66.135c0,18.536,15.077,33.615,33.613,33.615h444.77
	c18.536,0,33.617-15.079,33.617-33.615v-66.135c0-3.822-3.099-6.919-6.919-6.919c-32.748,0-59.387-26.642-59.387-59.387
	S472.333,196.611,505.081,196.611z M431.856,255.999c0,38.043,29.162,69.403,66.306,72.901v59.541
	c0,10.905-8.874,19.777-19.779,19.777H174.297V375.94c0-3.822-3.099-6.919-6.919-6.919s-6.919,3.097-6.919,6.919v32.277H33.613
	c-10.905,0-19.775-8.872-19.775-19.777V328.9c37.144-3.498,66.306-34.858,66.306-72.901s-29.162-69.403-66.306-72.901V123.56
	c0-10.905,8.869-19.777,19.775-19.777H160.46v32.275c0,3.822,3.099,6.919,6.919,6.919s6.919-3.097,6.919-6.919v-32.275h304.086
	c10.905,0,19.779,8.872,19.779,19.777v59.538C461.018,186.596,431.856,217.956,431.856,255.999z M174.297,234.92v42.158
	c0,3.822-3.099,6.919-6.919,6.919s-6.919-3.097-6.919-6.919V234.92c0-3.822,3.099-6.919,6.919-6.919
	C171.198,228.001,174.297,231.098,174.297,234.92z M174.297,305.429v42.162c0,3.822-3.099,6.919-6.919,6.919
	s-6.919-3.097-6.919-6.919v-42.162c0-3.822,3.099-6.919,6.919-6.919C171.198,298.51,174.297,301.607,174.297,305.429z
	M174.297,164.409v42.16c0,3.822-3.099,6.919-6.919,6.919s-6.919-3.097-6.919-6.919v-42.16c0-3.822,3.099-6.919,6.919-6.919
	C171.198,157.49,174.297,160.587,174.297,164.409z M378.973,170.377c0,3.822-3.099,6.919-6.919,6.919H249.82
	c-3.82,0-6.919-3.097-6.919-6.919s3.099-6.919,6.919-6.919h122.234C375.874,163.458,378.973,166.555,378.973,170.377z
	M378.973,227.458c0,3.822-3.099,6.919-6.919,6.919H249.82c-3.82,0-6.919-3.097-6.919-6.919s3.099-6.919,6.919-6.919h122.234
	C375.874,220.539,378.973,223.636,378.973,227.458z M378.973,284.539c0,3.822-3.099,6.919-6.919,6.919H249.82
	c-3.82,0-6.919-3.097-6.919-6.919c0-3.822,3.099-6.919,6.919-6.919h122.234C375.874,277.62,378.973,280.717,378.973,284.539z
	M378.973,341.62c0,3.822-3.099,6.919-6.919,6.919H249.82c-3.82,0-6.919-3.097-6.919-6.919c0-3.822,3.099-6.919,6.919-6.919h122.234
	C375.874,334.702,378.973,337.798,378.973,341.62z"
                      fill="#0223B9"
                      class="color000000 svgShape"
                    ></path>
                  </svg>
                  </div>
                  <p class="text-[12px] font-[600] text-blue-900">Bookings</p>
                </div>
                <!-- user -->
                <div class="w-[20px] h-[20px] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style="
                      fill: rgba(255, 255, 255, 1);
                      transform: ;
                      msfilter: ;
                    "
                  >
                    <path
                      d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"
                    ></path>
                  </svg>
                </div>
              </div>
          </div>
        </div>
    </ion-content>
  </ion-page>
</template>