import {createRouter, createWebHistory} from "vue-router";
import greetingComponent from "@/components/greetingComponent";
import catalogListComponent from "@/components/catalog/catalogListComponent";
import cartComponent from "@/components/cart/cartComponent";
import purchaseComponent from "@/components/cart/purchaseComponent";
import profileComponent from "@/components/profile/ProfileComponent";

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
            path: '/purchase',
            component: purchaseComponent
        },
        {
            path: '/profile',
            component: profileComponent
        },
    ]
})