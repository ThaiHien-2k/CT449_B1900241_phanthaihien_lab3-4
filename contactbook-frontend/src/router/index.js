import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import AddContact from "@/views/ContactAdd.vue";

const routes = [{
    
    path: "/",
    name: "ContactBook",
    component: ContactBook,
    },
    {
        path: "/contacts/:id",
        name: "EditContact",
        component: () => import("@/views/ContactEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
        },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/NotFound.vue"),
        },
        {
            path: "/addContact",
            name: "AddContact",
            component: AddContact,
            
         },   
    ];
    const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    });
    export default router;
    