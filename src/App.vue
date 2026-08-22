<template>
  <RouterView />
</template>

<script setup lang="ts">
import useUserTheme from "./composables/useUserTheme";

useUserTheme();
</script>
