<template>
  <SectionLayout
    class="mb-10 md:mb-16"
    :with-line="false"
    min-h-class="min-h-fit"
    padding-top-class="pt-20 md:pt-32"
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
      class="border-line-strong bg-line-strong mt-10 grid grid-cols-2 gap-px rounded-sm border border-solid md:mt-20 md:grid-cols-4"
    >
      <div
        v-for="(item, i) in gridItemList"
        :key="`${projecKeyI18n}-${item}-${i}`"
        class="bg-bg-basic flex flex-col items-start gap-2 px-5 py-6 md:px-8"
      >
        <p class="text-label-alternative font-mono text-sm">
          {{ $t(item).toUpperCase() }}
        </p>

        <p
          class="text-label-normal self-center text-base sm:self-auto sm:text-base md:text-lg"
        >
          {{ $t(`${projecKeyI18n}.${item}`) }}
        </p>
      </div>
    </div>
  </SectionLayout>

  <!-- --------------- -->
  <!-- // main feature -->
  <!-- --------------- -->
  <SectionLayout
    v-if="featureList && featureList.length > 0"
    min-h-class="min-h-fit"
    class="mb-10 md:mb-16"
    :mobile-title="titleBuilder.mainFeature"
  >
    <div class="flex flex-col items-start gap-y-4 md:px-5">
      <div class="mb-5 px-4">
        <p class="title-mono mb-4 hidden md:block">
          {{ titleBuilder.mainFeature }}
        </p>
        <h2 class="text-3xl sm:mb-6 md:text-4xl">
          {{ $t("featureDeveloped") }}
        </h2>
      </div>

      <div
        :class="[
          'border-line-strong grid w-full rounded-sm border border-solid',
          `md:grid-cols-${featureList.length || 1}`,
        ]"
      >
        <div
          v-for="main in featureList"
          class="border-line-strong border-b px-5 py-6 last:border-b-0 md:border-r md:border-b-0 md:px-8 md:py-8 md:last:border-r-0"
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

  <!-- ------------------ -->
  <!-- // technology used -->
  <!-- ------------------ -->
  <SectionLayout
    min-h-class="min-h-fit"
    class="mb-10 md:mb-16"
    :mobile-title="titleBuilder.technologyUsed"
  >
    <div class="flex flex-col items-start gap-y-4 md:px-5">
      <div class="mb-5 px-4">
        <p class="title-mono mb-4 hidden md:block">
          {{ titleBuilder.technologyUsed }}
        </p>
        <h2 class="text-3xl sm:mb-6 md:text-4xl">
          {{ $t("technologyUsed") }}
        </h2>
      </div>

      <div
        :class="[
          'border-line-strong grid w-full rounded-sm border border-solid md:grid-cols-3',
          `md:grid-cols-${stackList.length || 3}`,
        ]"
      >
        <div
          v-for="main in stackList"
          class="border-line-strong border-b px-5 py-6 last:border-b-0 md:border-r md:border-b-0 md:px-8 md:py-8 md:last:border-r-0"
        >
          <p class="subtitle-mono mb-6">
            {{ $t(`${main}`).toUpperCase() }}
          </p>

          <ul
            v-for="item in $tm(`${projecKeyI18n}.${main}Stack`)"
            class="text-label-normal w-full list-inside list-disc text-base md:text-lg"
          >
            <li class="py-1">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </SectionLayout>

  <!-- ------------------------ -->
  <!-- // problems and solutions -->
  <!-- ------------------------ -->
  <SectionLayout
    v-if="withOverview"
    min-h-class="min-h-fit"
    class="mb-10 md:mb-16"
    :mobile-title="titleBuilder.problemsAndSolutions"
  >
    <div
      class="grid items-start gap-y-4 md:grid-cols-2 md:gap-x-6 md:px-5 lg:gap-x-10 xl:gap-x-12"
    >
      <div class="mb-5 px-4">
        <p class="title-mono mb-4 hidden md:block">
          {{ titleBuilder.problemsAndSolutions }}
        </p>
        <h2 class="text-3xl sm:mb-6 md:text-4xl">
          {{ $t("theProblemAndSolution") }}
        </h2>
      </div>

      <div
        class="text-label-grey text-justify text-base whitespace-pre-line md:px-0"
      >
        {{ $t(`${projecKeyI18n}.problemAndSolution`) }}
      </div>
    </div>
  </SectionLayout>

  <!-- -------------- -->
  <!-- // key screens -->
  <!-- -------------- -->
  <SectionLayout
    min-h-class="min-h-fit"
    class="mb-10 md:mb-16"
    :mobile-title="titleBuilder.keyScreens"
  >
    <div class="flex flex-col items-start gap-y-4 md:px-5">
      <div class="mb-5 px-4">
        <p class="title-mono mb-4 hidden md:block">
          {{ titleBuilder.keyScreens }}
        </p>
        <h2 class="text-3xl sm:mb-6 md:text-4xl">
          {{ $t("keyScreens") }}
        </h2>
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
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const gridItemList = ["role", "year", "duration", "team"];

const props = withDefaults(
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

const getLastNumber = computed(() => {
  let number = 2;

  if (props.featureList && props.featureList.length > 0) {
    number += 1;
  }

  if (props.withOverview) {
    number += 1;
  }

  return {
    problems: (number - 1).toString().padStart(2, "0"),
    keyScreen: number.toString().padStart(2, "0"),
  };
});

const titleBuilder = computed(() => {
  return {
    mainFeature: `01 - ${t("featureTitle").toUpperCase()}`,
    technologyUsed: `${props.featureList && props.featureList.length > 0 ? "02 - " : "01 - "}${t("stackTitle").toUpperCase()}`,
    problemsAndSolutions: `${getLastNumber.value.problems} - ${t("overviewTitle").toUpperCase()}`,
    keyScreens: `${getLastNumber.value.keyScreen} - ${t("galleryTitle").toUpperCase()}`,
  };
});
</script>
