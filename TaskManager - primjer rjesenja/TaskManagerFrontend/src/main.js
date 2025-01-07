import { createApp } from "vue";
import App from "./App_main.vue";
import router from "./router/router";
import "./style.css";

createApp(App).use(router).mount("#app");
