<script lang="ts" setup>
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

const getTitle = () => {
  const currentRoute = navData.find((item) => item.path === route.path);
  return currentRoute ? currentRoute.name : "About Me";
};
</script>

<template>
  <div class="flex justify-between items-center">
    <div>
      <h2 class="text-xl">{{ getTitle() }}</h2>
      <hr class="border-2 border-slate-200" />
    </div>

    <NavigationMenu class="border-2 border-slate-200 rounded p-1">
      <NavigationMenuList>
        <NavigationMenuItem v-for="item in navData" :key="item.name">
          <router-link :to="item.path">
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
</template>
