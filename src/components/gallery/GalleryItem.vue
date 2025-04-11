<script setup lang="ts">
const props = defineProps<{
  index: number
}>()

const emit = defineEmits<{
  (e: 'click', index: number): void
}>()

// Function to determine which shape to display based on index
const getShapeClass = (index: number) => {
  const shapes = [
    'h-24 w-24 rounded-full border-2 border-classicalAccent/40', // Circle
    'h-24 w-24 border-2 border-classicalAccent/40', // Square
    'h-0 w-0 border-l-[12px] border-r-[12px] border-b-[24px] border-l-transparent border-r-transparent border-b-classicalAccent/40', // Triangle
    'h-24 w-24 rotate-45 border-2 border-classicalAccent/40', // Diamond
    'h-24 w-24 clip-path-hexagon border-2 border-classicalAccent/40', // Hexagon
    'h-24 w-24 clip-path-star border-2 border-classicalAccent/40', // Star
  ]
  
  return shapes[index % shapes.length]
}

const handleClick = () => {
  emit('click', props.index)
}
</script>

<template>
  <div class="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-marbleWhite p-4 
              transition-all hover:bg-futuristicAccent/10 hover:shadow-lg"
       @click="handleClick">
    <!-- Simulated artwork frame -->
    <div class="absolute inset-0 flex items-center justify-center p-6">
      <!-- Decorative frame elements -->
      <div class="absolute inset-0 border-2 border-classicalAccent/30"></div>
      <div class="absolute inset-2 border border-futuristicAccent/20"></div>
      
      <!-- Simulated artwork content -->
      <div class="relative h-full w-full">
        <!-- Abstract geometric pattern -->
        <div class="absolute inset-0 bg-gradient-to-br from-metallicSilver/20 to-backdrop/30"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <!-- Dynamic shape based on index -->
          <div :class="getShapeClass(props.index)"></div>
          
          <!-- Optional accent shape -->
          <div v-if="props.index % 2 === 0" class="absolute h-32 w-32 rounded-full border border-futuristicAccent/30"></div>
        </div>
        
        <!-- Simulated brush strokes -->
        <div class="absolute bottom-4 right-4 h-8 w-16 rotate-12 transform rounded-full bg-mutedRose/20"></div>
        <div class="absolute left-4 top-4 h-12 w-8 -rotate-12 transform rounded-full bg-futuristicAccent/20"></div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.group:hover .absolute {
  transition: all 0.3s ease;
}

.group:hover .border-classicalAccent\/30 {
  border-color: rgba(194, 184, 163, 0.5);
}

.group:hover .border-futuristicAccent\/20 {
  border-color: rgba(0, 163, 255, 0.4);
}

/* Custom clip paths for hexagon and star */
.clip-path-hexagon {
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

.clip-path-star {
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}
</style>
