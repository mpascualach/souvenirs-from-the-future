import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'gallery',
            component: () => import('../components/gallery/Gallery.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../components/About.vue')
        }
    ]
})

export default router