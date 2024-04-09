<template>
  <router-link :to="{name: 'ticket-details'}" class="w-full flex flex-col items-center mb-4 relative">
    <div class="absolute top-[55px] left-0 w-[16px] h-[22px] bg-white rounded-r-full"></div>
    <div class="absolute top-[55px] right-0 w-[16px] h-[22px] bg-white rounded-l-full"></div>
    <div class="w-full bg-indigo-50 border-b-[1px] border-slate-700 border-dashed rounded-2xl flex justify-center items-center px-8 py-4">
        <div class="w-full flex justify-between">
          <div class="flex flex-col">
            <p class="text-[12px] font-[600] text-blue-900">{{ booking.boarding.name }}</p>
            <p class="text-[11px] font-[400] text-slate-500">{{ formatDate(booking.boarding_time) }}</p>
          </div>
        <!-- middle svg -->
        <div class="flex justify-center items-center">
          <!-- line svg -->
          <svg width="36" height="4" viewBox="0 0 36 4">
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
          <p class="text-[12px] font-[600] text-blue-900 ">{{ booking.dropping.name }}</p>
          <p class="text-[11px] font-[400] text-slate-500">{{ formatDate(booking.dropping_time) }}</p>
        </div>
      </div>
    </div>
    <div class="w-full bg-indigo-50 rounded-2xl flex justify-between items-center gap-4 px-8 py-4">
        <p class="text-sm  font-medium text-slate-500">{{ formatDateRelative(booking.created_at) }}</p>
        <p class="text-sm  font-medium text-slate-500">{{ booking.total_passangers }} Person</p>
        <p class="text-sm  font-medium text-slate-500">{{ booking.ticket_number }}</p>
    </div>
  </router-link>
</template>
<script setup>
import { ref } from "vue"
const props = defineProps(['booking'])
const booking = ref(props.booking)
const months = ref(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"])

// functions
function formatDate(dateStr) {
  const date = new Date(dateStr);
  const monthNames = months.value

  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const hour = date.getHours() % 12 || 12;  // Convert to 12-hour format
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const meridian = date.getHours() >= 12 ? 'PM' : 'AM';

  return `${month} ${day}, ${hour}:${minutes} ${meridian}`;
}

function formatDateRelative(dateStr) {
  const today = new Date();
  const inputDate = new Date(dateStr.split(' ')[0]); // Extract date part

  const diffInDays = (inputDate - today) / (1000 * 60 * 60 * 24);

  if (Math.abs(diffInDays) < 1) {
    return diffInDays === 0 ? "Today" : (diffInDays > 0 ? "Tomorrow" : "Yesterday");
  }

  const monthNames = months.value

  return `${monthNames[inputDate.getMonth()]} ${inputDate.getDate()}`;
}
</script>