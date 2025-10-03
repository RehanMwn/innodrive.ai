<template>
  <!-- Team Structure -->
  <div class="team-structure q-py-xl myFont">
    <!-- Judul di atas -->
    <div class="text-center q-mb-xl">
      <div class="text-h3 text-bold">
        Company Structure of <span class="gradient-text">Innodrive.ai</span>
      </div>
      <div class="text-subtitle1 text-grey-8 q-mt-sm">
        Meet our founders and divisions
      </div>
    </div>

    <!-- Gambar background -->
    <div v-if="$q.screen.gt.sm" class="structure-image"></div>
    <div v-else class="q-pa-sm">
      <q-img
        src="assets/imageDekstop/Structure2.png"
        style="width: 100%; border-radius: 12px"
        fit="contain"
      />
    </div>
  </div>

</template>

<script setup lang="ts">
// Tidak perlu data card
</script>

<style scoped>
.team-structure {
  position: relative;
  width: 100%;
  background-color: #FCFCFD;
}

/* Gambar struktur */
.structure-image {
  width: 100%;
  min-height: 100vh;
  background-image: url("/assets/imageDekstop/Structure.png");
  background-size: contain; /* tampil penuh tanpa terpotong */
  background-repeat: no-repeat;
  background-position: center;
}

/* Tablet & Mobile */
@media (max-width: 1024px) {
  .structure-image {
    min-height: 70vh;
    background-size: cover; /* isi layar kecil */
  }
}
</style>
