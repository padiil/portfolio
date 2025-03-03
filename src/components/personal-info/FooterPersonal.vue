<script lang="ts" setup>
import linkedinIcon from "@/assets/icon/linkedin.svg";
import githubIcon from "@/assets/icon/github.svg";
import facebookIcon from "@/assets/icon/facebook.svg";
import instagramIcon from "@/assets/icon/instagram.svg";

const data = [
  {
    icon: linkedinIcon,
    iconAlt: "linkedin icon",
    link: "https://linkedin.com/in/fadhilgani",
  },
  {
    icon: githubIcon,
    iconAlt: "github icon",
    link: "https://github.com/padiil",
  },
  {
    icon: facebookIcon,
    iconAlt: "facebook icon",
    link: "https://www.facebook.com/elang.aro",
  },
  {
    icon: instagramIcon,
    iconAlt: "instagram icon",
    link: "https://www.instagram.com/faadilg/",
  },
];
</script>

<template>
  <div class="flex items-center w-full justify-between">
    <div v-for="(item, index) in data" :key="index" class="flex items-center">
      <a :href="item.link" target="_blank" rel="noopener noreferrer" class="icon-link hover:opacity-70">
        <img :src="item.icon" :alt="item.iconAlt" class="icon-img" />
      </a>
      <div v-if="index < data.length - 1" class="separator-container ms-4">
        <div class="separator"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-link {
  display: inline-block;
  width: 32px;
  height: 32px;
}

.icon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.separator-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.separator {
  width: 1px;
  height: 26px;
  background-color: #c1c4c9;
}
</style>