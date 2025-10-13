<template>
  <div class="col-12 q-py-xl myFont">
    <div class="row items-start justify-center q-col-gutter-xl">

      <!-- Mobile Layout -->
      <template v-if="$q.screen.lt.md">
        <!-- Title & Description Center -->
        <div class="col-12 q-mb-lg">
          <div class="mobile-wrapper text-center">
            <div class="text-h5 text-bold">
              Power, Torque, and Performance —
              <span class="gradient-text">All in One Test</span>
            </div>
            <div class="text-body1 text-grey-9 q-mt-md">
              Vehicle performance can only be improved if you know the real
              condition. With Dynomax, every detail of power, torque, and
              efficiency is measurable. The best decision is in your hand.
            </div>
          </div>
        </div>

        <!-- Carousel for Mobile -->
        <div class="col-12 flex flex-center q-mb-lg">
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
            style="max-width: 90%; height: 350px;"
          >
            <q-carousel-slide
              v-for="(image, index) in images"
              :key="index"
              :name="'slide-' + index"
              :img-src="image"
              style="background-size: contain; background-repeat: no-repeat; background-position: center;"
            />
          </q-carousel>
        </div>

        <!-- Checklist + Button -->
        <div class="col-12">
          <div class="mobile-wrapper text-left">
            <div
              class="row items-center q-mb-sm checklist-row no-wrap"
              v-for="(item, i) in checklist"
              :key="i"
            >
              <q-img
                src="assets/icon/checklist.png"
                style="width: 18px; height: 18px; margin-right: 8px"
              />
              <span class="checklist-text-nowrap">{{ item }}</span>
            </div>

            <!-- Tombol align kiri -->
            <div class="q-py-lg flex items-start">
              <q-btn
                class="gradient-color text-white text-bold"
                glossy
                label="Learn More"
                unelevated
                @click="() => $router.push('/about')"
              />
            </div>
          </div>
        </div>
      </template>

      <!-- Desktop Layout -->
      <template v-else>
        <!-- Left Side: Text -->
        <div class="col-12 col-md-6 flex flex-center flex-md-none">
          <div class="q-px-lg allin-content-center" style="max-width: 600px">
            <div class="text-h5 text-bold">
              Powere, Torque, and Performance —
              <span class="gradient-text">All in One Test</span>
            </div>

            <div class="text-body1 text-grey-9 q-mt-md allin-desc-text">
              Vehicle performance can only be improved if you know the real
              condition. With Dynomax, every detail of power, torque, and
              efficiency is measurable. The best decision is in your hand.
            </div>

            <div class="q-mt-lg allin-checklist-text">
              <div
                class="row items-center q-mb-sm checklist-row no-wrap"
                v-for="(item, i) in checklist"
                :key="i"
              >
                <q-img
                  src="assets/icon/checklist.png"
                  style="width: 18px; height: 18px; margin-right: 8px"
                />
                <span class="checklist-text-nowrap">{{ item }}</span>
              </div>
            </div>

            <!-- Learn More Button -->
            <div class="q-py-xl">
              <q-btn
                class="gradient-color text-white text-bold"
                glossy
                label="Learn More"
                unelevated
                @click="() => $router.push('/about')"
              />
            </div>
          </div>
        </div>

        <!-- Right Side: Carousel -->
        <div class="col-12 col-md-6 flex flex-center">
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
            style="max-width: 70%; height: 550px;"
          >
            <q-carousel-slide
              v-for="(image, index) in images"
              :key="index"
              :name="'slide-' + index"
              :img-src="image"
              style="background-size: contain; background-repeat: no-repeat; background-position: center;"
            />
          </q-carousel>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const checklist = [
 'Accurate measurement of power and torque',
 'Engine efficiency and acceleration response analysis',
 'Real-world driving simulation with variable loads',
 'Real-time monitoring via desktop, web, and mobile apps',
    ];

    const currentSlide = ref('slide-0');
    const autoplay = ref(true);
    const images = [
 'assets/imageDekstop/dashboardProduct1.png',
 'assets/imageDekstop/dashboardProduct2.jpg',
 'assets/imageDekstop/dynoComponent1.png',
 'assets/imageDekstop/adros2.png',
    ];

    return { checklist, currentSlide, autoplay, images };
  },
});
</script>

<style scoped>
.allin-content-center {
  width: 100%;
}
.allin-desc-text {
  text-align: left;
}
.allin-checklist-text {
  text-align: left;
}
.checklist-row.no-wrap {
  flex-wrap: nowrap !important;
  display: flex !important;
  align-items: center !important;
}
.checklist-text-nowrap {
  white-space: nowrap !important;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: middle;
}

/* wrapper agar konten mobile tidak menjorok ke tepi */
.mobile-wrapper {
  max-width: 90%;
  margin: 0 auto;
}
.rounded-borders {
  border-radius: 12px;
  overflow: hidden;
}
</style>
