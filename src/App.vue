<script setup lang="ts">
import personalInfo from "./components/personal-info/index.PersonalInfo.vue";
import mainSection from "./components/main-section/index.MainSection.vue";
</script>

<template>
  <div class="container mx-auto my-24 grid grid-cols-5 gap-5">
    <div class="col-span-1">
      <personalInfo />
    </div>
    <div class="col-span-4">
      <mainSection />
    </div>
  </div>
</template>

<style scoped>

</style>
