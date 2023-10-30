import { createRouter, createWebHistory } from 'vue-router'
import ShowPosts from './components/Posts/ShowPosts.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/posts',
        name: 'Posts',
        component: ShowPosts,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
