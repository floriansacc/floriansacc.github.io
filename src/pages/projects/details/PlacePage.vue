<template>
  <ProjectLayout>
    <ProjectHeader
      projec-key-i18n="place"
      :stack-list="['frontend']"
      :feature-list="['mobile', 'web']"
    >
      <template #gallery>
        <!-- <div class="flex">
          <div class="flex-col"></div>
        </div> -->
        <div class="grid w-full justify-items-center gap-4 md:grid-cols-2">
          <div class="flex flex-col gap-4 md:max-w-[400px]">
            <div
              class="border-line-strong flex aspect-[9/19] shrink-0 overflow-hidden rounded-md border border-solid"
            >
              <img
                :src="keyScreenUrlList[0]"
                alt="keyScreenUrlList[0]"
                class="h-full w-full object-cover object-top"
              />
            </div>
            <div
              class="border-line-strong flex aspect-[9/19] shrink-0 overflow-hidden rounded-md border border-solid"
            >
              <img
                :src="keyScreenUrlList[1]"
                alt="keyScreenUrlList[1]"
                class="h-full w-full object-cover object-top"
              />
            </div>
          </div>
          <div
            class="border-line-strong flex max-w-[400px] shrink-0 overflow-hidden rounded-md border border-solid"
          >
            <img
              src="/assets/non-allowed/images/place/place_app_image_long.png"
              alt="place_app_image_long"
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

// const keyScreenUrlList: { front: string; back: string } = {
//   front: "/assets/non-allowed/images/place/place_app_image_1.png",
//   back: "/assets/non-allowed/images/place/place_app_image_2.jpg",
// };

const keyScreenUrlList: string[] = [
  "/assets/non-allowed/images/place/place_app_image_1.png",
  "/assets/non-allowed/images/place/place_app_image_2.jpg",
];
</script>
