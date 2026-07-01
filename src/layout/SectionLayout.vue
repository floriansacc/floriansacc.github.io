<template>
  <section class="flex w-full flex-col">
    <div v-if="withLine" class="bg-line-strong h-px w-full"></div>
    <div
      class="flex h-fit min-h-screen w-full flex-col px-2 pt-20 pb-20 md:px-[2vw] xl:px-[5vw]"
    >
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    withLine?: boolean;
  }>(),
  {
    withLine: true,
  },
);
</script>
