<template>
  <section class="flex w-full flex-col">
    <div v-if="withLine" class="bg-line-strong h-px w-full"></div>
    <p
      v-if="mobileTitle"
      :class="[
        'title-mono bg-bg-basic/50 sticky top-6 z-45 mb-4 block w-full px-9 pt-10 backdrop-blur-sm md:hidden',
      ]"
    >
      {{ mobileTitle }}
    </p>
    <div
      :class="[
        'flex h-fit w-full flex-col px-5 pb-10 md:px-[2vw] xl:px-[5vw] xl:pb-20',
        paddingTopClass,
        minHClass,
      ]"
    >
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    withLine?: boolean;
    paddingTopClass?: string;
    minHClass?: string;
    mobileTitle?: string;
  }>(),
  {
    withLine: true,
    paddingTopClass: "md:pt-20",
    minHClass: "min-h-screen",
  },
);
</script>
