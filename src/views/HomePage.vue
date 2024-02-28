<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <!-- menu bar -->
      <div class="absolute z-10 top-8 left-8">
        <svg class="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
        </svg>
      </div>
      <!-- menu ends -->
      <div class="flex justify-center">
        <div class="absolute top-[-175px] w-[550px] h-[550px] rounded-full bg-blue-800 shadow-2xl"></div>
        <div class="w-full absolute top-16 px-6">
          <p class="mt-4 text-lg font-bold text-white text-center">Book Your Bus Ticket</p>
          <div class="w-full max-w-sm mt-6 mx-auto rounded-2xl bg-white shadow-xl p-5 pt-7">
            <!-- pickup point -->
            <div v-on:click="handleLocationSelector('pickup')" class="w-full rounded-md bg-slate-200 group group-focus:border-2 group-focus:border-blue-500">
              <div class="w-full h-full flex items-center">
                <!-- icon -->
                <div class="flex justify-center items-end border-r-2 border-slate-300 py-3 px-2">
                  <svg class="h-5 fill-blue-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21 6.021c.003-.146-.007-1.465-1.3-2.735C18.427 2.036 17.143 2 17 2H6.996c-.239 0-1.493.063-2.708 1.302C3.036 4.578 3 5.859 3 6v3H2v3h1v6c0 .734.406 1.373 1 1.721V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h10v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.277A1.99 1.99 0 0 0 21 18v-6h1V9h-1V6.021zM9 4h6v2H9V4zM6.5 18a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6.5 18zm4.5-5H5V8h6v5zm6.5 5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 17.5 18zm1.5-5h-6V8h6v5z"></path>
                  </svg>
                  <svg class="h-4 fill-blue-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <circle cx="13" cy="4" r="2"></circle>
                    <path d="M13.978 12.27c.245.368.611.647 1.031.787l2.675.892.633-1.896-2.675-.892-1.663-2.495a2.016 2.016 0 0 0-.769-.679l-1.434-.717a1.989 1.989 0 0 0-1.378-.149l-3.193.797a2.002 2.002 0 0 0-1.306 1.046l-1.794 3.589 1.789.895 1.794-3.589 2.223-.556-1.804 8.346-3.674 2.527 1.133 1.648 3.675-2.528c.421-.29.713-.725.82-1.225l.517-2.388 2.517 1.888.925 4.625 1.961-.393-.925-4.627a2 2 0 0 0-.762-1.206l-2.171-1.628.647-3.885 1.208 1.813z"></path>
                  </svg>
                </div>
                <!-- input -->
                <input type="text" v-model="pickupPointValue.name" class="w-full h-full p-3 bg-transparent text-gray-900 text-base rounded-r-md focus:ring-blue-500 focus:border-blue-500 block focus:outline-none hover:bg-transparent active:bg-transparent" placeholder="Pickup Location" required />
              </div>
            </div>
            <!-- dropping -->
            <div v-on:click="handleLocationSelector('dropping')" class="w-full mt-4 rounded-md bg-slate-200 group group-focus:border-2 group-focus:border-blue-500">
              <div class="w-full h-full flex items-center">
                <!-- icon -->
                <div class="flex justify-center items-end border-r-2 border-slate-300 py-3 px-2">
                  <svg class="h-5 fill-blue-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21 6.021c.003-.146-.007-1.465-1.3-2.735C18.427 2.036 17.143 2 17 2H6.996c-.239 0-1.493.063-2.708 1.302C3.036 4.578 3 5.859 3 6v3H2v3h1v6c0 .734.406 1.373 1 1.721V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h10v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.277A1.99 1.99 0 0 0 21 18v-6h1V9h-1V6.021zM9 4h6v2H9V4zM6.5 18a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6.5 18zm4.5-5H5V8h6v5zm6.5 5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 17.5 18zm1.5-5h-6V8h6v5z"></path>
                  </svg>
                  <svg style="transform: scaleX(-1);msfilter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);" class="h-4 fill-blue-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <circle cx="13" cy="4" r="2"></circle>
                    <path d="M13.978 12.27c.245.368.611.647 1.031.787l2.675.892.633-1.896-2.675-.892-1.663-2.495a2.016 2.016 0 0 0-.769-.679l-1.434-.717a1.989 1.989 0 0 0-1.378-.149l-3.193.797a2.002 2.002 0 0 0-1.306 1.046l-1.794 3.589 1.789.895 1.794-3.589 2.223-.556-1.804 8.346-3.674 2.527 1.133 1.648 3.675-2.528c.421-.29.713-.725.82-1.225l.517-2.388 2.517 1.888.925 4.625 1.961-.393-.925-4.627a2 2 0 0 0-.762-1.206l-2.171-1.628.647-3.885 1.208 1.813z"></path>
                  </svg>
                </div>
                <!-- input -->
                <input type="text" v-model="droppingPointValue.name" class="w-full h-full p-3 bg-transparent text-gray-900 text-base rounded-r-md focus:ring-blue-500 focus:border-blue-500 block focus:outline-none hover:bg-transparent active:bg-transparent" placeholder="Dropping Location" required />
              </div>
            </div>
            <!-- date -->
            <div class="w-full mt-4 rounded-md bg-slate-200 group group-focus:border-2 group-focus:border-blue-500">
              <div class="w-full h-full flex items-center">
                <!-- icon -->
                <div class="flex justify-center items-end border-r-2 border-slate-300 py-2 px-4">
                  <svg class="h-5 fill-blue-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z"></path>
                  </svg>
                </div>
                <!-- input -->
                <input type="date" v-model="busSearchDate" id="first_name" min="2024-02-25" class="w-full h-full px-3 py-2 bg-transparent text-gray-900 text-base rounded-r-md focus:ring-blue-500 focus:border-blue-500 block focus:outline-none hover:bg-transparent active:bg-transparent" placeholder="John" required />
              </div>
            </div>
            <!-- one/round -->
            <div class="w-full mt-4 justify-center hidden">
              <div class="flex items-center me-4">
                  <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300">
                  <label for="inline-radio" class="ms-2 text-sm font-medium text-gray-900">Inline 1</label>
              </div>
              <div class="flex items-center me-4">
                  <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300">
                  <label for="inline-2-radio" class="ms-2 text-sm font-medium text-gray-900">Inline 2</label>
              </div>
            </div>
            
            <button v-on:click="searchForBuses" class="w-full block text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg uppercase mt-4 px-4 py-2 focus:outline-none">
              Search Buses
            </button>
          </div>

           <!-- offer -->
          <div class="w-full max-w-sm mx-auto mt-8">
            <p class="text-[20px] font-[700]  text-blue-800 z-10">Offers</p>
            <p class="text-[13px] font-[400] text-blue-800 z-10">
              Get Best Deals With Great Offers
            </p>
            <div class="flex justify-center gap-2 mt-1">
              <div class="w-[178px] h-[105px] rounded-xl bg-slate-300"></div>
              <div class="w-[178px] h-[105px] rounded-xl bg-slate-300"></div>
            </div>
          </div>

          <!-- top destinations -->
          <div class="w-full max-w-sm mx-auto mt-8">
            <p class="text-[20px] font-[700]  text-blue-800 z-10">
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

      <ion-modal ref="locationGetterModal" :is-open="gettingLocations">
        <ion-header class="w-full bg-blue-800 px-4 py-4 shadow-none flex items-center gap-2 justify-between">
          <ion-title class="p-0 text-base font-medium text-white">Select {{activeLocationSelector == 'pickup' ? 'Pickup' : 'Dropping' }} Location</ion-title>
          <button v-on:click="cancelLocationModal()" class="bg-transparent p-0">
            <svg class="h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
            </svg>
          </button>
        </ion-header>
        <ion-content class="ion-padding">
          <div v-if="!isLoadingLocations" class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg class="h-5 fill-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
            </div>
            <input type="text" v-model="locationInput" v-on:input="getFilteredLocations" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-2 focus:border-blue-500 block w-full ps-10 p-2.5 focus:outline-none" placeholder="Search Location">
          </div>

          <div v-if="!isLoadingLocations" class="w-full mt-4">
            <IonList class="w-full p-0">
              <IonItem v-for="location in filteredLocationList" :key="location.slug" v-on:click="setLocationValue(location)" class="w-full p-0">{{ location.name }}</IonItem>
            </IonList>
          </div>
          <div v-else class="w-full mt-8 flex items-center gap-4">
            <div role="status">
              <svg aria-hidden="true" class="w-6 h-6 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
            <p class="text-sm font-medium text-blue-600">Loading Locations...</p>
          </div>
        </ion-content>
      </ion-modal>
    </ion-content>

    <!-- nav floating bar -->
    <NavigationBar v-if="!gettingLocations" />
  </ion-page>
