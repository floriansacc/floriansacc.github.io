<template>
  <SectionLayout class="items-center justify-start pt-0! md:justify-center">
    <div
      class="flex w-full flex-col flex-wrap items-start justify-center gap-y-12 px-4 pt-4 md:flex-row md:justify-evenly md:gap-8 md:px-0 lg:pt-0 xl:gap-4"
    >
      <div
        class="flex flex-col gap-4 self-start justify-self-start pt-4 sm:gap-0 xl:self-auto"
      >
        <p class="title-mono sm:mb-4">
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
        <div
          class="mt-4 flex items-center gap-2 self-center sm:mt-8 sm:self-auto"
        >
          <a
            :href="myInfo.github"
            target="_blank"
            class="cursor-pointer p-1 transition-opacity sm:hover:opacity-85"
          >
            <img
              src="/assets/allowed/svg/icon_github.svg"
              class="text-label-normal size-7"
            />
          </a>

          <a
            :href="`mailto:${myInfo.email}`"
            target="_top"
            class="cursor-pointer p-1 transition-opacity sm:hover:opacity-90"
          >
            <Mail class="text-label-normal size-7" />
          </a>

          <a
            :href="myInfo.linkedin"
            target="_blank"
            class="cursor-pointer p-1 transition-opacity sm:hover:opacity-85"
          >
            <img
              src="/assets/allowed/images/in_image.png"
              class="text-label-normal size-7"
            />
          </a>

          <a
            :href="`tel:${myInfo.tel}`"
            target="_top"
            class="cursor-pointer p-1 transition-opacity sm:hover:opacity-90"
          >
            <Smartphone class="text-label-normal size-7" />
          </a>
        </div>
      </div>

      <div
        class="flex w-full items-center justify-center px-10 md:w-fit md:px-2"
      >
        <SelfImage class="hidden sm:block" />
      </div>
    </div>
  </SectionLayout>
</template>

<script setup lang="ts">
import { ArrowRight, Mail, Smartphone } from "@lucide/vue";
import CustomButton from "@/components/buttons/CustomButton.vue";
import SelfImage from "@/components/images/SelfImage.vue";
import { myInfo } from "@/utils/public_constants";
import SectionLayout from "@/layout/SectionLayout.vue";
</script>
