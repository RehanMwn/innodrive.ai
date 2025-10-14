<template>
  <!-- MOBILE (lt.md) -->
  <div
    v-if="$q.screen.lt.sm"
    class="container-custom col-12 col-md-8 text-white myFont q-pa-md"
    style="background: linear-gradient(to top, #0C111D, #1D2939);"
    :style="{
      borderRadius: '20px',
      width: '90%',
      marginTop: '40px',
      marginBottom: '70px',
    }"
  >
    <div class="row justify-center text-center">
      <div class="row full-width justify-center text-bold q-mt-md text-h6">
        Shaping Industries with
        <div class="q-ml-sm gradient-text">Our</div>
        <div class="q-ml-sm">Services</div>
      </div>
    </div>
    <div class="row justify-center q-mt-md q-px-sm">
      <div class="row justify-center q-col-gutter-sm">
        <div
          class="col-auto q-pa-md myFont full-width row items-center text-left"
          v-for="s in setsApartFeature"
          :key="s.id"
        >
          <q-img :src="s.image" class="q-mr-sm" :style="{ width: '30px' }" />
          <div class="text-caption2">{{ s.description }}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- DESKTOP (gt.md) -->
  <div
    v-else
    class="container-desktop col-12 col-md-8 text-white myFont q-pa-md"
    :style="{
      backgroundImage: 'url(/assets/imageDekstop/container-custom.png)',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '80% auto',
      marginTop: '-140px',
      marginBottom: '250px',
      marginLeft: 'auto',
      marginRight: 'auto',
      transform: 'scale(1.5)',
      transformOrigin: 'center center',
    }"
  >
    <div class="row justify-center text-center">
      <div class="row full-width justify-center text-bold q-mt-md text-h5">
        Shaping Industries with
        <div class="q-ml-sm gradient-text">Our</div>
        <div class="q-ml-sm">Services</div>
      </div>
    </div>
    <div class="row justify-center q-mt-md q-px-sm">
      <div class="row justify-center q-col-gutter-sm">
        <div
          class="col-auto q-pa-md myFont text-center"
          v-for="s in setsApartFeature"
          :key="s.id"
        >
          <q-img :src="s.image" class="q-mb-md" :style="{ width: '70px' }" />
          <div class="text-h6">{{ s.description }}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Bagian konten yang sama -->
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
        <div class="text-subtitle1 col" style="text-align: justify;">{{ p.description }}</div>
        <div
          class="arrow-circle"
          :style="{
            width: $q.screen.gt.sm ? '58px' : '50px',
            height: $q.screen.gt.sm ? '58px' : '50px',
            border: '2px solid #B58F5B',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.25s ease',
            cursor: 'pointer',
            margin: $q.screen.gt.sm ? '-2px -5px 20px 20px' : '-10px -5px 20px 20px'
          }"
          @click="$router.push(p.route)"
        >
          <q-icon
            name="arrow_forward"
            :size="$q.screen.gt.sm ? '38px' : '32px'"
            style="color: #B58F5B"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import {
  serviceMidText1,
  serviceMidText2,
  serviceMidText3,
  setsApartFeature,
  servicePortoCard,
} from '../pages/ServicePage';
</script>

<style>
/* Mobile pakai class default */
.container-custom {
  z-index: 1;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Desktop pakai centering murni */
.container-desktop {
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.arrow-circle {
  border: 2px solid #b58f5b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
}
.arrow-circle:hover {
  background-color: #b58f5b;
}
.arrow-circle:hover .q-icon {
  color: #0c111d !important;
}
</style>
