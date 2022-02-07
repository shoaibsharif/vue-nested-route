<script setup>
import { onMounted, ref, watch } from "vue";
import axios from "axios";
import { useQuery } from "vue-query";
import { useRoute, useLink, RouterLink, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const { data: products, isLoading } = useQuery("products", () =>
  axios.get("/products").then((res) => res.data)
);

// const { isActive, isExactActive } = useLink(props);
const tabs = ref([
  { id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" },
  { id: 3, title: "Mens Cotton Jacket" },
]);

onMounted(() => {
  if (route.path.replaceAll("/") === "products")
    router.push(`/products/${tabs.value[0].id}`);
});

// const onTabChange = async (newActiveName, oldActiveName) => {
//   await router.push(`/products/${newActiveName}`);
//   return true;
// };
const nameRef = ref(tabs.value[0]);

watch(nameRef, (newValue) => {
  router.push(`/products/${newValue.id}`);
});

const shouldAddTab = (product) => {
  const hasExistingTab = tabs.value.findIndex((tab) => tab.id === product.id);
  if (hasExistingTab === -1) {
    tabs.value.push(product);
  }
  nameRef.value = product;
};

const handleClose = (name) => {
  if (tabs.value.length === 1) return;
  const index = tabs.value.findIndex((tab) => tab.id === name);
  tabs.value.splice(index, 1);
  if (nameRef.value.id === name && index === tabs.value.length - 1) {
    nameRef.value = tabs.value[index - 1];
  } else {
    nameRef.value = tabs.value[index];
  }
};
</script>

<template>
  <div class="flex h-full">
    <aside
      class="
        flex-none flex flex-col
        divide-y
        w-[300px]
        max-h-[calc(100vh-theme(spacing.10))]
        shadow-[6px_0px_26px_-15px_rgba(0,0,0,0.25)]
        overscroll-contain
        px-2
        overflow-y-auto
      "
    >
      <div class="grid place-content-center h-full w-full" v-if="isLoading">
        <svg
          class="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-900"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
      <button
        class="py-3 text-left"
        v-for="product in products"
        @click="shouldAddTab(product)"
      >
        {{ product?.title }}
      </button>
    </aside>
    <div class="">
      <n-tabs
        v-model:value="nameRef"
        type="card"
        :closable="true"
        @close="handleClose"
      >
        <n-tab
          v-for="tab in tabs"
          :name="tab.id"
          :key="tab.id"
          :tab="tab.title"
        />
      </n-tabs>

      <router-view />
    </div>
  </div>
</template>
