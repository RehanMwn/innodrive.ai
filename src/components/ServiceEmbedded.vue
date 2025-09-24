<template>
  <div class="col-12 myFont">
    <q-img
      src="assets/imageDekstop/serviceEmbedded.png"
      :style="{
        height: $q.screen.gt.sm ? '100vh' : '60vh',
      }"
    >
      <div
        class="absolute-full flex justify-start items-center"
        style="background: rgba(0, 0, 0, 0.1)"
      >
        <div
          class="text-left myFont"
          style="max-width: 800px; padding-left: 8vw"
        >
          <div
            :class="{
              'text-h2 text-bold q-pb-lg': $q.screen.gt.sm,
              'text-h5 text-bold q-pb-lg': !$q.screen.gt.sm,
            }"
            v-html="embeddedTagline"
          />
          <div
            :class="{
              'text-h5 q-mt-lg': $q.screen.gt.sm,
              'text-caption': !$q.screen.gt.sm,
            }"
            v-html="embeddedSubTagline"
          />
        </div>
      </div>
    </q-img>
    <div class="row justify-center items-center q-mt-lg q-mb-lg">
      <div class="col-12 col-md-6 flex flex-center">
        <q-img
          src="assets/imageDekstop/serviceEmbedded2.png"
          style="width: 80%"
        ></q-img>
      </div>

      <div class="col-12 col-md-6 flex flex-center column">
        <div class="text-h3 q-mb-lg text-center" style="margin-bottom: 50px">
          Core Capabilities
        </div>
        <div class="row q-gutter-lg justify-center">
          <div
            class="col-12 q-my-md flex flex-center"
            v-for="i in partEmbedded"
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

    <div class="row justify-center">
      <div class="col-12 text-h3 q-mt-lg text-bold text-center">
        Example Products
      </div>
      <div class="col-12 text-h6 q-mt-lg text-center">
        Innovative AI-powered solutions designed to enhance vehicle performance,
        automation, and connectivity.
      </div>
      <div
        class="row justify-center q-mt-md"
        v-for="e in exampleProducts"
        :key="e.id"
        :style="{
          margin: $q.screen.gt.sm ? '90px 50px' : '20px',
        }"
      >
        <q-card
          style="
            background: linear-gradient(135deg, #d9ab6d, #b97c4a);
            border-radius: 80px;
          "
        >
          <q-card-section
            class="col"
            :style="{
              width: $q.screen.gt.sm ? '300px' : '200px',
              'border-radius': '16px',
              margin: '0 70px',
              padding: $q.screen.gt.sm ? '20px' : '5px',
            }"
          >
            <q-img :src="e.image"> </q-img>
            <div
              class="text-bold text-black text-center"
              :class="$q.screen.gt.md ? 'text-h6' : 'text-subtitle'"
            >
              {{ e.tagline }}
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
  </div>
</template>

<script setup lang="ts">
import {
  embeddedTagline,
  embeddedSubTagline,
  partEmbedded,
  exampleProducts,
} from '../pages/ServicePage';

import ServiceForm from '../components/ServiceForm.vue';
import { ref } from 'vue';

const dialogVisible = ref(false);
</script>
