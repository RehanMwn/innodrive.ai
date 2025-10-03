<template>
  <div
    class="about-section text-white"
    :style="{
      backgroundImage: 'url(assets/imageDekstop/snake.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      padding: '80px 5vw'
    }"
  >
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
          Innodrive.ai <span class="highlight">simplifies</span> industrial challenges through
          digital transformation. <br/><br/>
          Our core specializations include the development of real-time monitoring systems, industrial process automation, and customizable robotic systems tailored to various manufacturing and automotive needs. Empowered by Internet of Things (IoT) and Artificial Intelligence (AI) technologies, we deliver end-to-end solutions that enhance productivity and quality control on the production line.
          <br/><br/>
          In the automotive sector, we offer various innovations such as smart dashboards with data loggers for both electric and conventional vehicles, dynamometers (dyno) for vehicle performance testing, and other automotive tools integrated with digital systems and cloud monitoring.
          <br/><br/>
          Additionally, we provide customized desktop, web, and mobile application development services tailored to industrial and business needs from automation systems, device control and monitoring, to operational management and industrial data analytics.
        </div>

        <!-- Vision -->
        <div class="info-card q-mt-lg">
          <div class="text-h6 text-bold">Vision</div>
          <div class="text-body2 q-mt-sm">
            Become a technology innovation center that drives digital automation in the automotive and manufacturing industries through IoT and artificial intelligence solutions to improve efficiency and competitiveness in the era of digital transformation.
          </div>
        </div>

        <!-- Mission -->
        <div class="info-card q-mt-md">
          <div class="text-h6 text-bold">Mission</div>
          <div class="q-mt-sm">
            <div class="mission-item"><span>01</span> Develop IoT and Artificial Intelligence solutions that are integrated and easy to implement in various industrial lines.</div>
            <div class="mission-item"><span>02</span> Building an efficient, flexible and scalable system, through a real-time data-based intelligent monitoring and control system that is easily adaptable to technological developments.</div>
            <div class="mission-item"><span>03</span> Creating an adaptive and sustainable technology ecosystem to enhance industrial competitiveness at both national and global levels.</div>
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


.highlight {
  color: #F5D083;
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
  background: #1F2A37;
  border-radius: 8px;
  padding: 16px 20px;
}

.mission-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
}
.mission-item span {
  font-weight: bold;
  margin-right: 8px;
  color: #F5D083;
}
</style>
