<template>
  <div class="col-12 col-md-10 q-py-xl">
    <div class="row fle justify-center items-center q-gutter-xl">
      <div class="col-10 col-md-6">
        <q-img
          src="assets/imageDekstop/aboutUsImage.png"
          style="width: 100%; height: auto"
        ></q-img>
      </div>
      <div class="col-10 col-md-5 myFont">
        <q-card flat>
          <q-card-section>
            <div class="text-h3 text-bold"><span> About </span></div>
            <div class="text-h3 text-bold gradient-text">Innodrive.ai</div>
            <div class="text-h6 q-mt-none" v-html="PTnameText"></div>
            <div
              class="q-mt-md text-subtitle1 text-justify"
              v-html="longDescriptionText"
            ></div>
            <div class="q-mt-lg">
              <q-btn
                class="gradient-color text-white text-bold"
                glossy
                label="Learn More"
                unelevated
                @click="() => $router.push('/about')"
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { longDescriptionText } from 'src/pages/DashboardPage';
import { PTnameText } from 'src/pages/DashboardPage';
</script>
