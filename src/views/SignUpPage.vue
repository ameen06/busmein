<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <div class="flex justify-center">
          <div
            class="absolute top-[204px] w-[365px] h-[431px] rounded-xl  shadow"
          >
            <div class="flex justify-center">
              <!-- first button -->
              <div
                class="absolute top-[28px] w-[312px] h-[48px] rounded-lg border-[2px] border-blue-900 flex justify-center items-center"
              >
                <div
                  class="w-[157px] h-[47px] bg-blue-800 rounded-lg flex justify-center items-center"
                >
                  <p class="font-[700] text-[20px] text-white">SIGN UP</p>
                </div>
                <div class="w-[157px] h-[45px] flex justify-center items-center">
                  <p class="font-[700] text-[20px] text-blue-800">LOGIN</p>
                </div>
              </div>
              <!-- Second button -->
              <div
                class="absolute top-[87px] w-[312px] h-[48px] rounded-lg border-[2px] border-blue-900 flex justify-start items-center gap-2 p-2"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="fill: rgba(2, 35, 185, 1);transform: ;msFilter:;"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
              <p class="font-[600] text-[12px] text-blue-800">Enter Your Full Name</p>
            </div>
              <!-- third button -->
              <div
                class="absolute top-[146px] w-[312px] h-[48px] rounded-lg border-[2px] border-blue-900  flex justify-start items-center gap-2 p-2"
              ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="fill: rgba(2, 35, 185, 1);transform: ;msFilter:;"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>
              <p class="font-[600] text-[12px] text-blue-800">Enter your Email Address</p>
            </div>
              <!-- fourth button -->
              <div
                class="absolute top-[205px] w-[312px] h-[48px] rounded-lg border-[2px] border-blue-900  flex justify-start items-center gap-2 p-2"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="fill: rgba(2, 35, 185, 1);transform: ;msFilter:;"><path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path></svg>
              <p class="font-[600] text-[12px] text-blue-800">Enter your Mobile Number</p>
            </div>
              <!-- get started -->
              <div
                class="absolute top-[264px] w-[312px] h-[48px] rounded-lg border-[2px] bg-blue-700 border-blue-900 flex justify-center items-center"
              >
                <p class="font-[700] text-[20px] text-white">GET STARTED</p>
              </div>
            </div>
  
            <div class="w-full flex justify-center">
              <p class="absolute top-[332px] text-blue-800">OR</p>
            </div>
            <!-- google facebook apple login-->
            <div
              class="absolute top-[361px] w-full gap-2 flex justify-center items-center"
            >
              <div
                class="h-[52px] w-[52px] border-2 border-blue-900 rounded-full flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#fbc02d"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#e53935"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4caf50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1565c0"
                    d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
              </div>
              <div
                class="h-[52px] w-[52px] border-2 border-blue-900 rounded-full flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  style="fill: rgba(49, 111, 246, 1); transform: ; msfilter: "
                >
                  <path
                    d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"
                  ></path>
                </svg>
              </div>
              <div
                class="h-[52px] w-[52px] border-2 border-blue-900 rounded-full flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
                >
                  <path
                    d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <!-- nav floating bar -->
          <div
            class="absolute top-[755px] w-[240px] h-[50px] rounded-full bg-blue-800 shadow-md"
          >
            <div class="h-full flex justify-between items-center">
              <div class="flex gap-10 pl-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
                >
                  <path
                    d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"
                  ></path>
                </svg>
                <div class="w-[20px] h-[20px]">
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
                        fill="#ffffff"
                        class="color000000 svgShape"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                class="flex justify-center items-center w-[100px] h-[40px] rounded-full bg-white mr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="19"
               
                  style="fill: rgba(2, 35, 185, 1); transform: ; msfilter: "
                >
                  <path
                    d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"
                  ></path>
                </svg>
                <p class="text-blue-800">User</p>
              </div>
            </div>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { IonContent, IonPage } from "@ionic/vue";
  </script>
  
  <!-- user svg -->
  <!--  -->
  <!-- emial -->
  <!--  -->
  <!-- phone -->
  <!--  -->