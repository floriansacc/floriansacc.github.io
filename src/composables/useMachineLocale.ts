import { useI18n } from "vue-i18n";

export default function useMachineLocal() {
  const { locale } = useI18n();

  const saveLocal = () => {
    localStorage.setItem("lang", locale.value);
  };

  return { saveLocal };
}
