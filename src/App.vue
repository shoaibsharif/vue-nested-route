<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { VueQueryDevTools } from "vue-query/devtools";
import LoadingBar from "@/LoadingBar.vue";
</script>

<template>
  <n-loading-bar-provider>
    <n-message-provider>
      <n-notification-provider>
        <n-dialog-provider>
          <header class="sticky h-10 grid place-content-center">
            <nav class="flex gap-x-2">
              <router-link to="/">Home</router-link>
              <router-link to="/products">Products</router-link>
            </nav>
          </header>
          <main class="h-[calc(100vh-theme(spacing.10))] w-screen">
            <router-view />
          </main>
        </n-dialog-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-loading-bar-provider>
  <VueQueryDevTools />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
