<template>
  <div class="row q-gutter-lg justify-center">
    <div
      class="col-12 q-my-md"
      :style="{
        'max-width': $q.screen.gt.sm ? '100%' : '85%',
        'margin-left': $q.screen.gt.sm ? '150px' : 'auto',
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
</template>

<script setup lang="ts">
import { reasonCard } from '../pages/DashboardPage';
</script>
