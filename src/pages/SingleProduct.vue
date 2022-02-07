<script setup>
import { useRoute, useRouter } from "vue-router";
import { useQuery } from "vue-query";
import axios from "axios";
import { onMounted, ref, watch } from "vue";
import { useSingleProduct } from "@/lib/products";

const route = useRoute();
const routeParamId = ref(route.params?.id);
watch(
  () => route.params?.id,
  () => {
    routeParamId.value = route.params?.id;
  }
);
const { data: product, isFetching } = useQuery(
  ["product", routeParamId],
  ({ queryKey }) =>
    axios.get(`/products/${routeParamId.value}`).then((res) => res.data)
);
</script>

<template>
  <div class="px-5">
    <h2>{{ product?.title }}</h2>
    status: {{ isFetching ? "fetching" : "fetched" }}
    <pre class="whitespace-pre-wrap">
      {{ JSON.stringify(product, undefined, 4) }}
    </pre>
  </div>
</template>
