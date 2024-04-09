<template>
  <ion-page>
    <ion-header class="bg-white shadow-none" :translucent="false">
      <div class="w-full h-full border-b border-gray-300 flex justify-between items-center px-4 py-2">
          <div class="flex items-center gap-4">
              <!-- back arrow -->
              <button v-on:click="$router.go(-1)" class="focus:outline-none focus:fill-blue-600">
                  <svg class="h-6 fill-black" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.939337 10.9393C0.35355 11.5251 0.35355 12.4749 0.939337 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939337 10.9393ZM3.3421 10.5L2 10.5V13.5L3.3421 13.5V10.5Z"/>
                  </svg>
              </button>
              <!-- details -->
              <div class="block">
                <h2 class="text-xl font-extrabold text-black m-0">Select Boarding & Dropping</h2>
                
                <div class="flex items-center gap-3">
                    <p class="text-sm text-slate-600">{{ pickupPoint }}</p>
                    <svg class="h-3 fill-gray-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.8839 10.8839C19.372 10.3957 19.372 9.60427 18.8839 9.11612L10.9289 1.16117C10.4408 0.67301 9.6493 0.67301 9.16115 1.16117C8.67299 1.64932 8.67299 2.44078 9.16115 2.92893L16.2322 10L9.16115 17.0711C8.67299 17.5592 8.67299 18.3507 9.16115 18.8388C9.6493 19.327 10.4408 19.327 10.9289 18.8388L18.8839 10.8839ZM0.552612 11.25L18 11.25V8.75L0.552612 8.75L0.552612 11.25Z"/>
                    </svg>
                    <p class="text-sm text-slate-600">{{ droppingPoint }}</p>
                </div>
              </div>
          </div>
      </div>
    </ion-header>
    <ion-content :fullscreen="true" >
     <div class="w-full min-h-screen bg-gray-100">
      <!-- current page -->
      <div class="w-full bg-white flex items-center justify-around">
        <div class="w-full border-b-2 border-blue-700 text-center">
          <h5 class="text-black font-semibold">Boarding Points</h5>
        </div>
        <div class="w-full text-center">
          <h5 class="text-black font-semibold">Dropping Points</h5>
        </div>
      </div>

      <div class="w-full max-s-sm mx-auto pt-6 px-4 flex flex-col justify-center items-center">
        <div class="w-full rounded-lg shadow-sm bg-white">
          <div class="w-full border-b-2 py-2 px-4">
            <p>All Boarding Points</p>
          </div>
          <!-- page loader -->
          <div v-if="isLoading" class="w-full p-4">
            <div class="w-full flex justify-center items-center gap-4">
                <div role="status">
                    <svg aria-hidden="true" class="w-8 h-8 text-gray-300 animate-spin fill-blue-600" viewBox="0 0 100 101" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>
                <p class="text-lg font-semibold text-blue-900">Loading Boarding Points</p>
            </div>
          </div>

          <div v-else class="w-full divide-y-2 devide-gray-100">
            <div v-for="point in boardingPoints" :key="point.id" v-on:click="selectBoardingPoint(point)" class="flex items-center justify-between gap-4 py-3 px-4 focus:bg-gray-200"> 
              <div>
                <p class="text-sm font-bold">{{ point.boarding_time }}</p>
                <div class="flex items-center gap-1">
                  <p class="text-xs">{{ point.date }}</p>
                </div>
              </div>
              <div class="w-full min-w-[70%] max-w-[70%]">
                <p class="text-sm font-bold">{{ point.place_name }}</p>
                <p class="text-xs break-all whitespace-break-spaces">{{ point.place_address }}</p>
              </div>
              <div><input type="radio"></div>
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
  IonPage,
  IonHeader,
  onIonViewDidEnter
} from "@ionic/vue";
import { ref, watch } from "vue";
import { useRouter } from "vue-router"
import IonicPreference from '@/store/IonicPreference';
import axios from '@/axios'

const router = useRouter()

const pickupPoint = ref('')
const droppingPoint = ref('')
const selectedBus = ref('')
const searchedDate = ref(null)
const boardingPoints = ref([])
const isLoading = ref(true)

async function getSearchPayload(){
  pickupPoint.value = await IonicPreference.getPreference('pickup_point')
  droppingPoint.value = await IonicPreference.getPreference('dropping_point')
  selectedBus.value = await IonicPreference.getPreference('selected_bus')
  searchedDate.value = await IonicPreference.getPreference('search_date')
}

function selectBoardingPoint(point){
  IonicPreference.setNewPreference('selected_boarding_point', JSON.stringify(point));
  router.push({name: 'dropping-points'});
}

async function getBoardingPoints(){
  await axios.post('getBoardingPoints', {
    'boarding_point': pickupPoint.value,
    'dropping_point': droppingPoint.value,
    'service_id': JSON.parse(selectedBus.value).id,
    'date': searchedDate.value,
  })
  .then((response) => {
    boardingPoints.value = response.data.boarding_points;
    isLoading.value = false
  })
  .catch(function(error){
    isLoading.value = false;
  });
}

onIonViewDidEnter(async () => {
  await getSearchPayload()
  await getBoardingPoints()
})
</script>

<style scoped>
.in-toolbar .toolbar-container {
  min-height: unset !important;
}
</style>