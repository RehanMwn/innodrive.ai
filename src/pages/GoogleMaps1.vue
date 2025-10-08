<template>
  <div
    class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap"
    style="min-height: 900px;"
  >
    <!-- MAP -->
    <div
      class="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
    >
      <iframe
        v-if="mapSrc"
        width="100%"
        height="100%"
        title="map"
        class="absolute inset-0"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        scrolling="no"
        :src="mapSrc"
        style="filter: grayscale(0) contrast(1) opacity(1)"
      ></iframe>

      <div v-else class="text-white text-center w-full">
        Loading map...
      </div>
    </div>

    <!-- SEARCH BOX -->
    <div class="lg:w-1/3 md:w-1/2 flex flex-col justify-center">
      <input
        id="autocomplete"
        type="text"
        placeholder="Cari lokasi..."
        class="w-full p-3 rounded border focus:outline-none focus:ring focus:border-blue-400"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const mapSrc = ref("");

// init map dengan default Surabaya
mapSrc.value =
  "https://maps.google.com/maps?width=100%&height=600&hl=en&q=Surabaya&ie=UTF8&t=&z=14&iwloc=B&output=embed";

onMounted(() => {
  // Load Google Places Autocomplete
  const autocompleteInput = document.getElementById("autocomplete");

  if (window.google) {
    const autocomplete = new window.google.maps.places.Autocomplete(
      autocompleteInput,
      {
        fields: ["geometry", "formatted_address"],
        types: ["geocode"],
      }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        mapSrc.value = `https://maps.google.com/maps?width=100%&height=600&hl=en&q=${lat},${lng}&ie=UTF8&t=&z=14&iwloc=B&output=embed`;
      }
    });
  }
});
</script>

<style scoped></style>
