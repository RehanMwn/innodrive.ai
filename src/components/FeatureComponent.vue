<template>
  <div class="col-12 myFont text-white">
    <div
      class="image-container"
      :style="{
        height: $q.screen.gt.sm ? '91vh' : '60vh',
        backgroundImage: `url(${getImage(0)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    >
      <div
        class="absolute-full justify-start items-center"
        :style="{
          padding: $q.screen.gt.sm ? '16px' : '2px',
        }"
      >
        <div
          class="text-left myFont"
          :style="{
            maxWidth: $q.screen.gt.sm ? '1000px' : '1100px',
            marginTop: $q.screen.gt.sm ? '250px' : '100px',
            paddingLeft: $q.screen.gt.sm ? '8vw' : '6vw',
          }"
        >
          <div
            :class="{
              'text-h2 text-bold q-pb-lg': $q.screen.gt.sm,
              'text-h4 text-bold q-pb-lg': !$q.screen.gt.sm,
            }"
            v-html="taglineText"
          />
          <div
            :class="{
              'text-h5': $q.screen.gt.sm,
              'text-caption': !$q.screen.gt.sm,
            }"
            v-html="shortDescriptionText"
          />
          <div class="q-py-xl">
            <q-btn
              class="gradient-color text-white text-bold"
              glossy
              label="Learn More"
              unelevated
              @click="scrollTo1welcome"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { taglineText } from 'src/pages/DashboardPage';
import { shortDescriptionText } from 'src/pages/DashboardPage';
import { useQuasar } from 'quasar';

function scrollTo1welcome() {
  const section = document.getElementById('1-welcome');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

const $q = useQuasar();

const images = ['assets/imageDekstop/featureImage.png'];

const getImage = (index: number) => {
  return $q.screen.gt.sm
    ? images[index]
    : images[index].replace('Dekstop', 'Mobile');
};
</script>
