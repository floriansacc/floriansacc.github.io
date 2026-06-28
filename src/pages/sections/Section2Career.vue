<template>
  <SectionLayout>
    <div class="mb-5 px-4">
      <p class="title-mono mb-4">
        {{ $t("career.careerTitle").toUpperCase() }}
      </p>
      <h3 class="text-3xl sm:mb-6 md:text-4xl">
        {{ $t("career.professionalJourney") }}
      </h3>
    </div>
    <div
      v-for="(item, i) in $tm('career.career')"
      :key="`career-${i}-grid`"
      class="border-line-strong relative grid grid-cols-1 gap-y-4 border-b border-solid px-4 py-10 last:border-0 md:grid-cols-4 md:gap-x-6 lg:gap-x-10 xl:gap-x-12"
    >
      <div class="sm:pt-0.5 md:pt-1.5">
        <p class="subtitle-mono">{{ item.period }}</p>
      </div>
      <div class="flex flex-col items-start md:col-span-3">
        <p class="pb-0.5 text-xl font-semibold md:pb-1 md:text-2xl">
          {{ item.title }}
        </p>
        <p class="text-label-grey pb-4 text-base">
          <span class="italic">
            {{ item.company }}
          </span>
          <span>{{ " " }}-{{ " " }}</span>
          <span class="text-label-alternative">
            {{ item.country }}
          </span>
        </p>

        <div
          class="text-label-grey flex flex-col gap-2 text-sm whitespace-pre-wrap sm:text-base"
        >
          <i18n-t :keypath="item.description" tag="p"> </i18n-t>

          <ul class="list-inside list-disc">
            <i18n-t
              v-for="(_, j) in item.part"
              :key="`carreer-parts-${i}-${j}`"
              :keypath="`career.career[${i}].part[${j}]`"
              tag="li"
            >
              <template v-slot:react>
                <span class="variables">
                  {{ $t("technology.react") }}
                </span>
              </template>
              <template v-slot:nuxt>
                <span class="variables">
                  {{ $t("technology.nuxt") }}
                </span>
              </template>
              <template v-slot:next>
                <span class="variables">
                  {{ $t("technology.next") }}
                </span>
              </template>
              <template v-slot:vue>
                <span class="variables">
                  {{ $t("technology.vue") }}
                </span>
              </template>
              <template v-slot:aws>
                <span class="variables">
                  {{ $t("technology.aws") }}
                </span>
              </template>
              <template v-slot:flutter>
                <span class="variables">
                  {{ $t("technology.flutter") }}
                </span>
              </template>
              <template v-slot:node>
                <span class="variables">
                  {{ $t("technology.node") }}
                </span>
              </template>
              <template v-slot:mariaDb>
                <span class="variables">
                  {{ $t("technology.mariaDb") }}
                </span>
              </template>
            </i18n-t>
          </ul>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>

<script setup lang="ts">
import SectionLayout from "@/layout/SectionLayout.vue";
</script>
