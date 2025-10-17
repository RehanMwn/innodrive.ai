<template>
  <q-page class="news-page row justify-center">
    <!-- Left Sidebar -->
    <div class="sidebar col-12 col-md-3">
      <div class="sidebar-content">
        <h4 class="text-bold text-white q-mb-sm">Innodrive.ai</h4>
        <h5 class="text-bold gradient-text q-mb-lg">News & Updates</h5>
        <p class="text-grey-5 q-mb-xl" style="max-width: 300px; line-height: 1.4">
          Explore the future of industries with expert insights, case studies,
          and technology trends from
          <span class="gradient-text">Innodrive.ai</span>.
        </p>

        <div class="menu">
          <div
            v-for="(item, i) in categories"
            :key="i"
            @click="setCategory(item)"
            class="menu-item"
            :class="{ active: activeCategory === item }"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>

    <!-- Right Content -->
    <div class="content col-12 col-md-8">
      <!-- Search Bar -->
      <div class="search-bar row items-center q-mb-lg">
        <q-select
          v-model="search"
          use-input
          fill-input
          hide-selected
          input-debounce="200"
          :options="searchSuggestions"
          outlined
          dense
          placeholder="Search news..."
          class="col-grow"
          input-class="text-white"
          @filter="filterSearch"
        />
        <q-btn label="Search" no-caps class="q-ml-sm gradient-color text-black" />
      </div>

      <!-- News Grid -->
      <div class="row q-col-gutter-lg justify-start">
        <div
          v-for="post in paginatedPosts"
          :key="post.id"
          class="col-12 col-md-6"
        >
          <q-card
            flat
            bordered
            class="news-card cursor-pointer"
            @click="openDialog(post)"
          >
            <q-img :src="post.image" class="news-img" ratio="16/9" />
            <q-card-section>
              <div class="text-caption text-grey">{{ post.category }}</div>
              <div class="text-subtitle1 text-bold text-white">
                {{ post.title }}
              </div>
              <div class="text-body2 text-grey-5">{{ post.desc }}</div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <!-- Pagination -->
      <div class="row justify-center q-my-xl" v-if="totalPages > 1">
        <q-pagination
          v-model="page"
          :max="totalPages"
          direction-links
          boundary-links
          color="amber"
          active-color="gradient-color"
          class="text-white"
        />
      </div>
    </div>

    <!-- 📰 News Detail Dialog -->
    <q-dialog v-model="dialogVisible">
      <div
        class="col-12 justify-center text-white myFont"
        :style="{
          'background-color': '#0c111d',
          'max-width': $q.screen.gt.sm ? '70%' : '95%',
          'border-radius': '10px',
          border: '2px solid #d9ab6d',
          overflow: 'hidden'
        }"
      >
        <!-- Header -->
        <div
          class="text-center text-white q-mt-lg text-bold"
          :class="$q.screen.gt.sm ? 'text-h3' : 'text-h4'"
          :style="{ 'margin-bottom': $q.screen.gt.sm ? '30px' : '20px' }"
        >
          {{ selectedPost?.title }}
        </div>

        <!-- Image -->
        <q-img
          v-if="selectedPost?.image"
          :src="selectedPost.image"
          style="max-height: 300px; border-radius: 6px; margin: 0 auto; width: 90%;"
          spinner-color="amber"
        />

        <!-- Content -->
        <div
          class="q-pa-lg text-grey-3"
          style="max-width: 90%; margin: 0 auto; line-height: 1.6"
        >
          <div class="text-caption text-amber q-mb-sm">
            Category: {{ selectedPost?.category }}
          </div>

          <vue-markdown-render
            v-if="selectedPost?.content"
            :source="selectedPost.content"
            class="markdown-content"
          />
        </div>

        <!-- Footer Button -->
        <div class="row justify-center q-my-md">
          <q-btn
            flat
            glossy
            color="amber"
            text-color="black"
            label="Close"
            class="q-mb-md"
            @click="dialogVisible = false"
          />
        </div>
      </div>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useQuasar } from 'quasar';
import VueMarkdownRender from 'vue-markdown-render';

// --- INTERFACES BARU UNTUK TIPE DATA ---

/** Mendefinisikan struktur data gambar minimal dari Strapi */
interface StrapiImageAttribute {
  url: string;
}

/** Mendefinisikan struktur data mentah (raw) dari Strapi yang akan dimapping */
interface StrapiPostRaw {
  id: number;
  title?: string;
  content?: string;
  category?: string;
  image?: StrapiImageAttribute[];
  // Tambahkan field lain jika ada, misalnya attributes: { ... } untuk Strapi v4
}

/** Mendefinisikan struktur data berita yang sudah diproses dan siap digunakan */
interface Post {
  id: number;
  title: string;
  content: string;
  desc: string;
  category: string;
  image: string; // URL lengkap
}

// --- SETUP DAN KONSTANTA ---

const $q = useQuasar();
const apiUrl = import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337';

// STATE
const posts = ref<Post[]>([]);
const filteredPosts = ref<Post[]>([]);
const categories = ref<string[]>(['All']);
const activeCategory = ref('All');
const search = ref('');
const page = ref(1);
const perPage = 4;

