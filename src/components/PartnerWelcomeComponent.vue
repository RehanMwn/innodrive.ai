<template>
  <div
    class="full-width flex flex-center about-background"
    style="height: calc(92vh - 20px); position: relative;"
  >
    <!-- Overlay hitam transparan -->
    <div class="overlay"></div>

    <div
      class="text-center myFont q-px-md text-white relative-content"
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
import { taglineAboutText } from 'src/pages/PartnerPage';
import { aboutShortDescriptionText } from 'src/pages/PartnerPage';
</script>

<style scoped>
.about-background {
  background-image: url('public/assets/imageDekstop/partnerwelcome.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 100%;
}

.relative-content {
  position: relative;
  z-index: 1;
}

.text-grey-5 {
  color: #D0D5DD;
}
</style>
