<template>
  <q-page>
    <q-card class="bg-black text-white">
      <div class="row justify-center q-py-xl myFont">
        <div class="col-12 col-sm-8 col-md-8 col-lg-8 flex flex-center">
          <q-carousel
            swipeable
            animated
            v-model="slide"
            v-model:fullscreen="fullscreen"
            thumbnails
            infinite
            :style="{
              width: fullscreen ? '100vw' : $q.screen.gt.sm ? '70%' : '100%',
              height: fullscreen ? '100vh' : $q.screen.gt.sm ? '60vh' : '30vh',
              backgroundColor: 'black',
              overflow: fullscreen ? 'auto' : 'hidden',
            }"
          >
            <q-carousel-slide
              v-for="(img, index) in images"
              :key="index"
              :name="index + 1"
              :img-src="img"
            />

            <template v-slot:control>
              <q-carousel-control
                position="bottom-right"
                :offset="[18, 18]"
                style="position: absolute; z-index: 10"
              >
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
          v-if="selectedProduct"
          class="col-12 col-sm-4 col-md-4 col-lg-4 q-mt-xl"
        >
          <div class="text-h5 text-bold">{{ selectedProduct.title }}</div>
          <q-rating
            v-model="ratingModel"
            size="1.5em"
            color="orange-5"
            icon="star_border"
            icon-selected="star"
            readonly
          />

          <div
            v-for="e in selectedProduct.listItem"
            :key="e"
            class="row q-my-md items-start"
          >
            <q-img
              :src="selectedProduct.icon"
              style="width: 25px; height: 25px; flex-shrink: 0"
            />
            <div
              class="q-ml-md text-wrap"
              style="flex: 1; word-break: break-word"
            >
              {{ e }}
            </div>
          </div>

          <div class="row q-py-md" style="align-items: center">
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
                style="
                  width: 25px;
                  height: 25px;
                  flex-shrink: 0;
                  margin-left: 10px;
                "
              ></q-img>
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
            { label: 'Specification', value: 'specificationProduct' },
          ]"
        />
      </div>

      <div class="row q-py-lg bg-black text-white myFont">
        <div v-if="model === 'descriptionProduct'">
          <div class="text-justify q-py-xl" style="padding: 0 10px">
            <p>{{ descriptionProductCardText }}</p>
            <div class="q-mt-lg text-h6 text-bold">Key Features:</div>
            <div
              v-for="(feature, index) in productFeature"
              :key="index"
              class="q-py-xs"
            >
              <div>
                {{ index + 1 }}. {{ feature.title }} : {{ feature.description }}
              </div>
            </div>
            <div class="q-mt-lg text-h6 text-bold">Advantages:</div>
            <div
              v-for="(advantage, index) in advantages"
              :key="index"
              class="q-py-xs"
            >
              <div>- {{ advantage }}</div>
            </div>
            <p class="q-mt-lg">{{ descriptionProductCardText2 }}</p>
          </div>
        </div>
        <div v-else-if="model === 'specificationProduct'">
          <div class="text-justify q-py-xl" style="padding: 0 10px">
            <div class="text-h6 text-bold">Specification</div>
            <div
              v-for="(item, index) in spesificationFeature"
              :key="index"
              class="q-my-md"
            >
              <div>
                <strong>{{ index + 1 }}. {{ item.title }}:</strong>
              </div>
              <div class="q-ml-md q-pl-md">
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import {
  productCard,
  descriptionProductCardText,
  descriptionProductCardText2,
  productFeature,
  advantages,
  spesificationFeature,
} from '../pages/ProductPage';

const route = useRoute();
const model = ref('descriptionProduct');
const productId = ref<string | null>(
  route.query.productId ? String(route.query.productId) : null
);

const selectedProduct = computed(
  () => productCard.find((p) => p.id === productId.value) || null
);

const images = computed(() => selectedProduct.value?.images || []);
const slide = ref(1);
const fullscreen = ref(false);
const ratingModel = ref(5);

// Watch jika productId berubah saat navigasi antar produk
watch(
  () => route.query.productId,
  (newVal) => {
    productId.value = newVal ? String(newVal) : null;
  }
);
</script>

<style scoped>
/* Tambahan styling jika diperlukan */
</style>
