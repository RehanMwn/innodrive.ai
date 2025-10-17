<template>
  <div>
    <!-- section 1 -->
    <div class="col-12">
      <q-img
        :src="$q.screen.gt.sm ? `assets/imageDekstop/${section1.image}` : `/public/assets/imageMobile/${section1.imageMobile}`"
        :srcset="$q.screen.gt.sm ? `assets/imageDekstop/${section1.image} 1200w` : `/public/assets/imageMobile/${section1.imageMobile} 600w`"
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
              {{ section1.title }}
            </div>
            <div
              :class="{
                'text-h5 q-mt-lg': $q.screen.gt.sm,
                'text-caption2': !$q.screen.gt.sm,
              }"
            >
              {{ section1.subtitle }}
            </div>
          </div>
        </div>
      </q-img>
    </div>

    <!-- section 2 -->
    <div class="col-12 q-py-xl myFont">
      <div class="row items-start justify-center q-col-gutter-xl">
        <!-- Mobile Layout -->
        <template v-if="$q.screen.lt.sm">
          <div class="text-left q-ml-xl q-px-md">
            <div class="text-h6" style="color: #344054">
              {{ section2.smallTitle }}
            </div>
            <div class="text-h5 text-bold text-dark">
              {{ section2.mainTitle }}
            </div>
          </div>

          <div class="col-12 flex flex-center q-mb-lg">
            <q-img
              :src="`/public/assets/imageDekstop/${section2.image}`"
              style="max-width: 90%; border-radius: 12px"
              fit="contain"
            />
          </div>

          <!-- Reason Cards -->
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
                  <div class="row items-start no-wrap items-center">
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
          <!-- Left Side -->
          <div class="row justify-center q-col-gutter-md">
            <div
              :class="
                $q.screen.lt.md
                  ? 'col-12 flex flex-col items-center justify-center text-center'
                  : 'col-12 col-md-5 flex flex-col items-start q-mt-lg'
              "
            >
              <div :class="$q.screen.lt.md ? 'q-px-md' : 'q-mt-lg'">
                <div
                  class="text-bold q-mb-sm"
                  style="color: #344054"
                  :class="$q.screen.lt.md ? 'text-h4' : 'text-h5'"
                >
                  {{ section2.smallTitle }}
                </div>
                <div class="text-h4 text-bold q-mb-lg">
                  {{ section2.mainTitle }}
                </div>
              </div>
              <q-img
                :src="`assets/imageDekstop/${section2.image}`"

                style="max-width: 50%; border-radius: 12px; margin-left: 80px;"
                fit="contain"
              ></q-img>
            </div>

            <div
              :class="
                $q.screen.lt.md
                  ? 'col-12 flex flex-column items-center text-center'
                  : 'col-12 col-md-5 flex flex-center q-mb-lg q-mt-md q-ml-xl'
              "
            >
              <div class="row q-gutter-md justify-center q-px-md">
                <div class="text-h6 q-py-md q-px-lg q-ml-lg q-mb-lg q-mt-lg">
                  {{ section2.smallTitleright }}
                </div>
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
                    <div class="row items-center no-wrap">
                      <q-img
                        src="assets/icon/WCIcon1.png"
                        class="q-mr-md"
                        :style="{
                          width: $q.screen.gt.sm ? '80px' : '70px',
                          margin: $q.screen.gt.sm ? '0 20px' : '0 10px',
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
          </div>
        </template>
      </div>
    </div>

    <!-- section 3 -->
    <template v-if="$q.screen.gt.sm">
      <div class="col-12 q-py-xl myFont bg-grey-1">
        <div class="row items-start justify-center q-col-gutter-xl">
          <!-- Left -->
          <div class="col-12 col-md-6" style="min-height: 400px">
            <div
              :class="$q.screen.lt.md ? 'text-h5' : 'text-h5'"
              class="text-weight-medium"
              :style="{
                color: '#272d38',
                marginLeft: $q.screen.lt.md ? '0' : '120px',
                textAlign: 'left',
              }"
            >
              {{ section3.title }}
            </div>

            <div
              class="q-mt-sm text-bold"
              :style="{
                fontSize: $q.screen.lt.md ? '20px' : '28px',
                maxWidth: $q.screen.lt.md ? '100%' : '80%',
                textAlign: 'left',
                color: '#344054',
                marginLeft: $q.screen.lt.md ? '0' : '120px',
              }"
            >
              {{ section3.subtitle }}
            </div>

            <div
              class="text-subtitle1 text-grey-8 q-mt-xl"
              :style="{
                fontSize: '18px',
                marginLeft: $q.screen.lt.md ? '0' : '120px',
                textAlign: 'left',
              }"
            >
              {{ section3.description }}
            </div>

            <div class="q-py-lg flex items-start">
              <q-btn
                class="gradient-color text-white text-bold"
                :style="{ marginLeft: $q.screen.lt.md ? '0' : '120px' }"
                glossy
                :label="section3.buttonText"
                unelevated
                @click="() => $router.push(section3.buttonLink)"
              />
            </div>
          </div>

          <!-- Right -->
          <div class="col-12 col-md-6" style="min-height: 400px; margin-top: -100px;">
            <q-img
              :src="`/public/assets/imageDekstop/${section3.image}`"
              style="max-width: 80%;  margin-left: -10px"
              fit="contain"
            />
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="q-py-xl myFont bg-grey-1">
        <div class="row items-start justify-center q-col-gutter-xl q-px-md">
          <!-- Left -->
          <div class="col-12" style="min-height: 400px">
            <div
              :class="$q.screen.lt.md ? 'text-h5' : 'text-h3'"
              class="text-weight-medium"
              :style="{
                color: '#272d38',
                textAlign: 'left',
              }"
            >
              {{ section3.title }}
            </div>
            <div
              class="q-mt-sm text-bold"
              :style="{
                fontSize: $q.screen.lt.md ? '20px' : '28px',
                maxWidth: '100%',
                textAlign: 'left',
                color: '#344054',
              }"
            >
              {{ section3.subtitle }}
            </div>

            <!-- Right -->
            <div class="col-12 q-mt-xl">
              <q-img
                :src="`/public/assets/imageDekstop/${section3.image}`"
                style="max-width: 90%; border-radius: 12px; margin-left: 13px"
                fit="contain"
              />
            </div>

            <div
              class="text-subtitle1 text-grey-8 q-mt-xl"
              :style="{
                fontSize: '18px',
                textAlign: 'left',
              }"
            >
              {{ section3.description }}
            </div>

            <div class="q-py-lg flex items-left justify-left">
              <q-btn
                class="gradient-color text-white text-bold"
                glossy
                :label="section3.buttonText"
                unelevated
                @click="() => $router.push(section3.buttonLink)"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const section1 = {
  image: 'cnc.png',
  imageMobile: 'cncm.png',
  title: 'High Precicien, Perfect Results',
  subtitle:
'CNC Laser streamlines PCB stencil production with unmatched accuracy, reducing errors and improving quality for both prototyping and mass manufacturing.',
};

