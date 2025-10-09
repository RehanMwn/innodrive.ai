<template>
  <!-- Judul -->
  <div id="1-welcome" class="col-12 q-py-xl myFont ornament-bg">
    <div class="text-center q-mb-xl">
      <div class="text-h3 text-bold">
        Welcome to <span class="gradient-text">Innodrive.ai</span>
      </div>
      <div class="text-subtitle1 text-grey-8 q-mt-sm q-px-lg">
        your partner in turning digital transformation into real business
        growth.
      </div>
    </div>

    <!-- Konten + Gambar -->
    <div
      class="row items-start justify-center q-col-gutter-xl responsive-layout"
    >
      <!-- Gambar -->
      <div class="col-12 col-md-5 flex flex-center image-block">
        <q-img
          src="assets/imageDekstop/welcome.jpeg"
          style="max-width: 75%; border-radius: 12px"
          fit="cover"
        />
      </div>

      <!-- Teks -->
      <div class="col-12 col-md-6 text-block">
        <div class="text-body1 text-grey-9 q-px-lg custom-paragraph">
          <p>
            <span class="gradient-text text-weight-bold text-italic"
              >PT Reka Inovasi Cerdas</span
            >
            also known as
            <span class="text-weight-bold gradient-text-blue">Innodrive.ai</span
            >, is a technology company focused on digital transformation across
            various industrial sectors, particularly in the digitalization of
            the manufacturing and automotive industries.
          </p>

          <p>
            <span class="text-weight-bold gradient-text text-italic">
              We specialize in robotics, artificial intelligence, and IoT based
              automation systems.
            </span>
            Our integrated software and hardware solutions are designed to
            support more efficient, precise, and intelligent industrial
            processes.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<style scoped>
/* Paragraph styling */
.custom-paragraph p {
  text-align: justify;
  text-indent: 5ch;
  font-size: 25px; /* desktop */
  line-height: 1.6;
  margin-bottom: 1em;
  font-weight: 400;
  font-style: normal;
}

/* Tablet & mobile (<=1025px) */
@media (max-width: 1025px) {
  .custom-paragraph p {
    font-size: 17px; /* lebih kecil */
    text-indent: 3ch;
    font-weight: 400;
    font-style: normal;
  }

  /* urutkan gambar dulu baru teks */
  .responsive-layout {
    flex-direction: column; /* jadi kolom di layar kecil */
  }

  .image-block {
    order: 1; /* gambar di atas */
    margin-bottom: 20px;
  }

  .text-block {
    order: 2; /* teks di bawah */
  }
}

/* Desktop (>1025px) */
@media (min-width: 1026px) {
  .responsive-layout {
    flex-direction: row; /* normal: teks kiri, gambar kanan */
  }

  .image-block {
    order: 2; /* gambar di kanan */
  }

  .text-block {
    order: 1; /* teks di kiri */
  }
}
/* ornament background di pojok kiri bawah */
.ornament-bg {
  position: relative;
  overflow: hidden; /* supaya ornamen nggak bikin scrollbar */
}

.ornament-bg::after {
  content: '';
  position: absolute;
  bottom: -210px; /* agak keluar 10px biar transparan sesuai permintaan */
  left: -160px; /* setengah sisi kirinya keluar layar */
  width: 400px; /* bisa diatur sesuai ukuran */
  height: 400px;
  background: url('/public/assets/imageDekstop/ornament.png') no-repeat left bottom;
  background-size: contain;
  transform: scaleX(-1); /* flip horizontal */
  pointer-events: none; /* biar nggak ganggu klik */
  z-index: 1;
  opacity: 0.9;
  filter: brightness(0.3) grayscale(0.7) contrast(1.2);
}
/* ornament background di pojok kiri & kanan bawah */
.ornament-bg {
  position: relative;
  overflow: hidden; /* supaya ornamen nggak bikin scrollbar */
}
</style>
