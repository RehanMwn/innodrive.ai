<template>
  <div class="row full-width q-pa-md">
    <div
      v-for="i in keyFeatureCard"
      :key="i.title"
      class="col-12 col-sm-6 col-md-4 text-white q-pa-lg"
    >
      <q-img :src="i.icon" style="width: 40px" />
      <div class="text-h6 q-py-md">{{ i.title }}</div>
      <div class="text-subtitle2 text-weight-regular">
        {{ i.description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { keyFeatureCard } from '../pages/DashboardPage';
</script>
