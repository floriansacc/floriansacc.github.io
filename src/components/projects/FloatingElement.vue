<template>
  <div
    :class="[
      'relative flex h-fit w-max flex-row items-center gap-5 transition-[transform,opacity] duration-[1000ms]',
      listIndex === 0 ? 'wave-1-animation' : 'wave-2-animation',
    ]"
  >
    <div
      v-for="(e, i) in imageBox"
      :class="['', boxNumber === 1 ? 'first:mt-18' : 'first:mt-12']"
      :key="`box-${boxNumber}-${listIndex}-${e}-${i}`"
    >
      <StackIcon
        composition="vertical"
        :style="{
          animationDelay:
            boxNumber === 1
              ? `${300 + 300 * i}ms`
              : `${(imageBox.length + 1) * 300 + 300 * i}ms`,
        }"
        :class="[
          'shake-animation relative z-10 h-[120px]! w-[120px]! rounded-2xl hover:bg-transparent',
        ]"
        :stack="e"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import StackIcon from "../StackIcon.vue";

defineProps<{
  listIndex: number;
  boxNumber: 1 | 2;
  imageBox: string[];
}>();
</script>

<style scoped>
.wave-1-animation {
  animation: wave-1 25s linear infinite;
}
.wave-2-animation {
  animation: wave-2 25s linear infinite;
}

.shake-animation {
  animation: shake 3s ease-in-out infinite;
}

@keyframes wave-1 {
  0% {
    transform: translateX(20%);
    opacity: 1;
  }
  49% {
    transform: translateX(calc(-200% - 40px));
    opacity: 1;
  }
  50% {
    transform: translateX(calc(-200% - 40px));
    opacity: 0;
  }
  51% {
    transform: translateX(calc(200% + 40px));
    opacity: 0;
  }
  59% {
    transform: translateX(calc(200% + 40px));
    opacity: 0;
  }
  60% {
    transform: translateX(calc(200% + 40px));
    opacity: 1;
  }
  100% {
    transform: translateX(20%);
    opacity: 1;
  }
}

@keyframes wave-2 {
  0% {
    transform: translateX(calc(-200% - 40px - 20%));
    opacity: 0;
  }
  1% {
    transform: translateX(calc(200% + 40px));
    opacity: 0;
  }
  2% {
    opacity: 0;
  }
  11% {
    transform: translateX(calc(200% + 40px));
    opacity: 0;
  }
  12% {
    transform: translateX(calc(200% + 40px));
    opacity: 1;
  }
  56% {
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform: translateX(calc(-200% - 40px));
    opacity: 1;
  }
}

@keyframes shake {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
