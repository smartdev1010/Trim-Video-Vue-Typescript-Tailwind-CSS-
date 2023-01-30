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
                class="flex flex gap-3 items-center justify-center text-gray-300 border border-transparent bg-slate-900  hover:cursor-pointer px-6 py-2 text-lg rounded-lg">

                <svg style="color: white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    class="fill-current w-5 h-6">
                    <g>
                        <path fill="transparent" d="M0 0h24v24H0z"></path>
                        <path
                            d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993V13h-2V5H4v13.999L14 9l3 3v2.829l-3-3L6.827 19H14v2H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016zM8 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
                            fill="white"></path>
                    </g>
                </svg>
                <span>Add Image</span>
            </div>
        </div>
        <Settings />
    </div>
</template>

<style scoped>

</style>
