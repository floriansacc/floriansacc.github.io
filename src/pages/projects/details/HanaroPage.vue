<template>
  <ProjectLayout>
    <ProjectHeader
      projec-key-i18n="naro"
      :stack-list="['frontend']"
      :feature-list="['mobile', 'web']"
    >
      <template #gallery>
        <div
          class="grid h-fit w-full justify-items-center gap-4 md:grid-cols-4"
        >
          <FloatingComponent
            :image-box1="floatingIcons[1]"
            :image-box2="floatingIcons[2]"
          />
          <div
            v-for="(screen, i) in keyScreenUrlList"
            :key="`${screen}-${i}`"
            :class="['col-span-1 flex aspect-[9/19] shrink-0']"
          >
            <ReversableCard :image-list="screen" />
          </div>
        </div>
      </template>
    </ProjectHeader>
    <Footer />
  </ProjectLayout>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import FloatingComponent from "@/components/projects/FloatingComponent.vue";
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
import ReversableCard from "@/components/projects/ReversableCard.vue";
import ProjectLayout from "@/layout/ProjectLayout.vue";
import { techologyList } from "@/utils/public_constants";
import { computed } from "vue";

const floatingIcons = computed(() => {
  const keys1 = ["react", "flutter"];
  const keys2 = ["figma", "tailwind"];

  const list1 = techologyList
    .filter((e) => keys1.includes(e.key))
    .map((e) => e.key);
  const list2 = techologyList
    .filter((e) => keys2.includes(e.key))
    .map((e) => e.key);

  return {
    1: list1,
    2: list2,
  };
});

const keyScreenUrlList: { front: string; back: string }[] = [
  {
    front: "/assets/non-allowed/images/naro/thehanaro_app_image_1.png",
    back: "/assets/non-allowed/images/naro/thehanaro_app_image_2.png",
  },
  {
    front: "/assets/non-allowed/images/naro/thehanaro_app_image_3.png",
    back: "/assets/non-allowed/images/naro/thehanaro_app_image_4.png",
  },
];
</script>
