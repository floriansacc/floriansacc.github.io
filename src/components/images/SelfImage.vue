<template>
  <div
    :style="{
      backgroundImage: `url('/assets/allowed/svg/france_flag.svg')`,
    }"
    class="relative h-[350px] rounded-xl border-2 border-solid border-white bg-contain md:h-auto md:w-60 lg:w-80"
  >
    <img
      src="/assets/allowed/images/profile_picture.jpg"
      alt="profile-picture"
      class="no-translate-sm h-full w-full rounded-lg select-none"
      :draggable="false"
      :style="{
        transform: `translate(-${randomTranslation.randX}px, -${randomTranslation.randY}px)`,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const randomTranslation = computed(() => {
  const randX = Math.floor(Math.random() * 16);
  const randY = Math.floor(Math.random() * 16);

  return { randX, randY };
});
</script>

<style scoped>
.no-translate-sm {
  @media (width < 40rem /* 640px */) {
    transform: translate(0px, 0px) !important;
  }
}
</style>
