<template>
  <SectionLayout>
    <div class="mb-5 px-4">
      <p class="title-mono mb-4">
        {{ $t("school.schoolTitle").toUpperCase() }}
      </p>
      <h3 class="text-3xl sm:mb-6 md:text-4xl">
        {{ $t("school.education") }}
      </h3>
    </div>

    <div
      v-for="(item, i) in $tm('school.details')"
      :key="`school-${i}-grid`"
      class="border-line-strong relative grid grid-cols-1 gap-y-2 border-b border-solid px-4 py-10 last:border-0 md:grid-cols-4 md:gap-x-6 lg:gap-x-10 xl:gap-x-12"
    >
      <div
        class="flex flex-row justify-between gap-1 sm:pt-0.5 md:flex-col md:justify-start md:gap-4 md:pt-1.5"
      >
        <p class="subtitle-mono">{{ item.period }}</p>
        <img
          v-if="typeof i === 'number'"
          :src="universityImages?.[i]"
          class="h-8 w-auto select-none md:h-auto md:w-4/6"
          :draggable="false"
        />
      </div>
      <div class="flex flex-col items-start md:col-span-3">
        <p class="pb-0.5 text-xl font-semibold md:pb-1 md:text-2xl">
          {{ item.schoolName }}
        </p>
        <p class="pb-1.5 text-lg font-medium md:text-xl">
          <span>{{ item.department }}</span>

          <span>{{ " " }}-{{ " " }}</span>

          <span class="text-base md:text-lg">
            {{ item.country }}
          </span>
        </p>
        <p class="text-label-grey pb-4 text-base">
          <span class="font-medium">
            {{ item.degree }}
          </span>
          <span>{{ " " }}-{{ " " }}</span>
          <span>{{ $t("school.gpa") }}{{ " " }}</span>
          <span class="">
            {{ item.grade }}
          </span>
        </p>

        <ul
          class="text-label-grey list-inside list-disc text-sm whitespace-pre-wrap sm:text-base"
        >
          <li v-for="(sub, j) in item.part" :key="`school-parts-${i}-${j}`">
            {{ sub }}
          </li>
        </ul>
      </div>
    </div>
  </SectionLayout>
</template>

<script setup lang="ts">
import SectionLayout from "@/layout/SectionLayout.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const universityImages = computed<string[]>(() => {
  const list = [
    "/assets/non-allowed/images/utbm_logo.png",
    "/assets/non-allowed/images/iut_logo.png",
  ];

  const jbnuImg =
    locale.value === "kr"
      ? "/assets/non-allowed/images/jbnu_logo_kr.png"
      : "/assets/non-allowed/images/jbnu_logo_en.png";

  return [jbnuImg, ...list];
});
</script>
