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
  {
    name: "About Me",
    href: "/about-me",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Certified",
    href: "/certified",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const getTitle = () => {
  const currentRoute = navData.find((item) => item.href === route.path);
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
          <NavigationMenuLink
            class="text-base font-semibold"
            :href="item.href"
            :class="[
              navigationMenuTriggerStyle(),
              { 'bg-slate-200': item.href === route.path },
            ]"
          >
            {{ item.name }}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
</template>

<style scoped>

</style>
