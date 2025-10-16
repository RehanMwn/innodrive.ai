<template>
  <div id="section-2roles" class="about-section text-white ornament-bg">
    <!-- Title -->
    <div class="justify-center q-mt-lg q-mb-xl">
      <div class="text-h4 text-bold text-center">
        Available <span class="gradient-text">Positions</span>
      </div>
      <div class="text-subtitle1 text-white text-center q-mt-sm q-px-lg">
        Discover roles where your skills can drive innovation and shape the
        future with Innodrive.ai.
      </div>
    </div>

    <!-- Content -->
    <div class="positions-grid q-mt-xl">
      <div v-for="(job, index) in jobs" :key="index" class="job-item">
        <div class="job-info">
          <div class="job-title">{{ job.title || 'Untitled' }}</div>

          <div class="job-detail">
            <template v-if="job.available">
              {{ job.slot_left }} Slot Left • {{ job.type || 'Full-time' }}
            </template>
            <template v-else>
              <span class="text-red text-weight-bold">Full</span> •
              {{ job.type || 'Full-time' }}
            </template>
          </div>
        </div>

        <!-- Tombol panah -->
        <q-btn
          class="arrow-circle"
          flat
          round
          color="amber"
          icon="arrow_forward"
          @click="openDialog(job)"
        />
      </div>
    </div>

    <!-- Dialog Detail Job -->
    <DetailJobComponent
      v-if="selectedJob"
      :model-value="dialogVisible"
      @update:modelValue="dialogVisible = $event"
      :job="selectedJob"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useQuasar } from 'quasar';
import DetailJobComponent from './DetailJobComponent.vue';

interface JobRaw {
  id: number;
  title?: string;
  name?: string;
  job_title?: string;
  type?: string;
  slot_left?: number;
  available?: boolean;
  detailJob?: string | null;
}

interface Job {
  title: string;
  type: string;
  slot_left: number;
  available: boolean;
  detailJob: string;
}

export default defineComponent({
  name: 'CareerPositionComponent',
  components: { DetailJobComponent },
  setup() {
    const jobs = ref<Job[]>([]);
    const dialogVisible = ref(false);
    const selectedJob = ref<Job | null>(null);
    const $q = useQuasar();

    const fetchJobs = async () => {
      try {
        const apiUrl =
          import.meta.env.VITE_STRAPI_API_URL_LOCAL ||
          import.meta.env.VITE_STRAPI_API_URL;

        const res = await fetch(`${apiUrl}/api/job-positions?populate=*`, {
          headers: {
            Authorization: `Bearer ${
              import.meta.env.VITE_STRAPI_API_TOKEN || ''
            }`,
          },
        });

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const { data } = await res.json();
        console.log('🟢 Strapi job data:', data);

        jobs.value = (data || []).map((item: JobRaw) => ({
          title: item.title || item.name || item.job_title || 'Untitled',
          type: item.type ?? 'Full-time',
          slot_left: item.slot_left ?? 0,
          available: item.available ?? false,
          detailJob: item.detailJob ?? '',
        }));
      } catch (err) {
        console.error('Failed to fetch job positions:', err);
        $q.notify({
          type: 'negative',
          message:
            'Failed to load job positions. Please check Strapi connection or API URL.',
        });
      }
    };

    const openDialog = (job: Job) => {
      selectedJob.value = job;
      dialogVisible.value = true;
    };

    onMounted(fetchJobs);

    return { jobs, dialogVisible, selectedJob, openDialog };
  },
});
</script>


<style scoped>
.gradient-text {
  background: linear-gradient(90deg, #d9ab6d 0%, #f3cd96 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.about-section {
  background-color: #0c111d;
  min-height: 100vh;
  padding: 80px 5vw;
  position: relative;
  z-index: 0;
}

.gradient-text {
  background: linear-gradient(90deg, #d9ab6d 0%, #f3cd96 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/*  POSITIONS GRID  */
.positions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px 40px;
  max-width: 900px;
  margin: 0 auto;
}

.job-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(152, 162, 179, 1);
  padding: 12px 0;
  transition: transform 0.2s ease;
}
@media (max-width: 700px) {
  .job-item {
    grid-column: span 2;
  }
}

.job-item:hover {
  transform: translateY(-3px);
}

.job-title {
  font-weight: 600;
  font-size: 17px;
  color: white;
}

.job-detail {
  font-size: 14px;
  color: #c2c2c2;
  margin-top: 4px;
}

.arrow-circle {
  width: 36px;
  height: 36px;
  border: 1.8px solid #d9ab6d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
}

.arrow-circle:hover {
  background-color: #d9ab6d;
}

.arrow-circle:hover .q-icon {
  color: #0c111d !important;
}

/* ===== ORNAMENT ===== */
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
}

/* ===== MOBILE ===== */
@media (max-width: 700px) {
  .positions-grid {
    grid-template-columns: 1fr;
  }

  .about-section {
    background-image: url(/assets/imageDekstop/snake.png);
    background-size: cover;
    background-position: center;
  }
}
</style>
