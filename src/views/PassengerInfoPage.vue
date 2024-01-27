<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <div class="flex flex-col justify-center items-center">
          <!-- header -->
          <div class=" w-full border-b-[1px] border-slate-500 flex items-end pb-2 pt-10">
            <div class="pl-3 pb-2">
              <svg width="14" height="24" viewBox="0 0 14 24" fill="none" >
              <path d="M0.939337 10.9393C0.35355 11.5251 0.35355 12.4749 0.939337 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939337 10.9393ZM3.3421 10.5L2 10.5V13.5L3.3421 13.5V10.5Z" fill="black"/>
              </svg>
            </div>
            <div class="pl-4">
              <p class="text-[20px] font-[800] text-black">Passenger Information</p>
              <div class="flex justify-start items-center">
                <p class="font-[500] text-[13px] text-slate-600">Delhi</p>
                <div class="w-[20px] h-4 flex flex-col  pl-1">
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97634 0.269204 9.65976 0.269204 9.46449 0.464466C9.26923 0.659728 9.26923 0.976311 9.46449 1.17157L12.2929 4L9.46449 6.82843C9.26923 7.02369 9.26923 7.34027 9.46449 7.53553C9.65976 7.7308 9.97634 7.7308 10.1716 7.53553L13.3536 4.35355ZM0.921082 4.5L13 4.5V3.5L0.921082 3.5L0.921082 4.5Z" fill="#D9D9D9"/>
                  </svg>
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.646418 3.64645C0.451156 3.84171 0.451156 4.15829 0.646418 4.35355L3.8284 7.53553C4.02366 7.7308 4.34024 7.7308 4.5355 7.53553C4.73077 7.34027 4.73077 7.02369 4.53551 6.82843L1.70708 4L4.53551 1.17157C4.73077 0.97631 4.73077 0.659728 4.53551 0.464465C4.34024 0.269203 4.02366 0.269203 3.8284 0.464465L0.646418 3.64645ZM13.0789 3.5L0.999971 3.5L0.999971 4.5L13.0789 4.5L13.0789 3.5Z" fill="#D9D9D9"/>
                  </svg>
                </div>
                <p class="font-[500] text-[13px] text-slate-600">Pune</p>
              </div>
            </div>
          </div>
          
          <!-- traveling bus details -->
          <div class="w-full flex flex-col shadow-lg py-4">
            <p class="text-[10px] font-[600] text-slate-600 mx-auto">Chartered Bus - HGS</p>
            <div class="flex justify-center gap-1 pt-2">
              <!-- from -->
              <div>
                <p class="text-[15px] font-[700] text-black">Wed, 17 Jan - 12:00</p>
                <p class="text-[13px] font-[500] text-slate-600">Delhi</p>
                <div class="w-[49px] h-[18px] rounded-md bg-indigo-300 mt-2 flex justify-center items-center" >
                <p class="text-[10px] font-[500] text-blue-900">1 Seat</p>
              </div>
            </div>
              <!-- arrow-svg -->
              <div class="w-[20px] h-4 flex flex-col  pl-1">
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97634 0.269204 9.65976 0.269204 9.46449 0.464466C9.26923 0.659728 9.26923 0.976311 9.46449 1.17157L12.2929 4L9.46449 6.82843C9.26923 7.02369 9.26923 7.34027 9.46449 7.53553C9.65976 7.7308 9.97634 7.7308 10.1716 7.53553L13.3536 4.35355ZM0.921082 4.5L13 4.5V3.5L0.921082 3.5L0.921082 4.5Z" fill="#D9D9D9"/>
                  </svg>
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.646418 3.64645C0.451156 3.84171 0.451156 4.15829 0.646418 4.35355L3.8284 7.53553C4.02366 7.7308 4.34024 7.7308 4.5355 7.53553C4.73077 7.34027 4.73077 7.02369 4.53551 6.82843L1.70708 4L4.53551 1.17157C4.73077 0.97631 4.73077 0.659728 4.53551 0.464465C4.34024 0.269203 4.02366 0.269203 3.8284 0.464465L0.646418 3.64645ZM13.0789 3.5L0.999971 3.5L0.999971 4.5L13.0789 4.5L13.0789 3.5Z" fill="#D9D9D9"/>
                  </svg>
              </div>
              <!-- to -->
              <div class="flex flex-col items-end">
                <p class="text-[15px] font-[700] text-black">Wed, 20 Jan - 06:00</p>
                <p class="text-[13px] font-[500] text-slate-600">Pune</p>
              </div>
            </div>
          </div>


          <!-- create new account -->
          <div class=" rounded-lg  shadow-2xl mt-5 px-6 py-3">
            <h1 class="text-[20px] font-[800] ">Create New Account</h1>
            <div class="flex flex-col justify-center items-center">
              <div class="rounded-lg border-[1px] border-gray-500  flex justify-start items-center gap-2 px-3 py-2">
                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.52586 0L13.4248 0.00126365C14.588 0.0148556 15.1949 0.139923 15.8243 0.464173C16.4345 0.778492 16.9177 1.244 17.2441 1.83172C17.6017 2.47591 17.7259 3.09555 17.7259 4.35947V9.8691C17.7259 11.133 17.6017 11.7527 17.2441 12.3969C16.9177 12.9846 16.4345 13.4501 15.8243 13.7644C15.1555 14.1089 14.5123 14.2286 13.2001 14.2286H4.52586C3.21369 14.2286 2.57041 14.1089 1.90163 13.7644C1.29148 13.4501 0.808204 12.9846 0.481889 12.3969C0.124225 11.7527 0 11.133 0 9.8691L0.00131171 4.14298C0.0154224 3.02257 0.145264 2.43802 0.481889 1.83172C0.808204 1.244 1.29148 0.778492 1.90163 0.464173C2.57041 0.119658 3.21369 0 4.52586 0ZM16.0177 2.65222L10.952 7.53103C9.83672 8.60531 8.05159 8.64112 6.89166 7.63846L6.77395 7.53103L1.70821 2.65222C1.53877 3.01844 1.47716 3.43734 1.47716 4.35947V9.8691C1.47716 10.9182 1.5569 11.316 1.78447 11.7258C1.97311 12.0656 2.24553 12.328 2.59826 12.5097C2.97372 12.7031 3.33936 12.7857 4.1684 12.8024L4.52586 12.8057H13.2001C14.2893 12.8057 14.7022 12.7289 15.1277 12.5097C15.4804 12.328 15.7528 12.0656 15.9415 11.7258C16.1423 11.3642 16.228 11.012 16.2454 10.2134L16.2488 9.8691V4.35947C16.2488 3.43734 16.1872 3.01844 16.0177 2.65222ZM13.2001 1.42286H4.52586C3.56853 1.42286 3.13365 1.4822 2.75344 1.64541L7.81846 6.52492C8.36497 7.05134 9.23316 7.07904 9.81353 6.60804L9.90749 6.52492L14.9725 1.64541C14.5923 1.4822 14.1574 1.42286 13.2001 1.42286Z" fill="#6A6A6A"/>
                </svg>
                <input type="text" placeholder="Enter your Mobile Number" class="px-2">  
              </div>
              <!-- resend sec -->
              <div class="flex justify-center pt-1">
                <a href="" class="text-[10px] font-[500] text-blue-800">Resend Again</a>
                <p class="text-[10px] font-[500]">,  45sec</p>
              </div>
              <!-- otp number -->
              <form class="max-w-sm mx-auto mt-2">
                <div class="flex mb-2 space-x-2 rtl:space-x-reverse">
                    <div> 
                        <label for="code-1" class="sr-only">First code</label>
                        <input type="text" maxlength="1" onkeyup="focusNextInput(this, 'code-1', 'code-2')" id="code-1" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                    </div>
                    <div>
                        <label for="code-2" class="sr-only">Second code</label>
                        <input type="text" maxlength="1" onkeyup="focusNextInput(this, 'code-1', 'code-3')" id="code-2" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                    </div>
                    <div>
                        <label for="code-3" class="sr-only">Third code</label>
                        <input type="text" maxlength="1" onkeyup="focusNextInput(this, 'code-2', 'code-4')" id="code-3" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                    </div>
                    <div>
                        <label for="code-4" class="sr-only">Fourth code</label>
                        <input type="text" maxlength="1" onkeyup="focusNextInput(this, 'code-3', 'code-5')" id="code-4" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                    </div>
                    <div>
                        <label for="code-5" class="sr-only">Fivth code</label>
                        <input type="text" maxlength="1" onkeyup="focusNextInput(this, 'code-4', 'code-6')" id="code-5" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                    </div>
                    <div>
                        <label for="code-6" class="sr-only">Sixth code</label>
                        <input type="text" maxlength="1" onkeyup="focusNextInput(this, 'code-5', 'code-6')" id="code-6" class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                    </div>
                </div>
              </form>
              
       <!-- // use this simple function to automatically focus on the next input
       function focusNextInput(el, prevId, nextId) {
           if (el.value.length === 0) {
               document.getElementById(prevId).focus();
           } else {
               document.getElementById(nextId).focus();
           }
       } -->
             
            </div>
          </div>


          <!-- passenger info -->
          <div class="rounded-lg bg-white shadow-2xl mt-5 px-6 py-4">
            <p class="text-[20px] font-[800] px-2 ">Passenger Details</p>

            <div class="rounded-lg border-[1px] border-gray-500 mt-2 flex justify-start items-center gap-2 px-3 py-2">
              <svg width="16" height="18" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.19478 3.51521C8.19478 2.27916 7.16812 1.27826 5.90024 1.27826C4.63237 1.27826 3.6057 2.27916 3.6057 3.51521C3.6057 4.75126 4.63237 5.75216 5.90024 5.75216C7.16812 5.75216 8.19478 4.75126 8.19478 3.51521ZM9.50595 3.51521C9.50595 5.45722 7.89225 7.03042 5.90024 7.03042C3.90823 7.03042 2.29454 5.45722 2.29454 3.51521C2.29454 1.57319 3.90823 0 5.90024 0C7.89225 0 9.50595 1.57319 9.50595 3.51521ZM1.31117 11.2761C1.31117 11.879 1.25863 11.8239 1.61003 11.8239H10.5182C10.8696 11.8239 10.8171 11.879 10.8171 11.2761C10.8171 9.81364 8.65105 8.94781 6.06414 8.94781C3.47722 8.94781 1.31117 9.81364 1.31117 11.2761ZM0 11.2761C0 8.7961 2.8183 7.66955 6.06414 7.66955C9.30998 7.66955 12.1283 8.7961 12.1283 11.2761C12.1283 12.5648 11.6162 13.1021 10.5182 13.1021H1.61003C0.512081 13.1021 0 12.5648 0 11.2761Z" fill="#6A6A6A"/>
              </svg>
              <input type="text" placeholder="Full Name" class="px-2">
            </div>
            <div class=" rounded-lg border-[1px] border-gray-500 mt-2 flex justify-start items-center gap-2 px-3 py-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.45537 9.79797L8.92634 10.3024C8.78501 10.4373 8.57437 10.4817 8.3866 10.4161C7.86042 10.2316 7.20216 9.76325 6.41182 9.00966C5.6222 8.25674 5.13029 7.62909 4.93753 7.12669C4.86856 6.94777 4.91481 6.74695 5.05604 6.61204L5.58579 6.1076C6.56175 5.17701 6.651 3.71134 5.79069 2.73855L5.16956 2.03465C4.46061 1.23067 3.18336 1.14966 2.31592 1.85288C1.99331 2.11797 1.75079 2.46038 1.6134 2.84474C1.55402 3.01206 1.51568 3.1855 1.49917 3.36144C1.18146 5.60997 2.31878 7.97014 4.9104 10.4413C7.50202 12.9124 9.97655 13.9962 12.3354 13.6932C12.9483 13.6375 13.5149 13.3585 13.9175 12.9145C14.6557 12.088 14.5701 10.8695 13.7276 10.1935L12.9894 9.60055C11.9677 8.7816 10.4313 8.86738 9.45537 9.79797ZM7.43109 8.03793C7.80861 8.39789 8.13783 8.67091 8.40398 8.85687C9.93422 7.39776 12.3153 7.26477 13.9181 8.54951L14.6557 9.14202C16.1182 10.3155 16.2645 12.4066 15.008 13.8132C14.3628 14.5249 13.4546 14.9719 12.5278 15.0552C9.65793 15.4238 6.77178 14.1598 3.89113 11.413C1.0104 8.66621 -0.315877 5.91366 0.0634944 3.23897C0.0901647 2.95476 0.152109 2.67457 0.249045 2.40143C0.46922 1.78545 0.857898 1.23669 1.38222 0.8059C2.85049 -0.384395 5.04254 -0.244956 6.27253 1.1499L6.89266 1.85266C8.24192 3.37835 8.10369 5.65037 6.60437 7.07999C6.76721 7.36405 7.05343 7.67782 7.43109 8.03793Z" fill="#6A6A6A"/>
              </svg>
              <input type="text" placeholder="Mobile Number" class="px-2">
            </div>
            <div class="rounded-lg border-[1px] border-gray-500 mt-2 flex justify-start items-center gap-2 px-3 py-2">
              <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.52586 0L13.4248 0.00126365C14.588 0.0148556 15.1949 0.139923 15.8243 0.464173C16.4345 0.778492 16.9177 1.244 17.2441 1.83172C17.6017 2.47591 17.7259 3.09555 17.7259 4.35947V9.8691C17.7259 11.133 17.6017 11.7527 17.2441 12.3969C16.9177 12.9846 16.4345 13.4501 15.8243 13.7644C15.1555 14.1089 14.5123 14.2286 13.2001 14.2286H4.52586C3.21369 14.2286 2.57041 14.1089 1.90163 13.7644C1.29148 13.4501 0.808204 12.9846 0.481889 12.3969C0.124225 11.7527 0 11.133 0 9.8691L0.00131171 4.14298C0.0154224 3.02257 0.145264 2.43802 0.481889 1.83172C0.808204 1.244 1.29148 0.778492 1.90163 0.464173C2.57041 0.119658 3.21369 0 4.52586 0ZM16.0177 2.65222L10.952 7.53103C9.83672 8.60531 8.05159 8.64112 6.89166 7.63846L6.77395 7.53103L1.70821 2.65222C1.53877 3.01844 1.47716 3.43734 1.47716 4.35947V9.8691C1.47716 10.9182 1.5569 11.316 1.78447 11.7258C1.97311 12.0656 2.24553 12.328 2.59826 12.5097C2.97372 12.7031 3.33936 12.7857 4.1684 12.8024L4.52586 12.8057H13.2001C14.2893 12.8057 14.7022 12.7289 15.1277 12.5097C15.4804 12.328 15.7528 12.0656 15.9415 11.7258C16.1423 11.3642 16.228 11.012 16.2454 10.2134L16.2488 9.8691V4.35947C16.2488 3.43734 16.1872 3.01844 16.0177 2.65222ZM13.2001 1.42286H4.52586C3.56853 1.42286 3.13365 1.4822 2.75344 1.64541L7.81846 6.52492C8.36497 7.05134 9.23316 7.07904 9.81353 6.60804L9.90749 6.52492L14.9725 1.64541C14.5923 1.4822 14.1574 1.42286 13.2001 1.42286Z" fill="#6A6A6A"/>
              </svg>
              <input type="text" placeholder="E-mail Address" class="px-2">  
            </div>
            <div class="flex justify-center items-center gap-4">
              <div class=" rounded-lg border-[1px] border-gray-500 mt-2 flex justify-center items-center px-4 py-2">
                <input type="number" placeholder="Age" class="w-[100px] px-2">  
              </div>
              <div class="rounded-lg border-[1px] border-gray-500 mt-2 flex justify-center items-center px-4 py-2">
                <input type="text" placeholder="Gender" class="w-[100px] px-2">  
              </div>
            </div>
          </div>

          <!-- paynow button -->
          <button class="bg-blue-900 rounded-lg flex justify-center items-center my-10  px-[7rem] py-3"> 
            <p class="text-[17px] font-[800] text-white">Pay Now</p>
          </button>


        </div>
    </ion-content>
  </ion-page>
</template>