<template>
  <div :class="`bg-[url('${urlToImage ? urlToImage: '/images/no-image.webp'}')]`"
       class="w-full h-full flex items-end bg-black text-white rounded-[8px] bg-center bg-cover">
    <div class="h-1/2 w-full flex items-end bg-gradient-to-b from-white/0 to-black/[65%] rounded-[8px]">
      <div class="space-y-[16px] m-[32px]">
        <h2 class="leading-[150%] text-[32px] font-bold">{{ title }}</h2>
        <p class="text-sm">{{ description }}</p>
        <NewsTimeAndAuthor :publishedAt="publishedAt" :author="author"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import NewsTimeAndAuthor from "@/components/NewsTimeAndAuthor.vue";
</script>

<script>
export default {
  props: ['urlToImage', 'description', 'title', 'publishedAt', 'author']
};
</script>