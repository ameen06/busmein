 <template>
<IonFooter class="bg-transparent shadow-none">
    <div class="w-fit mx-auto white z-10  p-0">
        <div class="w-full flex justify-between items-center gap-4 py-2">

        <router-link :to="{name: 'active'}" class="flex justify-center items-center rounded-full shadow-md">
            <div class="booking-nav-bg flex justify-center items-center px-3 py-1 rounded-full">
                <p class="font-semibold text-center ">ACTIVE</p>
            </div>
        </router-link>
        <router-link :to="{name: 'completed'}" class="flex justify-center items-center  rounded-full shadow-md">
            <div class="booking-nav-bg flex justify-center items-center px-3 py-1 rounded-full">
                <p class="font-semibold text-center ">COMPLETED</p>
            </div>
        </router-link> 
        <router-link :to="{name: 'cancelled'}" class="flex justify-center items-center  rounded-full shadow-md">
            <div class="booking-nav-bg flex justify-center items-center px-3 py-1 rounded-full">
                <p class="font-semibold text-center ">CANCELLED</p>
            </div>
        </router-link> 
        </div>
    </div>
</IonFooter>
</template>

<script setup>
import { IonFooter } from "@ionic/vue";
</script>     
       