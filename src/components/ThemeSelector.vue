<template>
  <div
    :ref="(el) => (dropdownRef = el as HTMLElement)"
    class="relative self-end"
  >
    <button
      class="group border-line-strong select-mono bg-bg-basic flex min-w-10 cursor-pointer items-center gap-1.5 self-end rounded-lg border border-solid px-2.5 py-1 text-sm font-medium sm:text-base"
      @click="toggle"
    >
      {{ $t("theme.theme") }}
    </button>

    <div
      v-show="isOpen"
      class="bg-bg-basic absolute right-0 bottom-0 z-10 flex w-fit items-center gap-2 overflow-hidden rounded-md"
    >
      <div
        v-for="theme in availableTheme"
        :class="[
          'flex cursor-pointer flex-col items-center gap-2 rounded-md p-2 select-none',
          preferedTheme === theme.theme
            ? 'bg-muted'
            : 'sm:hover:bg-bg-alternative',
        ]"
        @click="updateTheme(theme.theme)"
      >
        <component :is="theme.icon" class="size-5"> </component>
        <span class="text-alternative text-xs font-medium break-keep">
          {{ $t(`theme.${theme.theme}`) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { themeInjectionKey } from "@/utils/injection";
import { useDropdown } from "@/composables/useDropdown";
import { availableTheme } from "@/utils/public_constants";

const { isOpen, toggle, dropdownRef } = useDropdown();

const { preferedTheme, updateTheme } = inject(themeInjectionKey);
</script>
