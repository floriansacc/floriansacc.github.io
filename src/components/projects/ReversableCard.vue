<template>
  <div
    :class="['h-full w-full cursor-pointer perspective-[1000px] transform-3d']"
    @click="isReversed = !isReversed"
  >
    <div
      :class="[
        'relative h-full w-full transition-transform duration-700 ease-in-out select-none backface-hidden transform-3d',
        isReversed ? 'rotate-y-180' : '',
      ]"
    >
      <!-- // invisible for size -->
      <div
        class="pointer-events-none invisible relative h-full w-full opacity-0"
      >
        <img
          :src="imageList.front"
          alt="imageList.front"
          class="h-full w-full object-cover object-top"
          :draggable="false"
        />
      </div>

      <div
        class="border-line-strong absolute top-0 z-10 h-full w-full overflow-hidden rounded-lg border border-solid backface-hidden"
      >
        <img
          :src="imageList.front"
          alt="imageList.front"
          class="bg-bg-alternative h-full w-full object-cover object-top"
          :draggable="false"
        />
      </div>

      <div
        class="border-line-strong absolute top-0 z-10 h-full w-full rotate-y-180 overflow-hidden rounded-lg border border-solid backface-hidden"
      >
        <img
          :src="imageList.back"
          alt="imageList.back"
          class="bg-bg-alternative h-full w-full object-cover object-top"
          :draggable="false"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onWatcherCleanup, ref, watch } from "vue";

const isReversed = ref<boolean>(false);

defineProps<{
  imageList: { front: string; back: string };
}>();

// 4 and 5s
const randomIntervalTime = computed(() =>
  Math.floor(Math.random() * 1000 + 4000),
);

watch(
  isReversed,
  () => {
    const interval = setInterval(() => {
      isReversed.value = !isReversed.value;
    }, randomIntervalTime.value);

    onWatcherCleanup(() => {
      clearInterval(interval);
      // controller.abort()
    });
  },
  { immediate: true },
);
</script>
