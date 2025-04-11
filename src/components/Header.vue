<script setup lang="ts">
import { gsap } from 'gsap'

const animationDuration = 0.01

const handleMouseEnter = (e: MouseEvent) => {
    gsap.to(e.target, {
        color: '#00A3FF',
        duration: animationDuration,
        ease: 'power2.out'
    })
}

const handleMouseLeave = (e: MouseEvent) => {
    gsap.to(e.target, {
        color: '#1A1A1A',
        duration: animationDuration,
        ease: 'power2.out'
    })
}

const links = [
    {
        label: 'Gallery',
        href: '/'
    },
    {
        label: 'About',
        href: '/about'
    }
]

</script>

<template>
    <header class="bg-transparent flex justify-between shadow-[0_4px_10px_-2px_rgba(0,0,0,0.1)] px-4 py-2">
        <h1 class="text-2xl font-bold">Souvenirs from the Future</h1>

        <nav class="flex items-center gap-4 text-md">
            <router-link
                v-for="link in links"
                :key="link.href"
                :to="link.href"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
                class="transition-colors duration-300">
                {{ link.label }}
            </router-link>
        </nav>
    </header>
</template>