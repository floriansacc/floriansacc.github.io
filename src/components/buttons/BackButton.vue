<template>
  <CustomButton
    button-type="white"
    is-small
    class="group"
    @click="handleGoBack"
  >
    <ArrowLeft class="size-4 transition-transform group-hover:-translate-x-1" />
    <!-- <span>{{ $t("backToHome") }}</span> -->
  </CustomButton>
</template>

<script setup lang="ts">
import { ArrowLeft } from "@lucide/vue";
import CustomButton from "./CustomButton.vue";
import useGoBackWithinDomain from "@/composables/useGoBackWithinDomain.ts";

const props = defineProps<{
  fallback?: string;
}>();

const { handleGoBack } = useGoBackWithinDomain({});
</script>
