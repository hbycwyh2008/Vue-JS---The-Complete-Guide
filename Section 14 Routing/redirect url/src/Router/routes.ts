import HomePage from "../components/Home/HomePage.vue";
import Contact from "../components/Home/Contact.vue";
import { createRouter, createWebHistory } from "vue-router";
import ProductList from "@/components/Product/ProductList.vue";
import ProductDetail from "@/components/Product/ProductDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomePage },
    { path: "/contact", redirect: "/contact-us" }
    {path:"/contact",redirect:{name:'contact'}},
    { path: "/productList", component: ProductList },
    {path: "/product/:productId",component: ProductDetail},
    {path: "/products/:productId/:categoryId?",component: ProductDetail,
      name:"productDetail",props:true
    },
    {path: "/product",component: ProductDetail},
  ],
});

export default router;
