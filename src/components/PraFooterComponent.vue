<template>
  <div class="hero-section q-py-xl">
    <div class="row items-center justify-between q-col-gutter-xl">
      
      <!-- Left Image -->
      <div class="col-12 col-md-5 flex flex-center">
        <q-img
          src="assets/imageDekstop/prafooter.png"
          style="max-width: 90%; border-radius: 12px"
          fit="cover"
        />
      </div>

      <!-- Right Content -->
      <div class="col-12 col-md-7">
        <div class="text-h3 text-bold">
          <span class="gradient-text">Together</span>,
          <span class="text-white"> we lead the future</span>
          <span class="gradient-text"> with digital transformation.</span>
        </div>

        <div class="text-subtitle1 text-white q-mt-md">
          Let’s drive innovation together!
        </div>

        <q-btn
          label="Contact Us"
          text-color="white"
          class="gradient-color q-mt-lg q-px-xl q-py-sm text-bold"
          style="border-radius: 8px;"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style scoped>
.hero-section {
  background: linear-gradient(to top, #0C111D, #1D2939);
  width: 100%;
  color: white;
}


</style>
