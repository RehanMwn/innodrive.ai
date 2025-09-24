<template>
  <div class="col-12">
    <q-img
      src="assets/imageDekstop/dynoBanner.png"
      :style="{
        height: $q.screen.gt.sm ? '100vh' : '60vh',
        'background-cover': 'cover',
      }"
    >
      <div
        class="absolute-full flex justify-start items-center"
        style="background: rgba(0, 0, 0, 0.1)"
      >
        <div class="myFont" style="max-width: 800px; padding-left: 8vw">
          <div
            :class="{
              'text-h2 text-bold q-pb-lg': $q.screen.gt.sm,
              'text-h5 text-bold q-pb-lg': !$q.screen.gt.sm,
            }"
            v-html="dynoTagline1"
          />
          <div
            :class="{
              'text-h6': $q.screen.gt.sm,
              'text-caption': !$q.screen.gt.sm,
            }"
            v-html="dynoSubTagline1"
          />
          <q-btn
            style="margin-top: 50px"
            v-if="$q.screen.gt.sm"
            class="gradient-color text-white"
            glossy
            label="Contact Us"
            :href="'https://wa.me/message/5H2WQUJVTOU3F1'"
            target="_blank"
          />
        </div>
      </div>
    </q-img>
  </div>
</template>

<script setup lang="ts">
import { dynoTagline1, dynoSubTagline1 } from '../pages/ProductDyno';
</script>
