<template>
  <div class="col-12 q-py-lg myFont">
    <div class="row full-width justify-center text-h3 text-bold gradient-text">
      Testimonials
    </div>
    <q-carousel
      v-model="currentSlide"
      swipeable
      animated
      control-color="black"
      arrows
      class="rounded-borders"
    >
      <q-carousel-slide
        v-for="(testimonial, index) in testimonials"
        :key="index"
        :name="'slide' + index"
        class="column no-wrap flex-center"
      >
        <div class="full-width relative-position q-pa-md" style="height: 25vh">
          <div class="absolute-full">
            <q-img :src="testimonial.bgImage" style="height: 100%"></q-img>
          </div>
          <div class="absolute-full">
            <div class="flex flex-center" style="height: 150%">
              <q-avatar size="100px" class="self-center">
                <img :src="testimonial.logo" style="z-index: 100" />
              </q-avatar>
            </div>
          </div>
        </div>
        <div class="row justify-center myFont" style="width: 150vh">
          <div class="row justify-center q-mt-lg">
            <div
              class="text-h6 row justify-center full-width"
              v-html="testimonial.name"
            ></div>
            <div
              class="text-body2 row justify-center full-width q-mb-lg"
              v-html="testimonial.date"
            ></div>
            <div
              class="text-body2 row justify-center text-center"
              style="max-width: 90%; word-wrap: break-word; line-height: 1.6"
              v-html="testimonial.description"
            ></div>
          </div>
          <div class="q-pb-xl row justify-center">
            <div class="q-gutter-y-md column">
              <q-rating
                :model-value="testimonial.rating"
                size="2em"
                color="orange-5"
                icon="star_border"
                icon-selected="star"
                readonly
              />
            </div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  testiProfileText,
  testiProfileDateText,
  testiProfileDescriptionText,
  testiProfileText2,
  testiProfileDateText2,
  testiProfileDescriptionText2,
} from '../pages/DashboardPage';

const currentSlide = ref<string>('slide0');

interface Testimonial {
  bgImage: string;
  logo: string;
  name: string;
  date: string;
  description: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    bgImage: 'assets/imageDekstop/testiBgImage.png',
    logo: 'assets/imageDekstop/adercoLogo.jpg',
    name: testiProfileText,
    date: testiProfileDateText,
    description: testiProfileDescriptionText,
    rating: 4.5,
  },
  {
    bgImage: 'assets/imageDekstop/testiBgImage.png',
    logo: 'assets/imageDekstop/testiImage.jpg',
    name: testiProfileText2,
    date: testiProfileDateText2,
    description: testiProfileDescriptionText2,
    rating: 5,
  },
  {
    bgImage: 'assets/imageDekstop/testiBgImage.png',
    logo: 'assets/imageDekstop/adercoLogo.jpg',
    name: testiProfileText,
    date: testiProfileDateText,
    description: testiProfileDescriptionText,
    rating: 4.8,
  },
];
</script>
