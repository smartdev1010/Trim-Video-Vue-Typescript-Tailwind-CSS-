<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted } from "vue";
import Upload from './components/Upload.vue';
import Workplace from './components/Workplace.vue';
</script>

<template>
  <div class="h-screen text-white">
    <router-view />
  </div>
</template>
