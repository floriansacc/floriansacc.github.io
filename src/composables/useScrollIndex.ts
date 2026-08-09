import { onMounted, onUnmounted, Ref, ref } from "vue";

export default function useScrollIndex({
  indexNumber,
  containerRef,
}: {
  indexNumber: number;
  containerRef?: Ref<HTMLElement | null>;
}) {
  const activeIndex = ref<number>(0);

  const sectionRefs = ref<(HTMLElement | null)[]>(
    Array.from({ length: indexNumber }, (): HTMLElement | null => null),
  );

  let scrollTarget: HTMLElement | Window | null = null;

  const getScrollTop = () =>
    scrollTarget instanceof Window
      ? scrollTarget.scrollY
      : (scrollTarget?.scrollTop ?? 0);

  const handleScroll = () => {
    const scrollY = getScrollTop() + 120;

    for (let i = sectionRefs.value.length - 1; i >= 0; i--) {
      const el = sectionRefs.value[i];
      if (el && el.offsetTop <= scrollY) {
        activeIndex.value = i;
        return;
      }
    }

    activeIndex.value = 0;
  };

  const scrollToIndex = (index: number | null) => {
    if (index === null || !scrollTarget) return;

    const el = sectionRefs.value[index];
    if (!el) return;

    scrollTarget.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth",
    });
  };

  onMounted(() => {
    scrollTarget = containerRef?.value ?? window;

    scrollTarget.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  });

  onUnmounted(() => {
    scrollTarget?.removeEventListener("scroll", handleScroll);
    scrollTarget = null;
  });

  return { activeIndex, sectionRefs, scrollToIndex };
}
