<template>
  <div>
    <!-- section 1 -->
    <div class="col-12">
      <q-img
        src="assets/imageDekstop/innodrop.png"
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
            >
              Precise Fueling, Smarter Control
            </div>
            <div
              :class="{
                'text-h5 q-mt-lg': $q.screen.gt.sm,
                'text-caption2': !$q.screen.gt.sm,
              }"
            >
              InnoDrop ensures efficient fuel dispensing with real-time
              monitoring, and seamless data reporting—built to optimize mining
              operations with accuracy and reliability.
            </div>
          </div>
        </div>
      </q-img>
    </div>
    <div></div>
    <!-- section 2-->
    <div class="col-12 q-py-xl myFont">
      <div class="row items-start justify-center q-col-gutter-xl">
        <!-- Mobile Layout: Responsive Reason Cards below image -->
        <template v-if="$q.screen.lt.md">
          <!-- Image for Mobile -->
          <div class="col-12 flex flex-center q-mb-lg">
            <q-img
              src="/public/assets/imageDekstop/innodrop2.png"
              style="max-width: 90%; border-radius: 12px"
              fit="contain"
            />
          </div>

          <!-- Reason Cards for Mobile -->
          <div class="col-12 flex flex-center">
            <div class="row q-gutter-lg justify-center" style="width: 100%">
              <div
                class="col-12"
                :style="{
                  'max-width': '90%',
                  margin: '0 -10px 10px 10px',
                }"
                v-for="i in reasonCard"
                :key="i.title"
              >
                <q-card
                  class="text-left q-py-md q-px-md"
                  :style="{
                    width: '100%',
                    height: 'auto',
                    'border-radius': '16px',
                    margin: '0 auto 20px auto',
                  }"
                >
                  <div
                    class="row items-start no-wrap items-center"
                    :style="{
                      width: '100%',
                      height: 'auto',
                    }"
                  >
                    <q-img
                      :src="i.icon"
                      :style="{
                        width: '50px',
                        height: 'auto',
                        'margin-right': '12px',
                      }"
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
        </template>

        <!-- Desktop Layout -->
        <template v-else>
          <!-- Left Side: Image -->
          <div
            class="col-12 col-md-6 flex flex-center"
            style="
              margin-top: 100px;
              margin-bottom: 40px;
              min-height: 400px;
              align-items: center;
              justify-content: center;
            "
          >
            <q-img
              src="/public/assets/imageDekstop/innodrop2.png"
              style="max-width: 80%; border-radius: 12px; margin-left: 30px"
              fit="contain"
            />
          </div>

          <!-- Right Side: Reason Cards -->
          <div
            class="col-12 col-md-6 flex flex-center flex-md-none"
            style="margin-top: 60px"
          >
            <div class="row q-gutter-lg justify-center">
              <div
                class="col-12 q-my-md"
                :style="{
                  'max-width': $q.screen.gt.sm ? '100%' : '85%',
                  'margin-left': $q.screen.gt.sm ? '400px' : 'auto',
                  'margin-right': $q.screen.gt.sm ? '0px' : 'auto',
                }"
                v-for="i in reasonCard"
                :key="i.title"
              >
                <q-card
                  class="text-left q-py-md q-px-md"
                  :style="{
                    width: $q.screen.gt.sm ? '600px' : '100%',
                    'margin-left': '10px',
                    height: 'auto',
                    'border-radius': '16px',
                  }"
                >
                  <div
                    class="row items-start no-wrap items-center"
                    :style="{
                      width: '100%',
                      height: 'auto',
                    }"
                  >
                    <q-img
                      :src="i.icon"
                      :style="{
                        width: $q.screen.gt.sm ? '80px' : '50px',
                        height: 'auto',
                        'margin-right': '12px',
                      }"
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
        </template>
      </div>
    </div>
    <!-- section 3-->
