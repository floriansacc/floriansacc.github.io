<template>
  <section class="flex w-full flex-col">
    <div v-if="withLine" class="bg-line-strong h-px w-full"></div>
    <div
      :class="[
        'flex h-fit min-h-screen w-full flex-col px-2 pb-10 md:px-[2vw] xl:px-[5vw] xl:pb-20',
        paddingTopClass,
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
  }>(),
  {
    withLine: true,
    paddingTopClass: "pt-10 md:pt-20",
  },
);
</script>
