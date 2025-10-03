<template>
  <div class="hero-section q-py-xl q-px-md">
    <div class="row items-center justify-between q-col-gutter-xl prafooter-row">
      <!-- Left Image -->
      <div class="col-12 col-md-5 flex flex-center prafooter-img-col">
        <q-img
          src="assets/imageDekstop/prafooter.png"
          style="max-width: 90%; border-radius: 12px"
          fit="cover"
        />
      </div>
      <!-- Right Content -->
      <div class="col-12 col-md-7 flex flex-center prafooter-content-col">
        <div style="width: 100%">
          <div class="text-h3 text-bold prafooter-title mx-auto">
            <span class="gradient-text">Together</span>,
            <span class="text-white"> we lead the future</span>
            <span class="gradient-text"> with digital transformation.</span>
          </div>
          <div class="text-subtitle1 text-white q-mt-md q-ml-md prafooter-subtext">
            Let’s drive innovation together!
          </div>
          <div class="q-mt-lg q-ml-md prafooter-btn-wrap">
            <q-btn
              label="Contact Us"
              text-color="white"
              class="gradient-color q-px-xl q-py-sm text-bold"
              style="border-radius: 8px"
            />
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
.hero-section {
  background: linear-gradient(to top, #0c111d, #1d2939);
  width: 100%;
  color: white;
}

.prafooter-row {
  align-items: center;
}
.prafooter-img-col,
.prafooter-content-col {
  align-items: center;
}
@media (max-width: 767px) {
  .prafooter-row {
    flex-direction: column !important;
    align-items: center !important;
  }
  .prafooter-img-col,
  .prafooter-content-col {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    width: 100%;
    margin: 0 auto;
  }
  .prafooter-content-col > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
}

.prafooter-title {
  word-break: break-word;
  text-align: start;
  line-height: 1.2;
  width: 100%;
  margin-bottom: 0.5rem;
}
@media (max-width: 767px) {
  .prafooter-title {
    text-align: center;
    font-size: 1.4rem;
    padding: 0 8px;
    line-height: 1.3;
  }
}
.prafooter-subtext {
  text-align: left;
  width: 100%;
}
.prafooter-btn-wrap {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}
@media (max-width: 767px) {
  .prafooter-subtext,
  .prafooter-btn-wrap {
    text-align: left;
    justify-content: flex-start;
    width: 100%;
  }
}
</style>
