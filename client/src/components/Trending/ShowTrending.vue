<template>
    <div class="bg-gray-50 flex-1 px-4 py-3 rounded-2xl">
        <p class="text-lg font-bold">What's happening</p>
        <div v-for="post in posts" :key="post.id">
            <div class="mx-auto max-w-7xl">
                <article
                    class="flex max-w-xl flex-col items-start justify-between py-4"
                >
                    {{ post.title }}
                </article>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { getPosts } from '@/http.ts';
    import { defineComponent } from 'vue';
    import Post from './Post';
    export default defineComponent({
        name: 'ShowPost',
        components: {},
        data: function () {
            return {
                posts: [] as Post[],
                loading: true,
            };
        },
        methods: {
            async loadPosts() {
                const response = await getPosts();
                this.posts = response;

                return this.posts;
            },
        },
        async mounted() {
            this.loading = true;
            this.loadPosts();
            this.loading = false;
        },
    });
</script>
