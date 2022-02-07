import { createRouter, createWebHistory } from "vue-router";
import Products from "./pages/Product.vue";
import Home from "./pages/Home.vue";
import SingleProduct from "./pages/SingleProduct.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/products",
      component: Products,
      children: [
        {
          path: ":id",
          component: SingleProduct,
        },
      ],
    },
  ],
});
// router.beforeEach(() => {})
