<template>
  <div class="min-h-dvh min-w-0 flex-1">
    <NavigationBar
      :is-menu-open="isMenuOpen"
      @menu-click="(e) => (isMenuOpen = e)"
    />
    <main :class="['relative flex flex-1']">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NavigationBar from "../components/NavigationBar.vue";

const isMenuOpen = ref<boolean>(false);
</script>
