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
        <div class="mt-20 flex w-full flex-col gap-1 p-5">
          <div class="flex flex-col items-start gap-2 select-none">
            <div
              v-for="(item, i) in navigationItems"
              @click="withNavigation ? navigate(i) : scrollToIndex(i)"
              :class="[
                'w-full cursor-pointer rounded-md border-2 border-solid p-1 font-medium text-white transition-colors',
                activeIndex === i ? 'border-white' : 'border-transparent',
              ]"
            >
              <span>{{ $t(`navigation.${item.key}`) }}</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import useNavigateToSection from "@/composables/useNavigateToSection";
import { navigationItems } from "@/utils/public_constants";

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
