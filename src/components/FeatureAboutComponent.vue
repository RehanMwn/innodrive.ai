<template>
  <div
    class="full-width flex flex-center about-background"
    style="height: calc(92vh - 20px)"
  >
    <div
      class="text-center myFont q-px-md text-white"
      style="max-width: 900px"
    >
      <!-- Headline -->
      <div
        :class="{
          'text-h2 text-bold q-mb-md': $q.screen.gt.sm,
          'text-h5 text-bold q-mb-sm': !$q.screen.gt.sm,
        }"
        v-html="taglineAboutText"
      />

      <!-- Sub text -->
      <div
        :class="{
          'text-h6 text-grey-5': $q.screen.gt.sm,
          'text-subtitle2': !$q.screen.gt.sm,
        }"
        style="color: #1d2939"
        v-html="aboutShortDescriptionText"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { taglineAboutText } from 'src/pages/AboutPage';
import { aboutShortDescriptionText } from 'src/pages/AboutPage';
</script>

<style scoped>
.about-background {
  background-image: url('public/assets/imageDekstop/about1.png');
  background-size: cover; /* penuh layar */
  background-position: center; /* posisi tengah */
  background-repeat: no-repeat; /* tidak diulang */
}
.text-grey-5 {
  color: #D0D5DD;
}
</style>
