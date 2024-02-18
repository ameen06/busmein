<template>
    <IonPage class="bg-white">
        <!-- header -->
        <IonHeader class="w-full px-6 py-4 bg-white shadow-none">
            <button class="" v-on:click.prevent="goBack">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>
            </button>
        </IonHeader> 

        <IonContent class="ion-padding-vertical">
            <div class="w-full inline-flex flex-col items-center justify-center bg-transparent">
                <div class="w-32 h-32 rounded-full shadow-lg ring-4 ring-white bg-gray-200 relative">
                    <img class="w-32 h-32 rounded-full shadow-lg ring-4 ring-slate-100" :src="user?.profile ?? 'https://ik.imagekit.io/k4cixy45r/defaultt.jpg?updatedAt=1668418234132' + '?tr=w-300,h-300'">

                    <button class="hidden absolute w-8 h-8 bg-slate-500 top-0 right-0 rounded-full inline-flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="fill: rgb(255, 255, 255);transform: ;msFilter:;"><path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path><path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path></svg>
                    </button>
                </div>
            </div>
    
            <div class="w-full bg-white px-6 py-4">
                <h1 class="text-2xl font-bold text-gray-900 text-center m-0">{{ user?.full_name }}</h1>
    
                <div class="w-full mt-4">
                    <div class="w-full py-2 flex items-center justify-between gap-4">
                        <p class="text-gray-400">Phone</p>
                        <p class="text-gray-800 font-medium">{{ user?.phone_number }}</p>
                    </div>
                </div>
                <div class="w-full mt-2">
                    <div class="w-full py-2 flex items-center justify-between gap-4">
                        <p class="text-gray-400">Email</p>
                        <p class="text-gray-800 font-medium">{{ user?.email ?? 'No Email' }}</p>
                    </div>
                </div>
            </div>
    
            <div class="w-full border-t border-gray-200 bg-white">
                <div class="w-full px-6">
                    <button v-on:click.prevent="logout" class="w-full border-y border-gray-200 py-4 text-gray-700 inline-flex items-center justify-between gap-4 text-lg font-medium">
                        Logout
    
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 fill-red-600" viewBox="0 0 24 24"><path d="m10.998 16 5-4-5-4v3h-9v2h9z"></path><path d="M12.999 2.999a8.938 8.938 0 0 0-6.364 2.637L8.049 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051S20 10.13 20 12s-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637C21.063 16.665 22 14.405 22 12s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"></path></svg>
                    </button>
                </div>
            </div>
        </IonContent>
    </IonPage>
</template>

<script setup>
import { IonPage, IonHeader, IonContent, useIonRouter, onIonViewDidEnter } from '@ionic/vue'
import router from '@/router'
import { computed, ref  } from 'vue'
import axios from '@/axios'
import IonicPreference from '@/store/IonicPreference'
import { useStore } from 'vuex'

const ionRouter = useIonRouter()
const store = useStore()


// Import styles
const user = ref({})


function goBack() {
    ionRouter.back();
}

async function logout() {
    await axios.post('auth/logout')
    .then(() => {
        IonicPreference.removePreference('user_zxery');
        delete axios.defaults.headers.common['Authorization'];
        router.push({name: 'home'})
    });
}

async function getUserData(){
    var userData = await IonicPreference.getPreference('user_zxery')
    if(!userData) {
        router.push({name: 'login' }) 
    }
    userData = JSON.parse(userData)
    user.value = userData
}

onIonViewDidEnter(async () => {
    await getUserData()
});
</script>

<style scopped>
.filepond--credits {
    display: none !important;
}
</style>