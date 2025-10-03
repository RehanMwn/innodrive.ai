<template>
  <div
    class="col-12 q-pb-xl myFont gallery-wrap ornament-bg"
    style="background: #0c111d; color: white"
  >
    <!-- Header -->
    <div class="row justify-center q-pt-xl">
      <div
        class="row full-width justify-center text-bold"
        :class="$q.screen.gt.md ? 'text-h2' : 'text-h3'"
      >
        <span style="color: white">Our&nbsp;</span
        ><span class="gradient-text">Gallery</span>
      </div>

      <div
        class="row q-mt-lg justify-center text-center"
        :class="$q.screen.gt.md ? 'text-h6' : 'text-subtitle'"
        style="max-width: 700px"
        v-html="galleryDescriptionText"
      ></div>
    </div>

    <!-- Carousel -->
    <div class="row justify-center q-mt-xl">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="white"
        navigation
        arrows
        autoplay
        :interval="10000"
        height="auto"
        class="carousel-box full-width bg-transparent"
      >
        <q-carousel-slide
          v-for="(item, index) in displayedSlides"
          :key="index"
          :name="index + 1"
          class="column no-wrap"
        >
          <div class="row justify-center q-mt-lg myFont">
            <!-- apply q-px-md on mobile -->
            <div
              class="col-12 col-md-10"
              :class="{ 'q-px-md': $q.screen.lt.md }"
            >
              <div class="row q-col-gutter-lg justify-center">
                <div
                  v-for="(img, idx) in item"
                  :key="idx"
                  class="col-12 col-md-4 col-sm-6"
                >
                  <q-card class="gallery-card">
                    <!-- media -->
                    <q-img
                      :src="img.src"
                      class="card-image"
                      alt="gallery image"
                    />

                    <!-- content always visible (white card) -->
                    <q-card-section class="card-content">
                      <div>
                        <div class="card-title">{{ img.title }}</div>
                        <div class="card-subtitle">{{ img.subtitle }}</div>
                      </div>

                      <div class="card-footer">
                        <q-btn
                          flat
                          class="read-more-btn"
                          label="Read Article >"
                        />
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { galleryDescriptionText } from 'src/pages/DashboardPage';

const slide = ref(1);
const isMobile = ref(window.innerWidth <= 600);

const slides = [
  [
    {
      src: 'assets/imageDekstop/galleryImage.jpg',
      title: 'Testing Dynomax with Honda',
      subtitle:
        'Testing Dynomax with Honda demonstrates our commitment to innovation by analyzing real-world performance and sustainable impact.',
    },
    {
      src: 'assets/imageDekstop/galleryImage2.jpeg',
      title: 'AgriSoil Smart System',
      subtitle:
        'A smart soil nutrient monitoring system that provides insights into soil health, enabling farmers to optimize fertilizer use and promote sustainable agriculture.',
    },
    {
      src: 'assets/imageDekstop/galleryImage3.jpeg',
      title: 'Smart Integrated Industrial Control and Monitoring System',
      subtitle:
        'Sensor data is wirelessly transmitted via Long Range (LoRa) technology, covering up to 5 km, to a LoRa Gateway for monitoring.',
    },
  ],
  [
    {
      src: 'assets/imageDekstop/galleryImage6.jpeg',
      title: 'UI/UX Design',
      subtitle: 'Crafting interactive designs',
    },
    {
      src: 'assets/imageDekstop/galleryImage5.jpeg',
      title: 'CAD Design',
      subtitle: 'Accurate CAD models for projects',
    },
    {
      src: 'assets/imageDekstop/galleryImage4.jpg',
      title: '3D Printed CNC Plasma',
      subtitle: 'Custom CNC plasma designs',
    },
  ],
];

const displayedSlides = computed(() => {
  // on mobile show one card per slide, on desktop show per defined slide (3 per slide)
  if (isMobile.value) {
    return slides.flat().map((image) => [image]);
  }
  return slides;
});

function onResize() {
  isMobile.value = window.innerWidth <= 600;
}

onMounted(() => {
  window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize);
});
</script>

<style scoped>
/* carousel wrapper must allow overflow so dots/arrows can be visible outside card area */
.carousel-box {
  width: 100%;
  overflow: visible;
  padding-bottom: 56px; /* space for navigation dots placed below slides */
  box-sizing: border-box;
}

