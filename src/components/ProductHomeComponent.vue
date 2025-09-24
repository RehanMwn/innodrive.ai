<template>
  <div class="col-12 q-pt-lg bg-black text-white myFont">
    <div class="row justify-center">
      <div class="row full-width justify-center text-h3 text-bold q-mt-lg">
        Our
        <div class="q-ml-md gradient-text">Product</div>
      </div>
      <div
        class="row q-mt-lg text-subtitle2 justify-center text-center"
        :style="{
          width: $q.screen.gt.sm ? '50%' : '85%',
        }"
        v-html="productTitleDescriptionText"
      ></div>
    </div>
  </div>
  <div class="col-12 bg-black text-white">
    <div class="row justify-center relative-position">
      <div class="absolute-full" ref="imgRef">
        <q-img src="assets/imageDekstop/ourProductImage.png" class="full-width">
        </q-img>
      </div>
      <ProductCardHome class="absolute-full full-width relative-position" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { productTitleDescriptionText } from 'src/pages/DashboardPage';
import ProductCardHome from 'src/components/ProductCardHome.vue';
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
