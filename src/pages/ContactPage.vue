<template>
  <q-page class="bg-contact q-pa-xl">
    <div class="row q-col-gutter-xl items-start">
      <!-- LEFT SIDE -->
      <div class="col-12 col-md-6 text-white">
        <div class="text-h4 text-bold q-mb-md">
          Discover Intelligent Solutions from Innodrive.ai to
          <span class="text-warning">Power</span> Your Industry Forward
        </div>
        <div class="text-subtitle1 q-mb-lg">Let us know how we can help:</div>

        <div
          v-for="(item, i) in checklist"
          :key="i"
          class="row items-center q-mb-md"
        >
          <img
            src="/assets/icon/Ellipse5.png"
            class="q-mr-md"
            width="20"
            height="20"
          />
          <div class="text-body1">{{ item }}</div>
        </div>
      </div>

      <!-- RIGHT SIDE (FORM) -->
      <div class="col-12 col-md-6 text-white">
        <q-form @submit.prevent="sendEmail" class="q-gutter-md">
          <div class="row q-col-gutter-md">
            <div class="col-12 col-md-6">
              <div class="q-mb-xs text-white text-weight-medium">
                First name *
              </div>
              <q-input v-model="form.firstName" label="" outlined dense />
            </div>
            <div class="col-12 col-md-6">
              <div class="q-mb-xs text-white text-weight-medium">
                Last name *
              </div>
              <q-input v-model="form.lastName" label="" outlined dense />
            </div>
            <div class="col-12 col-md-6">
              <div class="q-mb-xs text-white text-weight-medium">
                Company name *
              </div>
              <q-input v-model="form.company" label="" outlined dense />
            </div>
            <div class="col-12 col-md-6">
              <div class="q-mb-xs text-white text-weight-medium">Email *</div>
              <q-input
                v-model="form.email"
                label=""
                type="email"
                outlined
                dense
              />
            </div>
            <div class="col-12 col-md-6">
              <div class="q-mb-xs text-white text-weight-medium">
                Phone number *
              </div>
              <q-input v-model="form.phone" label="" outlined dense />
            </div>
            <div class="col-12 col-md-6">
              <div class="q-mb-xs text-white text-weight-medium">Country</div>
              <q-input v-model="form.country" label="" outlined dense />
            </div>
            <div class="col-12">
              <div class="q-mb-xs text-white text-weight-medium">Message</div>
              <q-input
                v-model="form.message"
                type="textarea"
                label=""
                outlined
                dense
              />
            </div>
          </div>

          <q-checkbox
            v-model="form.allowData"
            label="I allow Innodrive.ai to process my data."
          />

          <div class="text-negative text-caption" v-if="!form.allowData">
            This field is required.
          </div>

          <q-btn
            label="Submit"
            color="warning"
            type="submit"
            class="full-width q-mt-md"
            :disable="!form.allowData"
          />
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import emailjs from 'emailjs-com';

const checklist = [
  'Schedule a consultation to discuss your automation needs',
  'Explore Innodrive.ai product features and live demos',
  'Learn more about our industrial and automotive projects',
  'Join our network of innovators and industry partners',
  'Plan your digital transformation journey with us',
];

const form = ref({
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  message: '',
  allowData: false,
});

const sendEmail = () => {
  if (!form.value.allowData) return;

  emailjs
    .send(
      'service_xxxxxx',
      'template_xxxxxx',
      {
        to_email: 'innodrive.ai@gmail.com',
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        company: form.value.company,
        email: form.value.email,
        phone: form.value.phone,
        country: form.value.country,
        message: form.value.message,
      },
      'user_xxxxxx'
    )
    .then(() => {
      alert('Message sent successfully!');
    })
    .catch(() => {
      alert('Failed to send message. Please try again.');
    });
};
</script>

<style>
.bg-contact {
  background-color: #0c111d;
  min-height: 100vh;
  padding: 100px 174px;
}

/* Biar input dark tapi tetap jelas */
.q-field__native,
.q-input,
.q-textarea {
  color: #fff !important;
  background-color: #1d2939 !important;
  border-radius: 8px !important;
}

.q-field__label {
  color: #ffffff !important; /* label putih */
  font-weight: 500;
}

.q-field__control {
  border: 1px solid #fff !important;
}
/* Biar teks input rata tengah secara vertikal */
.q-field__native {
  display: flex !important;
  align-items: center !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
</style>
