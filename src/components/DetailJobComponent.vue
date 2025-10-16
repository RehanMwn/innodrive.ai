<template>
  <q-dialog v-model="dialogModel" persistent>
    <q-card
      class="bg-bule text-white myFont"
      :style="{
        'max-width': $q.screen.gt.sm ? '70%' : '95%',
        'border-radius': '12px',
        border: '2px solid #d9ab6d',
      }"
    >
      <q-card-section class="text-center q-pb-none">
        <div
          class="text-bold q-mt-md"
          :class="$q.screen.gt.sm ? 'text-h3' : 'text-h5'"
        >
          Job <span class="gradient-text">Details</span>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="text-h5 text-bold q-mb-md">{{ job.title }}</div>

        <div class="q-mb-sm">
          <q-badge
            :color="job.available ? 'positive' : 'negative'"
            class="q-mr-sm text-white"
          >
            {{ job.available ? 'Available' : 'Closed' }}
          </q-badge>
          <q-badge color="secondary" class="text-white">{{ job.type }}</q-badge>
        </div>

        <div class="text-subtitle2 q-mb-md">
          <q-icon name="fa-solid fa-users" class="q-mr-xs" />
          Slots left: <b>{{ job.slot_left }}</b>
        </div>

        <q-separator color="grey-8" spaced />

        <!-- Markdown render pakai marked -->
        <div
          v-if="job.detailJob"
          class="q-mt-md text-body1 text-grey-3 markdown-content"
          v-html="renderedMarkdown"
        ></div>

        <div v-else class="text-grey-6 italic">No job details available.</div>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn
          class="gradient-color text-white"
          label="Apply Now"
          icon="send"
          glossy
          @click="$router.push('/ContactUs')"
        />
        <q-btn
          color="white"
          text-color="black"
          label="Close"
          icon="close"
          glossy
          @click="dialogModel = false"
        />
      </q-card-actions>
      <q-card-section>
        <div class="row items-center justify-center q-pa-md">
          <q-btn
            class="gradient-color text-white"
            glossy
            unelevated
            size="md"
            :label="`Lamar via WhatsApp (Respon Cepat)`"
            :icon="'fa-brands fa-whatsapp'"
            :href="`https://wa.me/6285173128115?text=${encodeURIComponent(
              `Halo, saya tertarik melamar posisi: ${job.title}.\n\n` +
                `Mohon isi detail formulir lamaran anda di bawah ini:\n\n` +
                `Nama Lengkap: \n` +
                `Tanggal Lahir (DD/MM/YYYY): \n` +
                `Alamat: \n` +
                `Nomor Telepon: \n` +
                `Email: \n` +
                'CV Anda: \n' +
                `Tautan LinkedIn / Portofolio: \n\n` +
                `Terima kasih atas waktu dan pertimbangan Anda. Saya menantikan kabar dari Anda.`
            )}`"
            target="_blank"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue';
import { useQuasar } from 'quasar';
import { marked } from 'marked';

const $q = useQuasar();

interface Job {
  title: string;
  type: string;
  slot_left: number;
  available: boolean;
  detailJob: string;
}

const props = defineProps({
  modelValue: { type: Boolean, required: true },
  job: { type: Object as () => Job, required: true },
});

const emit = defineEmits(['update:modelValue']);

const dialogModel = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});

const job = computed(() => props.job);
const renderedMarkdown = computed(() =>
  job.value.detailJob ? marked.parse(job.value.detailJob) : ''
);
</script>

<style scoped>
.myFont {
  font-family: 'Poppins', sans-serif;
}
.bg-bule {
  background-color: #161f2d;
}
.gradient-text {
  background-clip: text;
  background: linear-gradient(90deg, #d9ab6d, #e6cf9c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.markdown-content :deep(p) {
  margin-bottom: 10px;
  line-height: 1.6;
}
.markdown-content :deep(h1),
.markdown-content :deep(h2),
.markdown-content :deep(h3) {
  color: #d9ab6d;
  margin-top: 12px;
  margin-bottom: 6px;
}
.markdown-content :deep(a) {
  color: #e6cf9c;
  text-decoration: underline;
}
</style>
