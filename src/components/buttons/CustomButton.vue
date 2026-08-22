<template>
  <button
    :class="[
      'inline-flex items-center justify-center gap-2 rounded-sm font-semibold',
      isSmall ? 'px-3 py-1.5 text-sm' : 'px-6 py-3 text-sm sm:text-base',
      getColor,
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, type ClassValue } from "vue";

const props = withDefaults(
  defineProps<{
    buttonType?: "primary" | "outline-primary" | "reverse";
    isSmall?: boolean;
  }>(),
  {
    buttonType: "primary",
    isSmall: false,
  },
);

const getColor = computed<ClassValue>(() => {
  switch (props.buttonType) {
    case "primary":
      return "custom-button-primary";

    case "outline-primary":
      return "custom-button-outline";

    case "reverse":
      return "custom-button-reverse";

    default:
      return "";
  }
});
</script>
