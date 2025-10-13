<template>
  <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap" style="min-height: 900px;">
    <div
      class="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative" v-if="mapSrc"
    >
      <iframe
        width="100%"
        height="100%"
        title="map"
        class="absolute inset-0"
        frameborder="0" marginheight="0" marginwidth="0" scrolling="no"
        :src="mapSrc"
        style="filter: grayscale(0) contrast(1) opacity(1)"
      ></iframe>
    </div>
    <div v-else class="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <p class="text-white">Loading map or location not available...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const mapSrc = ref('');

onMounted(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        mapSrc.value = `https://maps.google.com/maps?width=100%&height=600&hl=en&q=${latitude},${longitude}&ie=UTF8&t=&z=14&iwloc=B&output=embed`;
      },
      () => {
        mapSrc.value = 'https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Surabaya&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed'; // Default to Surabaya if geolocation fails
      }
    );
  } else {
    mapSrc.value = 'https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Surabaya&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed'; // Default to Surabaya if geolocation is not supported
  }
});
</script>

<style scoped>
/* Your styles here */
</style>