<div class="col-12 q-py-xl myFont">
  <div class="row items-start justify-center q-col-gutter-xl q-px-md">
    <!-- Left Side -->
    <div class="col-12 col-md-6" style="min-height: 400px">
      <!-- Title -->
      <div
        :class="$q.screen.lt.md ? 'text-h5' : 'text-h3'"
        class="text-weight-medium"
        :style="{
          color: '#272d38',
          marginLeft: $q.screen.lt.md ? '0' : '120px',
          textAlign: 'left'
        }"
      >
        Example Product
      </div>

      <!-- Subtitle -->
      <div
        class="q-mt-sm text-bold"
        :style="{
          fontSize: $q.screen.lt.md ? '20px' : '28px',
          maxWidth: $q.screen.lt.md ? '100%' : '80%',
          textAlign: 'left',
          color: '#344054',
          marginLeft: $q.screen.lt.md ? '0' : '120px'
        }"
      >
        From Manual to Smart — Transform Your Operations!
      </div>

      <!-- Description -->
      <div
        class="text-subtitle1 text-grey-8 q-mt-xl"
        :style="{
          fontSize: '18px',
          marginLeft: $q.screen.lt.md ? '0' : '120px',
          textAlign: 'left'
        }"
      >
        Discover how our expertise can transform your operations and drive your business forward.
      </div>

      <!-- Button -->
      <div class="q-py-lg flex items-start">
        <q-btn
          class="gradient-color text-white text-bold"
          :style="{ marginLeft: $q.screen.lt.md ? '0' : '120px' }"
          glossy
          label="Learn More"
          unelevated
          @click="scrollToSection4"
        />
      </div>
    </div>

    <!-- Right Side -->
    <div class="col-12 col-md-6" style="min-height: 400px; ">
      <q-img
        src="/public/assets/imageDekstop/innodrop3.png"
        style="max-width: 70%; border-radius: 12px; margin-left: 30px"
        fit="contain"
      />
    </div>
  </div>
