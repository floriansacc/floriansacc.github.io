<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-show="isMenuOpen"
        :data-state="isMenuOpen ? 'open' : 'closed'"
        class="fixed inset-0 z-50 bg-black/60 transition-all"
        role="dialog"
        aria-modal="true"
        @click="emit('menuClick', false)"
      >
        <div class="mt-14 flex w-full flex-col gap-1 p-5 text-white">
          <p class="pt-4 text-lg font-semibold">
            {{ $t("menu") }}
          </p>
          <ul class="flex flex-col items-start gap-1.5 pt-1 pl-4 select-none">
            <li
              v-for="(item, i) in navigationItems"
              @click="withNavigation ? navigate(i) : scrollToIndex(i)"
              :class="[
                'w-full cursor-pointer rounded-md border-2 border-solid p-1 text-sm font-medium transition-colors',
                activeIndex === i ? 'border-white' : 'border-transparent',
              ]"
            >
              <span>{{ $t(`navigation.${item.key}`) }}</span>
            </li>
          </ul>

          <p class="pt-4 text-lg font-semibold">
            {{ $t("selectProject") }}
          </p>

          <ul class="flex flex-col items-start gap-1.5 pt-1 pl-4 select-none">
            <li
              v-for="project in projectRoutes"
              :key="`${project}-mobile`"
              :class="[
                'w-full cursor-pointer rounded-md border-2 border-solid border-transparent p-1 text-sm font-medium transition-colors',
                $route.name === project ? 'border-white' : 'border-transparent',
              ]"
              @click="$router.push({ name: project })"
            >
              {{ $t(`projectName.${project}`) }}
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import useNavigateToSection from "@/composables/useNavigateToSection";
import { navigationItems, projectRoutes } from "@/utils/public_constants";

const { navigate } = useNavigateToSection();

defineProps<{
  isMenuOpen: boolean;
  activeIndex?: number;
  scrollToIndex?: (index: number) => void;
  withNavigation?: boolean;
}>();

const emit = defineEmits<{
  menuClick: [value: boolean];
}>();
</script>

<style>
.menu-container {
  transition: all 0.3s ease;
}

/*
 * https://vuejs.org/examples/#modal
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .menu-container,
.modal-leave-to .menu-container {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}
</style>