</template>

<script setup>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonModal,
  IonItem,
  IonList,
  onIonViewDidEnter,
} from "@ionic/vue";
import NavigationBar from '@/components/NavigationBar.vue'
import { ref } from "vue"
import axios from '@/axios'
import { useRouter } from "vue-router"
import IonicPreference from '@/store/IonicPreference'

const router = useRouter()

var gettingLocations = ref(false)
var locationGetterModal = ref()
var pickupPointValue = ref({})
var droppingPointValue = ref({})
var activeLocationSelector = ref('')
var locationInput = ref('')
var locationsList = ref([])
var isLoadingLocations = ref(true)
var filteredLocationList = ref([])
var busSearchDate = ref('')


function handleLocationSelector(locationType){
  activeLocationSelector.value = locationType
  gettingLocations.value = true
  getFilteredLocations()
}

function setLocationValue(location){
  if(activeLocationSelector.value === 'pickup'){
    pickupPointValue.value = location
  }else{
    droppingPointValue.value = location
  }
  gettingLocations.value = false
  locationInput.value = ''
}

const getFilteredLocations = () => {
  // reminder: already selected should be disabled !!!!
  if (locationInput.value !== '') {
    filteredLocationList.value = locationsList.value.filter((item) =>
      item.name.toLowerCase().includes(locationInput.value.toLowerCase())
    );
  } else {
    filteredLocationList.value = locationsList.value
  }
  
  if(activeLocationSelector.value === 'pickup'){
    filteredLocationList.value = filteredLocationList.value.filter((item) => 
      item.type !== 'Dropping Point' ? true : false
    );
  }else if(activeLocationSelector.value === 'dropping'){
    filteredLocationList.value = filteredLocationList.value.filter((item) => 
      item.type !== 'Boarding Point' ? true : false
    );
  }
}

function cancelLocationModal(){
  gettingLocations.value = false
  locationGetterModal.value.$el.dismiss(null, 'cancel')
  locationInput.value = ''
}

async function getLocations(){
  await axios.get('destinations')
    .then((response) => {
      locationsList.value = response.data.destinations;
      isLoadingLocations.value = false
      console.log(response.data)
    });
}

function searchForBuses(){
  IonicPreference.setNewPreference('pickup_point', pickupPointValue.value.slug);
  IonicPreference.setNewPreference('dropping_point', droppingPointValue.value.slug);
  IonicPreference.setNewPreference('search_date', busSearchDate.value);
  router.push({name: 'oneWay-selecting-page'});
}

onIonViewDidEnter(async () => {
  await getLocations()
})
</script>

<style scoped>
input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
}
.item-native {
  padding: 0px !important;
}
</style>