</div>

    <!-- section 4-->
    <div
      id="section-4"
      style="
        background: linear-gradient(to top, #0c111d, #1d2939);
        min-height: 800px;
      "
      class="q-pa-xl"
    >
      <!-- Title -->
      <div
        class="row full-width justify-center text-bold"
        style="margin-bottom: 60px; font-size: 3rem"
      >
        <span style="color: white">Pre Order&nbsp;</span>
        <span class="gradient-text">InnoDrop</span>
      </div>

      <div class="row q-col-gutter-xl items-start justify-center">
        <!-- RIGHT SIDE (FORM) -->
        <div class="col-12 col-md-8 text-white">
          <q-form
            @submit.prevent="sendEmail"
            class="q-gutter-lg"
            style="font-size: 1.4rem"
          >
            <div class="row q-col-gutter-lg">
              <div class="col-12 col-md-6">
                <div
                  class="q-mb-sm text-white text-weight-medium"
                  style="font-size: 1.4rem"
                >
                  First name <span style="color: #ff3b3b">*</span>
                </div>
                <q-input
                  v-model="form.firstName"
                  outlined
                  input-style="font-size: 1.2rem; height: 60px;"
                  style="font-size: 1.2rem"
                />
              </div>

              <div class="col-12 col-md-6">
                <div
                  class="q-mb-sm text-white text-weight-medium"
                  style="font-size: 1.4rem"
                >
                  Last name <span style="color: #ff3b3b">*</span>
                </div>
                <q-input
                  v-model="form.lastName"
                  outlined
                  input-style="font-size: 1.2rem; height: 60px;"
                  style="font-size: 1.2rem"
                />
              </div>

              <div class="col-12 col-md-6">
                <div
                  class="q-mb-sm text-white text-weight-medium"
                  style="font-size: 1.4rem"
                >
                  Company name <span style="color: #ff3b3b">*</span>
                </div>
                <q-input
                  v-model="form.company"
                  outlined
                  input-style="font-size: 1.2rem; height: 60px;"
                  style="font-size: 1.2rem"
                />
              </div>

              <div class="col-12 col-md-6">
                <div
                  class="q-mb-sm text-white text-weight-medium"
                  style="font-size: 1.4rem"
                >
                  Email <span style="color: #ff3b3b">*</span>
                </div>
                <q-input
                  v-model="form.email"
                  type="email"
                  outlined
                  input-style="font-size: 1.2rem; height: 60px;"
                  style="font-size: 1.2rem"
                />
              </div>

              <div class="col-12 col-md-6">
                <div
                  class="q-mb-sm text-white text-weight-medium"
                  style="font-size: 1.4rem"
                >
                  Phone number <span style="color: #ff3b3b">*</span>
                </div>
                <q-input
                  v-model="form.phone"
                  outlined
                  input-style="font-size: 1.2rem; height: 60px;"
                  style="font-size: 1.2rem"
                />
              </div>

              <div class="col-12 col-md-6">
                <div
                  class="q-mb-sm text-white text-weight-medium"
                  style="font-size: 1.4rem"
                >
                  Country <span style="color: #ff3b3b">*</span>
                </div>
                <q-input
                  v-model="form.country"
                  outlined
                  input-style="font-size: 1.2rem; height: 60px;"
                  style="font-size: 1.2rem"
                />
              </div>

              <div class="col-12">
                <div
                  class="q-mb-sm text-white text-weight-medium"
                  style="font-size: 1.4rem"
                >
                  Message <span style="color: #ff3b3b">*</span>
                </div>
                <q-input
                  v-model="form.message"
                  type="textarea"
                  outlined
                  input-style="font-size: 1.2rem; min-height: 150px;"
                  style="font-size: 1.2rem"
                />
              </div>
            </div>

            <q-checkbox
              v-model="form.allowData"
              label="I allow Innodrive.ai to process my data."
              style="font-size: 1.2rem; transform: scale(1.3); margin: 20px 50px"
            />
            <div
              class="text-negative"
              style="font-size: 1.2rem"
              v-if="!form.allowData"
            >
              This field is required.
            </div>

            <q-btn
              label="Submit"
              color="warning"
              type="submit"
              class="full-width q-mt-lg"
              style="font-size: 1.5rem; height: 80px; border-radius: 16px"
              :disable="!form.allowData"
            />
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

function scrollToSection4() {
  const section = document.getElementById('section-4');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

const reasonCard = [
  {
    icon: 'assets/icon/WCIcon1.png',
    title: 'Safety First',
    description:
      'Our advanced driver assistance systems help prevent accidents and keep you safe on the road.',
  },
  {
    icon: 'assets/icon/WCIcon1.png',
    title: 'User Friendly Interface',
    description:
      'Simple and Intuitive design makes it easy for drivers of all levels to use our features effectively.',
  },
  {
    icon: 'assets/icon/WCIcon1.png',
    title: 'Continuous Improvement',
    description:
      'We continuously enhance our technology to provide you with the most advanced and reliable driving assistance on the market.',
  },
];

const form = ref({
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  message: '',
  allowData: false,
});

function sendEmail() {
  if (!form.value.allowData) return;
  // TODO: Integrate with emailjs or backend
  alert('Message sent successfully!');
}
</script>
<style scoped>
/* Biar input dark tapi tetap jelas */
::v-deep .q-input .q-field__control,
::v-deep .q-textarea .q-field__control {
  background-color: #1d2939 !important;
  border: 1px solid #98a2b3 !important;
  border-radius: 10px !important;
  color: #ffffff !important;
  display: flex !important;
  align-items: center !important;
}

/* Pastikan teks di input rata tengah secara vertikal */
.q-input .q-field__native,
.q-textarea .q-field__native {
  padding: 10px 12px !important;
  font-size: 16px !important;
  line-height: 1.5 !important;
  color: #ffffff !important;
  display: flex;
  align-items: center;
}

/* Label tetap putih */
.q-field__label {
  color: #ffffff !important;
  font-weight: 500;
}
</style>
