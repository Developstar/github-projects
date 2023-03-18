import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router"
import HomePage from './views/HomePage.vue'
import MyRepos from './views/MyRepos.vue'
import RepoDetails from './views/RepoDetails.vue'
import ErrorPage404 from '../src/views/ErrorPage404.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/",
        name: "HomePage",
        component: HomePage
    },

    { path: '/:pathMatch(.*)*', component: ErrorPage404 },

    {
        path: "/MyRepos",
        name: "MyRepos",
        component: MyRepos,
    },

    {
        path: '/MyRepos/:repoId',
        name: 'RepoDetails',
        component: RepoDetails,
        props: true
    }
]

})


createApp(App).use(router).mount('#app')
