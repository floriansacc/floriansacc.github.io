<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-show="isMenuOpen"
        :data-state="isMenuOpen ? 'open' : 'closed'"
        class="fixed inset-0 z-50 bg-black/50 transition-all"
        role="dialog"
        aria-modal="true"
        @click="emit('menuClick', false)"
      >
        <div class="mt-20 flex w-full flex-col gap-1 p-5">
          <div class="flex flex-col items-center gap-2 select-none">
            <p
              v-for="item in navigationItems"
              class="cursor-pointer p-1 font-medium text-white transition-colors"
            >
              {{ $t(`navigation.${item.key}`) }}
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { navigationItems } from "@/utils/public_constants";

defineProps<{
  isMenuOpen: boolean;
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
