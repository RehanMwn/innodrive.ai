<template>
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
          class="text-bold q-mb-sm gradient-text"
          :class="$q.screen.lt.md ? 'text-h4' : 'text-h2'"
        >
          Run Monitor
        </div>
        <div class="text-h4 text-bold q-mb-lg">{{ dynoTagline2 }}</div>
      </div>
      <q-img
        src="assets/imageDekstop/dynoComponent1.png"
        class="q-mt-md self-center"
        style="max-width: 80%; width: 100%"
      ></q-img>
    </div>

    <div
      :class="
        $q.screen.lt.md
          ? 'col-12 flex flex-column items-center text-center'
          : 'col-12 col-md-5 flex flex-center'
      "
    >
      <div class="row q-gutter-md justify-center q-px-md">
        <div class="text-h6 q-py-md q-px-lg">{{ dynoSubTagline2 }}</div>
        <div
          class="col-12"
          :class="$q.screen.lt.md ? '' : 'q-my-md q-pl-xl q-md-pl-lg'"
          v-for="i in functionDyno"
          :key="i.title"
        >
          <q-card
            class="text-left q-py-md q-px-md full-height"
            style="border-radius: 16px; max-width: 100%"
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
                <div class="text-h6 q-font-bold">{{ i.title }}</div>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>

    <div
      :class="
        $q.screen.lt.md
          ? 'col-12 flex flex-column items-center text-center'
          : 'col-12 col-md-4 flex flex-column column items-start q-px-md'
      "
    >
      <div :class="$q.screen.lt.md ? 'q-px-sm q-mt-lg' : ''">
        <div
          class="text-bold q-mb-sm gradient-text"
          :class="$q.screen.lt.md ? 'text-h4' : 'text-h2'"
        >
          Graph
        </div>
        <div class="text-h4 text-bold q-mb-lg">{{ dynoTagline3 }}</div>
        <div class="text-h6">{{ dynoSubTagline3 }}</div>
      </div>
    </div>

    <div
      :class="
        $q.screen.lt.md
          ? 'col-12 flex flex-column items-center text-center'
          : 'col-12 col-md-6 flex flex-center'
      "
    >
      <q-img
        src="assets/imageDekstop/dynoComponent2.png"
        class="q-mt-md"
        style="max-width: 80%; width: 100%; display: block; margin: 0 auto"
      ></q-img>
    </div>

    <div
      :class="
        $q.screen.lt.md
          ? 'col-12 flex flex-column items-center text-center'
          : 'col-12 col-md-5 flex flex-column column items-start q-px-md'
      "
    >
      <q-img
        src="assets/imageDekstop/dynoComponent3.png"
        class="q-mt-md"
        style="max-width: 80%; width: 100%; display: block; margin: 0 auto"
      ></q-img>
    </div>

    <div
      :class="
        $q.screen.lt.md
          ? 'col-12 flex flex-column items-center text-center'
          : 'col-12 col-md-5 justify-center flex flex-column column items-start q-px-md'
      "
      :style="{
        margin: $q.screen.gt.sm ? '0 0 300px 0' : '0 0 50px 0',
      }"
    >
      <div :class="$q.screen.lt.md ? 'q-px-sm q-mt-lg' : ''">
        <div
          class="text-bold q-mb-sm gradient-text"
          :class="$q.screen.lt.md ? 'text-h4' : 'text-h2'"
        >
          Database
        </div>
        <div
          class="text-bold q-mb-lg"
          :class="$q.screen.lt.md ? 'text-h5' : 'text-h4'"
        >
          {{ dynoTagline4 }}
        </div>
        <div class="text-h6">{{ dynoSubTagline4 }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  dynoSubTagline3,
  dynoTagline3,
  dynoSubTagline2,
  dynoTagline2,
  functionDyno,
  dynoTagline4,
  dynoSubTagline4,
} from '../pages/ProductDyno';
</script>
