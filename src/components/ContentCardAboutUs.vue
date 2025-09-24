<template>
  <div
    class="row justify-center text-center q-py-lg"
    v-for="i in aboutCard"
    :key="i.description"
  >
    <div class="q-mb-md text-h6 col-10 text-center">
      {{ i.description }}
      <div class="row justify-center q-mt-md">
        <q-img :src="i.image" class="full-width" style="border-radius: 20px" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { aboutCard } from 'src/pages/AboutPage';
</script>
