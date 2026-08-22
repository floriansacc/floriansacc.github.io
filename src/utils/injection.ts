import { InjectionKey, Ref } from "vue";

export const themeInjectionKey = Symbol() as InjectionKey<{
  theme: Ref<"light" | "dark">;
  preferedTheme: Ref<"system" | "light" | "dark">;
  updateTheme: (newValue: string) => void;
}>;
