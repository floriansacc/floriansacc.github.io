<template>
  <nav
    :class="[
      'border-line-strong bg-bg-claude/50 sticky top-0 z-49 flex h-14 items-center justify-between border-b border-solid px-3 py-2 backdrop-blur-sm transition-colors lg:px-5',
    ]"
  >
    <div
      :class="[
        'flex items-center gap-1.5 font-mono text-sm select-none lg:text-base',
      ]"
    >
      <div
        v-if="withNavigation"
        class="sm:hover:text-label-hover group cursor-pointer p-1 transition-colors lg:p-2"
        @click="handleGoBack"
      >
        <ArrowLeft
          class="size-4 transition-transform group-hover:-translate-x-1"
        />
      </div>
      <RouterLink to="/">
        <p
          class="sm:hover:text-label-hover cursor-pointer font-semibold tracking-wider uppercase transition-colors"
        >
          {{ $t("message.portfolio") }}
        </p>
      </RouterLink>

      <!-- // project selector -->
      <div
        v-if="withNavigation"
        ref="dropdownRef"
        class="relative hidden md:inline-block"
      >
        <div
          class="group flex cursor-pointer items-center gap-1.5"
          @click="toggle"
        >
          <span v-if="withNavigation && currentRouteName">/</span>
          <p
            v-if="withNavigation && currentRouteName"
            class="text-xs font-medium sm:text-sm lg:text-base"
          >
            {{ currentRouteName.toUpperCase() }}
          </p>
          <button
            class="select-mono sm:group-hover:bg-bg-alternative/70 cursor-pointer rounded-md p-1 text-base transition-colors"
          >
            <ChevronDownIcon class="h-4 w-4" />
          </button>
        </div>

        <div
          v-show="isOpen"
          class="absolute z-10 mt-1 w-fit min-w-40 overflow-hidden rounded border bg-white shadow"
        >
          <ul>
            <li
              v-for="project in projectRoutes"
              :key="project"
              :class="[
                'cursor-pointer px-4 py-2 whitespace-pre transition-colors',
                $route.name === project
                  ? 'bg-bg-muted'
                  : 'sm:hover:bg-gray-100',
              ]"
              @click="$router.push({ name: project })"
            >
              {{ $t(`projectName.${project}`) }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex gap-2 md:gap-4 lg:gap-8">
      <div class="hidden items-center gap-2 select-none sm:flex">
        <p
          v-for="(item, i) in navigationItems"
          @click="withNavigation ? navigate(i) : scrollToIndex(i)"
          :class="[
            'sm:hover:text-label-hover cursor-pointer p-1 text-base font-medium transition-colors',
            activeIndex === i ? 'text-blue-400' : '',
          ]"
        >
          {{ $t(`navigation.${item.key}`) }}
        </p>
      </div>
      <select
        v-model="$i18n.locale"
        class="border-line-strong select-mono min-w-10 rounded-lg border border-solid bg-white p-1 text-sm sm:text-base"
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
import { navigationItems, projectRoutes } from "@/utils/public_constants.ts";
import MobileMenu from "@/components/MobileMenu.vue";
import { ArrowLeft, ChevronDownIcon, Menu, X } from "@lucide/vue";
import useGoBackWithinDomain from "@/composables/useGoBackWithinDomain";
import { useDropdown } from "@/composables/useDropdown";

const { isOpen, toggle, dropdownRef } = useDropdown();

const { saveLocal } = useMachineLocal();

const { navigate } = useNavigateToSection();

const { currentRouteName, handleGoBack } = useGoBackWithinDomain({});

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
