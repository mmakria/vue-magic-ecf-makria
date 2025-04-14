import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import CollectionView from "@/views/CollectionView.vue";
import CardDetails from "@/views/CardDetails.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/collection',
            name: 'collection',
            component: CollectionView
        },
        {
            path: '/card-details/:idCard',
            name: 'cardDetails',
            component: CardDetails
        }


    ],
})

export default router
