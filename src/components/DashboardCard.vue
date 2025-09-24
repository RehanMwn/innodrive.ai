<template>
  <div
    class="row justify-center q-mt-md q-mb-md q-mx-auto myFont"
    :style="{ maxWidth: $q.screen.gt.sm ? '80%' : '97%' }"
  >
    <div class="col-12" style="border: 2px solid #f3cd96; border-radius: 9px">
      <q-tabs
        v-model="selectedTab"
        class="text-bold text-white"
        style="background-color: #6d5637"
        align="left"
      >
        <q-tab
          v-for="s in serviceCard"
          :key="s.id"
          :name="s.id"
          :label="s.title"
          class="text-bold q-ml-sm custom-tab"
          :class="{ 'active-tab': selectedTab === s.id }"
        />
      </q-tabs>

      <q-tab-panels
        v-model="selectedTab"
        animated
        class="q-pa-md rounded-borders"
        style="background-color: #1d2939"
      >
        <q-tab-panel v-for="s in serviceCard" :key="s.id" :name="s.id">
          <div class="row items-center">
            <div class="col-12 col-md-6">
              <q-carousel
                v-model="slide[s.id]"
                transition-prev="slide-right"
                transition-next="slide-left"
                animated
                control-color="primary"
                navigation
                swipeable
                :autoplay="3000"
                infinite
                class="full-width"
                :style="{ height: $q.screen.gt.sm ? '500px' : '200px' }"
              >
                <q-carousel-slide
                  v-for="(image, index) in s.images"
                  :key="index"
                  :name="index"
                  :img-src="image"
                />
              </q-carousel>
            </div>
            <div
              class="col-12 col-md-6 text-white"
              :class="$q.screen.gt.sm ? 'q-pa-lg ' : ''"
            >
              <div
                class="text-bold"
                :class="$q.screen.gt.sm ? 'text-h3 ' : 'text-h4'"
              >
                {{ s.title }}
              </div>
              <q-rating
                v-model="rating"
                :max="5"
                color="orange"
                readonly
                size="sm"
                class="q-mb-sm"
              />
              <ul class="no-bullets">
                <li
                  v-for="(item, index) in s.listItem"
                  :key="index"
                  class="q-mb-sm"
                  :class="$q.screen.gt.sm ? 'text-h5' : 'text-body1'"
                >
                  <q-icon name="check_circle" color="green" /> {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
    <div class="column full-width items-center text-bold q-mt-lg q-mb-lg">
      <div
        class="q-mb-lg q-mt-lg text-bold text-center"
        :class="$q.screen.gt.md ? 'text-h2 ' : 'text-h4 '"
      >
        Key Futures <span class="gradient-text">Innodrive.ai </span>to New Era
      </div>
      <div
        class="q-mt-md row justify-center text-center text-white"
        :class="$q.screen.gt.sm ? 'text-h5 ' : 'text-caption'"
        :style="{
          width: $q.screen.gt.sm ? '70%' : '90%',
        }"
        v-html="keyfutureProductText"
      ></div>
    </div>
    <div class="row justify-center full-width q-pa-md q-mt-sm">
      <div
        v-for="(i, index) in keyFeatureCard"
        :key="index"
        class="col-12 col-sm-6 col-md-4 q-pa-md flex flex-center"
      >
        <div
          class="feature-card q-pa-md text-white text-center feature-container"
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
import { ref, reactive } from 'vue';
import {
  keyfutureProductText,
  serviceCard,
} from '../pages/ProductDashboardPage';
import { keyFeatureCard } from '../pages/DashboardPage';

const slide = reactive<Record<string, number>>({});
serviceCard.forEach((service) => {
  slide[service.id] = 0;
});

const selectedTab = ref(serviceCard[0]?.id || '');
const rating = ref(5);
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
  border: 2px solid #b58f5b;
  background-color: #1d2939;
  padding: 20px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
