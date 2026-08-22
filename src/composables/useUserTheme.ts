import { themeInjectionKey } from "@/utils/injection";
import { availableTheme } from "@/utils/public_constants";
import { onBeforeMount, onUnmounted, provide, ref } from "vue";

export default function useUserTheme() {
  const preferedTheme = ref<"system" | "light" | "dark">("system");
  const theme = ref<"light" | "dark">("light");

  const _switchTheme = (userTheme: "light" | "dark") => {
    theme.value = userTheme;

    if (userTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const updateTheme = (newVal: string) => {
    if (!availableTheme.find((e) => e.theme === newVal)) {
      return;
    }

    const newValue = newVal as "system" | "dark" | "light";

    preferedTheme.value = newValue;

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    localStorage.setItem("theme", newValue);

    if (newValue !== "system") {
      _switchTheme(newValue);
      return;
    }

    const systemTheme = media.matches ? "dark" : "light";

    _switchTheme(systemTheme);
  };

  const handleChange = (event: MediaQueryListEvent) => {
    if (preferedTheme.value !== "system") return;

    const userTheme = event.matches ? "dark" : "light";

    _switchTheme(userTheme);
  };

  onBeforeMount(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", handleChange);

    const previousTheme: string | null = localStorage.getItem("theme") ?? null;

    if (previousTheme) {
      if (availableTheme.find((e) => e.theme === previousTheme)) {
        preferedTheme.value = previousTheme as "system" | "light" | "dark";
      }

      updateTheme(previousTheme);
    } else {
      const userTheme = media.matches ? "dark" : "light";

      _switchTheme(userTheme);
    }
  });

  onUnmounted(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.removeEventListener("change", handleChange);
  });

  provide(themeInjectionKey, {
    theme,
    preferedTheme,
    updateTheme,
  });
}
