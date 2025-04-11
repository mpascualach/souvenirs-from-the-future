<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
<Header />
<div class="h-screen w-screen overflow-auto bg-gradient-to-b from-background to-gray-800 py-12">
  <div class="container mx-auto px-4">
    <router-view />
  </div>
</div>
</template>

<style scoped>
/* Custom styles here */
</style>
