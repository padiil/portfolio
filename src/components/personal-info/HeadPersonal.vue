<script lang="ts" setup>
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import profileImage from "@/assets/profile/FotoProfile1.png";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["toggle"]);
</script>

<template>
  <div
    class="flex flex-row md:flex-col items-center md:space-y-4"
    style="text-align: center"
  >
    <Avatar :class="['md:avatar-large', 'w-24 h-24', 'bg-slate-300']">
      <AvatarImage :src="profileImage" alt="Fadhil Gani" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <div class="ml-4 md:ml-0 space-y-1 text-center md:text-left">
      <h2 class="text-xl text-center">Fadhil Gani</h2>
      <badge variant="outline" class="text-base font-medium text-center"
        >Fullstack Web Developer</badge
      >
    </div>
    <div class=" ml-4 md:hidden">
      <button
        @click="emit('toggle')"
        class="flex items-center justify-center text-slate-800 hover:text-slate-600"
      >
        <i
          :class="isOpen ? 'ri-close-line' : 'ri-menu-line'"
          class="text-4xl"
        ></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.avatar-large {
  width: 150px;
  height: 150px;
  align-items: center;
  justify-content: center;
}
</style>