/* move built-in dots (navigation) down so they are not overlapped */
::v-deep .q-carousel__navigation {
  bottom: 6px !important; /* place the dots slightly below the carousel content */
  z-index: 60;
  display: flex;
  justify-content: center;
}

/* ensure arrows are centered vertically and above cards */
::v-deep .q-carousel__arrows {
  top: 50% !important;
  transform: translateY(-50%) !important;
  z-index: 70;
}

/* card style */
.gallery-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 420px; /* ensure consistent card height between slides */
  width: 100%;
}

/* fixed image area so all cards have same visual height */
.card-image {
  width: 100%;
  height: 340px; /* fixed media height for uniform layout */
  object-fit: cover;
  background: #f3f4f6;
  display: block;
}

/* white content area */
.card-content {
  background: #ffffff;
  color: #0c111d;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 auto;
  box-sizing: border-box;
}

/* title & subtitle */
.card-title {
  font-size: 1rem;
  font-weight: 700;
  color: #0b1724;
  margin-bottom: 8px;

  display: -webkit-box;
  -webkit-line-clamp: 2;   /* maksimal 2 baris */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 2.6em;       /* jaga tinggi konsisten */
}

.card-subtitle {
  color: #6b7280;
  font-size: 0.9rem;
  line-height: 1.3;

  display: -webkit-box;
  -webkit-line-clamp: 3;   /* maksimal 3 baris */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 3.9em;       /* jaga tinggi konsisten */
}


/* footer area of card */
.card-footer {
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
}

/* keep frame image centered */
.frame-img {
  max-width: 560px;
  width: 100%;
  height: auto;
  display: block;
  margin: 40px auto;
}
.frame-img-large {
  max-width: 2000px;
  width: 100%;
  height: auto;
}

/* responsive adjustments */
@media (max-width: 1023px) {
  .carousel-box {
    padding-bottom: 72px; /* more space for dots on smaller screens */
  }
  .gallery-card {
    min-height: 360px;
  }
  .card-image {
    height: 200px;
  }
}

@media (max-width: 600px) {
  .carousel-box {
    padding-bottom: 92px;
  }
  .gallery-card {
    min-height: 320px;
  }
  .card-image {
    height: 180px;
  }
  /* add horizontal padding on small screens (q-px-md equivalent) */
  .col-12.col-md-10.q-px-md,
  .col-12.col-md-10 .q-px-md {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }
}
/* ornament background di pojok kiri bawah */
.ornament-bg {
  position: relative;
  overflow: hidden; /* supaya ornamen nggak bikin scrollbar */
}

.ornament-bg::after {
  content: "";
  position: absolute;
  top: -200px;
  bottom: -10px;      /* agak keluar 10px biar transparan sesuai permintaan */
  left: -160px;        /* setengah sisi kirinya keluar layar */
  width: 400px;       /* bisa diatur sesuai ukuran */
  height: 400px;
  background: url("/assets/ImageDekstop/ornament.png") no-repeat left bottom;
  background-size: contain;
  opacity: 0,9;       /* transparan dikurangi 10% */
  transform: scaleX(-1); /* flip horizontal */
  pointer-events: none; /* biar nggak ganggu klik */
  z-index: 1;
}
/* ornament background di pojok kiri & kanan bawah */
.ornament-bg {
  position: relative;
  overflow: hidden; /* supaya ornamen nggak bikin scrollbar */
}

/* kiri bawah */
.ornament-bg::after {
  content: "";
  position: absolute;
  bottom: -10px;      /* agak keluar 10px */
  left: -160px;       /* setengah keluar kiri */
  width: 400px;
  height: 400px;
  background: url("/assets/ImageDekstop/ornament.png") no-repeat left bottom;
  background-size: contain;
  opacity: 0.9;       /* transparan dikurangi 10% */
  transform: scaleX(-1); /* flip horizontal */
  pointer-events: none;
  z-index: 1;
}

/* kanan bawah */
.ornament-bg::before {
  content: "";
  position: absolute;
  bottom: -10px;      /* sama kayak yang kiri */
  right: -100px;      /* setengah keluar kanan */
  width: 400px;
  height: 400px;
  background: url("/assets/ImageDekstop/ornament.png") no-repeat right bottom;
  background-size: contain;
  opacity: 0.9;
  /* tidak di-flip biar tetap natural */
  pointer-events: none;
  z-index: 1;
}

</style>
