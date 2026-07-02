<template>
  <div class="min-h-dvh min-w-0 flex-1">
    <NavigationBar
      :is-menu-open="isMenuOpen"
      with-navigation
      @menu-click="(e) => (isMenuOpen = e)"
    />

    <main :class="['relative flex w-full flex-1 flex-col']">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NavigationBar from "@/components/NavigationBar.vue";

const isMenuOpen = ref<boolean>(false);
</script>
