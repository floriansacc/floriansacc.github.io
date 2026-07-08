<template>
  <ProjectLayout>
    <Section3Project :with-line="false" padding-top-class="pt-10" />
    <Footer />
  </ProjectLayout>
</template>

<script setup lang="ts">
import Section3Project from "@/pages/sections/Section3Project.vue";
import ProjectLayout from "@/layout/ProjectLayout.vue";
import Footer from "@/components/Footer.vue";
</script>
