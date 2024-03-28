<template>
  <div class="space-y-3">
    <router-link to="/" class="bg-blue-500 text-white py-2 px-4">Back</router-link>
    <h1 class="text-2xl font-bold text-center">{{ article.title }}</h1>
    <div class="flex items-center flex-col gap-2">
      <NewsTimeAndAuthor :publishedAt="forma" :author="article.author"/>
      <a :href="article.url" class="underline text-xl">Read More</a>
    </div>
    <img :src="article.urlToImage" alt="article.title"/>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";
import NewsTimeAndAuthor from "@/components/NewsTimeAndAuthor.vue";

const route = useRoute();

const article = JSON.parse(localStorage.getItem(route.params.id));
</script>