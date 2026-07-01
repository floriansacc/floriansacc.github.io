<template>
  <nav
    class="border-line-strong sticky top-0 z-49 flex h-14 items-center justify-between border-b border-solid bg-white/50 px-5 py-2 backdrop-blur-md transition-colors"
  >
    <div>
      <p class="font-mono font-semibold tracking-wider uppercase">
        {{ $t("message.portfolio") }}
      </p>
    </div>
    <div class="flex gap-2">
      <div class="hidden items-center gap-2 select-none sm:flex">
        <p
          v-for="(item, i) in navigationItems"
          @click="scrollToIndex(i)"
          :class="[
            'sm:hover:text-label-hover cursor-pointer p-1 font-medium transition-colors',
            activeIndex === i ? 'text-blue-400' : '',
          ]"
        >
          {{ $t(`navigation.${item.key}`) }}
        </p>
      </div>
      <select
        v-model="$i18n.locale"
        class="border-line-strong min-w-10 rounded-lg border border-solid p-1"
        @change="saveLocal"
      >
        <option
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          :value="locale"
        >
          {{ locale }}
        </option>
      </select>

      <div
        class="block p-1.5 sm:hidden"
        @click="emit('menuClick', !isMenuOpen)"
      >
        <X v-if="isMenuOpen" class="text-label-normal size-5" />
        <Menu v-else class="text-label-normal size-5" />
      </div>
    </div>

    <MobileMenu
      :is-menu-open="isMenuOpen"
      :active-index="activeIndex"
      :scroll-to-index="scrollToIndex"
      @menu-click="emit('menuClick', $event)"
    />
  </nav>
</template>

<script setup lang="ts">
import { Menu, X } from "@lucide/vue";
import MobileMenu from "./MobileMenu.vue";
import { navigationItems } from "@/utils/public_constants.ts";
import useMachineLocal from "@/composables/useMachineLocale.ts";

const props = defineProps<{
  isMenuOpen: boolean;
  activeIndex: number;
  scrollToIndex: (index: number) => void;
}>();

const emit = defineEmits<{
  menuClick: [value: boolean];
}>();

const { saveLocal } = useMachineLocal();
</script>
