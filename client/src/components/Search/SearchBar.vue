<template>
    <div class="flex-1">
        <button type="submit">
            <MagnifyingGlassIcon class="h-6 text-blue-500" />
        </button>
        <input
            class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
        />
    </div>
</template>

<script setup>
    import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
</script>

<style lang="scss" scoped></style>
