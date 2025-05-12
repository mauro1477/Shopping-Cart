import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import  * as VueRouter from 'vue-router';
import ShoppingCartPage from './pages/ShoppingCartPage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import ProductDetailPage from './pages/ProductDetailPage.vue';
import PageNotFound from './pages/PageNotFound.vue';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey:`${import.meta.env.VITE_API_BASE_URL}`,
authDomain: "shopping-cart-44486.firebaseapp.com",
projectId: "shopping-cart-44486",
storageBucket: "shopping-cart-44486.firebasestorage.app",
messagingSenderId: "814166916282",
appId: "1:814166916282:web:c8df565bc630350d9a1683"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(import.meta.env.VITE_API_BASE_URL),
    routes:[{
        path: '/cart',
        component: ShoppingCartPage
    },{
        path: '/products',
        component: ProductsPage,
    },{
        path: '/products/:productId',
        component: ProductDetailPage,
    },
    {
        path: '/',
        redirect: '/products'
    },{
        path: '/:pathMatch(.*)*',
        component: PageNotFound
    }]
}))
.mount('#app')
