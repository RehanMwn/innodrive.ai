<template>
  <div class="col-12 myFont">
    <div
      class="col-12 col-md-4 flex flex-center column"
      :style="{
        margin: $q.screen.gt.sm ? '20px auto' : '50px auto',
        'max-width': $q.screen.gt.sm ? '50%' : '80%',
      }"
    >
      <div
        class="col-12 text-h2 text-bold text-center q-mb-lg"
        :class="$q.screen.gt.sm ? 'text-h2' : 'text-h5'"
        :style="{
          'padding-top': $q.screen.gt.sm ? '100px' : '50px',
        }"
      >
        Advanced Telematics & IoT Integration
      </div>
      <div
        class="col-12 text-center q-mt-lg"
        :class="$q.screen.gt.sm ? 'text-h6' : 'text-caption2'"
      >
        Our Advanced Telematics & IoT Integration solutions ensure seamless
        connectivity between vehicles, cloud systems, and smart devices for
        real-time monitoring and data-driven decision-making.
      </div>
    </div>

    <div
      class="row justify-center items-center q-mt-lg q-mb-lg"
      style="margin-top: 100px"
    >
      <div class="col-12 col-md-6 flex flex-center">
        <q-img
          src="assets/imageDekstop/serviceAutonomus.png"
          style="width: 60%"
        ></q-img>
      </div>

      <div class="col-12 col-md-6 flex flex-center column">
        <div class="text-h3 q-mb-lg text-center" style="margin-bottom: 50px">
          Innovative Features
        </div>
        <div class="row q-gutter-lg justify-center">
          <div
            class="col-12 q-my-md flex flex-center"
            v-for="i in partTelematics"
            :key="i.title"
          >
            <q-card
              class="text-left q-py-md q-px-md full-height"
              :style="{
                'max-width': $q.screen.gt.sm ? '500px' : '300px',
                width: '100%',
                'border-radius': '16px',
                background: 'linear-gradient(135deg, #d9ab6d, #b97c4a)',
              }"
            >
              <div class="row items-start no-wrap">
                <!-- Tambahkan ikon dot -->
                <q-icon
                  name="fiber_manual_record"
                  size="12px"
                  class="q-mr-md text-white"
                />
                <div class="col">
                  <div class="text-h6 text-bold">{{ i.title }}</div>
                  <div class="text-subtitle2 text-weight-regular">
                    {{ i.description }}
                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 q-px-md">
      <div
        class="row flex items-center justify-between q-mx-auto"
        :class="$q.screen.lt.md ? 'q-gutter-xs' : 'q-gutter-md'"
        :style="{
          maxWidth: $q.screen.lt.md ? '100%' : '80%',
          'margin-top': $q.screen.lt.md ? '50px' : '100px',
        }"
      >
        <div
          class="col-12 col-md-6"
          :class="$q.screen.lt.md ? 'text-center' : 'text-left'"
        >
          <div
            class="text-bold"
            :class="$q.screen.lt.md ? 'text-h4' : 'text-h4'"
          >
            Example Products
          </div>
          <div
            class="q-mt-sm"
            :class="$q.screen.lt.md ? 'text-h6' : 'text-h3 text-bold '"
            :style="{
              maxWidth: $q.screen.lt.md ? '100%' : '80%',
              textAlign: $q.screen.lt.md ? 'center' : 'left',
            }"
          >
            Innovate with Confidence!
          </div>
        </div>
        <div
          class="col-12 col-md items-center justify-center"
          :class="$q.screen.lt.md ? 'text-center' : 'text-left'"
        >
          <div :class="$q.screen.lt.md ? 'text-subtitle1' : 'text-h6 '">
            Whether it's AI-powered dashboards or autonomous navigation, we
            bring innovation to life.
          </div>
        </div>
      </div>
    </div>

    <div
      class="row justify-center q-gutter-md q-mt-lg"
      style="margin-top: 90px"
    >
      <q-card
        v-for="p in exampleTelematics"
        :key="p.id"
        class="col-12 col-md-5 q-pa-md q-ma-sm text-white"
        style="border-radius: 20px; background-color: #1d2939"
        :style="{
          maxWidth: $q.screen.lt.sm ? '300px' : '500px',
          margin: $q.screen.lt.sm ? '10px 20px' : '100px 50px',
        }"
      >
        <q-card-section>
          <div
            :class="$q.screen.lt.sm ? 'text-h6' : 'text-h4'"
            class="text-bold gradient-text"
          >
            {{ p.title }}
          </div>
        </q-card-section>
        <q-card-section class="row items-center">
          <div class="text-subtitle1 col">
            {{ p.description }}
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div
      class="col-12 q-py-md myFont"
      style="background-image: linear-gradient(#1d2939, #0c111d)"
    >
      <div class="row full-width justify-center items-center q-px-md">
        <!-- Gambar di sebelah kiri pada desktop, atas pada mobile -->
        <div class="col-12 col-md-5 flex flex-center">
          <q-img
            src="assets/imageDekstop/serviceFooter.png"
            fit="contain"
            class="full-width q-mb-md q-mb-md-md-none"
            style="max-width: 500px"
          />
        </div>

        <!-- Teks di sebelah kanan pada desktop, bawah pada mobile -->
        <div class="col-12 col-md-7 text-left text-white q-mt-md">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { partTelematics, exampleTelematics } from '../pages/ServicePage';
import { ref } from 'vue';
import ServiceForm from '../components/ServiceForm.vue';
const dialogVisible = ref(false);
</script>
