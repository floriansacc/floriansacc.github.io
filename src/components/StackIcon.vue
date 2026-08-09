<template>
  <div
    v-if="stackItem"
    :class="[
      'border-line-strong text-label-normal hover:bg-bg-muted group flex items-center justify-center gap-2 border border-solid px-3 py-2 transition-colors',
      composition === 'vertical' ? 'flex-col' : '',
    ]"
  >
    <img
      class="h-4.5 w-auto select-none sm:h-5.5"
      :draggable="false"
      :src="stackItem.logo"
      :alt="`stack-${stackItem.key}`"
    />
    <p
      class="transition-transform duration-300 ease-out select-none group-hover:brightness-110"
    >
      {{ $t(`technology.${stackItem.key}`) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { techologyList } from "@/utils/public_constants";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    stack: string;
    composition?: "horizontal" | "vertical";
  }>(),
  {
    composition: "horizontal",
  },
);

const stackItem = computed(() => {
  return techologyList.find((e) => e.key === props.stack) ?? null;
});
</script>
