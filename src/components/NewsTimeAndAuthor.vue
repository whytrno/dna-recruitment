<template>
  <div class="flex gap-[27px]">
    <p class="font-roboto">{{ publishedAt }}</p>
    <p class="font-roboto truncate">{{ author ? author : 'Anonymous' }}</p>
  </div>
</template>

<script>
export default {
  props: ['publishedAt', 'author']
};
</script>