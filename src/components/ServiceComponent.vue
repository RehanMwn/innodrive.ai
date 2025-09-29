<template>
  <div class="col-12">
    <q-img
      :src="
        $q.screen.gt.md
          ? 'assets/imageDekstop/4.png'
          : 'assets/imageDekstop/4.png'
      "
      :style="{
        height: $q.screen.gt.sm ? '100vh' : '60vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    >
      <div
        class="absolute-full flex justify-center items-center"
        style="background: rgba(0, 0, 0, 0.5)"
      >
        <div
          class="text-center myFont"
          style="max-width: 1100px; padding-left: 8vw"
        >
          <div
            :class="{
              'text-h2 text-bold q-pb-lg': $q.screen.gt.sm,
              'text-h6 text-bold q-pb-lg': !$q.screen.gt.sm,
            }"
            v-html="serviceTagline"
          />
          <div
            :class="{
              'text-h6': $q.screen.gt.sm,
              'text-caption': !$q.screen.gt.sm,
            }"
            v-html="serviceShortDescriptionText"
          />
        </div>
      </div>
    </q-img>
  </div>
</template>

<script setup lang="ts">
import {
  serviceTagline,
  serviceShortDescriptionText,
} from 'src/pages/ServicePage';
</script>
