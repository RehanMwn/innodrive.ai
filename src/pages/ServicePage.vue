<template>
  <q-page>
    <!-- Feature Product -->
    <ServiceComponent />

    <!-- Products -->
    <ServicePorto />
    <!-- <div class="row justify-center myFont q-py-xl">
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
        "
      >
        <div style="font-size: 1.5rem; font-weight: bold; text-align: right">
          Let's Contact Us!
        </div>
        <img
          src="assets/icon/letsJoinIcon.png"
          alt="Icon"
          style="width: 50px; height: 50px; object-fit: contain"
        />
      </div>

      <div
        class="q-mt-md text-subtitle2 row justify-center text-center"
        style="max-width: 90%; word-wrap: break-word; line-height: 1.6"
        v-html="descriptionContactUsText"
      ></div>
      <div class="text-center full-width q-py-lg">
        <q-btn
          class="gradient-color text-white"
          glossy
          label="Learn More"
          unelevated
          :href="'https://wa.me/message/5H2WQUJVTOU3F1'"
          target="_blank"
        />
      </div>
    </div> -->
  </q-page>
</template>

<script setup lang="ts">
import ServiceComponent from 'src/components/ServiceComponent.vue';
import ServicePorto from 'src/components/ServicePorto.vue';
// import { descriptionContactUsText } from 'src/pages/ProductPage';
</script>
