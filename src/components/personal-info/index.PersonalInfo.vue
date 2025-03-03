<script setup lang="ts">
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
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>
        <HeadPersonal />
      </CardTitle>
    </CardHeader>
    <CardContent>
      <MiddlePersonal />
    </CardContent>
    <CardFooter>
      <FooterPersonal />
    </CardFooter>
  </Card>
</template>

<style scoped></style>
