<template>
  <ProjectLayout>
    <ProjectHeader
      projec-key-i18n="weather"
      site-url="https://floriansacc.github.io/News-weather/"
      :with-overview="false"
      :stack-list="['frontend']"
      :with-disclaimer="false"
    >
      <template #gallery>
        <div class="grid w-full gap-4 sm:justify-items-center md:grid-cols-2">
          <img
            :src="imageUrl"
            :alt="imageUrl"
            class="bg-bg-alternative border-line-strong flex aspect-auto w-full flex-1 shrink-0 overflow-hidden rounded-md border border-solid sm:max-h-[70vh] sm:w-auto md:justify-self-end"
          />

          <video
            autoplay
            loop
            playsinline
            :src="videoUrl"
            :alt="videoUrl"
            class="bg-bg-alternative border-line-strong flex aspect-auto w-full shrink-0 justify-self-center overflow-hidden rounded-md border border-solid sm:max-h-[70vh] sm:w-auto md:justify-self-start"
          ></video>
        </div>
      </template>
    </ProjectHeader>
  </ProjectLayout>
</template>

<script setup lang="ts">
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
import ProjectLayout from "@/layout/ProjectLayout.vue";

const imageUrl: string = "/assets/allowed/images/project_2_image.jpeg";

const videoUrl = "/assets/allowed/videos/project_2_video.mp4";
</script>
