<template>
  <ProjectLayout>
    <ProjectHeader
      projec-key-i18n="weather"
      site-url="https://floriansacc.github.io/News-weather/"
      :with-overview="false"
      :stack-list="['frontend']"
      :with-disclaimer="false"
    >
      <template #gallery> </template>
    </ProjectHeader>
  </ProjectLayout>
</template>

<script setup lang="ts">
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
import ProjectLayout from "@/layout/ProjectLayout.vue";
</script>
