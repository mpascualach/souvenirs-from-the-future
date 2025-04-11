<script setup lang="ts">
    import PageTitle from './shared/PageTitle.vue'
</script>

<template>
    <div class="min-h-screen bg-backdrop">
        <div class="container mx-auto px-4">
        <!-- Classical header with futuristic twist -->
        <PageTitle title="About" />
        
            <!-- Gallery container with neo-classical styling -->
            <div class="relative rounded-lg bg-marbleWhite p-8 shadow-lg backdrop-blur-sm">
                <!-- About content -->
                <div class="prose prose-lg max-w-none">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>

    </div>
</template>