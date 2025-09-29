<template>
  <div class="row justify-center color-footer text-white q-py-md myFont">
    <div
      class="col-12 col-md-10 q-pb-md"
      :style="{ 'margin-top': $q.screen.gt.md ? '50px' : '100px' }"
    >
      <div class="row">
        <div class="col-12 col-md-6">
          <router-link to="/" style="text-decoration: none">
            <div
              class="flex"
              :class="
                $q.screen.lt.md
                  ? 'q-ml-lg row items-center text-left'
                  : 'column text-left'
              "
            >
              <q-img
                src="assets/icon/FooterLogo.png"
                class="q-mr-sm"
                :style="{
                  width: '20vw',
                  maxWidth: '150px',
                  minWidth: $q.screen.lt.md ? '50px' : 'auto',
                }"
              ></q-img>
              <div
                class="text-h6 q-mt-xs"
                v-html="PTnameText"
                style="color: white"
              ></div>
            </div>
          </router-link>
        </div>
        <!-- <div v-if="$q.screen.gt.sm" class="col-12 col-md-2 q-pt-xl">
          <div
            class="column text-subtitle2"
            style="margin-left: 60px"
            v-for="i in footerMenuItems"
            :key="i.title"
          >
            <div
              class="row q-py-md"
              @click="navigateTo(i.link)"
              style="color: inherit; text-decoration: none"
            >
              {{ i.title }}
            </div>
          </div>
        </div> -->
        <div class="col-12 col-md-2 q-pt-md">
          <div class="column q-px-lg">
            <div class="row q-py-md text-subtitle2">Office</div>
            <div
              class="row q-py-md text-body2"
              v-for="i in footerItems3"
              :key="i.title"
            >
              <!-- <q-img :src="i.icon" style="width: 20px" /> -->
              <div class="q-ml-none">
                <a
                  :href="i.link"
                  target="_blank"
                  style="color: inherit; text-decoration: none"
                  >{{ i.title }}</a
                >
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-2 q-pt-md">
          <div class="column q-px-sm">
            <div class="row q-py-md text-subtitle2">Contact Us</div>
            <div
              class="row q-py-md text-body2"
              v-for="i in footerItems1"
              :key="i.title"
            >
              <q-img :src="i.icon" style="width: 20px" />
              <div class="q-ml-sm">
                <a
                  :href="i.link"
                  target="_blank"
                  style="color: inherit; text-decoration: none"
                  >{{ i.title }}</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-2 q-pt-md">
          <div class="column q-px-lg">
            <div class="row q-py-md text-subtitle2">Social Media</div>
            <div
              class="row q-py-md text-body2"
              v-for="i in footerItems2"
              :key="i.title"
            >
              <q-img :src="i.icon" style="width: 20px" />
              <div class="q-ml-sm">
                <a
                  :href="i.link"
                  target="_blank"
                  style="color: inherit; text-decoration: none"
                  >{{ i.title }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="row q-py-sm text-black gradient-color text-subtitle2 flex justify-center items-center myFont"
    v-html="footerCopyRightText"
  ></div>
</template>

<script setup lang="ts">
// import { footerDescriptionText } from 'src/layouts/MainLayout';
import { footerCopyRightText } from 'src/layouts/MainLayout';
// import { footerMenuItems } from 'src/layouts/MainLayout';
import { footerItems1 } from 'src/layouts/MainLayout';
import { footerItems2 } from 'src/layouts/MainLayout';
import { footerItems3 } from 'src/layouts/MainLayout';
// import { useRouter } from 'vue-router';
import { PTnameText } from 'src/pages/DashboardPage';
// const router = useRouter();
// const navigateTo = (link: string) => {
//   router.push(link);
// };
</script>
