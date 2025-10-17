<template>
  <div id="section-1cards"
    class="row justify-center q-mt-md q-mb-md q-mx-auto myFont"
    :style="{ maxWidth: $q.screen.gt.sm ? '80%' : '97%' }"
  >
    <!-- title -->
    <div class="text-center q-mt-xl">
      <div class="text-h3 text-bold">
        Why choose <span class="gradient-text">Innodrive.ai?</span>
      </div>
      <div class="text-subtitle1 text-grey-8 q-mt-sm q-px-lg">
        We combine expertise, technology, and vision to help industries achieve
        smarter, scalable growth.
      </div>
    </div>
    <div class="row justify-center full-width q-pa-md q-mt-sm">
      <div
        v-for="(i, index) in keyFeatureCard"
        :key="index"
        class="col-12 col-sm-6 col-md-4 q-pa-md flex flex-center"
      >
        <div
          class="feature-card q-pa-md text-black text-center feature-container"
          @click="toggleFlip(index)"
        >
          <q-img :src="i.icon" style="width: 40px; margin: 0 auto" />
          <div v-if="!flipped[index]" class="text-h6 q-py-md">
            {{ i.title }}
          </div>
          <div v-else class="text-subtitle2 text-weight-regular">
            {{ i.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import {

  serviceCard,
} from '../pages/ProductDashboardPage';
import { keyFeatureCard } from '../pages/DashboardPage';

const slide = reactive<Record<string, number>>({});
serviceCard.forEach((service) => {
  slide[service.id] = 0;
});

const flipped = reactive<Record<number, boolean>>({});
keyFeatureCard.forEach((_, index) => {
  flipped[index] = false;
});

const toggleFlip = (index: number): void => {
  flipped[index] = !flipped[index];
};
</script>

<style scoped>
.q-tabs {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.q-tab-panels {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.q-btn {
  background: linear-gradient(to right, #c8a165, #a87b41);
  color: white;
}
.no-bullets {
  list-style: none;
  padding-left: 0;
}
.custom-gradient {
  background-image: linear-gradient(#d9ab6d, #f3cd96) !important;
  border: none;
}
.custom-tab {
  transition: background-color 0.3s, color 0.3s;
  font-weight: 900 !important;
}

.custom-tab:hover {
  background-color: #8b6f4f; /* Warna lebih terang saat hover */
  color: #ffd700; /* Teks berubah menjadi emas */
}

.active-tab {
  background-color: #ffcc00 !important; /* Warna menyala saat aktif */
  color: #000 !important; /* Warna teks kontras */
  font-weight: 900 !important;
  box-shadow: 0 0 10px rgba(255, 204, 0, 0.8); /* Efek glow */
}
.feature-container {
  z-index: 10;
}
.feature-card {
  width: 100%;
  height: 100%;
  border: 1px solid #e4e7ec;
  background-color: white;
  padding: 20px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.feature-card:hover {
  transform: scale(1.05);
  transition: transform 0.3s;
  border: 1px solid #d9ab6d;
  box-shadow: 0 0 10px rgba(217, 171, 109, 0.5);
}

</style>
