import { createApp } from "vue";
import naive from "naive-ui";
import App from "./App.vue";
import { router } from "./routes";
import "./index.css";
import { VueQueryPlugin } from "vue-query";

import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com";

createApp(App).use(naive).use(router).use(VueQueryPlugin).mount("#app");
