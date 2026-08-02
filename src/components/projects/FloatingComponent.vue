<template>
  <div
    class="border-line-strong relative z-20 col-span-2 flex h-[200px] w-full max-w-[500px] flex-nowrap items-end justify-end gap-5 overflow-hidden rounded-sm border border-solid"
  >
    <div key="elem-1-desktop" class="flex gap-5">
      <FloatingElement :box-number="1" :list-index="0" :image-box="imageBox1" />
      <FloatingElement :box-number="2" :list-index="0" :image-box="imageBox2" />
    </div>
    <div key="elem-2-desktop" class="absolute flex gap-5">
      <FloatingElement :box-number="1" :list-index="1" :image-box="imageBox1" />
      <FloatingElement :box-number="2" :list-index="1" :image-box="imageBox2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import FloatingElement from "./FloatingElement.vue";

defineProps<{
  imageBox1: string[];
  imageBox2: string[];
}>();
</script>
