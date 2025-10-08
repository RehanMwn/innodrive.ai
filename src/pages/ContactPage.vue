<template>
  <q-page class="bg-contact q-pa-xl">
    <div class="row q-col-gutter-xl items-start">
      <!-- Dekstop -->
      <template v-if="$q.screen.gt.sm">
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
                  First name <span style="color: #ff3b3b">*</span>
                </div>
                <q-input v-model="form.firstName" label="" outlined dense />
              </div>
              <div class="col-12 col-md-6">
                <div class="q-mb-xs text-white text-weight-medium">
                  Last name <span style="color: #ff3b3b">*</span>
                </div>
                <q-input v-model="form.lastName" label="" outlined dense />
              </div>
              <div class="col-12 col-md-6">
                <div class="q-mb-xs text-white text-weight-medium">
                  Company name <span style="color: #ff3b3b">*</span>
                </div>
                <q-input v-model="form.company" label="" outlined dense />
              </div>
              <div class="col-12 col-md-6">
                <div class="q-mb-xs text-white text-weight-medium">
                  Email <span style="color: #ff3b3b">*</span>
                </div>
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
                  Phone number <span style="color: #ff3b3b">*</span>
                </div>
                <q-input v-model="form.phone" label="" outlined dense />
              </div>
              <div class="col-12 col-md-6">
                <div class="q-mb-xs text-white text-weight-medium">
                  Country <span style="color: #ff3b3b">*</span>
                </div>
                <q-input v-model="form.country" label="" outlined dense />
              </div>
              <div class="col-12">
                <div class="q-mb-xs text-white text-weight-medium">
                  Message <span style="color: #ff3b3b">*</span>
                </div>
                <q-input
                  v-model="form.message"
                  type="textarea"
                  label=""
                  outlined
                  dense
                />
              </div>
              <div class="text-subtitle1 q-mr-md" style="text-align: justify">
                Innodrive.ai is dedicated to protecting your privacy. We will
                only use your personal information to manage your account and
                deliver the products and services you request. We may also share
                updates about our solutions, services, or other content that
                could be valuable to you. If you agree to receive such
                communications, please indicate your preferred method of contact
                below:
              </div>
              <q-checkbox
                v-model="form.allowData"
                label="I allow Innodrive.ai to process my data."
                style="margin: -12px"
              />
              <div class="col-12">
                <div class="text-negative text-caption" v-if="!form.allowData">
                  This field is required.
                </div>
              </div>
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
      </template>
      <!-- Mobile -->
      <template v-else>
        <div class="col-12 flex flex-center q-ml-sm">
          <div class="q-px-md q-pt-md">
            <!-- Title -->
            <div
              class="row full-width justify-center text-bold"
              style="margin-bottom: 60px; font-size: 2rem"
            >
              <span class="gradient-text">Contact&nbsp;</span>
              <span class="text-white">Us</span>
            </div>
            <!-- RIGHT SIDE (FORM) - Mobile -->
            <div class="text-white">
              <q-form @submit.prevent="sendEmail" class="q-gutter-md">
                <div class="row q-col-gutter-md">
                  <div class="col-12 col-md-6">
                    <div class="q-mb-xs text-white text-weight-medium">
                      First name <span style="color: #ff3b3b">*</span>
                    </div>
                    <q-input v-model="form.firstName" label="" outlined dense />
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="q-mb-xs text-white text-weight-medium">
                      Last name <span style="color: #ff3b3b">*</span>
                    </div>
                    <q-input v-model="form.lastName" label="" outlined dense />
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="q-mb-xs text-white text-weight-medium">
                      Company name <span style="color: #ff3b3b">*</span>
                    </div>
                    <q-input v-model="form.company" label="" outlined dense />
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="q-mb-xs text-white text-weight-medium">
                      Email <span style="color: #ff3b3b">*</span>
                    </div>
                    <q-input
                      v-model="form.email"
                      type="email"
                      label=""
                      outlined
                      dense
                    />
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="q-mb-xs text-white text-weight-medium">
                      Phone number <span style="color: #ff3b3b">*</span>
                    </div>
                    <q-input v-model="form.phone" label="" outlined dense />
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="q-mb-xs text-white text-weight-medium">
                      Country <span style="color: #ff3b3b">*</span>
                    </div>
                    <q-input v-model="form.country" label="" outlined dense />
                  </div>
                  <div class="col-12">
                    <div class="q-mb-xs text-white text-weight-medium">
                      Message <span style="color: #ff3b3b">*</span>
                    </div>
                    <q-input
                      v-model="form.message"
                      type="textarea"
                      label=""
                      outlined
                      dense
                    />
                  </div>
                  <div
                    class="q-mt-md"
                    style="text-align: justify; line-height: 2"
                  >
                    Innodrive.ai is dedicated to protecting your privacy. We
                    will only use your personal information to manage your
                    account and deliver the products and services you request.
                    We may also share updates about our solutions, services, or
                    other content that could be valuable to you. If you agree to
                    receive such communications, please indicate your preferred
                    method of contact below:
                  </div>
                  <q-checkbox

                    label="I agree to receive updates and communications from Innodrive.ai."
                    v-model="form.alllowData"
                    style="margin: 10px -12px"
                  />

                  <div class="col-12"></div>
                  <div style="text-align: justify; line-height: 2">
                    To deliver the content you requested, Innodrive.ai needs to
                    store and process your personal data. If you agree, please
                    tick the box below.
                  </div>
                  <q-checkbox
                    label="I allow Innodrive.ai to process my data."
                    v-model="form.allowData"
                    class="justify-start"
                    style="margin: 10px -12px"
                  />

                  <div class="col-12">
                    <div
                      class="text-negative text-caption"
                      style="margin: -30px 0px 20px"
                      v-if="!form.allowData"
                    >
                      This field is required.
                    </div>
                  </div>
                </div>

                <q-btn
                  label="Submit"
                  color="warning"
                  type="submit"
                  class="q-mt-md full-width"
                  :disable="!form.allowData"
                />
              </q-form>
            </div>

            <!-- LEFT SIDE - Mobile -->
            <div class="text-white q-pt-xl">
              <div class="text-h5 text-bold q-mb-md text-left">
                Discover Intelligent Solutions from Innodrive.ai to
                <span class="text-warning">Power</span> Your Industry Forward
              </div>
              <div class="text-subtitle1 q-mb-lg text-left">
                Let us know how we can help:
              </div>

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
                <div class="text-body1 text-left">{{ item }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
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
  alllowData: false,
});

