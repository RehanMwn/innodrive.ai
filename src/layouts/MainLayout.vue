<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      class="merge-header q-px-md"
      :class="{ 'header-hidden': !isHeaderVisible }"
    >
      <div class="row justify-center q-py-lg myFont">
        <div class="col-12 col-md-10 self-center">
          <div class="row">
            <!-- Logo -->
            <router-link to="/" style="text-decoration: none">
              <q-img
                src="assets/icon/HeaderLogo.png"
                :style="{ width: $q.screen.gt.sm ? '200px' : '150px' }"
              ></q-img>
            </router-link>

            <q-space />

            <!-- Navbar -->
            <div class="row justify-end">
              <!-- Desktop Navigation (Tabs) -->
              <q-tabs
                v-if="$q.screen.gt.sm"
                v-model="tab"
                narrow-indicator
                dense
                class="text-white custom-tabs"
              >
                <template v-for="item in items" :key="item.title">
                  <!-- Menu tanpa submenu -->
                  <q-tab
                    v-if="!item.children"
                    :name="item.link"
                    :label="item.title"
                    @click="navigateTo(item.link)"
                  />

                  <!-- Dropdown untuk Products dengan hover -->
                  <div
                    v-else
                    class="relative dropdown-container"
                    @mouseover="openMenu[item.title] = true"
                    @mouseleave="openMenu[item.title] = false"
                  >
                    <q-btn-dropdown
                      flat
                      dense
                      class="text-white q-tab q-tab--full"
                      dropdown-icon="keyboard_arrow_down"
                      :label="item.title"
                      v-model="openMenu[item.title]"
                    >
                      <q-list
                        @mouseover="openMenu[item.title] = true"
                        @mouseleave="openMenu[item.title] = false"
                      >
                        <q-item
                          v-for="child in item.children"
                          :key="child.title"
                          clickable
                          v-close-popup
                          @click="navigateTo(child.link)"
                        >
                          <q-item-section avatar>
                            <q-img
                              :src="
                                child.title === 'About Us'
                                  ? 'assets/icon/CompanyIcon/About_Us.png'
                                  : child.title === 'Contact Us'
                                  ? 'assets/icon/CompanyIcon/Contact_Us.png'
                                  : `assets/icon/CompanyIcon/${child.title
                                      .replace(/\s+/g, '-')
                                      .toLowerCase()}.png`
                              "
                              style="
                                width: 28px;
                                height: 28px;
                                object-fit: contain;
                              "
                              :alt="child.title + ' icon'"
                            />
                          </q-item-section>
                          <q-item-section class="text-center">
                            {{ child.title }}
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-btn-dropdown>
                  </div>

                </template>
                <!-- Tombol Contact Us -->
                <!-- <q-btn
                  class="gradient-color text-white q-mr-md"
                  glossy
                  label="Contact Us"
                  @click="dialogVisible = true"
                />
                <ServiceForm v-model="dialogVisible" /> -->
              </q-tabs>

              <!-- Mobile Navigation (Dropdown Menu) -->
              <q-btn-dropdown
                v-else
                label="Menu"
                class="gradient-color text-bold"
              >
                <q-list>
                  <template v-for="item in items" :key="item.title">
                    <q-item
                      v-if="!item.children"
                      clickable
                      v-close-popup
                      @click="navigateTo(item.link)"
                      class="text-white myFont bg-black"
                    >
                      <q-item-section>{{ item.title }}</q-item-section>
                    </q-item>

                    <q-expansion-item
                      v-else
                      expand-separator
                      class="bg-black text-white"
                    >
                      <template v-slot:header>
                        <q-item-section>{{ item.title }}</q-item-section>
                      </template>
                      <q-list>
                        <q-item
                          v-for="child in item.children"
                          :key="child.title"
                          clickable
                          v-close-popup
                          @click="navigateTo(child.link)"
                          class="text-white myFont bg-grey"
                        >
                          <q-item-section>{{ child.title }}</q-item-section>
                        </q-item>
                      </q-list>
                    </q-expansion-item>
                  </template>
                </q-list>
              </q-btn-dropdown>
            </div>
          </div>
        </div>
      </div>
    </q-header>

    <q-page-container class="merge-content">
      <router-view />
    </q-page-container>
    <PraFooterComponent style="position: relative; width: 100%" />  
    <FooterComponent style="position: relative; width: 100%" />
  </q-layout>
