<template>
  <div
    class="col-12 col-sm-6 col-md-3 col-lg-3 q-px-md q-py-xl myFont"
    v-for="i in ourProductCard"
    :key="i.id"
  >
    <q-card class="card-ourProduct full-width flex-column">
      <q-card-section class="flex-grow">
        <q-img :src="i.image" class="full-width" />
        <div class="text-h5 text-bold q-mt-md">{{ i.title }}</div>
        <div class="q-mt-md text-caption text-justify">
          {{ i.description }}
        </div>
      </q-card-section>
      <q-card-section class="q-pa-md">
        <div class="checkout">
          <q-btn
            class="full-width"
            no-caps
            label="See Details"
            icon-right="arrow_forward"
            size="lg"
            @click="
              () =>
                $router.push({
                  path: '/productDescription',
                  query: { productId: i.id }, // Gunakan 'id' bukan 'title'
                })
            "
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ourProductCard } from '../pages/DashboardPage';
</script>
