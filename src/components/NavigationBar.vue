<template>
  <nav
    class="border-line-strong bg-bg-claude/50 sticky top-0 z-49 flex h-14 items-center justify-between border-b border-solid px-5 py-2 backdrop-blur-sm transition-colors"
  >
    <div>
      <p class="font-mono font-semibold tracking-wider uppercase">
        {{ $t("message.portfolio") }}
      </p>
    </div>
    <div class="flex md:gap-4 lg:gap-8">
      <div class="hidden items-center gap-2 select-none sm:flex">
        <p
          v-for="(item, i) in navigationItems"
          @click="withNavigation ? navigate(i) : scrollToIndex(i)"
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
        class="border-line-strong subtitle-mono min-w-10 rounded-lg border border-solid bg-white p-1"
        @change="saveLocal"
      >
        <option
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          :value="locale"
        >
          {{ locale.toUpperCase() }}
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
      :with-navigation="withNavigation"
      :is-menu-open="isMenuOpen"
      :active-index="activeIndex"
      :scroll-to-index="scrollToIndex"
      @menu-click="emit('menuClick', $event)"
    />
  </nav>
</template>

<script setup lang="ts">
import useMachineLocal from "@/composables/useMachineLocale.ts";
import useNavigateToSection from "@/composables/useNavigateToSection.ts";
import { navigationItems } from "@/utils/public_constants.ts";
import MobileMenu from "@/components/MobileMenu.vue";
import { Menu, X } from "@lucide/vue";

const { saveLocal } = useMachineLocal();

const { navigate } = useNavigateToSection();

const props = defineProps<{
  isMenuOpen: boolean;
  activeIndex?: number;
  scrollToIndex?: (index: number) => void;
  withNavigation?: boolean;
}>();

const emit = defineEmits<{
  menuClick: [value: boolean];
}>();
</script>
