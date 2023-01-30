<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Play from './utils/Play.vue';
import Settings from './utils/Settings.vue';
import { onMounted } from "vue";
</script>

<template>
    <div class="mt-2 mx-20 flex justify-between">
        <div class="flex">
            <Play />
            <div
                class="flex flex gap-3 items-center justify-center text-gray-300 border border-transparent bg-slate-900  hover:cursor-pointer px-6 py-2 text-lg rounded-lg mr-3">

                Record
            </div>
        </div>
        <Settings />
    </div>
</template>

<style scoped>

</style>
