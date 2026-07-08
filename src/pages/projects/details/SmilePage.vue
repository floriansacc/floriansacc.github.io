<template>
  <ProjectLayout>
    <ProjectHeader
      projec-key-i18n="smileProject"
      site-url="https://smile-checkup.com"
      :key-screen-url-list="keyScreenUrlList"
    />
    <Footer />
  </ProjectLayout>
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import ProjectHeader from "@/components/projects/ProjectHeader.vue";
import ProjectLayout from "@/layout/ProjectLayout.vue";

const keyScreenUrlList = [
  ["/assets/non-allowed/images/smile/dashboard.png"],
  [
    "/assets/non-allowed/images/smile/map_1.jpg",
    "/assets/non-allowed/images/smile/map_2.jpg",
  ],
  ["/assets/non-allowed/images/smile/main.jpg"],
];
</script>
