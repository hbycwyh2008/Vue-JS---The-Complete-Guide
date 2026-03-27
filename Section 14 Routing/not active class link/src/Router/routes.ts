import HomePage from "@/components/Home/HomePage.vue";
import Contact from "../components/Home/Contact.vue";
import { createRouter, createWebHistory } from "vue-router";
import ProductList from "@/components/Product/ProductList.vue";
import ProductDetail from "@/components/Product/ProductDetail.vue";
import NotFound from "@/components/Layout/NotFound.vue";
import Login from "@/components/Authenticate/Login.vue";
import NotAccess from "@/components/Layout/NotAccess.vue";

function isAdmin() {
  const isAdmin = false;
  if (isAdmin) {
    return true;
  }
  return { name: "notAccess" };
}

function isAuthenticated() {
  const authenticated = true;
  if (authenticated) {
    return true;
  }
  return false;
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomePage,name: "home" },
    { path: "/contact", redirect: "/contact-us" },
    { path: "/contact-us", component: Contact, name: "contact" },
    { path: "/productList", component: ProductList,name: "productList",
        beforeEnter: [isAuthenticated, isAdmin]
    },
    { path: "/login", component: Login,name: "login" },
    { path: "/product/:productId", component: ProductDetail },
    {
      path: "/products/:productId/:categoryId?",
      component: ProductDetail,
      name: "productDetail",
      props: true,
    },
    { path: "/product", component: ProductDetail },
    { path: "/not-access", component: NotAccess, name: "notAccess" },
    { path: "/:catchAll(.*)", component: NotFound },
  ],
  linkActiveClass: "btn btn-primary",
});

router.beforeEach((to, from) => {
  console.log("Global beforeEach guard");
  console.log(to, from);
  const isAuthenticated = false;
  if (to.name === "home") {
    return true;
  }
  if (to.name === "productList") {
    return true;
  }
  if (to.name === "notAccess") {
    return true;
  }
  if (!isAuthenticated && to.name !== "login") {
    return { name: "login" };
  }
  return true;
});
export default router;
