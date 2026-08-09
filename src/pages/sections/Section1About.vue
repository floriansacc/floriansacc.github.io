<template>
  <SectionLayout
    id="section-0"
    :with-line="false"
    :mobile-title="$t(`about.aboutMeTitle`).toUpperCase()"
  >
    <div
      :ref="sectionRef"
      class="grid w-full grid-cols-1 justify-center gap-y-4 px-4 sm:gap-x-6 md:grid-cols-2 md:flex-row md:justify-evenly lg:gap-x-16"
    >
      <div>
        <p class="title-mono mb-4 hidden md:block">
          {{ $t("about.aboutMeTitle").toUpperCase() }}
        </p>
        <h2 class="text-3xl sm:mb-6 md:text-4xl">
          {{ $t("about.title") }}
        </h2>
      </div>
      <div class="flex flex-col gap-y-4">
        <div
          class="text-label-grey ext-sm whitespace-break-spaces sm:text-base"
        >
          <i18n-t scope="global" keypath="about.descriptionPart1" tag="p">
            <template v-slot:javascript>
              <span class="variables">
                {{ $t("technology.javascript") }}
              </span>
            </template>
            <template v-slot:react>
              <span class="variables">
                {{ $t("technology.react") }}
              </span>
            </template>
            <template v-slot:vue>
              <span class="variables">
                {{ $t("technology.vue") }}
              </span>
            </template>
            <template v-slot:next>
              <span class="variables">
                {{ $t("technology.next") }}
              </span>
            </template>
            <template v-slot:nuxt>
              <span class="variables">
                {{ $t("technology.nuxt") }}
              </span>
            </template>
          </i18n-t>
        </div>

        <div
          class="text-label-grey ext-sm whitespace-break-spaces sm:text-base"
        >
          <i18n-t scope="global" keypath="about.descriptionPart2" tag="p">
            <template v-slot:flutter>
              <span class="variables">
                {{ $t("technology.flutter") }}
              </span>
            </template>
          </i18n-t>
        </div>
        <div
          class="text-label-grey ext-sm whitespace-break-spaces sm:text-base"
        >
          <i18n-t scope="global" keypath="about.descriptionPart3" tag="p">
            <template v-slot:node>
              <span class="variables">
                {{ $t("technology.node") }}
              </span>
            </template>
            <template v-slot:sql>
              <span class="variables">
                {{ $t("technology.sql") }}
              </span>
            </template>
            <template v-slot:aws>
              <span class="variables">
                {{ $t("technology.aws") }}
              </span>
            </template>
          </i18n-t>
        </div>

        <p class="title-mono pt-8">
          {{ $t("about.coreSkills").toUpperCase() }}
        </p>
        <div class="flex flex-wrap gap-2">
          <StackIcon
            v-for="(stack, i) in techologyList"
            :key="`about-stack-${stack.key}-${i}`"
            :stack="stack.key"
          />
        </div>
      </div>
    </div>
  </SectionLayout>
</template>

<script setup lang="ts">
import { ComponentPublicInstance } from "vue";
import SectionLayout from "@/layout/SectionLayout.vue";
import StackIcon from "@/components/StackIcon.vue";
import { techologyList } from "@/utils/public_constants";

defineProps<{
  sectionRef?: (el: Element | ComponentPublicInstance | null) => void;
}>();
</script>
