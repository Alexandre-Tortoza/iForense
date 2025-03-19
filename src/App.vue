<template>
  <div class="max-w-5xl m-auto px-lg-0 px-5">
    <HeaderComponent />
    <HomeIndex />
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from "@/components/layout/HeaderComponent.vue";
import HomeIndex from "@/pages/home/HomeIndex.vue";
import FooterComponent from "@/components/layout/FooterComponent.vue";
</script>
