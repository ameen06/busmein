<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <div class="flex justify-center">
          <!-- header -->
          <div class="h-[105px] w-full border-b-[1px] border-slate-500 flex gap-2 items-end pb-2 pl-2">
            <svg width="14" height="24" viewBox="0 0 14 24" class="pb-1">
            <path d="M0.939337 10.9393C0.35355 11.5251 0.35355 12.4749 0.939337 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939337 10.9393ZM3.3421 10.5L2 10.5V13.5L3.3421 13.5V10.5Z" fill="black"/>
            </svg>
            <div>
                <p class="text-[20px] font-[800] text-black ">Booking</p>
                <div>
                    <p>Delhi</p>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46446 0.464466C9.2692 0.659728 9.2692 0.976311 9.46446 1.17157L12.2929 4L9.46446 6.82843C9.2692 7.02369 9.2692 7.34027 9.46446 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0.921051 4.5L13 4.5V3.5L0.921051 3.5L0.921051 4.5Z" fill="#D9D9D9"/>
                    </svg>
                    <p>Pune</p>
                </div>
            </div>
          </div>
        </div>
    </ion-content>
  </ion-page>
</template>