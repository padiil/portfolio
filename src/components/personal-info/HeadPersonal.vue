<script lang="ts" setup>
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import profileImage from "@/assets/profile/FotoProfile1.png";
</script>

<template>
  <div style="text-align: center">
    <Avatar class="avatar-large">
      <AvatarImage :src="profileImage" alt="Fadhil Gani" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <div class="mt-4 space-y-1">
      <h2 class="text-xl">Fadhil Gani</h2>
      <badge variant="outline" class="text-base font-medium">Fullstack Web Developer</badge>
    </div>
  </div>
</template>

<style scoped>
.avatar-large {
  width: 150px;
  height: 150px;
  background-color: #9f9f9f;
  align-items: center;
  justify-content: center;
}
</style>
