<template>
  <div class="col-12">
    <q-img
      :src="
        $q.screen.gt.md
          ? 'assets/imageDekstop/featureImageAbout.png'
          : 'assets/imageMobile/featureImageAbout.png'
      "
      style="width: 100%; height: auto"
      background-size="cover"
    >
      <div
        class="absolute-full flex justify-start items-center"
        style="background: rgba(0, 0, 0, 0.1)"
      >
        <div
          class="text-left myFont"
          style="max-width: 1000px; padding-left: 8vw"
        >
          <div
            :class="{
              'text-h2 text-bold q-pb-lg': $q.screen.gt.sm,
              'text-h5 text-bold q-pb-lg': !$q.screen.gt.sm,
            }"
            v-html="taglineAboutText"
          />
          <div
            :class="{
              'text-h6': $q.screen.gt.sm,
              'text-caption': !$q.screen.gt.sm,
            }"
            v-html="aboutShortDescriptionText"
          />
        </div>
      </div>
    </q-img>
  </div>
</template>

<script setup lang="ts">
import { taglineAboutText } from 'src/pages/AboutPage';
import { aboutShortDescriptionText } from 'src/pages/AboutPage';
</script>
