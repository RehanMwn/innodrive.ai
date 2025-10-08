<template>
  <q-page class="col-12 q-py-xl myFont size">
    <PraFooterComponent />
    <!-- section 1 -->
    <div class="row items-start justify-center q-col-gutter-xl">
      <!-- Mobile Layout -->
      <template v-if="$q.screen.lt.md">
        <!-- judul -->
        <div class="col-12 q-mb-lg">
          <div class="mobile-wrapper text-center">
            <div class="text-h5 text-bold gradient-text">
              Industrial
              <span class="text-h5 text-bold text-black"
                >Automation Systems</span
              >
            </div>
          </div>
        </div>
        <!-- Gambar Service Mobile -->
        <div class="col-12 q-mb-lg">
          <div class="mobile-wrapper flex flex-center">
            <q-img
              src="/public/assets/imageDekstop/service1.png"
              style="max-width: 80%; border-radius: 12px"
              fit="contain"
            />
          </div>
        </div>
        <!-- Checklist Mobile -->
        <div class="col-12">
          <div class="col-12 q-mb-lg">
            <div class="mobile-wrapper text-left">
              <div class="text-h5 text-bold gradient-text">
                Innovative
                <span class="text-h5 text-bold text-black">Features</span>
              </div>
            </div>
          </div>
          <div class="mobile-wrapper text-left">
            <div
              class="row q-mb-md no-wrap"
              v-for="(item, i) in checklist"
              :key="i"
            >
              <!-- Ikon bulat -->
              <q-img
                src="/public/assets/icon/Ellipse5.png"
                style="
                  width: 14px;
                  height: 14px;
                  margin-right: 12px;
                  margin-top: 6px;
                "
              />
              <div>
                <div class="text-body1">{{ item.title }}</div>
                <div class="text-subtitle2 text-grey-7">
                  {{ item.description }}
                </div>
              </div>
            </div>

            <!-- <div class="q-py-lg flex items-start">
              <q-btn
                class="gradient-color text-white text-bold"
                glossy
                label="Learn More"
                unelevated
                @click="() => $router.push('/about')"
              />
            </div> -->
          </div>
        </div>
      </template>

      <!-- Section 2 Mobile -->
      <template v-if="$q.screen.lt.md">
        <div class="col-12 q-mt-xl q-mb-lg">
          <div class="mobile-wrapper">
            <div class="text-h5 text-bold" style="color: #272d38">
              {{ serviceMidText1 }}
            </div>
            <div class="q-mt-sm text-body1" style="color: #344054">
              {{ serviceMidText2 }}
            </div>
            <div class="q-mt-sm text-body2" style="color: #475467">
              {{ serviceMidText3 }}
            </div>
          </div>
        </div>
        <div class="row justify-center q-gutter-md">
          <q-card
            v-for="p in servicePortoCard"
            :key="p.id"
            class="col-12 q-pa-md q-ma-sm"
            style="
              border-radius: 20px;
              background-color: #1d2939;
              max-width: 90%;
            "
            dark
          >
            <q-card-section>
              <div class="text-bold text-h6">
                {{ p.title }}
              </div>
            </q-card-section>
            <q-card-section class="row items-center">
              <div class="text-subtitle1 col">{{ p.description }}</div>
              <q-btn
                round
                size="md"
                color="#B58F5B"
                icon="arrow_forward"
                @click="$router.push(p.route)"
                style="border: 2px solid #b58f5b"
              />
            </q-card-section>
          </q-card>
        </div>
      </template>

      <!-- Desktop Layout -->
      <template v-else>
        <!-- title center -->
        <div class="col-12 q-mb-lg">
          <div class="mobile-wrapper text-center">
            <div class="text-h4 text-bold gradient-text">
              Automotive
              <span class="text-h4 text-bold text-black">Technology</span>
              <div
                class="text-body1 text-grey-9 q-mt-md"
                style="max-width: 700px; margin: 10px auto"
              >
                We develop digital automotive solutions that enhance
                diagnostics, monitoring, and overall driving performance.
              </div>
            </div>
          </div>
        </div>
        <!-- Left Side: Image -->
        <div class="col-12 col-md-6 flex flex-center">
          <q-img
            src="/public/assets/imageDekstop/service1.png"
            style="max-width: 50%; border-radius: 12px"
            fit="contain"
          />
        </div>

        <!-- Right Side: Checklist -->
        <div class="col-12 col-md-6 flex flex-center flex-md-none">
          <div class="q-px-lg allin-content-center" style="max-width: 600px">
            <div class="text-h4 text-bold q-mb-md">
              Innovative <span class="text-black">Features</span>
            </div>

            <div class="q-mt-lg allin-checklist-text">
              <div
                class="row items-start q-mb-md no-wrap"
                v-for="(item, i) in checklist"
                :key="i"
              >
                <q-img
                  src="/public/assets/icon/Ellipse5.png"
                  style="
                    width: 14px;
                    height: 14px;
                    margin-right: 12px;
                    margin-top: 6px;
                  "
                />
                <div>
                  <div class="text-h6">{{ item.title }}</div>
                  <div class="text-subtitle2 text-grey-7">
                    {{ item.description }}
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="q-py-xl">
              <q-btn
                class="gradient-color text-white text-bold"
                glossy
                label="Learn More"
                unelevated
                @click="() => $router.push('/about')"
              />
            </div> -->
          </div>
          <!-- section 2 -->
        </div>
      </template>
    </div>
    <!-- section 2 -->
    <div
      v-if="$q.screen.gt.md"
      class="row items-start justify-center q-col-gutter-xl q-mt-xl"
    >
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
              class="text-bold text-h5"
              style="color: #272d38"
              :class="$q.screen.lt.md ? 'text-h5' : 'text-h3'"
              v-html="serviceMidText1"
            ></div>
            <div
              class="q-mt-sm text-h4 text-bold"
              :style="{
                maxWidth: $q.screen.lt.md ? '100%' : '80%',
                textAlign: $q.screen.lt.md ? 'center' : 'left',
                color: '#344054',
              }"
              v-html="serviceMidText2"
            ></div>
          </div>
          <div
            class="col-12 col-md items-center justify-center"
            :class="$q.screen.lt.md ? ' text-center' : 'text-left'"
          >
            <div
              style="
                font-size: 18px;
                color: #475467;
                font-weight: 400;
                font-style: normal;
              "
              v-html="serviceMidText3"
            ></div>
          </div>
        </div>
      </div>
      <div class="row justify-center q-gutter-md">
        <q-card
          v-for="p in servicePortoCard"
          :key="p.id"
          class="col-12 col-md-5 q-pa-md q-ma-sm"
          style="border-radius: 20px; background-color: #1d2939"
          :style="{
            maxWidth: $q.screen.lt.md ? '80%' : '400px',
            margin: $q.screen.lt.md ? '20px' : '80px 20px',
          }"
          dark
        >
          <q-card-section>
            <div
              class="text-bold"
              :class="$q.screen.lt.md ? 'text-h6' : 'text-h5'"
            >
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
    </div>
    <!-- PraFooter -->
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const checklist = [
      {
        title: 'Advanced Diagnostics',
        description:
          'Real-time monitoring and automation powered by IoT connectivity.',
      },
      {
        title: 'Performance Measurement',
        description:
          'Hardware and software systems designed to work together effortlessly.',
      },
      {
        title: 'Smart Integration',
        description:
          'Smart analytics to optimize production, reduce downtime, and save costs.',
      },
      {
        title: 'Data-Driven Insights',
        description:
          'Flexible systems that grow with industrial needs, from small plants to large-scale operations.',
      },
    ];

    const currentSlide = ref('slide-0');
    const autoplay = ref(true);
    const images = ['assets/imageDekstop/dynoComponent1.png'];

    // Define the missing properties here
    const serviceMidText1 = 'Example Product';
    const serviceMidText2 = 'From Manual to Smart — Transform Your Operations!';
    const serviceMidText3 =
      'Discover how our expertise can transform your operations and drive your business forward.';
    const servicePortoCard = [
      {
        id: 1,
        title: 'Smart Conveyor System',
        description:
          'Automated material handling with real-time monitoring and analytics.',
        route: '/portfolio/conveyor-system',
      },
      {
        id: 2,
        title: 'Robotic Arm Integration',
        description:
          'Precision robotics for assembly lines and manufacturing automation.',
        route: '/portfolio/robotic-arm',
      },
      {
        id: 3,
        title: 'Industrial IoT Platform',
        description:
          'Centralized control and data management for all your industrial devices.',
        route: '/portfolio/iot-platform',
      },
      {
        id: 4,
        title: 'Automated Quality Control',
        description:
          'AI-powered inspection systems to ensure product quality and consistency.',
        route: '/portfolio/quality-control',
      },
    ];

    return {
      checklist,
      currentSlide,
      autoplay,
      images,
      serviceMidText1,
      serviceMidText2,
      serviceMidText3,
      servicePortoCard,
    };
  },
});
</script>

<style scoped>
.allin-content-center {
  width: 100%;
}
.allin-checklist-text {
  text-align: left;
}
.checklist-row.no-wrap {
  flex-wrap: nowrap !important;
  display: flex !important;
  align-items: flex-start !important;
}
.checklist-text-nowrap {
  white-space: nowrap !important;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: middle;
}
.mobile-wrapper {
  max-width: 90%;
  margin: 0 auto;
}
.rounded-borders {
  border-radius: 12px;
  overflow: hidden;
}
</style>
