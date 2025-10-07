<template>
  <!-- section 1 -->
  <div class="col-12">
    <q-img
      src="assets/imageDekstop/innodrop.png"
      :style="{
        height: $q.screen.gt.sm ? '100vh' : '60vh',
      }"
    >
      <div
        class="absolute-full flex justify-start items-center"
        style="background: rgba(0, 0, 0, 0.1)"
      >
        <div
          class="text-left myFont"
          style="max-width: 800px; padding-left: 8vw"
        >
          <div
            :class="{
              'text-h2 text-bold q-pb-lg': $q.screen.gt.sm,
              'text-h5 text-bold q-pb-lg': !$q.screen.gt.sm,
            }"
          >
            Precise Fueling, Smarter Control
          </div>
          <div
            :class="{
              'text-h5 q-mt-lg': $q.screen.gt.sm,
              'text-caption2': !$q.screen.gt.sm,
            }"
          >
            InnoDrop ensures efficient fuel dispensing with real-time
            monitoring, and seamless data reporting—built to optimize mining
            operations with accuracy and reliability.
          </div>
        </div>
      </div>
    </q-img>
  </div>
  <div></div>
  <!-- section 2-->
  <div class="row justify-center q-py-xl">
    <!-- <div class="col-12 col-md-10 row justify-center myFont">
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
      ></div>
    </div> -->
    <div class="row items-center q-mt-lg" style="margin-left: 150px;">
      <!-- left side -->
      <div class="col-12 col-md-6 flex flex-center q-pa-sm">
        <div style="font-weight: 500; font-size: 20px; margin-left: -100px; color: #344054;">Fuel Insight</div>
        <q-img
          src="/public/assets/imageDekstop/innodrop2.png"
          :style="carouselStyle"
          class="full-width rounded-borders"
          fit="contain"
        />
      </div>
      <!-- right side -->
      <div class="col-12 col-md-6 flex flex-center q-pa-sm">
        <div class="row q-gutter-lg justify-center">
          <div
            class="col-12 q-my-md"
            :style="{
              'max-width': $q.screen.gt.sm ? '100%' : '85%',
              'margin-left': $q.screen.gt.sm ? '150px' : 'auto',
              'margin-right': $q.screen.gt.sm ? '0px' : 'auto',
            }"
            v-for="i in reasonCard"
            :key="i.title"
          >
            <q-card
              class="text-left q-py-md q-px-md"
              :style="{
                width: $q.screen.gt.sm ? '600px' : '100%',
                'margin-left': '10px',
                height: 'auto',
                'border-radius': '16px',
              }"
            >
              <div
                class="row items-start no-wrap items-center"
                :style="{
                  width: '100%',
                  height: 'auto',
                }"
              >
                <q-img
                  :src="i.icon"
                  :style="{
                    width: $q.screen.gt.sm ? '80px' : '50px',
                    height: 'auto',
                    'margin-right': '12px',
                  }"
                />
                <div class="col">
                  <div class="text-h6 text-bold">{{ i.title }}</div>
                  <div class="text-subtitle2 text-weight-regular">
                    {{ i.description }}
                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const reasonCard = [
  {
    icon: 'assets/icon/WCIcon1.png',
    title: 'Safety First',
    description:
      'Our advanced driver assistance systems help prevent accidents and keep you safe on the road.',
  },
  {
    icon: 'assets/icon/WCIcon1.png',
    title: 'User Friendly Interface',
    description:
      'Simple and Intuitive design makes it easy for drivers of all levels to use our features effectively.',
  },
  {
    icon: 'assets/icon/WCIcon1.png',
    title: 'Continuous Improvement',
    description:
      'We continuously enhance our technology to provide you with the most advanced and reliable driving assistance on the market.',
  },
];

const carouselStyle = computed(() => ({
  maxWidth: '100%',
  height: window.innerWidth > 600 ? '550px' : '350px',
}));
</script>
