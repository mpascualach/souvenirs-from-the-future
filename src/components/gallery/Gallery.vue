<script setup lang="ts">
import { ref } from 'vue'
import GalleryItem from './GalleryItem.vue'
import GalleryModal from './GalleryModal.vue'
import PageTitle from '../shared/PageTitle.vue'

// State for the modal
const selectedItemIndex = ref<number | null>(null)
const isModalOpen = ref(false)

// Handle gallery item click
const handleItemClick = (index: number) => {
  selectedItemIndex.value = index
  isModalOpen.value = true
}

// Close modal
const closeModal = () => {
  isModalOpen.value = false
}
</script>

<template>
<div class="min-h-screen bg-backdrop">
  <div class="container mx-auto px-4">
    <!-- Classical header with futuristic twist -->
    <PageTitle title="Gallery" />
    
    <!-- Gallery container with neo-classical styling -->
    <div class="relative rounded-lg bg-marbleWhite p-8 shadow-lg backdrop-blur-sm">
      <!-- Decorative border element -->
      <div class="absolute inset-0 rounded-lg border border-classicalAccent"></div>
      
      <!-- Gallery grid -->
      <div class="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 bg-mutedRose">
        <!-- Gallery items -->
        <GalleryItem 
          v-for="n in 6" 
          :key="n" 
          :index="n"
          @click="handleItemClick"
        />
      </div>
    </div>
  </div>
  
  <!-- Gallery Modal -->
  <GalleryModal 
    v-if="selectedItemIndex !== null"
    :index="selectedItemIndex"
    :is-open="isModalOpen"
    @close="closeModal"
  />
</div>
</template>

<style scoped>

</style>