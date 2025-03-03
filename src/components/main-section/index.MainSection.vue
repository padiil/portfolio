<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import headerMainSection from "./headerMainSection.vue";
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>
        <headerMainSection />
      </CardTitle>
    </CardHeader>
    <CardContent>
      <router-view />
    </CardContent>
  </Card>
</template>

<style scoped></style>
