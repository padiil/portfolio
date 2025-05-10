<script lang="ts" setup>
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const portfolioData = [
  {
    title: "Project 1",
    description: "Description of project 1",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    imageUrl: "https://placehold.co/600x400",
  },
];
</script>

<template>
  <div class="grid grid-cols-3 gap-5">
    <Card
      v-for="(item, index) in portfolioData"
      :key="index"
      class="hover:shadow-lg transition-shadow duration-300"
    >
      <CardHeader>
        <CardContent class="px-0">
          <AspectRatio :ratio="16 / 9">
            <img
              :src="item.imageUrl"
              :alt="item.title"
              class="rounded-md object-cover w-full h-full"
            />
          </AspectRatio>
        </CardContent>
        <CardTitle>{{ item.title }}</CardTitle>
        <CardDescription>{{ item.description }}</CardDescription>
      </CardHeader>
    </Card>
  </div>
</template>

<style></style>
