<template>
  <div>
    <!-- section 1 -->
    <div class="col-12">
      <q-img
        :src="
          $q.screen.gt.sm
            ? `assets/imageDekstop/${section1.image}`
            : `/public/assets/imageMobile/${section1.imageMobile}`
        "
        :srcset="
          $q.screen.gt.sm
            ? `assets/imageDekstop/${section1.image} 1200w`
            : `/public/assets/imageMobile/${section1.imageMobile} 600w`
        "
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
          <div class="text-left q-ml-md">
            <div class="text-h6 q-px-xs" style="color: #344054">
              {{ section2.smallTitle }}
            </div>
            <div class="text-h5 text-bold text-dark q-px-xs">
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
                  : 'col-12 col-md-5 flex flex-col items-start '
              "
            >
              <div :class="$q.screen.lt.md ? 'q-px-md' : 'q-mt-md'">
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
                style="max-width: 80%; border-radius: 12px; margin-left: 0px"
                fit="contain"
              ></q-img>
            </div>
            <!-- right -->
            <div
              :class="
                $q.screen.lt.md
                  ? 'col-12 flex flex-column items-center text-center'
                  : 'col-12 col-md-5 flex flex-center q-mb-lg q-ml-xl'
              "
            >
              <div class="row q-gutter-md justify-center q-px-md">
                <div class="text-h6 q-py-md q-px-lg q-ml-lg">
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


          </div>

          <!-- Right -->
          <div class="col-12 col-md-6" style="min-height: 400px; margin-top: 8px;">
            <q-img
              :src="`/public/assets/imageDekstop/${section3.image}`"
              style="max-width: 50%; margin-left: 200px"
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
            <div class="col-12 q-mt-lg q-mb-lg">
              <q-img
                :src="`/public/assets/imageDekstop/${section3.image}`"
                style="max-width: 70%; border-radius: 12px; margin-left: 40px"
                fit="contain"
              />
            </div>

            <div
              class="text-subtitle1 text-grey-8"
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
    <!-- Section 4 -->
    <template v-if="$q.screen.gt.sm">
      <div class="col-12 q-py-xl myFont q-mt-lg">
        <div class="row items-start justify-center q-col-gutter-xl">
          <!-- left -->
          <div
            class="col-12 col-md-6"
            style="min-height: 400px; margin-top: -30px"
          >
            <q-img
              :src="`/public/assets/imageDekstop/${section4.image}`"
              style="max-width: 60%; margin-left: 90px"
              fit="contain"
            />
          </div>
          <!-- right -->
          <div class="col-12 col-md-6" style="min-height: 400px">
            <div
              :class="$q.screen.lt.md ? 'text-h5' : 'text-h5'"
              class="text-weight-medium"
              :style="{
                color: '#272d38',
                marginLeft: $q.screen.lt.md ? '0' : '70px',
                textAlign: 'left',
              }"
            >
              {{ section4.title }}
            </div>

            <div
              class="q-mt-sm text-bold"
              :style="{
                fontSize: $q.screen.lt.md ? '20px' : '28px',
                maxWidth: $q.screen.lt.md ? '100%' : '80%',
                textAlign: 'left',
                color: '#344054',
                marginLeft: $q.screen.lt.md ? '0' : '70px',
              }"
            >
              {{ section4.subtitle }}
            </div>

            <div
              class="text-subtitle1 text-grey-8 q-mt-xl"
              :style="{
                fontSize: '18px',
                marginLeft: $q.screen.lt.md ? '0' : '70px',
                maxWidth: '80%',
                textAlign: 'left',
              }"
            >
              {{ section4.description }}
            </div>

            <div class="q-py-lg flex items-start">
              <q-btn
                class="gradient-color text-white text-bold"
                :style="{ marginLeft: $q.screen.lt.md ? '0' : '70px' }"
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
    <template v-else>
      <div class="q-py-xl myFont">
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
              {{ section4.title }}
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
              {{ section4.subtitle }}
            </div>

            <!-- Right -->
            <div class="col-12 q-mt-lg">
              <q-img
                :src="`/public/assets/imageDekstop/${section4.image}`"
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
  image: 'innodash.png',
  imageMobile: 'innodashm.png',
  title: 'Smarter Rides, Seamless Control',
  subtitle:
    'Innodash combines intelligent connectivity and real-time monitoring, giving riders precise insights, reliable navigation, and advanced data logging for safer, more efficient journeys.',
};

const section2 = {
  smallTitle: 'Ride View',
  mainTitle: 'Critical Data at Every Turn',
  image: 'innodash2.png',
  smallTitleright:
    'Live monitoring ensures you capture every shift, spike, and surge with absolute accuracy—across Mini PC, Web, and Mobile.',
};

const section3 = {
  image: 'innodash3.png',
  title: 'Trip Log',
  subtitle: 'Every Detail, Every Ride',
  description:
    'Numbers alone don’t reveal insights—our interactive graphs do. Visualize trends, compare results, and gain the edge you need for maximum performance.',
  buttonText: 'Pre Order Now',
  buttonLink: '/ContactUs',
};

const section4 = {
  image: 'innodash4.png',
  title: 'Nav Track',
  subtitle: 'Real-Time Navigation, Always On Point',
  description:
    'Every test. Every parameter. Stored, structured, and instantly accessible across all your devices. No more lost data—just seamless organization.',
};

const reasonCard = [
  {
    icon: 'assets/icon/WCIcon1.png',
    title: 'Comprehensive Monitoring',
    description: 'Monitor soil conditions across vast agricultural areas with real-time data collection.',
  },
  {
    icon: 'assets/icon/WCIcon1.png',
    title: 'Data-Driven Decisions',
    description: 'Utilize precise data on soil moisture, nutrients, and pH levels to optimize crop yield and resource management.',
  },
  {
    icon: 'assets/icon/WCIcon1.png',
    title: 'Scalable Connectivity',
    description: 'Connect and manage multiple sensors across your farm, ensuring seamless data flow and centralized control.',
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
