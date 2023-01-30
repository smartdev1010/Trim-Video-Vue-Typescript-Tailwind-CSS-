<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Play from './utils/Play.vue';
import Settings from './utils/Settings.vue';
import { onMounted } from "vue";
</script>

<template>
    <div class="mt-2 mx-20 flex justify-between">
        <Play />
        <Settings />
    </div>
</template>

<style scoped>

</style>
