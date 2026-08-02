<template>
  <SectionLayout
    id="section-2"
    :with-line="withLine"
    :padding-top-class="paddingTopClass"
  >
    <div :ref="sectionRef" class="mb-5 px-4">
      <p class="title-mono mb-4">
        {{ $t("project.projectTitle").toUpperCase() }}
      </p>
      <h3 class="text-3xl sm:mb-6 md:text-4xl">
        {{ $t("project.mobileAndWeb") }}
      </h3>
    </div>

    <div class="grid gap-8 md:grid-cols-2">
      <div
        v-for="(item, i) in $tm('project.projects')"
        :key="`project-info-${i}`"
        :class="[
          'group border-line-strong sm:hover:border-label-alternative flex cursor-pointer flex-col gap-4 rounded-sm border border-solid p-8 shadow-xs transition-colors',
        ]"
        @click="
          typeof i === 'number'
            ? $router.push({ name: projectRoutes.at(i) })
            : undefined
        "
      >
        <div class="flex justify-between">
          <h4 class="text-label-normal text-lg font-semibold md:text-xl">
            {{ item.title }}
          </h4>
          <ArrowUpRight
            class="size-6.5 transition-transform sm:group-hover:translate-x-1.5 sm:group-hover:-translate-y-1.5"
          />
        </div>
        <p class="text-label-alternative text-sm md:text-base">
          {{ item.description }}
        </p>

        <div class="flex flex-wrap gap-2">
          <StackIcon
            v-for="(stack, j) in stacksPerProjects[item.name]"
            :key="`project-stack-${stack}-${i}-${j}`"
            :stack="stack"
          />
        </div>
      </div>
    </div>
  </SectionLayout>
</template>

<script setup lang="ts">
import { ComponentPublicInstance } from "vue";
import StackIcon from "@/components/StackIcon.vue";
import SectionLayout from "@/layout/SectionLayout.vue";
import { ArrowUpRight } from "@lucide/vue";
import { projectRoutes } from "@/utils/public_constants";

withDefaults(
  defineProps<{
    sectionRef?: (el: Element | ComponentPublicInstance | null) => void;
    withLine?: boolean;
    paddingTopClass?: string;
  }>(),
  {
    withLine: true,
    paddingTopClass: "pt-10 md:pt-20",
  },
);

const stacksPerProjects: Record<string, string[]> = {
  smile: ["flutter", "nuxt", "vue", "typescript", "docker", "node"],
  place: ["flutter", "next", "react", "typescript", "figma", "tailwind"],
  naro: ["flutter", "react", "tailwind", "javascript", "figma"],
  weather: ["react", "javascript", "tailwind"],
};
</script>
