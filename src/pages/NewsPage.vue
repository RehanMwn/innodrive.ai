<template>
  <q-page class="news-page row justify-center">
    <!-- Left Sidebar -->
    <div class="sidebar col-12 col-md-3">
      <div class="sidebar-content">
        <h4 class="text-bold text-white q-mb-sm">Innodrive.ai</h4>
        <h5 class="text-bold gradient-text q-mb-lg">News & Updates</h5>
        <p
          class="text-grey-5 q-mb-xl"
          style="max-width: 300px; line-height: 1.4"
        >
          Explore the future of industries with expert insights, case studies,
          and technology trends from
          <span class="gradient-text">Innodrive.ai</span>.
        </p>

        <div class="menu">
          <div
            v-for="(item, i) in categories"
            :key="i"
            @click="
              page = 1;
              activeCategory = item;
            "
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
        <q-btn
          label="Search"
          no-caps
          class="q-ml-sm gradient-color text-black"
        />
      </div>

      <!-- News Grid -->
      <div class="row q-col-gutter-lg justify-start">
        <div
          v-for="post in paginatedPosts"
          :key="post.id"
          class="col-12 col-md-6"
        >
          <q-card flat bordered class="news-card">
            <q-img :src="post.image" class="news-img" />
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
  </q-page>
</template>

<script setup lang="ts">
import {
  categories,
  activeCategory,
  search,
  page,
  totalPages,
  paginatedPosts,
  searchSuggestions,
  filterSearch,
} from './NewsPage';
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

.search-bar .q-field--outlined  {
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
  height: 140px;
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
