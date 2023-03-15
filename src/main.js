import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router"
import HomePage from './views/HomePage.vue'
import MyRepos from './views/MyRepos.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/",
        name: "HomePage",
        component: HomePage
    },
    {
        path: "/MyRepos",
        name: "MyRepos",
        component: MyRepos
    }
    
]

})


createApp(App).use(router).mount('#app')
