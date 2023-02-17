import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

const pinia = createPinia();
const i18n = createI18n({
  locale: "en",
  fallbackLocale: "ru",
});

app.use(pinia);
app.use(i18n);
app.use(router);

app.mount("#app");
