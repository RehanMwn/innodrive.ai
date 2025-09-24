<template>
  <div class="row justify-center myFont">
    <div
      class="col-12 col-sm-6 col-md-4 col-lg-4 q-py-md q-px-md text-black"
      v-for="i in galleryCard"
      :key="i.title"
    >
      <q-card class="full-height column" style="border-radius: 10px">
        <q-img :src="i.image" class="full-width" />
        <div class="q-py-xs q-px-lg full-width">
          <div class="text-subtitle2 text-justify">
            {{ i.title }}
          </div>
        </div>
        <!-- <div class="q-gutter-md q-mt-auto row items-end justify-end">
          <q-btn
            class="animated-button"
            no-caps
            label="Show More"
            size="md"
            icon-right="arrow_forward"
            flat
          />
        </div> -->
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { galleryCard } from 'src/pages/DashboardPage';
</script>
