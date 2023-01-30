import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import './style.css'
import Upload from './components/Upload.vue';
import WorkplaceVue from './components/Workplace.vue';
import Home from './components/Home.vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app')
