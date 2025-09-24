<template>
  <div class="col-12 q-py-lg bg-black text-white myFont">
    <div class="column justify-center items-center text-center q-pa-lg">
      <div
        :class="{
          'text-h4 text-bold': $q.screen.gt.sm,
          'text-h6 text-bold': !$q.screen.gt.sm,
        }"
      >
        Let's Join With Us!
      </div>
      <div
        :class="{
          'text-h4 text-bold q-pt-sm': $q.screen.gt.sm,
          'text-h6 text-bold q-pt-sm': !$q.screen.gt.sm,
        }"
      >
        On the Road to
        <span class="gradient-text">a Safer Future</span>
      </div>
      <div
        :class="{
          'text-subtitle2 q-pt-lg': $q.screen.gt.sm,
          'text-caption q-pt-lg': !$q.screen.gt.sm,
        }"
        :style="{
          width: $q.screen.gt.sm ? '50%' : '90%',
          maxWidth: '800px',
        }"
        v-html="joinUsDescriptionText"
      ></div>
      <div class="q-pt-lg">
        <q-btn
          class="gradient-color text-white text-bold"
          glossy
          label="Learn More"
          @click="() => $router.push('/product')"
        />
      </div>
    </div>
    <div class="row justify-center q-py-xl">
      <q-img
        src="assets/imageMobile/joinUsImage.png"
        class="full-width"
      ></q-img>
    </div>
  </div>
</template>

<script setup lang="ts">
import { joinUsDescriptionText } from 'src/pages/DashboardPage';
</script>
