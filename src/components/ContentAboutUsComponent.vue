<template>
  <div class="about-section text-white ornament-bg">
    <!-- Title -->
    <div class="row justify-center q-mt-lg q-mb-xl">
      <div class="text-h4 text-bold text-center">
        Discover More <span class="gradient-text">About Us</span>
      </div>
    </div>

    <!-- Content -->
    <div class="row items-start justify-between q-col-gutter-xl">
      <!-- Left Image (Foto CEO) -->
      <div class="col-12 col-md-4 flex flex-center">
        <div class="ceo-photo-wrapper">
          <q-img
            src="assets/imageDekstop/ceo.png"
            class="ceo-photo"
            fit="cover"
          />
        </div>
      </div>

      <!-- Right Content -->
      <div class="col-12 col-md-8">
        <div class="text-body1 q-mt-md">
          Innodrive.ai <span class="highlight">simplifies</span> industrial
          challenges through digital transformation. <br /><br />
          Our core specializations include the development of real-time
          monitoring systems, industrial process automation, and customizable
          robotic systems tailored to various manufacturing and automotive
          needs. Empowered by Internet of Things (IoT) and Artificial
          Intelligence (AI) technologies, we deliver end-to-end solutions that
          enhance productivity and quality control on the production line.
          <br /><br />
          In the automotive sector, we offer various innovations such as smart
          dashboards with data loggers for both electric and conventional
          vehicles, dynamometers (dyno) for vehicle performance testing, and
          other automotive tools integrated with digital systems and cloud
          monitoring.
          <br /><br />
          Additionally, we provide customized desktop, web, and mobile
          application development services tailored to industrial and business
          needs from automation systems, device control and monitoring, to
          operational management and industrial data analytics.
        </div>

        <!-- Vision -->
        <div class="info-card q-mt-lg">
          <div class="text-h6 text-bold">Vision</div>
          <div class="text-body2 q-mt-sm">
            Become a technology innovation center that drives digital automation
            in the automotive and manufacturing industries through IoT and
            artificial intelligence solutions to improve efficiency and
            competitiveness in the era of digital transformation.
          </div>
        </div>

        <!-- Mission -->
        <div class="info-card q-mt-md">
          <div class="text-h6 text-bold">Mission</div>
          <div class="q-mt-sm">
            <div class="mission-item">
              <span>01</span> Develop IoT and Artificial Intelligence solutions
              that are integrated and easy to implement in various industrial
              lines.
            </div>
            <div class="mission-item">
              <span>02</span> Building an efficient, flexible and scalable
              system, through a real-time data-based intelligent monitoring and
              control system that is easily adaptable to technological
              developments.
            </div>
            <div class="mission-item">
              <span>03</span> Creating an adaptive and sustainable technology
              ecosystem to enhance industrial competitiveness at both national
              and global levels.
            </div>
          </div>
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
.about-section {
  background-color: #0c111d;
  min-height: 100vh;
  padding: 80px 5vw;
  position: relative; /* penting supaya pseudo-element bisa absolute */
  z-index: 0;
}

.highlight {
  color: #f5d083;
}

.ceo-photo {
  width: 300px;
  height: 280px;
}

.ceo-label {
  margin-top: 12px;
  font-size: 14px;
  font-weight: bold;
  color: white;
}

.info-card {
  background: #1f2a37;
  border-radius: 8px;
  padding: 16px 20px;
  position: relative;
  z-index: 2; /* pastikan konten selalu di atas ornamen */
}

.mission-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
}
.mission-item span {
  font-weight: bold;
  margin-right: 8px;
  color: #f5d083;
}

/* 🔹 Desktop (min-width: 700px) */
@media (min-width: 700px) {
  .about-section {
    background: linear-gradient(to top, #0c111d, #1d2939);
  }

  .ornament-bg {
    position: relative;
    overflow: hidden; /* supaya ornamen nggak bikin scrollbar */
  }

  .ornament-bg::after {
    content: '';
    position: absolute;
    top: -200px;
    bottom: -10px; /* agak keluar 10px biar transparan sesuai permintaan */
    left: -160px; /* setengah sisi kirinya keluar layar */
    width: 400px; /* bisa diatur sesuai ukuran */
    height: 400px;
    background: url('/public/assets/imageDekstop/ornament.png') no-repeat left
      bottom;
    background-size: contain;
    opacity: 0, 9; /* transparan dikurangi 10% */
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
    content: '';
    position: absolute;
    bottom: -10px; /* agak keluar 10px */
    left: -160px; /* setengah keluar kiri */
    width: 400px;
    height: 400px;
    background: url('/public/assets/imageDekstop/ornament.png') no-repeat left
      bottom;
    background-size: contain;
    opacity: 0.9; /* transparan dikurangi 10% */
    transform: scaleX(-1); /* flip horizontal */
    pointer-events: none;
    z-index: 1;
  }

  /* kanan tengah */
  .ornament-bg::before {
    content: '';
    position: absolute;
    bottom: -10px; /* sama kayak yang kiri */
    right: -100px; /* setengah keluar kanan */
    width: 400px;
    height: 400px;
    background: url('/public/assets/imageDekstop/ornament.png') no-repeat right
      bottom;
    background-size: contain;
    opacity: 0.9;
    /* tidak di-flip biar tetap natural */
    pointer-events: none;
    z-index: 1;
  }
  /* kiri bawah */
  
}


/*
.ornament-bg {
  position: relative;
  overflow: hidden;
  z-index: 0;
}

.ornament-bg::after {
  content: "";
  position: absolute;
  top: -90px;
  left: 0;
  width: 100vw;
  height: auto;
  aspect-ratio: 2.5 / 1;
  background: url("/assets/imageDekstop/ular.png") no-repeat left bottom;
  background-size: contain;
  opacity: 0.8;
  transform: scaleX(-1);
  pointer-events: none;
  z-index: 1;
}

.about-section .row,
.about-section .text-h4,
.about-section .text-body1 {
  position: relative;
  z-index: 2;
}
*/

/* 🔹 Mobile (max-width: 700px) */
@media (max-width: 700px) {
  .about-section {
    background-image: url(/assets/imageDekstop/snake.png);
    background-size: cover;
    background-position: center;
  }
}
</style>
