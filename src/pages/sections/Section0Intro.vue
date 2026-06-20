<template>
  <section
    class="flex min-h-screen w-full flex-col items-center justify-start self-center px-2 md:justify-center md:px-[2vw] xl:px-[5vw]"
  >
    <div
      class="flex w-full flex-col flex-wrap items-start justify-center gap-y-12 px-4 pt-4 md:flex-row md:justify-evenly md:gap-8 md:px-0 md:pt-0 xl:gap-4"
    >
      <div
        class="flex flex-col gap-4 self-start justify-self-start pt-4 sm:gap-0 xl:self-auto"
      >
        <p
          class="text-label-alternative font-mono tracking-wider uppercase sm:mb-4"
        >
          {{ $t("intro.fullStackDeveloper") }}
        </p>
        <h1 class="text-4xl sm:mb-6 md:text-5xl lg:text-6xl">
          {{ $t("name") }}
        </h1>

        <SelfImage
          class="mt-4 mb-4 block self-center sm:mt-0 sm:mb-6 sm:hidden"
        />

        <h5 class="text-label-grey text-xl whitespace-pre-line sm:mb-6">
          {{ $t("intro.subtitle") }}
        </h5>

        <div class="flex items-center gap-2 self-center sm:self-auto">
          <!-- // TODO add redirect -->
          <CustomButton class="group">
            {{ $t("intro.viewProjects") }}
            <ArrowRight
              class="size-5 transition-transform group-hover:translate-x-1 group-hover:-rotate-45"
            />
          </CustomButton>
          <CustomButton button-type="outline-primary">
            {{ $t("learnMore") }}
          </CustomButton>
        </div>
      </div>

      <div
        class="flex w-full items-center justify-center px-10 md:w-fit md:px-2"
      >
        <SelfImage class="hidden sm:block" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ArrowRight } from "@lucide/vue";
import CustomButton from "../../components/buttons/CustomButton.vue";
import SelfImage from "../../components/images/SelfImage.vue";

const randomTranslation = computed(() => {
  const randX = Math.floor(Math.random() * 16);
  const randY = Math.floor(Math.random() * 16);

  return { randX, randY };
});
</script>
