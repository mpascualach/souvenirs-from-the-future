<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const props = defineProps<{
  index: number
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const modalRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)

// Function to determine which shape to display based on index
const getShapeClass = (index: number) => {
  const shapes = [
    'h-48 w-48 rounded-full border-2 border-classicalAccent/40', // Circle
    'h-48 w-48 border-2 border-classicalAccent/40', // Square
    'h-0 w-0 border-l-[24px] border-r-[24px] border-b-[48px] border-l-transparent border-r-transparent border-b-classicalAccent/40', // Triangle
    'h-48 w-48 rotate-45 border-2 border-classicalAccent/40', // Diamond
    'h-48 w-48 clip-path-hexagon border-2 border-classicalAccent/40', // Hexagon
    'h-48 w-48 clip-path-star border-2 border-classicalAccent/40', // Star
  ]
  
  return shapes[index % shapes.length]
}

// Handle escape key to close modal
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    closeModal()
  }
}

// Close modal function
const closeModal = () => {
  if (modalRef.value && contentRef.value) {
    gsap.to(contentRef.value, {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.to(modalRef.value, {
          opacity: 0,
          duration: 0.2,
          ease: 'power2.inOut',
          onComplete: () => {
            emit('close')
          }
        })
      }
    })
  } else {
    emit('close')
  }
}

// Animate modal in when it opens
onMounted(() => {
  if (modalRef.value && contentRef.value) {
    gsap.fromTo(modalRef.value, 
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.out' }
    )
    
    gsap.fromTo(contentRef.value,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, delay: 0.1, ease: 'back.out(1.7)' }
    )
  }
  
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <div v-if="isOpen" 
       ref="modalRef"
       class="fixed inset-0 z-50 flex items-center justify-center bg-deepBlack/80 backdrop-blur-sm"
       @click="closeModal">
    <div ref="contentRef" 
         class="relative max-h-[90vh] max-w-[90vw] overflow-auto rounded-lg bg-white p-8 shadow-2xl"
         @click.stop>
      <!-- Close button -->
      <button @click="closeModal" 
              class="absolute right-4 top-4 rounded-full bg-deepBlack/10 p-2 text-deepBlack/60 hover:bg-deepBlack/20">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <!-- Gallery item content -->
      <div class="flex flex-col items-center">
        <h2 class="mb-6 text-center font-quicksand text-3xl font-bold text-deepBlack">
          Gallery Item {{ index }}
        </h2>
        
        <div class="relative flex h-96 w-96 items-center justify-center">
          <!-- Decorative frame elements -->
          <div class="absolute inset-0 border-4 border-classicalAccent/30"></div>
          <div class="absolute inset-4 border-2 border-futuristicAccent/20"></div>
          
          <!-- Abstract geometric pattern -->
          <div class="absolute inset-0 bg-gradient-to-br from-metallicSilver/20 to-backdrop/30"></div>
          
          <!-- Dynamic shape based on index -->
          <div :class="getShapeClass(index)"></div>
          
          <!-- Optional accent shape -->
          <div v-if="index % 2 === 0" class="absolute h-64 w-64 rounded-full border border-futuristicAccent/30"></div>
          
          <!-- Simulated brush strokes -->
          <div class="absolute bottom-8 right-8 h-16 w-32 rotate-12 transform rounded-full bg-mutedRose/20"></div>
          <div class="absolute left-8 top-8 h-24 w-16 -rotate-12 transform rounded-full bg-futuristicAccent/20"></div>
        </div>
        
        <p class="mt-8 max-w-2xl text-center text-deepBlack/70">
          This is a placeholder for the actual artwork description. In a real implementation, 
          this would contain details about the artwork, its creation date, medium, and other relevant information.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom clip paths for hexagon and star */
.clip-path-hexagon {
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

.clip-path-star {
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}
</style> 