<script setup lang="ts">
import { ref } from "vue";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import HeadPersonal from "./HeadPersonal.vue";
import MiddlePersonal from "./MiddlePersonal.vue";
import FooterPersonal from "./FooterPersonal.vue";

// Set default isOpen ke false
const isOpen = ref(false);
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>
        <HeadPersonal :isOpen="isOpen" @toggle="isOpen = !isOpen" />
      </CardTitle>
    </CardHeader>
    <CardContent>
      <!-- Tampilkan MiddlePersonal berdasarkan ukuran layar -->
      <div v-if="isOpen" class="md:hidden">
        <MiddlePersonal />
      </div>
      <div class="hidden md:block">
        <MiddlePersonal />
      </div>
    </CardContent>
    <CardFooter>
      <!-- Tampilkan FooterPersonal berdasarkan ukuran layar -->
      <div class="md:hidden">
        <FooterPersonal />
      </div>
      <div class="hidden md:block">
        <FooterPersonal />
      </div>
    </CardFooter>
  </Card>
</template>

<style scoped></style>
