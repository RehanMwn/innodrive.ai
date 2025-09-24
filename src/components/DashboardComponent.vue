<template>
  <div class="col-12">
    <q-img
      src="assets/imageDekstop/bannerDashboard.png"
      :style="{
        height: $q.screen.gt.sm ? '100vh' : '60vh',
      }"
    >
      <div
        class="absolute-full flex justify-start items-center"
        style="background: rgba(0, 0, 0, 0.1)"
      >
        <div
          class="text-left myFont"
          style="max-width: 800px; padding-left: 8vw"
        >
          <div
            :class="{
              'text-h2 text-bold q-pb-lg': $q.screen.gt.sm,
              'text-h5 text-bold q-pb-lg': !$q.screen.gt.sm,
            }"
            v-html="dashboardTagline"
          />
          <div
            :class="{
              'text-h5 q-mt-lg': $q.screen.gt.sm,
              'text-caption2': !$q.screen.gt.sm,
            }"
            v-html="dashboardShortDescriptionText"
          />
        </div>
      </div>
    </q-img>
  </div>
</template>

<script setup lang="ts">
import {
  dashboardTagline,
  dashboardShortDescriptionText,
} from 'src/pages/ProductDashboardPage';
</script>
