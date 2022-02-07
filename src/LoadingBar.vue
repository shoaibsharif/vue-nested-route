<script setup>
import { onBeforeRouteUpdate, onBeforeRouteLeave } from "vue-router";
import { useLoadingBar } from "naive-ui";
const loadingBar = useLoadingBar();
onBeforeRouteUpdate(() => loadingBar.start());
onBeforeRouteUpdate(() => {
  loadingBar.finish();
});
</script>

<template></template>
