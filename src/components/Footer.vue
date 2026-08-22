<template>
  <div
    class="border-line-strong subtitle-mono flex w-full flex-col items-center justify-between gap-y-2 border border-t border-solid px-6 py-12 md:flex-row md:items-start"
  >
    <p>{{ $t("contactMe") }}</p>
    <div
      class="text-label-alternative grid grid-cols-3 justify-items-center gap-x-2 text-sm md:text-base lg:gap-x-4"
    >
      <a
        :href="myInfo.github"
        target="_blank"
        class="cursor-pointer p-1 transition-opacity sm:hover:opacity-90"
      >
        <p>{{ $t("github") }}</p>
      </a>

      <a
        :href="`mailto:${myInfo.email}`"
        target="_top"
        class="cursor-pointer p-1 transition-opacity sm:hover:opacity-90"
      >
        <p>{{ $t("email") }}</p>
      </a>

      <a
        :href="myInfo.linkedin"
        target="_blank"
        class="cursor-pointer p-1 transition-opacity sm:hover:opacity-90"
      >
        <p>{{ $t("linkedIn") }}</p>
      </a>
    </div>
    <label for="language-selector" class="sr-only">언어 선택</label>
    <select
      id="language-selector"
      v-model="preferedTheme"
      class="border-line-strong select-mono bg-bg-basic min-w-10 self-end rounded-lg border border-solid p-1 text-sm sm:text-base"
      @change.prevent="
        (e) => {
          const target = e.target as HTMLSelectElement;

          updateTheme(target.value);
        }
      "
    >
      <option
        v-for="theme in availableTheme"
        :key="`theme-${theme}`"
        :value="theme"
      >
        {{ theme.toUpperCase() }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { availableTheme, myInfo } from "@/utils/public_constants";

import { inject } from "vue";
import { themeInjectionKey } from "@/utils/injection";

const { preferedTheme, updateTheme } = inject(themeInjectionKey);
</script>
