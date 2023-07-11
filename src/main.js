import { createApp } from "vue";
import { store } from "./stores";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import Toaster from "@meforma/vue-toaster";

// Axios Options
axios.defaults.baseURL = "http://127.0.0.1:8000/api";
if (store.state.isAuth) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${store.state.token}`;
}

createApp(App).use(router).use(store).use(Toaster).mount("#app");
