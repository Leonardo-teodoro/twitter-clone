<template>
    <div class="bg-white flex-1">
        <div v-for="post in posts" :key="post.id">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div
                    class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16"
                >
                    <article
                        class="flex max-w-xl flex-col items-start justify-between"
                    >
                        <div class="relative mt-8 flex items-center gap-x-4">
                            <img
                                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                                class="h-10 w-10 rounded-full bg-gray-50"
                            />
                            <div class="text-sm leading-6">
                                <p class="font-semibold text-gray-900">
                                    <a href="#">
                                        <span class="absolute inset-0"></span>
                                        Michael Foster
                                    </a>
                                </p>
                                <p class="text-left text-gray-600">@user</p>
                            </div>
                        </div>
                        <div class="group relative">
                            <h3
                                class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
                            >
                                <a href="#">
                                    <span class="absolute inset-0"></span>
                                    Boost your conversion rate
                                </a>
                            </h3>
                            <p
                                class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"
                            >
                                Illo sint voluptas. Error voluptates culpa
                                eligendi. Hic vel totam vitae illo. Non aliquid
                                explicabo necessitatibus unde. Sed
                                exercitationem placeat consectetur nulla
                                deserunt vel. Iusto corrupti dicta.
                            </p>
                        </div>
                        <div class="flex items-center gap-x-4 text-xs">
                            <time
                                datetime="{{ post.created_at }}"
                                class="text-gray-500"
                            >
                                {{ post.created_at }}
                            </time>
                            <a
                                href="#"
                                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                            >
                                Marketing
                            </a>
                        </div>
                    </article>
                </div>
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
