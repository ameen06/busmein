<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <!-- menu bar -->
      <div class="absolute z-10 top-8 left-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
        >
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
        </svg>
      </div>
      <!-- menu ends -->
      <div class="flex justify-center">
        <div class="absolute top-[-175px] w-[550px] h-[550px] rounded-full bg-blue-800 shadow-2xl"></div>
        <div class="flex justify-center">
          <p class="absolute top-[67px] text-[20px] font-[800] text-white z-10">
            Book Your Bus Ticket
          </p>
          <div class="w-10/12 md:w-fit absolute top-[115px] h-[313px]  rounded-2xl bg-white shadow-xl flex flex-col items-center gap-4 p-5 pt-7">
            <!-- pickup point -->
            <div className=" w-[258px] h-[48px] rounded-md  bg-slate-200">
              <div class="h-full flex justify-center items-center gap-2">
                <!-- svg -->
                <div class="flex justify-center border-r-2 border-slate-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style="fill: rgba(2, 35, 185, 1); transform: ; msfilter: " >
                    <path d="M21 6.021c.003-.146-.007-1.465-1.3-2.735C18.427 2.036 17.143 2 17 2H6.996c-.239 0-1.493.063-2.708 1.302C3.036 4.578 3 5.859 3 6v3H2v3h1v6c0 .734.406 1.373 1 1.721V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h10v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.277A1.99 1.99 0 0 0 21 18v-6h1V9h-1V6.021zM9 4h6v2H9V4zM6.5 18a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6.5 18zm4.5-5H5V8h6v5zm6.5 5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 17.5 18zm1.5-5h-6V8h6v5z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="24"
                    viewBox="0 0 24 24"
                    style="fill: rgba(2, 35, 185, 1); transform: ; msfilter:"
                  >
                    <circle cx="13" cy="4" r="2"></circle>
                    <path
                      d="M13.978 12.27c.245.368.611.647 1.031.787l2.675.892.633-1.896-2.675-.892-1.663-2.495a2.016 2.016 0 0 0-.769-.679l-1.434-.717a1.989 1.989 0 0 0-1.378-.149l-3.193.797a2.002 2.002 0 0 0-1.306 1.046l-1.794 3.589 1.789.895 1.794-3.589 2.223-.556-1.804 8.346-3.674 2.527 1.133 1.648 3.675-2.528c.421-.29.713-.725.82-1.225l.517-2.388 2.517 1.888.925 4.625 1.961-.393-.925-4.627a2 2 0 0 0-.762-1.206l-2.171-1.628.647-3.885 1.208 1.813z"
                    ></path>
                  </svg>
                </div>
                <!-- input -->
                <div>
                  <input
                    class="bg-slate-200 w-[167px]"
                    type="text"
                    placeholder="Pickup Point"
                  />
                </div>
              </div>
            </div>
            <!-- dropping -->
            <div className="w-[258px] h-[48px] rounded-md  bg-slate-200">
              <div class="h-full flex justify-center items-center gap-2">
                <div class="flex justify-center border-r-2 border-slate-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style="fill: rgba(2, 35, 185, 1); transform: ; msfilter: "
                  >
                    <path
                      d="M21 6.021c.003-.146-.007-1.465-1.3-2.735C18.427 2.036 17.143 2 17 2H6.996c-.239 0-1.493.063-2.708 1.302C3.036 4.578 3 5.859 3 6v3H2v3h1v6c0 .734.406 1.373 1 1.721V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h10v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.277A1.99 1.99 0 0 0 21 18v-6h1V9h-1V6.021zM9 4h6v2H9V4zM6.5 18a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6.5 18zm4.5-5H5V8h6v5zm6.5 5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 17.5 18zm1.5-5h-6V8h6v5z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="24"
                    viewBox="0 0 24 24"
                    style="
                      fill: rgba(2, 35, 185, 1);
                      transform: scaleX(-1);
                      msfilter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);
                    "
                  >
                    <circle cx="13" cy="4" r="2"></circle>
                    <path
                      d="M13.978 12.27c.245.368.611.647 1.031.787l2.675.892.633-1.896-2.675-.892-1.663-2.495a2.016 2.016 0 0 0-.769-.679l-1.434-.717a1.989 1.989 0 0 0-1.378-.149l-3.193.797a2.002 2.002 0 0 0-1.306 1.046l-1.794 3.589 1.789.895 1.794-3.589 2.223-.556-1.804 8.346-3.674 2.527 1.133 1.648 3.675-2.528c.421-.29.713-.725.82-1.225l.517-2.388 2.517 1.888.925 4.625 1.961-.393-.925-4.627a2 2 0 0 0-.762-1.206l-2.171-1.628.647-3.885 1.208 1.813z"
                    ></path>
                  </svg>
                </div>
                <!-- input -->
                <div>
                  <input
                    class="bg-slate-200 w-[167px]"
                    type="text"
                    placeholder="Dropping Point"
                  />
                </div>
              </div>
            </div>
            <!-- calender -->
            <div
              className=" w-[258px] h-[48px] rounded-md border-[1.5px] bg-slate-200"
            >
              <div class="h-full flex justify-center items-center gap-2">
                <div
                  class="flex justify-center border-r-2 border-slate-300 pr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    style="
                      fill: rgba(2, 35, 185, 1);
                      transform: scaleX(-1);
                      msfilter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);
                    "
                  >
                    <path
                      d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <input
                    class="bg-slate-200 w-[167px]"
                    type="text"
                    placeholder="Choose Date"
                  />
                </div>
              </div>
            </div>
            <!-- one/round -->
            <div class="absolute top-[215px]">
              <div class="flex justify-center gap-3">
                <div class="flex gap-1">
                  <input type="radio" />
                  <label>One Way</label>
                </div>
                <div class="flex gap-1">
                  <input type="radio" />
                  <label>Round Trip</label>
                </div>
              </div>
            </div>
            <!-- button -->
            <div
              className="w-[258px] h-[48px] rounded-md border-[1.5px] bg-blue-800 text-white font-[700] text-[24px] text-center pt-1 mt-6"
            >Search Buses
            </div>
          </div>
           <!-- offer -->
          <div class="absolute top-[443px] left-[22px]">
            <p className="text-[20px] font-[700]  text-blue-800 z-10">Offers</p>
            <p class="text-[13px] font-[400] text-blue-800 z-10">
              Get Best Deals With Great Offers
            </p>
            <div class="flex justify-center gap-2 mt-1">
              <div class="w-[178px] h-[105px] rounded-xl bg-slate-300"></div>
              <div class="w-[178px] h-[105px] rounded-xl bg-slate-300"></div>
            </div>
          </div>
          <!-- top destinations -->
          <div class="absolute top-[608px] left-[22px]">
            <p className="text-[20px] font-[700]  text-blue-800 z-10">
              Top Destination
            </p>
            <p class="text-[13px] font-[400] text-blue-800 z-10">
              Travel Through the city
            </p>
            <div class="flex justify-center gap-2 mt-1">
              <div class="w-[115px] h-[142px] rounded-xl bg-slate-300"></div>
              <div class="w-[115px] h-[142px] rounded-xl bg-slate-300"></div>
              <div class="w-[115px] h-[142px] rounded-xl bg-slate-300"></div>
            </div>
          </div>
        </div>
      </div>
    </ion-content>

    <!-- nav floating bar -->
    <NavigationBar />
  </ion-page>
</template>

<script setup>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFooter,
} from "@ionic/vue";
import NavigationBar from '@/components/NavigationBar.vue'
</script>
