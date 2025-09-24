<template>
  <div class="col-12 q-pt-lg bg-black text-white myFont">
    <div
      class="row justify-center text-bold"
      :class="$q.screen.gt.md ? 'text-h2 ' : 'text-h4 '"
    >
      <div class="row full-width justify-center q-mt-lg">
        Our Main
        <div class="q-ml-md gradient-text">Dashboard</div>
        <div class="q-ml-md">EV Cluster</div>
      </div>
      <div
        class="row q-mb-lg q-mt-lg text-subtitle1 justify-center text-center"
        :style="{
          width: $q.screen.gt.sm ? '50%' : '95%',
        }"
        v-html="dashboardPortoTagline"
      ></div>
    </div>
  </div>
  <div class="col-12 bg-black text-white">
    <div
      class="row justify-center relative-position"
      style="background-image: linear-gradient(#000000, #0c111d)"
    >
      <div class="absolute-full" ref="imgRef">
        <q-img src="assets/imageDekstop/ourProductImage.png" class="full-width">
        </q-img>
      </div>
      <DashboardCard class="full-width" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { dashboardPortoTagline } from 'src/pages/ProductPage';
import DashboardCard from 'src/components/DashboardCard.vue';
import { ref } from 'vue';
const imgRef = ref();

// onMounted(async () => {
//   await nextTick();
//   if (imgRef.value) {
//     console.log(imgRef.value.clientHeight);
//   }
// });

// const sameHeight = computed(() => {
//   return {
//     height: imgRef.value ? imgRef.value.clientHeight + 'px' : 'auto',
//   };
// });
</script>
