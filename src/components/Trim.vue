<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Play from './Play.vue';
import Settings from './Settings.vue';
import { onMounted } from "vue";
</script>

<template>
    <div class="mt-2 mx-20 flex justify-between">
        <div class="flex">
            <Play />
            <div
                class="flex flex gap-3 items-center justify-center text-gray-300 border border-transparent bg-slate-900  hover:cursor-pointer px-6 py-2 text-lg rounded-lg mr-3">
                <input class="bg-transparent" value="00:00" type="time" />
                <input class="bg-transparent" value="00:00" type="time" />
            </div>
            <div
                class="flex flex gap-3 items-center justify-center text-gray-300 border border-transparent bg-slate-900  hover:cursor-pointer px-6 py-2 text-lg rounded-lg">

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-person-video2 fill-current w-5 h-6" viewBox="0 0 16 16">
                    <path d="M10 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path
                        d="M2 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2ZM1 3a1 1 0 0 1 1-1h2v2H1V3Zm4 10V2h9a1 1 0 0 1 1 1v9c0 .285-.12.543-.31.725C14.15 11.494 12.822 10 10 10c-3.037 0-4.345 1.73-4.798 3H5Zm-4-2h3v2H2a1 1 0 0 1-1-1v-1Zm3-1H1V8h3v2Zm0-3H1V5h3v2Z" />
                </svg>
            </div>
        </div>
        <Settings />
    </div>
</template>

<style scoped>

</style>
