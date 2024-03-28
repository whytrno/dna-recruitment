<template>
  <div class="space-y-[24px]">
    <h1 class="text-[40px] font-bold font-roboto">Hot Topics</h1>
    <div class="grid grid-cols-12 gap-[30px]">
      <div class="col-span-9 h-[400px]">
        <HotTopicSection/>
      </div>
      <div class="col-span-3">
        <p class="text-[18px] leading-[180%]"><span class="text-[36px]">Nisi</span>, sagittis aliquet sit rutrum.
          Nunc,
          id vestibulum
          quam ornare
          adipiscing.
          Pellentesque sed
          turpis nunc
          gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa
          tortor nibh nulla condimentum imperdiet scelerisque... read more</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import HotTopicSection from "@/components/HotTopicSection.vue";
</script>