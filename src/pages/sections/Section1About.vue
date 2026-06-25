<template>
  <section
    class="flex min-h-screen flex-col px-2 pt-20 md:px-[2vw] xl:px-[5vw]"
  >
    <div
      class="grid w-full grid-cols-1 justify-center gap-y-4 px-4 sm:gap-x-6 md:grid-cols-2 md:flex-row md:justify-evenly lg:gap-x-16"
    >
      <div>
        <p class="title-mono mb-4">
          {{ $t("about.aboutMeTitle").toUpperCase() }}
        </p>
        <h3 class="text-3xl sm:mb-6 md:text-4xl">
          {{ $t("about.title") }}
        </h3>
      </div>
      <div class="flex flex-col gap-y-4">
        <div
          class="text-label-grey ext-sm whitespace-break-spaces sm:text-base"
        >
          <i18n-t keypath="about.descriptionPart1" tag="p">
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
          <i18n-t keypath="about.descriptionPart2" tag="p">
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
          <i18n-t keypath="about.descriptionPart3" tag="p">
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
          <div
            v-for="(item, i) in techologyList"
            :key="`about-techno-${i}`"
            class="border-line-strong text-label-normal hover:bg-bg-muted group flex items-center justify-center gap-2 border border-solid px-3 py-2 transition-colors"
          >
            <img class="h-4.5 w-auto sm:h-5.5" :src="item.logo" />
            <p
              class="transition-transform duration-300 ease-out select-none group-hover:brightness-110"
            >
              {{ $t(`technology.${item.key}`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
//TODO add logo
const techologyList: { key: string; logo: string }[] = [
  { key: "javascript", logo: "assets/non-allowed/svg/icon_javascript.svg" },
  { key: "typescript", logo: "assets/non-allowed/svg/icon_typescript.svg" },
  { key: "react", logo: "assets/non-allowed/svg/icon_react.svg" },
  { key: "next", logo: "assets/non-allowed/svg/icon_next.svg" },
  { key: "vue", logo: "assets/non-allowed/svg/icon_vue.svg" },
  { key: "nuxt", logo: "assets/non-allowed/svg/icon_nuxt.svg" },
  { key: "flutter", logo: "assets/non-allowed/svg/icon_flutter.svg" },
  { key: "node", logo: "assets/non-allowed/svg/icon_node.svg" },
  { key: "docker", logo: "assets/non-allowed/svg/icon_docker.svg" },
  { key: "figma", logo: "assets/non-allowed/svg/icon_figma.svg" },
  { key: "tailwind", logo: "assets/non-allowed/svg/icon_tailwind.svg" },
];
</script>
