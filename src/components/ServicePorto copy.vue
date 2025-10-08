<template>
  <div
    class="container-custom col-12 col-md-8 text-white myFont q-pa-md q"
    :style="{
      backgroundImage: 'url(/assets/imageDekstop/container-custom.png)',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: $q.screen.gt.sm ? '80%' : '90%',
      marginTop: $q.screen.gt.md ? '-140px' : '40px',
      marginBottom: $q.screen.gt.md ? '250px' : '70px',
      marginLeft: 'auto',
      marginRight: 'auto',
      transform: 'scale(1.5)', // <== skala 1.5x
      transformOrigin: 'center center',// <== biar pusat scaling di tengah
    }"
  >
    <div class="row justify-center text-center">
      <div
        class="row full-width justify-center text-bold q-mt-md"
        :class="$q.screen.gt.md ? 'text-h5' : 'text-h6'"
      >
        Shaping Industries with
        <div class="q-ml-sm gradient-text">Our</div>
        <div class="q-ml-sm">Services</div>
      </div>
    </div>
    <div class="row justify-center q-mt-md q-px-sm">
      <div class="row justify-center q-col-gutter-sm">
        <div
          class="col-auto q-pa-md myFont"
          v-for="s in setsApartFeature"
          :key="s.id"
          :class="
            $q.screen.lt.md
              ? ' full-width row items-center text-left'
              : 'text-center'
          "
        >
          <q-img
            :src="s.image"
            class="q-mr-sm"
            :class="$q.screen.lt.md ? '' : 'q-mb-md'"
            :style="{ width: $q.screen.gt.sm ? '70px' : '30px' }"
          />
          <div :class="$q.screen.lt.md ? 'text-caption2' : 'text-h6'">
            {{ s.description }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-12 q-px-md">
    <div
      class="row flex items-center justify-between q-mx-auto"
      :class="$q.screen.lt.md ? 'q-gutter-xs' : 'q-gutter-md'"
      :style="{ maxWidth: $q.screen.lt.md ? '90%' : '75%' }"
    >
      <div
        class="col-12 col-md-6"
        :class="$q.screen.lt.md ? 'text-center' : 'text-left'"
      >
        <div
          class="text-bold gradient-text"
          :class="$q.screen.lt.md ? 'text-h5' : 'text-h3'"
          v-html="serviceMidText1"
        ></div>
        <div
          class="q-mt-sm text-subtitle1"
          :style="{
            maxWidth: $q.screen.lt.md ? '100%' : '80%',
            textAlign: $q.screen.lt.md ? 'center' : 'left',
          }"
          v-html="serviceMidText2"
        ></div>
      </div>
      <div
        class="col-12 col-md items-center justify-center"
        :class="$q.screen.lt.md ? ' text-center' : 'text-left'"
      >
        <div class="text-subtitle1" v-html="serviceMidText3"></div>
      </div>
    </div>
  </div>

  <div class="row justify-center q-gutter-md q-mt-lg">
    <q-card
      v-for="p in servicePortoCard"
      :key="p.id"
      class="col-12 col-md-5 q-pa-md q-ma-sm"
      style="border-radius: 20px; background-color: #1d2939"
      :style="{
        maxWidth: $q.screen.lt.md ? '80%' : '500px',
        margin: $q.screen.lt.md ? '20px' : '80px 20px',
      }"
      dark
    >
      <q-card-section>
        <div class="text-bold" :class="$q.screen.lt.md ? 'text-h6' : 'text-h5'">
          {{ p.title }}
        </div>
      </q-card-section>
      <q-card-section class="row items-center">
        <div class="text-subtitle1 col">{{ p.description }}</div>
        <q-btn
          round
          size="lg"
          color="#B58F5B"
          icon="arrow_forward"
          @click="$router.push(p.route)"
          style="border: 2px solid #b58f5b"
        />
      </q-card-section>
    </q-card>
  </div>

  <!-- <div
    class="col-12 q-py-md myFont"
    style="background-image: linear-gradient(#1d2939, #0c111d)"
  >
    <div class="row full-width justify-center items-center q-px-md"> -->
  <!-- Gambar di sebelah kiri pada desktop, atas pada mobile -->
  <!-- <div class="col-12 col-md-5 flex flex-center">
        <q-img
          src="assets/imageDekstop/serviceFooter.png"
          fit="contain"
          class="full-width q-mb-md q-mb-md-md-none"
          style="max-width: 500px"
        />
      </div> -->

  <!-- Teks di sebelah kanan pada desktop, bawah pada mobile -->
  <!-- <div class="col-12 col-md-7 text-left text-white q-mt-md">
        <div
          class="text-md-h3 text-bold"
          :class="$q.screen.lt.md ? 'text-h5' : 'text-h3'"
        >
          <span class="gradient-text">Join us</span>
          <span> in shaping the future of intelligent mobility</span>
        </div>
        <div class="myFont q-mt-sm text-md-h6">
          Let’s drive innovation together!
        </div>
        <div class="row justify-start">
          <q-btn
            class="gradient-color text-white q-mt-md"
            :class="$q.screen.lt.md ? ' full-width ' : 'q-ml-none '"
            glossy
            label="Contact Us"
            @click="dialogVisible = true"
          />
          <ServiceForm v-model="dialogVisible" />
        </div>
      </div> -->
  <!-- </div>
  </div> -->
</template>

<script setup lang="ts">
// import { ref } from 'vue';
// import ServiceForm from '../components/ServiceForm.vue';
import {
  serviceMidText1,
  serviceMidText2,
  serviceMidText3,
  setsApartFeature,
  servicePortoCard,
} from '../pages/ServicePage';

// const dialogVisible = ref(false);
</script>

<style>

</style>
