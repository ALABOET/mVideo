import {createRouter, createWebHistory} from "vue-router";
import greetingComponent from "@/components/greetingComponent";
import catalogListComponent from "@/components/catalog/catalogListComponent";
import cartComponent from "@/components/cart/cartComponent";
import profileComponent from "@/components/profile/ProfileComponent";
import favouriteComponent from "@/components/favourite/favouriteComponent";
import productPage from "@/components/productPage/productPage";
import cartDataComponent from "@/components/cart/cartDataComponent";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: greetingComponent
        },
        {
            path: '/catalog',
            component: catalogListComponent
        },
        {
            path: '/cart',
            component: cartComponent
        },
        {
            path: '/profile',
            component: profileComponent
        },
        {
            path: '/favourite',
            component: favouriteComponent
        },
        {
            path: '/item/:id',
            component: productPage
        },
        {
            path: '/purchase',
            component: cartDataComponent
        },
    ]
})