</template>

<script setup lang="ts">
import PraFooterComponent from '/src/components/PraFooterComponent.vue';
import FooterComponent from '/src/components/FooterComponent.vue';
// import ServiceForm from '../components/ServiceForm.vue';
import { useRouter } from 'vue-router';
import { ref, onMounted, onUnmounted, reactive } from 'vue';

const tab = ref('home');
const router = useRouter();
// const dialogVisible = ref(false);
const lastScrollY = ref(0);
const isHeaderVisible = ref(true);
const openMenu = reactive<Record<string, boolean>>({});

const items = ref([
  { title: 'Home', link: '/' },
  {
    title: 'Company',
    children: [
      { title: 'About Us', link: '/about' },
      { title: 'Career', link: '/career' },
      { title: 'Contact Us', link: '/contacts' },
      { title: 'Partner', link: '/partner' },
    ],
  },
  {
    title: 'Products',
    children: [
      { title: 'Dashboard', link: '/ProductDashboardPage' },
      { title: 'Dynomax', link: '/ProductDynoPage' },
    ],
  },
  { title: 'Our Services', link: 'service' },
  { title: 'News', link: '/news' },
]);

const navigateTo = (link?: string) => {
  if (link) router.push(link);
};

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  isHeaderVisible.value = !(
    currentScrollY > lastScrollY.value && currentScrollY > 100
  );
  lastScrollY.value = currentScrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
.q-layout {
  /* max-width: 100vw; */
  overflow-x: hidden;
}
.scrolled {
  background: rgba(0, 0, 0, 0.7) !important;
  backdrop-filter: blur(5px);
}

.header-hidden {
  transform: translateY(-100%);
  transition: transform 0.4s ease-in-out;
}

.dropdown-container {
  position: relative;
}

.merge-header {
  top: 0;
  left: 0;
  right: 0;
  background-color: #0c111d;
}

.merge-content {
  /* margin-top: -100px; */
  position: relative;
  z-index: 5;
}
.gradient-color {
  background: linear-gradient(180deg, #d9ab6d 30%, #f3cd96 100%) !important;
}
.custom-tabs .q-tab--active {
  color: #d9ab6d;
}
.custom-tabs .q-tab--active:hover {
  color: #f3cd96;
}
.gradient-text {
  background: linear-gradient(180deg, #d9ab6d 30%, #f3cd96 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.myFont {
  font-family: 'Poppins', sans-serif;
}

.card-ourProduct {
  background-color: #0c111d;
  border: 1px solid #667085;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.card-ourProduct .q-card-section {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.checkout {
  border: 1px solid #d9ab6d;
  border-radius: 10px;
  background-color: transparent;
  transition: background 0.3s ease;
}

.checkout:hover {
  background: linear-gradient(180deg, #d9ab6d 30%, #f3cd96 100%);
}
.color-footer {
  background-color: #0c111d;
}

.animated-button {
  position: relative;
  overflow: hidden;
  color: black;
  background: transparent;
  transition: all 0.3s ease;
}

.animated-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;

  transition: transform 0.5s ease;
}

.animated-button:hover::before {
  transform: translateX(100%);
}

.animated-button:hover {
  color: #d9ab6d;
  border-color: #d9ab6d;
  box-shadow: 0 0 8px rgba(217, 171, 109, 0.5),
    0 0 15px rgba(217, 171, 109, 0.3);
  font-weight: bold;
}

.animated-button:hover .q-icon {
  transform: translateX(4px); /* Animasi ikon panah ke kanan */
  transition: transform 0.3s ease;
}
.black-button {
  background-color: black !important; /* Pastikan warna hitam diterapkan */
  color: white !important; /* Pastikan teks terlihat */
}

.scrolled {
  background: rgba(0, 0, 0, 0.7) !important;
  backdrop-filter: blur(5px);
}
.hidden {
  transform: translateY(-100%) scaleY(0.9);
  opacity: 0;
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
}
.scrolled {
  background: rgba(0, 0, 0, 0.7) !important;
  backdrop-filter: blur(5px);
  transition: background 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out;
}
</style>
