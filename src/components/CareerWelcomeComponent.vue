<template>
  <div
    class="full-width flex flex-center about-background"
    style="height: calc(92vh - 20px); position: relative"
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
        style="color: #475467"
        v-html="aboutShortDescriptionText"
      />
      <!-- 2 buttons -->
      <div class="q-mt-lg q-ml-md prafooter-btn-wrap">
        <q-btn
          label="Benefits"
          text-color="white"
          class="gradient-color q-px-xl q-py-sm text-bold q-mr-md"
          style="border-radius: 8px"
          @click="scrollToSection1benefits()"
        />
        <q-btn
          label="Roles"
          class="q-px-xl q-py-sm text-bold"
          style="border-radius: 8px; background-color: white; color: #d9ab6d; border: 2px solid #d9ab6d;"
          @click="scrollToSection2roles()"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { taglineAboutText } from 'src/pages/CareerPage';
import { aboutShortDescriptionText } from 'src/pages/CareerPage';
function scrollToSection1benefits() {
  const section = document.getElementById('section-1benefits');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
function scrollToSection2roles() {
  const section = document.getElementById('section-2roles');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style scoped>
.about-background {
  background-image: url('public/assets/imageDekstop/careerwelcome.png');
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
  color: #d0d5dd;
}
.gradient-text {
  background: linear-gradient(180deg, #d9ab6d 30%, #f3cd96 100%);
}
</style>
