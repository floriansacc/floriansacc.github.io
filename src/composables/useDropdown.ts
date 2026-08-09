import { ref, onMounted, onUnmounted } from "vue";

export const useDropdown = () => {
  const isOpen = ref(false);
  const dropdownRef = ref<HTMLElement | null>(null);

  const toggle = () => (isOpen.value = !isOpen.value);
  const close = () => (isOpen.value = false);

  const onClickOutside = (e: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
      close();
    }
  };

  onMounted(() => document.addEventListener("click", onClickOutside));
  onUnmounted(() => document.removeEventListener("click", onClickOutside));

  return { isOpen, toggle, close, dropdownRef };
};
