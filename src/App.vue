<script setup lang="ts">
import personalInfo from "./components/personal-info/index.PersonalInfo.vue";
import mainSection from "./components/main-section/index.MainSection.vue";

import { useRoute } from "vue-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const route = useRoute();

const navData = [
  { name: "About Me", path: "/about-me" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Certified", path: "/certified" },
  { name: "Contact", path: "/contact" },
];
</script>

<template>
  <div
    class="container mx-auto my-4 md:my-24 grid grid-cols-1 md:grid-cols-5 gap-5"
  >
    <div class="mx-4 md:mx-0 md:col-span-1">
      <personalInfo />
    </div>
    <div class="mx-4 mb-20 md:mb-0 md:mx-0 md:col-span-4">
      <mainSection />
    </div>

    <div class="fixed bottom-4 container md:hidden">
      <NavigationMenu class="border-2 bg-white border-slate-200 rounded p-1 mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem v-for="item in navData" :key="item.name">
            <router-link :to="item.path" class="block">
              <NavigationMenuLink
                :class="[
                  navigationMenuTriggerStyle(),
                  { 'bg-slate-200': item.path === route.path },
                ]"
              >
                {{ item.name }}
              </NavigationMenuLink>
            </router-link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
</template>

<style scoped></style>
