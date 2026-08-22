<template>
  <ProjectLayout>
    <ProjectHeader
      projec-key-i18n="smileProject"
      site-url="https://smile-checkup.com"
      :with-overview="true"
      :stack-list="['frontend', 'backend', 'infrastructure']"
      :feature-list="['mobile', 'web', 'backend']"
    >
      <template #gallery>
        <div class="grid w-full gap-4 md:grid-cols-2">
          <div
            v-for="(screen, i) in keyScreenUrlList"
            :key="`${screen}-${i}`"
            :class="[
              'bg-bg-alternative border-line-strong flex shrink-0 overflow-hidden border border-solid',
              i === 1 ? 'row-span-2 aspect-[1/1]' : 'aspect-[16/9]',
            ]"
          >
            <img
              v-for="(value, i) in screen"
              :src="value"
              :alt="`smile-image=${i + 1}`"
              class="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </template>
    </ProjectHeader>
    <Footer />
  </ProjectLayout>
</template>

<script setup lang="ts">
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
import ProjectLayout from "@/layout/ProjectLayout.vue";
import Footer from "@/components/Footer.vue";

const keyScreenUrlList: string[][] = [
  ["/assets/non-allowed/images/smile/dashboard.png"],
  [
    "/assets/non-allowed/images/smile/map_1.jpg",
    "/assets/non-allowed/images/smile/map_2.jpg",
  ],
  ["/assets/non-allowed/images/smile/main.jpg"],
];
</script>
