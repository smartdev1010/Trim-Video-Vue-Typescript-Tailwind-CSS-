<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Settings from './Settings.vue';
import { onMounted } from "vue";

function play() {
    document.getElementById('video').play();
}

</script>

<template>
    <div
        class="flex flex gap-3 items-center justify-center text-gray-300 border border-transparent bg-slate-900  hover:cursor-pointer px-6 py-2 text-lg rounded-lg mr-3" @click="play">

        <svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-play fill-current w-5 h-6" viewBox="0 0 16 16">
            <path
                d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
                fill="white"></path>
        </svg>
    </div>
</template>

<style scoped>

</style>
