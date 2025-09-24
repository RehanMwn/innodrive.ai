<template>
  <q-page>
    <!-- Feature Product -->
    <FeatureAboutComponent />

    <!-- Content About Us -->
    <ContentAboutUsComponent />
    <!-- Team About Us -->
    <TeamAboutUsComponent />
  </q-page>
</template>

<script setup lang="ts">
import FeatureAboutComponent from 'src/components/FeatureAboutComponent.vue';
import ContentAboutUsComponent from 'src/components/ContentAboutUsComponent.vue';
import TeamAboutUsComponent from 'src/components/TeamAboutUsComponent.vue';
</script>
