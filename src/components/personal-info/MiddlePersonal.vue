<script lang="ts" setup>
import mailIcon from "@/assets/icon/mail.svg";
import phoneIcon from "@/assets/icon/phone.svg";
import calendarIcon from "@/assets/icon/calendar-days.svg";
import locationIcon from "@/assets/icon/globe-2.svg";

const data = [
  {
    icon: mailIcon,
    iconAlt: "mail icon",
    title: "Email",
    description: "fadhilgani2@gmail.com",
  },
  {
    icon: phoneIcon,
    iconAlt: "phone icon",
    title: "Phone",
    description: "+62-856-9728-0061",
  },
  {
    icon: calendarIcon,
    iconAlt: "calendar icon",
    title: "Birthday",
    description: "05 Oktober 2003",
  },
  {
    icon: locationIcon,
    iconAlt: "location icon",
    title: "Address",
    description: "Tasikmalaya, Indonesia",
  },
];
</script>

<template>
  <hr />
  <div class="my-4">
    <div v-for="(item, index) in data" :key="index" class="flex gap-6 mb-4">
      <div class="my-auto">
        <img :src="item.icon" :alt="item.iconAlt" class="w-8" />
      </div>
      <div>
        <p>{{ item.title }}</p>
        <p class="font-bold">{{ item.description }}</p>
      </div>
    </div>
  </div>
  <hr />
</template>

<style scoped></style>
