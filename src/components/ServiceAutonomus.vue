<template>
  <q-page class="col-12 q-py-xl myFont size">
    <PraFooterComponent />
    <!-- section 1 -->
    <div class="row items-start justify-center q-col-gutter-xl">
      <!-- Mobile Layout -->
      <template v-if="$q.screen.lt.md">
        <!-- judul -->
        <div class="col-12">
          <div class="mobile-wrapper text-center">
            <div class="text-h5 text-bold gradient-text">
              Automotive
              <span class="text-h5 text-bold text-black"
                >Technology</span
              >
              <div
                class="text-body1 text-grey-9 q-mt-md"
                style="max-width: 700px; margin: 10px auto"
              >
                We develop digital automotive solutions that enhance diagnostics, monitoring, and overall driving performance.
              </div>
            </div>
          </div>
        </div>
        <!-- Gambar Service Mobile -->
        <div class="col-12 q-mb-lg">
          <div class="mobile-wrapper flex flex-center">
            <q-img
              src="/public/assets/imageDekstop/service2.png"
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
                  width: 20px;
                  height: 13px;
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
        <div class="row justify-center q-gutter-xs">
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
              <div
                class="arrow-circle"
                :style="{
                  width: $q.screen.gt.sm ? '48px' : '40px',
                  height: $q.screen.gt.sm ? '48px' : '40px',
                  border: '2px solid #B58F5B',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                }"
                @click="$router.push(p.route)"
              >
                <q-icon
                  name="arrow_forward"
                  :size="$q.screen.gt.sm ? '28px' : '22px'"
                  style="color: #B58F5B;"
                />
              </div>
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
              <span class="text-h4 text-bold text-black"
                >Technology</span
              >
              <div
                class="text-body1 text-grey-9 q-mt-md"
                style="max-width: 700px; margin: 10px auto"
              >
                We develop digital automotive solutions that enhance diagnostics, monitoring, and overall driving performance.
              </div>
            </div>
          </div>
        </div>
        <!-- Left Side: Image -->
        <div class="col-12 col-md-6 flex flex-center">
          <q-img
            src="/public/assets/imageDekstop/service2.png"
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
      v-if="$q.screen.gt.sm"
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
      <div class="row justify-center q-gutter-md q-mt-md">
        <q-card
          v-for="p in servicePortoCard"
          :key="p.id"
          class="col-12 col-md-5 q-pa-md q-ma-sm"
          style="border-radius: 20px; background-color: #1d2939"
          :style="{
            maxWidth: $q.screen.lt.md ? '80%' : '400px',
            margin: $q.screen.lt.md ? '20px' : '18px 20px',
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
            <div
              class="arrow-circle"
              :style="{
                width: ($q.screen.gt.sm ? '58px' : '40px'),
                height: ($q.screen.gt.sm ? '58px' : '40px'),
                border: '2px solid #b58f5b',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
              }"
              @click="$router.push(p.route)"
            >
              <q-icon
                name="arrow_forward"
                :size="$q.screen.gt.sm ? '28px' : '22px'"
                  style="color: #B58F5B;"
              />
            </div>
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
          'Intelligent tools to analyze vehicle health and performance in real time.',
      },
      {
        title: 'Smart Integration',
        description:
          'Compatible with both conventional and electric vehicles for future-ready solutions.',
      },
      {
        title: 'Data-Driven Efficiency',
        description:
          'Smart analytics to optimize production, reduce downtime, and save costs.',
      },
      {
        title: 'Data-Driven Insights',
        description:
          'Cloud-connected platforms providing accurate analysis and remote monitoring.',
      },
    ];

    const currentSlide = ref('slide-0');
    const autoplay = ref(true);
    const images = ['assets/imageDekstop/dynoComponent1.png'];

    // Define the missing properties here
    const serviceMidText1 = 'Example Product';
    const serviceMidText2 = 'Smarter Tech, Smarter Drive!';
    const serviceMidText3 =
      'We combine diagnostic intelligence and advanced testing to redefine how vehicles perform and evolve.';
    const servicePortoCard = [
      {
        id: 1,
        title: 'Dynomax',
        description:
          'A dynamometer from Innodrive.ai for testing vehicle power, torque, efficiency, and acceleration under various loads.',
        route: 'Product-Dynomax',
      },
      {
        id: 2,
        title: 'InnoDash',
        description:
          'The device logs speed, fuel use, engine status, and driving patterns for performance and predictive maintenance.',
        route: 'Product-InnoDash',
      },
      {
        id: 3,
        title: 'InnoRacce',
        description:
          'A miniature car system with real-time effects, low-latency control, accurate data, and live camera for an immersive experience.',
        route: 'Product-LookIn',
      },
      {
        id: 4,
        title: 'Innodrive Electric Motor Controller (IEMC)',
        description:
          'An intelligent motor controller with CAN bus for precise, scalable, efficient control in vehicles, robotics, and automation.',
        route: 'Product-IEMC',
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
.arrow-circle {
  border: 1.8px solid #B58F5B;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
}
.arrow-circle:hover {
  background-color: #B58F5B;
}
.arrow-circle:hover .q-icon {
  color: #0c111d !important;
}
</style>
