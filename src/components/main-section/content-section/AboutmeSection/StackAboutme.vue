<script lang="ts" setup>
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import javascriptLogo from "@/assets/tech-logos/javascript-original.svg";
import vuejsLogo from "@/assets/tech-logos/vuejs-original.svg";
import reactLogo from "@/assets/tech-logos/react-original.svg";
import nodeJsLogo from "@/assets/tech-logos/nodejs-original.svg";
import TailwindcssLogo from "@/assets/tech-logos/tailwindcss-plain.svg";
import expressJsLogo from "@/assets/tech-logos/express-original.svg";
import mongoDbLogo from "@/assets/tech-logos/mongodb-original.svg";
import postgresqlLogo from "@/assets/tech-logos/postgresql-plain.svg";

const stackData = [
  {
    src: javascriptLogo,
    alt: "Javascript Logo",
    name: "Javascript",
  },
  {
    src: vuejsLogo,
    alt: "Vuejs Logo",
    name: "Vuejs",
  },
  {
    src: reactLogo,
    alt: "React Logo",
    name: "React",
  },
  {
    src: TailwindcssLogo,
    alt: "Tailwindcss Logo",
    name: "Tailwindcss",
  },
  {
    src: nodeJsLogo,
    alt: "NodeJs Logo",
    name: "NodeJs",
  },
  {
    src: expressJsLogo,
    alt: "ExpressJs Logo",
    name: "ExpressJs",
  },
  {
    src: mongoDbLogo,
    alt: "MongoDb Logo",
    name: "MongoDb",
  },
  {
    src: postgresqlLogo,
    alt: "Postgresql Logo",
    name: "Postgresql",
  },
];
</script>

<template>
  <h2 class="text-xl font-semibold mb-4">My Stack</h2>
  <div class="grid grid-cols-10 gap-5 text-center">
    <Card v-for="(logo, index) in stackData" :key="index">
      <CardHeader class="p-2 pb-0">
        <CardTitle>
          <AspectRatio :ratio="1 / 1">
            <img
              :src="logo.src"
              :alt="logo.alt"
              class="rounded-md object-cover w-full h-full"
            />
          </AspectRatio>
        </CardTitle>
        <hr />
      </CardHeader>
      <CardContent class="p-2 pt-0">{{ logo.name }}</CardContent>
    </Card>
  </div>
</template>

<style></style>
