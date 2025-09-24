<template>
  <q-dialog v-model="dialogModel">
    <div
      class="col-12 justify-center myFont text-white"
      :style="{
        'background-color': '#0c111d',
        'max-width': $q.screen.gt.sm ? '70%' : '100%',
        'border-radius': '10px',
        border: '2px solid #d9ab6d',
      }"
    >
      <div
        class="text-center text-white q-mt-lg text-bold"
        :class="$q.screen.gt.sm ? 'text-h3' : 'text-h4'"
        :style="{ 'margin-bottom': $q.screen.gt.sm ? '60px' : '30px' }"
      >
        Contact <span class="gradient-text">Us</span>
      </div>

      <div
        class="row justify-center items-center col-12 col-md-6 myFont text-white"
        style="background-color: #0c111d; margin: 0 auto; max-width: 88%"
      >
        <div :class="$q.screen.gt.sm ? 'col' : 'col-12'">
          <div class="text-h4" :class="$q.screen.gt.sm ? 'text-h4' : 'text-h6'">
            Not Sure What You Need?
          </div>
          <div class="text-subtitle1">
            No worries! Tell us your goals, and we’ll help you find the perfect
            AI-driven automotive solution.
          </div>
        </div>
        <div :class="$q.screen.gt.sm ? 'col-auto' : 'col-12 q-mt-md'">
          <q-btn
            class="gradient-color text-white full-width"
            glossy
            label="Consult Now"
            :href="'https://wa.me/message/5H2WQUJVTOU3F1'"
            target="_blank"
          >
            <q-icon name="fa-brands fa-whatsapp" class="q-ml-sm" />
          </q-btn>
        </div>
      </div>
      <q-form ref="contactForm" @submit.prevent="submitForm">
        <div
          class="row justify-center myFont text-black"
          :style="{
            padding: $q.screen.gt.sm ? '20px 50px' : '20px 0',
            margin: '0 auto',
            'border-radius': '10px',
          }"
        >
          <div class="row col-12 q-col-gutter-md q-col-gutter-xs">
            <div class="col-xs-12 col-md">
              <div
                class="bg-grey-2 q-rounded-borders"
                :class="
                  $q.screen.gt.sm
                    ? 'q-pa-lg q-mx-md q-mb-lg'
                    : 'q-pa-md q-mx-sm'
                "
                style="border-radius: 6px; border: 1px solid #d9ab6d"
              >
                <div class="text-h6">Full Name</div>
                <q-input
                  v-model="fullName"
                  placeholder="Enter your full name"
                  dense
                  :rules="[(val) => !!val || 'Full Name is required']"
                />
              </div>
            </div>

            <div class="col-xs-12 col-md">
              <div
                class="q-mb-lg bg-grey-2 q-rounded-borders"
                :class="
                  $q.screen.gt.sm ? 'q-pa-lg q-mx-md ' : 'q-pa-md q-mx-sm'
                "
                style="border-radius: 6px; border: 1px solid #d9ab6d"
              >
                <div class="text-h6">Email</div>
                <q-input
                  v-model="email"
                  placeholder="Enter your email"
                  dense
                  type="email"
                  :rules="[
                    (val) => !!val || 'Email is required',
                    (val) => /.+@.+\..+/.test(val) || 'Invalid email',
                  ]"
                />
              </div>
            </div>
          </div>

          <div class="row col-12">
            <div
              class="q-mb-lg bg-grey-2 q-rounded-borders"
              :class="$q.screen.gt.sm ? 'q-pa-lg q-mx-lg' : 'q-pa-md q-mx-md'"
              style="border-radius: 6px; border: 1px solid #d9ab6d; width: 100%"
            >
              <div class="text-h6">Why did you contact us?</div>

              <div class="row q-col-gutter-xs">
                <div class="col-xs-12 col-md-6 column">
                  <q-checkbox
                    v-model="selectedReasons"
                    val="Embedded Automotive AI"
                    label="Embedded Automotive AI"
                  />
                  <q-checkbox
                    v-model="selectedReasons"
                    val="Advanced Telematics & IoT Integration"
                    label="Advanced Telematics & IoT Integration"
                  />
                </div>
                <div class="col-xs-12 col-md-6 column">
                  <q-checkbox
                    v-model="selectedReasons"
                    val="Autonomous Vehicle Solutions"
                    label="Autonomous Vehicle Solutions"
                  />
                  <q-checkbox
                    v-model="selectedReasons"
                    val="Others"
                    label="Others"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row col-12">
            <div
              class="q-mb-lg bg-grey-2 q-rounded-borders"
              :class="$q.screen.gt.sm ? 'q-pa-lg q-mx-lg' : 'q-pa-md q-mx-md'"
              style="border-radius: 6px; border: 1px solid #d9ab6d; width: 100%"
            >
              <div class="text-h6">Your budget</div>
              <div class="text-caption">Swipe to set your budget range</div>

              <div class="q-pa-md">
                <q-range
                  class="q-mt-lg"
                  v-model="model"
                  :min="0"
                  :max="5000000"
                  :step="100000"
                  :left-label-value="'IDR ' + model.min"
                  :right-label-value="'IDR ' + model.max"
                  label-always
                  color="brown"
                />
              </div>
            </div>
          </div>

          <div class="row col-12">
            <div
              class="q-mb-lg bg-grey-2 q-rounded-borders"
              :class="$q.screen.gt.sm ? 'q-pa-lg q-mx-lg' : 'q-pa-md q-mx-md'"
              style="border-radius: 6px; border: 1px solid #d9ab6d; width: 100%"
            >
              <div class="text-h6">Your Notes</div>
              <div class="q-pa-md">
                <q-input
                  v-model="notes"
                  autogrow
                  placeholder="Type your notes here"
                />
              </div>
            </div>
          </div>

          <div class="row justify-center q-pa-lg full-width">
            <q-btn
              class="q-mx-md bg-brown-6 text-white"
              style="width: 100%"
              glossy
              label="Submit"
              @click="submitForm"
            />
          </div>
        </div>
      </q-form>
    </div>
  </q-dialog>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, computed } from 'vue';
import { useQuasar } from 'quasar';
import axios from 'axios';

const $q = useQuasar();

const props = defineProps({
  modelValue: Boolean,
});
const emit = defineEmits(['update:modelValue']);

const dialogModel = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const fullName = ref<string>('');
const email = ref<string>('');
const selectedReasons = ref<string[]>([]);
const model = ref<{ min: number; max: number }>({
  min: 0,
  max: 1000000,
});
const notes = ref<string>('');

const contactForm = ref<null | HTMLFormElement>(null);

const submitForm = async () => {
  const isValid = contactForm.value
    ? await contactForm.value.validate()
    : false;
  if (!isValid) {
    $q.notify({
      type: 'negative',
      message: 'Please fill in all required fields.',
    });
    return;
  }

  try {
    const formData = {
      fullName: fullName.value,
      email: email.value,
      selectedReasons: selectedReasons.value,
      budget: model.value,
      notes: notes.value,
    };

    // const response = await axios.post(
    //   'http://192.168.0.120:3000/send-email',
    //   formData
    // );
    const response = await axios.post(
      'http://180.247.97.67:3000/innoweb/backend/send-email',
      formData
    );

    // const response = await axios.post('/api/send-email', formData);
    // const response = await axios.post(
    //   'https://tes.fanm.cloud/send-email',
    //   formData
    // );

    if (response.data.success) {
      $q.notify({ type: 'positive', message: 'Email sent successfully!' });
      dialogModel.value = false;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: 'Failed to send email. Please try again.',
    });
  }
};
</script>
