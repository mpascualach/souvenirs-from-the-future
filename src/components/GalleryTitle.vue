<template>
    <h1 class="glitch-text mb-12 text-center font-quicksand text-5xl font-bold tracking-wide text-deepBlack">
        Souvenirs from the Future
    </h1>
</template>

<style scoped>
.glitch-text {
  position: relative;
  font-family: 'Quicksand', sans-serif;
}

.glitch-text::after {
  content: 'Souvenirs from the Future';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #ff0000;
  opacity: 0.7;
  transform: translate(0.05em, 0.05em);
  z-index: -1;
}
</style>