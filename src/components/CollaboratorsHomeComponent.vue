<template>
  <div id="collaborator" class="col-12 q-py-xl myFont bg-grey-1">
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
    <div v-if="q.screen.gt.md" class="row q-col-gutter-md justify-center q-mt-xl">
      <div
        v-for="(logo, index) in collaborators"
        :key="index"
        class="col-6 col-md-3 col-lg-3 flex flex-center"

      >
        <q-img
          :src="logo.src"
          :width="logo.width"
          :height="logo.height"
          fit="contain"
          style="max-width: 180px; max-height: 200px"
          spinner-color="primary"
        />
      </div>
    </div>
    <div v-else class="row q-col-gutter-md justify-center q-mt-xl">
      <div
        v-for="(logo, index) in collaborators"
        :key="index"
        class="col-6 col-md-3 col-lg-2 flex flex-center"
        style="

          padding: 5px 10px;

          height: 100px;
        "
      >
        <q-img
          :src="logo.src"
          :width="logo.width"
          :height="logo.height"
          fit="contain"
          style="max-width: 140px; max-height: 100px"
          spinner-color="primary"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
//fix property 'q' does not exist on type 'typeof import("/c:/Users/DELL/Documents/pkl/projek-web-innodrive/innodrive_website-main/node_modules/quasar/dist/types/index")'. Did you mean 'Q'?

import { useQuasar } from 'quasar';
const q = useQuasar();

const collaborators = [
  { src: 'assets/collaborators/ADERCO.png', width: '120', height: '60' },
  { src: 'assets/collaborators/Logo_Pertamina_Hulu_Energi.png', width: '120', height: '60' },
  { src: 'assets/collaborators/LogoIndocentral.png', width: '120', height: '60' },
  { src: 'assets/collaborators/LogoSooko.png', width: '120', height: '60' },
  { src: 'assets/collaborators/logooo/hondaasia.png', width: '120', height: '60' },
  { src: 'assets/collaborators/logooo/its.png', width: '120', height: '60' },
  { src: 'assets/collaborators/logooo/jatim.png', width: '120', height: '60' },
  { src: 'assets/collaborators/Lambang_Resmi_UMJ.png', width: '120', height: '60' },
  { src: 'assets/collaborators/logooo/ui.png', width: '120', height: '60' },
  { src: 'assets/collaborators/Adam Brothers.png', width: '120', height: '60' },
  { src: 'assets/collaborators/ums.png', width: '120', height: '60' },
  { src: 'assets/collaborators/logooo/telkom.png', width: '120', height: '60' },
  { src: 'assets/collaborators/logooo/brin.png', width: '120', height: '60' },
  { src: 'assets/collaborators/logooo/Politeknik_Negeri_Madiun.png', width: '120', height: '60' },
  { src: 'assets/collaborators/SMK NU 1 Kendal.png', width: '120', height: '60' },
  { src: 'assets/collaborators/Tunas Honda.png', width: '400', height: '300' },
  { src: 'assets/collaborators/smkn2sby.png', width: '120', height: '60' },
  { src: 'assets/collaborators/Undip - (Koleksilogo.com).png', width: '120', height: '60' },
  { src: 'assets/collaborators/logooo/uny.png', width: '120', height: '60' },
  { src: 'assets/collaborators/KZR.png', width: '120', height: '60'},
  { src: 'assets/collaborators/DRG.png', width: '120', height: '60' },
  // { src: 'assets/collaborators/barca.jpg', width: '120', height: '60' },

];
</script>

<style scoped>

</style>
