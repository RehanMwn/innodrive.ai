<template>
  <div class="col-12">
    <q-img
      :src="
        $q.screen.gt.md
          ? 'assets/imageDekstop/featureImageProduct.png'
          : 'assets/imageMobile/featureImageProduct.png'
      "
      style="width: 100%; height: auto"
      background-size="cover"
    >
      <div
        class="absolute-full flex justify-start items-center"
        style="background: rgba(0, 0, 0, 0.1)"
      >
        <div
          class="text-left myFont"
          style="max-width: 1000px; padding-left: 8vw"
        >
          <div
            :class="{
              'text-h2 text-bold q-pb-lg': $q.screen.gt.sm,
              'text-h5 text-bold q-pb-lg': !$q.screen.gt.sm,
            }"
            v-html="taglineProductText"
          />
          <div
            :class="{
              'text-h6': $q.screen.gt.sm,
              'text-caption': !$q.screen.gt.sm,
            }"
            v-html="productShortDescriptionText"
          />
        </div>
      </div>
    </q-img>
  </div>
</template>

<script setup lang="ts">
import { taglineProductText } from 'src/pages/ProductPage';
import { productShortDescriptionText } from 'src/pages/ProductPage';
</script>
