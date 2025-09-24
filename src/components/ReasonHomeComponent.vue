<template>
  <div class="row justify-center q-py-xl">
    <div class="col-12 col-md-10 row justify-center myFont">
      <div
        class="row full-width justify-center text-bold q-mt-md text-center"
        :class="$q.screen.gt.sm ? 'text-h3' : 'text-h5'"
      >
        Why Choose
        <div class="q-ml-sm gradient-text">Innodrive.ai?</div>
      </div>
      <div
        class="q-mt-md row justify-center text-center"
        :class="$q.screen.gt.sm ? 'col-md-6 text-h6' : 'col-10 text-caption1'"
        v-html="reasonDescriptionText"
      ></div>
    </div>
    <div class="row justify-center q-mt-lg">
      <div class="col-12 col-md-6 flex flex-center q-pa-sm">
        <q-carousel
          v-model="currentSlide"
          animated
          navigation
          infinite
          :autoplay="autoplay"
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
          control-color="grey"
          class="full-width rounded-borders"
          :style="carouselStyle"
        >
          <q-carousel-slide
            v-for="(image, index) in images"
            :key="index"
            :name="'slide-' + index"
            :img-src="image"
            :style="{
              'max-width': $q.screen.gt.sm ? '100%' : '80%',
              backgroundSize: 'contain', // Gambar akan disesuaikan tanpa ter-crop
              backgroundRepeat: 'no-repeat', // Mencegah gambar berulang
              margin: $q.screen.gt.sm ? '0' : 'auto',
            }"
          />
        </q-carousel>
      </div>
      <div class="col-12 col-md-6 flex flex-center q-pa-sm">
        <ReasonCardHome />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ReasonCardHome from '../components/ReasonCardHome.vue';
import { reasonDescriptionText } from '../pages/DashboardPage';
import { ref, computed } from 'vue';

const currentSlide = ref('slide-0');
const autoplay = ref(true);
const images = [
  'assets/imageDekstop/dashboardProduct1.jpg',
  'assets/imageDekstop/dashboardProduct2.jpg',
  'assets/imageDekstop/dynoComponent1.png',
  'assets/imageDekstop/adros2.png',
];

const carouselStyle = computed(() => ({
  maxWidth: '100%',
  height: window.innerWidth > 600 ? '550px' : '350px',
}));
</script>

<style scoped>
.rounded-borders {
  border-radius: 12px;
  overflow: hidden;
}
</style>
