import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router.ts";
import { createI18n } from "vue-i18n";
import { languages } from "./lang/index.ts";

const savedLocale =
  localStorage.getItem("lang") || navigator.language?.split("-")[0] || "en";

const i18n = createI18n({
  locale: savedLocale,
  fallbackLocale: "en",
  messages: Object.assign(languages),
});

createApp(App).use(router).use(i18n).mount("#app");
