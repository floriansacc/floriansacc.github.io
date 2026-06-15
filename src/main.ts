import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router.ts";
import { createI18n } from "vue-i18n";
import { languages } from "./lang/index.ts";

const i18n = createI18n({
  locale: "kr",
  fallbackLocale: "en",
  messages: Object.assign(languages),
});

createApp(App).use(router).use(i18n).mount("#app");
