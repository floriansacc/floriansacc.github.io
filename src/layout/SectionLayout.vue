<template>
  <section class="flex w-full flex-col">
    <div v-if="withLine" class="bg-line-strong h-px w-full"></div>
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
  }>(),
  {
    withLine: true,
    paddingTopClass: "pt-10 md:pt-20",
    minHClass: "min-h-screen",
  },
);
</script>
