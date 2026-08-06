<template>
  <SectionLayout
    class="mb-10 md:mb-16"
    :with-line="false"
    min-h-class="min-h-fit"
    padding-top-class="pt-20 px-5 md:px-0 md:pt-32"
  >
    <p class="title-mono mb-4 md:px-5 md:text-lg!">
      {{ $t(`${projecKeyI18n}.title`).toUpperCase() }}
    </p>

    <div
      class="grid items-end gap-y-4 md:grid-cols-2 md:gap-x-6 md:px-5 lg:gap-x-10 xl:gap-x-12"
    >
      <h1 class="text-4xl md:text-5xl lg:text-6xl">
        {{ $t(`${projecKeyI18n}.name`) }}
      </h1>

      <div class="flex flex-col gap-4">
        <p
          class="text-label-grey text-justify text-xl whitespace-pre-wrap sm:text-lg"
        >
          {{ $t(`${projecKeyI18n}.description`) }}
        </p>

        <div class="group">
          <a v-if="siteUrl" :href="siteUrl" target="_blank">
            <CustomButton>
              {{ $t("viewWebsite") }}

              <ExternalLink
                class="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110"
              />
            </CustomButton>
          </a>
        </div>
      </div>
    </div>

    <div
      class="border-line-strong mt-10 grid grid-cols-2 rounded-sm border border-solid md:mt-20 md:grid-cols-4"
    >
      <div
        v-for="(item, i) in gridItemList"
        :key="`${projecKeyI18n}-${item}-${i}`"
        class="border-foreground/10 border-line-strong flex flex-col items-start gap-2 border-r border-b px-8 py-6 last:border-r-0 md:border-b-0"
      >
        <p class="text-label-alternative font-mono text-sm">
          {{ $t(item).toUpperCase() }}
        </p>

        <p class="text-label-normal text-lg sm:text-base">
          {{ $t(`${projecKeyI18n}.${item}`) }}
        </p>
      </div>
    </div>
  </SectionLayout>

  <!-- // 01 -->
  <SectionLayout
    v-if="withOverview"
    min-h-class="min-h-fit"
    class="mb-10 md:mb-16"
  >
    <div
      class="grid items-start gap-y-4 md:grid-cols-2 md:gap-x-6 md:px-5 lg:gap-x-10 xl:gap-x-12"
    >
      <div class="mb-5 px-4">
        <p class="title-mono mb-4">
          01 - {{ $t("overviewTitle").toUpperCase() }}
        </p>
        <h3 class="text-3xl sm:mb-6 md:text-4xl">
          {{ $t("theProblemAndSolution") }}
        </h3>
      </div>

      <div
        class="text-label-alternative px-5 text-justify text-base whitespace-pre-line md:px-0"
      >
        {{ $t(`${projecKeyI18n}.problemAndSolution`) }}
      </div>
    </div>
  </SectionLayout>

  <!-- // 02 -->
  <SectionLayout min-h-class="min-h-fit" class="mb-10 md:mb-16">
    <div class="flex flex-col items-start gap-y-4 md:px-5">
      <div class="mb-5 px-4">
        <p class="title-mono mb-4">
          {{ withOverview ? "02 - " : "01 - " }}
          {{ $t("stackTitle").toUpperCase() }}
        </p>
        <h3 class="text-3xl sm:mb-6 md:text-4xl">
          {{ $t("technologyUsed") }}
        </h3>
      </div>

      <div
        class="border-line-strong grid w-full rounded-sm border border-solid md:grid-cols-3"
      >
        <div
          v-for="main in stackList"
          class="border-line-strong border-b px-8 py-6 last:border-b-0 md:border-r md:border-b-0 md:py-8 md:last:border-r-0"
        >
          <p class="subtitle-mono mb-6">
            {{ $t(`${main}`).toUpperCase() }}
          </p>

          <ul
            v-for="item in $tm(`${projecKeyI18n}.${main}Stack`)"
            class="text-label-normal list-inside list-disc text-base md:text-lg"
          >
            <li class="py-1">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </SectionLayout>

  <!-- // 03 -->
  <SectionLayout
    v-if="featureList && featureList.length > 0"
    min-h-class="min-h-fit"
    class="mb-10 md:mb-16"
  >
    <div class="flex flex-col items-start gap-y-4 md:px-5">
      <div class="mb-5 px-4">
        <p class="title-mono mb-4">
          {{ withOverview ? "03 - " : "02 - " }}
          {{ $t("featureTitle").toUpperCase() }}
        </p>
        <h3 class="text-3xl sm:mb-6 md:text-4xl">
          {{ $t("featureDeveloped") }}
        </h3>
      </div>

      <div
        :class="[
          'border-line-strong grid w-full rounded-sm border border-solid',
          `md:grid-cols-${featureList.length || 1}`,
        ]"
      >
        <div
          v-for="main in featureList"
          class="border-line-strong border-b px-8 py-6 last:border-b-0 md:border-r md:border-b-0 md:py-8 md:last:border-r-0"
        >
          <p class="subtitle-mono mb-6">
            {{ $t(`${main}`).toUpperCase() }}
          </p>

          <ul
            v-for="item in $tm(`${projecKeyI18n}.${main}Feature`)"
            class="text-label-normal list-inside list-disc text-base md:text-lg"
          >
            <li class="py-1">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </SectionLayout>

  <!-- // 04 -->
  <SectionLayout min-h-class="min-h-fit" class="mb-10 md:mb-16">
    <div class="flex flex-col items-start gap-y-4 md:px-5">
      <div class="mb-5 px-4">
        <p class="title-mono mb-4">
          {{ withOverview ? "04 - " : "03 - " }}
          {{ $t("galleryTitle").toUpperCase() }}
        </p>
        <h3 class="text-3xl sm:mb-6 md:text-4xl">
          {{ $t("keyScreens") }}
        </h3>
      </div>

      <slot name="gallery"></slot>

      <p v-if="withDisclaimer" class="text-label-alternative text-sm! italic">
        *{{
          $t("disclaimerImage", { company: $t(`${projecKeyI18n}.company`) })
        }}
      </p>
    </div>
  </SectionLayout>
</template>

<script setup lang="ts">
import { ExternalLink } from "@lucide/vue";
import SectionLayout from "@/layout/SectionLayout.vue";
import { StackStype } from "@/models/stack_type.ts";
import { FeatureType } from "@/models/feature_type.ts";
import CustomButton from "@/components/buttons/CustomButton.vue";

const gridItemList = ["role", "year", "duration", "team"];

withDefaults(
  defineProps<{
    projecKeyI18n: string;
    siteUrl?: string | null;
    withOverview?: boolean;
    withDisclaimer?: boolean;
    stackList: StackStype[];
    featureList?: FeatureType[];
  }>(),
  {
    siteUrl: null,
    withOverview: true,
    withDisclaimer: true,
  },
);
</script>
