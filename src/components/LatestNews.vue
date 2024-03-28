<template>
  <div class="space-y-[24px]">
    <h1 class="text-[40px] font-bold font-roboto">Latest News</h1>

    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div class="grid grid-cols-4 grid-rows-2 gap-[30px]">
      <template v-for="(article, index) in articles" :key="index">
        <div :class="getClass(index)" class="rounded-[8px]">
          <template v-if="isBig(index)">
            <router-link class="h-full"
                         @click="redirectToDetail(article)"
                         :to="`/detail/${article.title}`">
              <HotTopicSection :description="article.description" :urlToImage="article.urlToImage"
                               :title="article.title"
                               :publishedAt="formatDate(article.publishedAt)" :author="article.author"/>
            </router-link>
          </template>
          <template v-else>
            <router-link class="space-y-[16px]" :to="`/detail/${article.title}`"
                         @click="redirectToDetail(article)">
              <img :src="article.urlToImage" class="h-[176px] w-full rounded-[8px] object-cover" alt="news">
              <div class="space-y-[10px]">
                <h1 class="text-[24px] font-bold truncate">{{ article.title }}</h1>
                <p class="text-sm truncate">{{ article.description }}</p>
                <NewsTimeAndAuthor :publishedAt="formatDate(article.publishedAt)" :author="article.author"/>
              </div>
            </router-link>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import HotTopicSection from "@/components/HotTopicSection.vue";
import NewsTimeAndAuthor from "@/components/NewsTimeAndAuthor.vue";
import useNewsApi from "@/composables/useNewsApi.js";
import {formatDate} from "@/utils/dateFormater.js";

const items = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
const {articles, loading, error, fetchNews} = useNewsApi();

onMounted(fetchNews);

const redirectToDetail = (article) => {
  localStorage.setItem(article.title, JSON.stringify(article));
}

const isBig = (index) => {
  let isBigTrue = false;

  if (index % 10 === 0 || (index - 7) % 10 === 0) {
    isBigTrue = true;
  }

  return isBigTrue;
};

const getClass = (index) => {
  const isBigItem = isBig(index);
  const rowStart = (index + 1) % 8 === 0 || index % 8 === 0 ? `row-start-${Math.ceil(index / 2)}` : '';

  return isBigItem ? 'col-span-2 row-span-2 h-full' : `${rowStart}`;
};
</script>
