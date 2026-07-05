import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { usePreviousRoute } from "./usePreviousRoute";

export default function useGoBackWithinDomain({
  fallback,
}: {
  fallback?: string;
}) {
  const router = useRouter();

  const { previousRoute } = usePreviousRoute();

  const { t, te } = useI18n();

  const current = router.currentRoute.value;

  const currentRouteName = computed(() => {
    if (!current) return;

    const check = `routeName.${String(current.name)}`;

    if (!te(check)) return;

    return t(check);
  });

  const previousRouteName = computed(() => {
    if (!previousRoute.value) return;

    const check = `routeName.${String(previousRoute.value.name)}`;

    if (!te(check)) return;

    return t(check);
  });

  const handleGoBack = () => {
    const hasInternalHistory = router.options.history.state.back;

    if (hasInternalHistory) {
      router.push("/");
    } else {
      router.push(fallback || "/");
    }
  };

  return { currentRouteName, previousRouteName, handleGoBack };
}
