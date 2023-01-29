import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import './style.css'
import Upload from './components/Upload.vue';
import WorkplaceVue from './components/Workplace.vue';
import Home from './components/Home.vue';
import App from './App.vue';

const routes = [
    { path: '/', component: Upload },
    // { path: '/upload', component: Upload },
    { path: '/work', component: WorkplaceVue },
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = createRouter({
     history: createWebHistory(),
    routes, // short for `routes: routes`
  })
createApp(App).use(router).mount('#app')