const section2 = {
  smallTitle: 'Laser Cut',
  mainTitle: 'Precision Stencils in Every Detail',
  image: 'cnc2.png',
  smallTitleright:
    'Delivering high-accuracy cuts for flawless solder paste stencils and optimized PCB assembly',
};

const section3 = {
  image: 'cnc3.png',
  title: 'Smart Calibration',
  subtitle: 'Easy Setup, Maximum Accuracy',
  description:
    'With intuitive calibration tools, SEMC allows users to quickly set up sensors and parameters, ensuring precise motor control without complex configurations.',
  buttonText: 'Pre Order Now',
  buttonLink: '/ContactUs',
};

const reasonCard = [
  {
    icon: 'assets/icon/WCIcon1.png',
    title: 'High-Precision Cutting',
    description: 'Achieve intricate designs and accurate dimensions for PCB stencils, ensuring optimal solder paste application.',
  },
  {
    icon: 'assets/icon/WCIcon1.png',
    title: 'Seamless Software Integration',
    description: 'Effortlessly integrate with existing design software for a smooth workflow from CAD to cutting.',
  },
  {
    icon: 'assets/icon/WCIcon1.png',
    title: 'Prototype to Mass Production',
    description: 'Scalable solutions that support both rapid prototyping and high-volume manufacturing with consistent quality.',
  },
];
</script>

<style scoped>
::v-deep .q-input .q-field__control,
::v-deep .q-textarea .q-field__control {
  background-color: #1d2939 !important;
  border: 1px solid #98a2b3 !important;
  border-radius: 10px !important;
  color: #ffffff !important;
  display: flex !important;
  align-items: center !important;
}

.q-input .q-field__native,
.q-textarea .q-field__native {
  padding: 10px 12px !important;
  font-size: 16px !important;
  line-height: 1.5 !important;
  color: #ffffff !important;
  display: flex;
  align-items: center;
}

.q-field__label {
  color: #ffffff !important;
  font-weight: 500;
}
</style>
