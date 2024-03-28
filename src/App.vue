<template>
  <Navbar/>

  <div class="px-[135px]">
    <RouterView/>
  </div>

  <Footer/>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>