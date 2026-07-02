<template>
  <RouterLink :to="to ?? undefined">
    <CustomButton button-type="outline-primary" is-small class="group">
      <ArrowLeft
        class="size-4 transition-transform group-hover:-translate-x-1"
      />
      <span>{{ $t("backToHome") }}</span>
    </CustomButton>
  </RouterLink>
</template>

<script setup lang="ts">
import { ArrowLeft } from "@lucide/vue";
import CustomButton from "./CustomButton.vue";

defineProps<{
  to?: string;
}>();
</script>
