<script lang="ts" setup>
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimoniData = [
  {
    name: "David",
    position: "CEO Google inc.",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    avatar: "https://github.com/unovue.png",
  },
  {
    name: "Alice",
    position: "CTO Facebook",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    avatar: "https://github.com/unovue.png",
  },
  {
    name: "John",
    position: "CEO Microsoft",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    avatar: "https://github.com/unovue.png",
  },
  {
    name: "Jane",
    position: "CEO Amazon",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    avatar: "https://github.com/unovue.png",
  },
  {
    name: "Doe",
    position: "CEO Apple",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    avatar: "https://github.com/unovue.png",
  },
  {
    name: "Smith",
    position: "CEO Tesla",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    avatar: "https://github.com/unovue.png",
  },
  {
    name: "Doe",
    position: "CEO SpaceX",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    avatar: "https://github.com/unovue.png",
  },
];
</script>

<template>
  <h2 class="text-xl font-semibold mb-4">Testimonial</h2>
  <div>
    <Carousel
      :plugins="[
        Autoplay({
          delay: 2000,
        }),
      ]"
    >
      <CarouselContent>
        <CarouselItem
          v-for="(testimoni, index) in testimoniData"
          :key="index"
          class="basis-1/3"
        >
          <Card class="flex">
            <CardHeader class="p-4">
              <CardTitle>
                <Avatar>
                  <AvatarImage
                    :src="testimoni.avatar"
                    :alt="`@${testimoni.name}`"
                  />
                  <AvatarFallback>{{
                    testimoni.name.charAt(0)
                  }}</AvatarFallback>
                </Avatar>
              </CardTitle>
            </CardHeader>
            <CardContent class="ps-0 py-4 pe-4">
              <p class="font-semibold mb-2">{{ testimoni.name }}</p>
              <p class="truncate-text mb-2">
                {{ testimoni.message }}
              </p>
              <p class="text-slate-500">{{ testimoni.position }}</p>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>

<style scoped>
.truncate-text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