// DIALOG
const dialogVisible = ref(false);
const selectedPost = ref<Post | null>(null); // Menggunakan interface Post

// FETCH DATA
const fetchNews = async () => {
  try {
    const res = await fetch(`${apiUrl}/api/news-pages?populate=image`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json: { data: StrapiPostRaw[] } = await res.json(); // Tipe data JSON yang lebih spesifik

    if (!json.data || !Array.isArray(json.data)) {
      console.warn('Invalid response from Strapi:', json);
      posts.value = [];
      return;
    }

    // Mapping menggunakan tipe StrapiPostRaw
    posts.value = json.data.map((item: StrapiPostRaw) => ({
      id: item.id,
      title: item.title || 'Untitled',
      content: item.content || '',
      desc: item.content
        ? item.content.slice(0, 120).replace(/<[^>]*>/g, '') + '...'
        : '',
      category: item.category || 'General',
      image:
        item.image && item.image.length > 0 && item.image[0].url
          ? `${apiUrl}${item.image[0].url}`
          : '/placeholder-news.jpg',
    }));

    const uniqueCategories = Array.from(
      new Set(posts.value.map((p) => p.category))
    );
    categories.value = ['All', ...uniqueCategories];
    filteredPosts.value = posts.value;
  } catch (err) {
    console.error('Error loading news:', err);
    $q.notify({
      type: 'negative',
      message: 'Failed to load news data.',
    });
  }
};

// FILTERING
const setCategory = (cat: string) => {
  activeCategory.value = cat;
  filterPosts();
  page.value = 1;
};

const filterPosts = () => {
  filteredPosts.value = posts.value.filter((post) => {
    const matchesCategory =
      activeCategory.value === 'All' || post.category === activeCategory.value;
    const matchesSearch =
      !search.value ||
      post.title.toLowerCase().includes(search.value.toLowerCase()) ||
      post.desc.toLowerCase().includes(search.value.toLowerCase());
    return matchesCategory && matchesSearch;
  });
};

// PAGINATION
const totalPages = computed(() =>
  Math.ceil(filteredPosts.value.length / perPage)
);

const paginatedPosts = computed(() => {
  const start = (page.value - 1) * perPage;
  return filteredPosts.value.slice(start, start + perPage);
});

// SEARCH
// Tipe data untuk parameter update pada QSelect filter
type QuasarUpdateFn = (callback: () => void) => void;

const filterSearch = (val: string, update: QuasarUpdateFn) => {
  if (val === '') {
    update(() => {
      searchSuggestions.value = [];
    });
    return;
  }

  update(() => {
    const needle = val.toLowerCase();
    searchSuggestions.value = posts.value
      .filter((p) => p.title.toLowerCase().includes(needle))
      .map((p) => p.title);
  });
};

const searchSuggestions = ref<string[]>([]);

// DIALOG FUNCTIONS
const openDialog = (post: Post) => { // Menggunakan interface Post
  selectedPost.value = post;
  dialogVisible.value = true;
};

// WATCHERS
watch([search, activeCategory], filterPosts);

// INIT
onMounted(fetchNews);
</script>

<style scoped>
.news-page {
  background: #0c111d;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 30px;
}

/* Sidebar */
.sidebar {
  border-right: 1px solid rgba(255, 255, 255, 0.15);
  max-height: 85vh;
  position: sticky;
  top: 30px;
}
.sidebar-content h4 {
  margin-bottom: 4px;
  line-height: 1.2;
}
.sidebar-content h5 {
  margin-top: 0;
  margin-bottom: 16px;
  line-height: 1.2;
}

/* Menu */
.menu-item {
  font-size: 15px;
  color: #bbb;
  margin-bottom: 10px;
  cursor: pointer;
  transition: color 0.3s;
}
.menu-item:hover {
  color: #f3cd96;
}
.menu-item.active {
  font-weight: bold;
  background: linear-gradient(180deg, #d9ab6d 30%, #f3cd96 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Right Content */
.content {
  padding: 30px 20px;
  max-width: 1100px;
  width: 100%;
  max-height: 90vh;
  margin-left: 0;
  border-radius: 12px;
  overflow-y: auto;
  scrollbar-width: none;
}
.content::-webkit-scrollbar {
  display: none;
  width: 0;
}

.search-bar .q-field--outlined {
  border-width: 1px !important;
  border-style: solid !important;
  border-radius: 25px !important;
  border-image: linear-gradient(180deg, #d9ab6d 30%, #f3cd96 100%) 1 !important;
}
.gradient-color {
  background: linear-gradient(180deg, #d9ab6d 30%, #f3cd96 100%) !important;
}
.gradient-text {
  background: linear-gradient(180deg, #d9ab6d 30%, #f3cd96 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* News Card */
.news-card {
  background: #121826;
  border-radius: 10px;
  transition: transform 0.2s;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
}
.news-card:hover {
  transform: translateY(-5px);
}
.news-img {
  height: 300px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

/* Text ellipsis */
.news-card .text-subtitle1 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.news-card .text-body2 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 768px) {
  .sidebar-content {
    padding-left: 36px;
    padding-right: 16px;
  }
}

</style>
