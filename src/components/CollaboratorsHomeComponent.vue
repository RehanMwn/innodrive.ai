<template>
  <div class="col-12 q-py-xl myFont bg-grey-1">
    <!-- Title -->
    <div class="text-center q-mb-lg">
      <div class="text-h4 text-bold">
        Our <span class="gradient-text">Collaborators</span>
      </div>
      <div class="text-subtitle1 text-grey-8 q-mt-sm q-px-md">
        Our network of partners contributing to smarter and sustainable solutions.
      </div>
    </div>

    <!-- Grid Logos -->
    <div class="row q-col-gutter-md justify-center q-mt-xl">
      <div
        v-for="(logo, index) in collaborators"
        :key="index"
        class="col-6 col-md-3 col-lg-2 flex flex-center"
      >
        <q-img
          :src="logo"
          fit="contain"
          style="max-width: 140px; max-height: 100px"
          spinner-color="primary"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const collaborators = [
  'assets/collaborators/unnamed-removebg-preview.png',
  'assets/collaborators/Adam Brothers.png',
  'assets/collaborators/ADERCO.png',
  'assets/collaborators/brin-badan-riset-dan-inovasi-nasional-seeklogo.png',
  'assets/collaborators/Honda Asia.png',
  'assets/collaborators/institut-teknologi-sepuluh-nopember-seeklogo.png',
  'assets/collaborators/jawa-timur-seeklogo.png',
  'assets/collaborators/Lambang_Resmi_UMJ.png',
  'assets/collaborators/logo ui (universitas indonesia).png',
  'assets/collaborators/Logo_Pertamina_Hulu_Energi.png',
  'assets/collaborators/ums.png',
  'assets/collaborators/LogoIndocentral.png',
  'assets/collaborators/LogoSooko.png',
  'assets/collaborators/Politeknik_Negeri_Madiun.png',
  'assets/collaborators/SMK NU 1 Kendal.png',
  'assets/collaborators/Tunas Honda.png',
  'assets/collaborators/smkn2sby.png',
  'assets/collaborators/Undip - (Koleksilogo.com).png',
  'assets/collaborators/universitas-negeri-yogyakarta.png',
  'assets/collaborators/kzr.png',
  'assets/collaborators/drg.png',
];
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(90deg, #f6a623, #fbb03b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
