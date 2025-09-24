<template>
  <q-dialog v-model="dialogVisible" persistent full-width full-height>
    <q-card id="serviceCard" class="bg-black text-white">
      <q-card-section>
        <q-btn
          icon="close"
          flat
          dense
          color="white"
          class="absolute-top-right"
          @click="closeDialog"
        />
      </q-card-section>

      <q-page>
        <div class="row justify-center bg-black text-white q-py-xl myFont">
          <div class="col-12 col-sm-8 col-md-8 col-lg-8 flex flex-center">
            <q-carousel
              swipeable
              animated
              v-model="slide"
              v-model:fullscreen="fullscreen"
              thumbnails
              infinite
              :style="carouselStyle"
            >
              <q-carousel-slide
                v-for="(img, index) in images"
                :key="index"
                :name="index + 1"
                :img-src="img"
              />

              <template v-slot:control>
                <q-carousel-control position="bottom-right" :offset="[18, 18]">
                  <q-btn
                    push
                    round
                    dense
                    color="white"
                    text-color="primary"
                    :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                    @click="fullscreen = !fullscreen"
                  />
                </q-carousel-control>
              </template>
            </q-carousel>
          </div>

          <div
            v-if="selectedService"
            class="col-12 col-sm-4 col-md-4 col-lg-4 q-mt-xl"
          >
            <div class="text-h5 text-bold">{{ selectedService.title }}</div>

            <q-rating
              v-model="ratingModel"
              size="1.5em"
              color="orange-5"
              icon="star_border"
              icon-selected="star"
              readonly
            />

            <div
              v-for="e in selectedService.listItem"
              :key="e"
              class="row q-my-md items-start"
            >
              <q-img
                :src="selectedService.icon"
                style="width: 25px; height: 25px"
              />
              <div
                class="q-ml-md text-wrap"
                style="flex: 1; word-break: break-word"
              >
                {{ e }}
              </div>
            </div>

            <div class="row q-py-md">
              <div>
                <div class="text-h6">Consult Product With Us</div>
                <div class="text-grey text-caption">
                  Ask more or interest to buy our products
                </div>
              </div>
            </div>

            <div class="row">
              <q-btn
                class="checkout"
                no-caps
                label="Contact Us"
                size="lg"
                style="width: 50%"
                :href="'https://wa.me/message/5H2WQUJVTOU3F1'"
                target="_blank"
              >
                <q-img
                  src="assets/icon/wa.png"
                  style="width: 25px; height: 25px; margin-left: 10px"
                />
              </q-btn>
            </div>
          </div>
        </div>

        <div class="row bg-black myFont">
          <q-btn-toggle
            v-model="model"
            spread
            no-caps
            flat
            toggle-color="orange"
            class="full-width black-button q-pt-lg"
            :options="[
              { label: 'Description', value: 'descriptionProduct' },
              { label: 'Specification', value: 'spesificationProduct' },
            ]"
          />
        </div>

        <div class="row q-py-lg bg-black text-white myFont">
          <div
            v-if="model === 'descriptionProduct'"
            class="text-justify q-py-xl"
            :style="textPadding"
          >
            <div class="q-mt-lg text-h6 text-bold">Key Features:</div>
            <div v-for="(feature, index) in productFeature" :key="index">
              <div>
                {{ index + 1 }}. {{ feature.title }} : {{ feature.description }}
              </div>
            </div>

            <div class="q-mt-lg text-h6 text-bold">Advantages:</div>
            <div v-for="(advantage, index) in advantages" :key="index">
              <div>- {{ advantage }}</div>
            </div>
          </div>

          <div
            v-else-if="model === 'spesificationProduct'"
            class="text-justify q-py-xl"
            :style="textPadding"
          >
            <div class="text-h6 text-bold">Specification</div>
            <div
              v-for="(item, index) in spesificationFeature"
              :key="index"
              class="q-my-md"
            >
              <div class="q-ml-md">
                <strong>{{ index + 1 }}. {{ item.title }}:</strong>
              </div>
              <div class="q-ml-md q-pl-md">
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </q-page>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits } from 'vue';
import {
  serviceCard,
  productFeature,
  advantages,
  spesificationFeature,
} from '../pages/ProductDashboardPage';

const props = defineProps<{ serviceId: string | null }>();
const emit = defineEmits(['close']);

const dialogVisible = ref(true);
const model = ref('descriptionProduct');

const closeDialog = () => {
  dialogVisible.value = false;
  emit('close');
};

const selectedService = computed(
  () => serviceCard.find((s) => s.id === props.serviceId) || null
);
const images = computed(() => selectedService.value?.images || []);
const slide = ref(1);
const fullscreen = ref(false);
const ratingModel = ref(5);

const carouselStyle = computed(() => ({
  width: fullscreen.value ? '100vw' : '70%',
  height: fullscreen.value ? '100vh' : '60vh',
  backgroundColor: 'black',
}));

const textPadding = computed(() => ({
  paddingLeft: '100px',
  paddingRight: '100px',
}));
</script>
