<template>
  <q-page class="news-detail-page q-pa-md row justify-center">
    <div class="col-12 col-md-8">
      <!-- Hero Section -->
      <div class="hero q-mb-xl">
        <div class="text-caption category text-amber">{{ category }}</div>
        <h1 class="text-h4 text-bold title text-white q-mt-sm q-mb-md">
          {{ title }}
        </h1>
        <div class="text-grey-5 text-caption date q-mb-lg">
          {{ date }} · By Innodrive.ai
        </div>
        <q-img :src="image" class="hero-img q-mb-xl" />
      </div>

      <!-- Article Content -->
      <div class="article-content">
        <p v-for="(paragraph, index) in content" :key="index" class="q-mb-md">
          {{ paragraph }}
        </p>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="sidebar col-12 col-md-3 q-mt-xl q-pt-md">
      <h5 class="text-bold gradient-text q-mb-md">Related News</h5>
      <div
        v-for="related in relatedPosts"
        :key="related.id"
        class="related-card q-mb-md"
      >
        <q-img :src="related.image" class="related-img" />
        <div class="related-info">
          <div class="text-caption text-grey">{{ related.category }}</div>
          <div class="text-body2 text-bold text-white ellipsis-2-lines">
            {{ related.title }}
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { title } from './News1Page';
import { category } from './News1Page';
import { date } from './News1Page';
import { image } from './News1Page';
import { content } from './News1Page';

// contoh data berita terkait
const relatedPosts = ref([
  {
    id: 2,
    category: 'Project',
    title: "Transforming Industries Through Innodrive.ai's Project Innovations",
    image: '/images/news2.jpg',
  },
  {
    id: 3,
    category: 'Product',
    title: 'Innovating Automotive Testing: Discover the Power of Dynomax',
    image: '/images/news3.jpg',
  },
]);
</script>

<style scoped>
.news-detail-page {
  background: #0c111d;
  min-height: 100vh;
}

/* Hero */
.hero-img {
  width: 90%;
  max-height: 90%;
  object-fit: cover;
  border-radius: 12px;
}

/* Article */
.article-content {
  color: #ddd;
  line-height: 1.7;
  font-size: 16px;
  text-align: justify;
  text-indent: 5ch;
  width: 90%;
  max-height: 90%;
}
.article-content p {
  margin-bottom: 16px;
}

/* Sidebar */
.sidebar {
  padding-left: 20px;
}
.related-card {
  display: flex;
  gap: 12px;
  background: #121826;
  border-radius: 10px;
  padding: 8px;
  cursor: pointer;
  transition: transform 0.2s;
}
.related-card:hover {
  transform: translateY(-3px);
}
.related-img {
  width: 80px;
  height: 60px;
  border-radius: 6px;
  object-fit: cover;
}
.related-info {
  flex: 1;
}
.ellipsis-2-lines {
  display: -webkit-box;

  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 768px) {

  .sidebar {
    padding-left: 0;
    margin-top: 40px;
    margin-left: 10px;
    width: 95%;
    max-height: 95%;
  }

  /* Hero */
  .hero-img,
  .category,
  .title,
  .date {
    width: 95%;
    max-height: 95%;
    object-fit: cover;
    border-radius: 12px;
    margin-left: 10px;
  }

  /* Article */
  .article-content {
    color: #ddd;
    line-height: 1.7;
    font-size: 16px;
    text-align: justify;
    text-indent: 5ch;
    width: 95%;
    max-height: 95%;
    margin-left: 10px;
  }
  .article-content p {
    margin-bottom: 16px;
  }
}
</style>
