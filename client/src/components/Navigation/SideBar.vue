<template>
    <aside
        id="default-sidebar"
        class="sticky top-0 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
    >
        <ul class="flex flex-col items-center">
            <li
                v-for="item in items"
                :key="item.label"
                class="py-3 px-3 text-right hover:text-blue-400"
            >
                <component :is="item.icon" class="h-5 text-gray-600 mx-3" />

                <a :href="item.href" class="group-hover:bg-sky-400">
                    {{ item.label }}
                </a>
            </li>
        </ul>
    </aside>
</template>

<script>
    import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
    export default {
        name: 'SideBar',
        components: { MagnifyingGlassIcon },
        data() {
            return {
                items: [
                    { separator: true },
                    {
                        label: 'Home',
                        icon: 'SearchIcon',
                        href: '/home',
                    },
                    {
                        label: 'Explore',
                        icon: 'SearchIcon',
                        href: '#',
                    },
                    {
                        label: 'Notifications',
                        icon: 'SearchIcon',
                        href: '#',
                    },
                    {
                        label: 'Messages',
                        icon: 'SearchIcon',
                        href: '#',
                    },
                    {
                        label: 'Lists',
                        icon: 'SearchIcon',
                        href: '#',
                    },
                    {
                        label: 'Communities',
                        icon: 'SearchIcon',
                        href: '#',
                    },
                    {
                        label: 'Premium',
                        icon: 'SearchIcon',
                        href: '#',
                    },
                    {
                        label: 'Profile',
                        icon: 'SearchIcon',
                        href: '#',
                    },
                    {
                        label: 'More',
                        icon: 'SearchIcon',
                        href: '#',
                    },
                    { separator: true },
                ],
            };
        },
        methods: {},
    };
</script>

<style lang="scss" scoped></style>
