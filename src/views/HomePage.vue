<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div  class="absolute z-10 top-[47px] left-[19px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg> </div>
      <div className="flex justify-center">
        <div
          className="absolute top-[-175px]  w-[550px] h-[550px] rounded-full bg-blue-800 shadow-2xl"
        ></div>
        <div className="flex justify-center">
          <p class="absolute top-[67px] text-[20px] font-[800] text-white z-10">
            Book Your Bus Ticket
          </p>

          <div
            className="absolute w-[306px] h-[313px] top-[115px] rounded-2xl bg-white shadow-xl"
          >
            <div class="flex justify-center">
              <!-- pickup point -->
              <div  className="absolute top-[30px] w-[258px] h-[48px] rounded-md  bg-slate-200"
              >
            <div class="h-full flex justify-center items-center gap-2">
              <!-- svg -->
            <div class="flex justify-center border-r-2 border-slate-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(2, 35, 185, 1);transform: ;msFilter:;"><path d="M21 6.021c.003-.146-.007-1.465-1.3-2.735C18.427 2.036 17.143 2 17 2H6.996c-.239 0-1.493.063-2.708 1.302C3.036 4.578 3 5.859 3 6v3H2v3h1v6c0 .734.406 1.373 1 1.721V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h10v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.277A1.99 1.99 0 0 0 21 18v-6h1V9h-1V6.021zM9 4h6v2H9V4zM6.5 18a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6.5 18zm4.5-5H5V8h6v5zm6.5 5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 17.5 18zm1.5-5h-6V8h6v5z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" style="fill: rgba(2, 35, 185, 1);transform: ;msFilter:;"><circle cx="13" cy="4" r="2"></circle><path d="M13.978 12.27c.245.368.611.647 1.031.787l2.675.892.633-1.896-2.675-.892-1.663-2.495a2.016 2.016 0 0 0-.769-.679l-1.434-.717a1.989 1.989 0 0 0-1.378-.149l-3.193.797a2.002 2.002 0 0 0-1.306 1.046l-1.794 3.589 1.789.895 1.794-3.589 2.223-.556-1.804 8.346-3.674 2.527 1.133 1.648 3.675-2.528c.421-.29.713-.725.82-1.225l.517-2.388 2.517 1.888.925 4.625 1.961-.393-.925-4.627a2 2 0 0 0-.762-1.206l-2.171-1.628.647-3.885 1.208 1.813z"></path></svg>
            </div>
            <!-- input -->
            <div>
              <input class="bg-slate-200 w-[167px]" type="text" placeholder="Pickup Point">
            </div>
            </div>
          </div>
              <!-- dropping -->
              <div className="absolute top-[93px] w-[258px] h-[48px] rounded-md  bg-slate-200"
              >
              <div class="h-full flex justify-center items-center gap-2">
                <div class="flex justify-center border-r-2 border-slate-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(2, 35, 185, 1);transform: ;msFilter:;"><path d="M21 6.021c.003-.146-.007-1.465-1.3-2.735C18.427 2.036 17.143 2 17 2H6.996c-.239 0-1.493.063-2.708 1.302C3.036 4.578 3 5.859 3 6v3H2v3h1v6c0 .734.406 1.373 1 1.721V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h10v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.277A1.99 1.99 0 0 0 21 18v-6h1V9h-1V6.021zM9 4h6v2H9V4zM6.5 18a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6.5 18zm4.5-5H5V8h6v5zm6.5 5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 17.5 18zm1.5-5h-6V8h6v5z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg"  width="18" height="24" viewBox="0 0 24 24" style="fill: rgba(2, 35, 185, 1);transform: scaleX(-1);msFilter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);"><circle cx="13" cy="4" r="2"></circle><path d="M13.978 12.27c.245.368.611.647 1.031.787l2.675.892.633-1.896-2.675-.892-1.663-2.495a2.016 2.016 0 0 0-.769-.679l-1.434-.717a1.989 1.989 0 0 0-1.378-.149l-3.193.797a2.002 2.002 0 0 0-1.306 1.046l-1.794 3.589 1.789.895 1.794-3.589 2.223-.556-1.804 8.346-3.674 2.527 1.133 1.648 3.675-2.528c.421-.29.713-.725.82-1.225l.517-2.388 2.517 1.888.925 4.625 1.961-.393-.925-4.627a2 2 0 0 0-.762-1.206l-2.171-1.628.647-3.885 1.208 1.813z"></path></svg>
              </div>
               <!-- input -->
              <div>
              <input class="bg-slate-200 w-[167px]" type="text" placeholder="Dropping Point">
            </div>
              </div>
            </div>
              <!-- calender -->
              <div className="absolute top-[156px] w-[258px] h-[48px] rounded-md border-[1.5px] bg-slate-200"
              >
              <div class="h-full flex justify-center items-center gap-2">
                <div class="flex justify-center border-r-2 border-slate-300 pr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" style="fill: rgba(2, 35, 185, 1);transform: scaleX(-1);msFilter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);"><path d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z"></path></svg>
                </div>
                <div>
                  <input class="bg-slate-200 w-[167px]" type="text" placeholder="Choose Date">
                </div>
              </div>
           </div>
           <!-- one/round -->
           <div class="absolute top-[217px]">
            <div class="flex justify-center gap-3">
              <div class="flex gap-1">
              <input type="radio">
              <label>One Way</label>
            </div>
            <div class="flex gap-1">
              <input type="radio">
              <label>Round Trip</label>
            </div>
            </div>
           </div>
            <!-- button -->
              <div  className="absolute top-[239px] w-[258px] h-[48px] rounded-md border-[1.5px] bg-blue-800 text-white font-[700] text-[24px] text-center pt-1"
              >
                Search Buses
              </div>
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

          <!-- nav floating bar -->
          <div
            class="absolute top-[755px] w-[240px] h-[50px] rounded-full bg-blue-800 z-10 shadow-md"
          >
            <div class="h-full flex justify-between items-center px-2">
              <div class="flex justify-center items-center w-[100px] h-[40px] rounded-full bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(2, 35, 185, 1);transform: ;msFilter:;"><path d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"></path></svg><p class="text-blue-800">Home</p>
              </div>
              <div class="flex gap-10 pr-4">
                <div class="w-[24px] h-[24px] "><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="Ticket"><path d="M505.081,196.611c3.82,0,6.919-3.097,6.919-6.919V123.56c0-18.536-15.081-33.615-33.617-33.615H33.613
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
	C375.874,334.702,378.973,337.798,378.973,341.62z" fill="#ffffff" class="color000000 svgShape"></path></svg></div>
              <div class="w-[20px] h-[20px] text-white "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
</script>