const sendEmail = () => {
  if (!form.value.allowData) return;

  emailjs
    .send(
      'service_xxxxxx',
      'template_xxxxxx',
      {
        to_email: 'raihanarifin170382@gmail.com',
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
  padding: 100px 100px;
}

/* Biar input dark tapi tetap jelas */
/* Semua input pakai background dark + text putih */
.q-input .q-field__control,
.q-textarea .q-field__control {
  background-color: #1d2939 !important;
  border: 1px solid #98a2b3 !important;
  border-radius: 10px !important;
  color: #ffffff !important;
  display: flex !important;
  align-items: center !important;
}

/* Pastikan teks di input rata tengah secara vertikal */
.q-input .q-field__native,
.q-textarea .q-field__native {
  padding: 10px 12px !important; /* top-bottom lebih lega */
  font-size: 16px !important; /* lebih besar biar jelas */
  line-height: 1.5 !important; /* pastikan tinggi baris proporsional */
  color: #ffffff !important; /* text tetap putih */
  display: flex;
  align-items: center; /* vertikal center */
}

/* Label tetap putih */
.q-field__label {
  color: #ffffff !important;
  font-weight: 500;
}
.q-checkbox__inner {
  color: #ffffff !important; /* ubah warna default jadi putih */
}



@media (max-width: 600px) {
  .bg-contact {
    background-color: #0c111d;
    min-height: 100vh;
    padding: 100px 30px;
  }
}
</style>
