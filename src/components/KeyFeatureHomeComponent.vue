<template>
  <div class="col-12 q-py-xl myFont ornament-bg" style="background-color: #0c111d">
    <div
      class="row justify-center myFont"
      :class="$q.screen.gt.sm ? 'text-h3' : 'text-h6'"
    >
      <div class="full-width text-center text-bold gradient-text">
        Transforming industries
      </div>
      <div class="row full-width justify-center text-bold">
        <div class="text-white">through digital innovation for</div>
        <div class="q-pl-sm gradient-text">efficiency</div>
      </div>
      <div
        class="row justify-center text-center text-white"
        :class="$q.screen.gt.sm ? 'text-h6 q-mt-md' : 'text-caption q-mt-sm'"
        :style="{
          width: $q.screen.gt.sm ? '70%' : '90%',
        }"
        v-html="keyDescriptionText"
      ></div>
    </div>

    <div
      v-if="$q.screen.gt.md"
      class="relative flex justify-center items-center"
      style="position: relative; width: 100%; margin: 150px 0"
    >
      <q-img
        src="assets/imageDekstop/loginno.png"
        style="
          width: 600px;
          border-radius: 20px;
          position: relative;
          z-index: 1;
        "
      ></q-img>
      <div
        class="absolute flex justify-center items-center full-width q-pa-md"
        style="z-index: 2"
      >
        <div
          class="row justify-center full-width text-white text-center flex flex-center"
        >
          <div
            class="col-12 col-md-4 q-pa-md flex justify-center"
            style="margin-right: 200px"
          >
            <div
              v-for="(i, index) in keyFeatureCard.slice(0, 3)"
              :key="i.title"
              class="feature-wrapper text-center"
            >
              <div
                class="feature-card q-pa-md text-center flex items-center"
                @click="toggleFlip(index)"
                style="display: flex; align-items: center; gap: 10px"
              >
                <q-img :src="i.icon" style="width: 40px; margin: 0 10px" />
                <div v-if="!flipped[index]" class="text-h6 q-py-md">
                  {{ i.title }}
                </div>
                <div v-else class="text-subtitle2 text-weight-regular">
                  {{ i.description }}
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-md-4 q-pa-md flex justify-center"
            style="margin-left: 200px"
          >
            <div
              v-for="(i, index) in keyFeatureCard.slice(3, 6)"
              :key="i.title"
              class="feature-wrapper text-center"
            >
              <div
                class="feature-card q-pa-md text-center flex items-center"
                @click="toggleFlip(index + 3)"
                style="display: flex; align-items: center; gap: 10px"
              >
                <q-img :src="i.icon" style="width: 40px; margin: 0 10px" />
                <div v-if="!flipped[index + 3]" class="text-h6 q-py-md">
                  {{ i.title }}
                </div>
                <div v-else class="text-caption text-weight-regular">
                  {{ i.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="mobile-view q-pa-md">
      <q-img
        src="assets/imageDekstop/loginno.png"
        style="
          width: 250px;
          border-radius: 20px;
          position: relative;
          z-index: 1;
        "
      ></q-img>
      <q-list bordered separator class="feature-list">
        <q-item
          v-for="(i, index) in keyFeatureCard"
          :key="i.title"
          clickable
          v-ripple
          @click="toggleFlip(index)"
          dark
        >
          <q-item-section avatar>
            <q-img :src="i.icon" style="width: 30px" />
          </q-item-section>
          <q-item-section>
            <q-item-label v-if="!flipped[index]" class="text-caption2">{{
              i.title
            }}</q-item-label>
            <q-item-label v-else class="text-caption">{{
              i.description
            }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { keyDescriptionText } from 'src/pages/DashboardPage';
import { keyFeatureCard } from '../pages/DashboardPage';

const flipped = ref<boolean[]>(Array(keyFeatureCard.length).fill(false));
const toggleFlip = (index: number): void => {
  flipped.value[index] = !flipped.value[index];
};
</script>

<style scoped>
.feature-wrapper {
  width: 370px;
  margin-bottom: 90px;
}
.feature-card {
  border: 2px solid #f3cd96;
  max-width: 470px;
  border-radius: 6px;
  background-color: #1d2939;
  padding: 16px;
  cursor: pointer;
  transition: transform 0.3s;
  backface-visibility: hidden;
}

.mobile-view {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.feature-list {
  width: 70%;
}
/* ornament bawah kiri */
.ornament-bg {
  position: relative;
  overflow: hidden; /* supaya ornamen nggak bikin scrollbar */
}

/* kiri bawah */
.ornament-bg::after {
  content: ""; /* perlu ada biar muncul */
  position: absolute; /* biar bisa diatur posisi bebas */
  bottom: -10px;      /* agak keluar 10px */
  left: -160px;       /* setengah keluar kiri */
  width: 400px;      /* bisa diatur sesuai ukuran */
  height: 400px;  /* bisa diatur sesuai ukuran */
  background: url("/assets/ImageDekstop/ornament.png") no-repeat left bottom;
  background-size: contain; /* biar pas di kotak */
  opacity: 0.9;       /* transparan dikurangi 10% */
  transform: scaleX(-1); /* flip horizontal */
  pointer-events: none; /* biar nggak ganggu klik */
  z-index: 1;      /* biar di belakang konten */
}
</style>
