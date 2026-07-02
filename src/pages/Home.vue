<template>
  <BaseLayout :scroll-to-index="scrollToIndex" :active-index="activeIndex">
    <main class="w-full">
      <Section0Intro :scroll-to-index="scrollToIndex" />
      <Section1About
        :section-ref="(el) => (sectionRefs[0] = el as HTMLElement)"
      />
      <Section2Career
        :section-ref="(el) => (sectionRefs[1] = el as HTMLElement)"
      />
      <Section3Project
        :section-ref="(el) => (sectionRefs[2] = el as HTMLElement)"
      />
      <Section4Education
        :section-ref="(el) => (sectionRefs[3] = el as HTMLElement)"
      />

      <Footer />
    </main>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from "@/layout/BaseLayout.vue";
import Section0Intro from "@/pages/sections/Section0Intro.vue";
import Section1About from "@/pages/sections/Section1About.vue";
import Section2Career from "@/pages/sections/Section2Career.vue";
import Section3Project from "@/pages/sections/Section3Project.vue";
import Section4Education from "@/pages/sections/Section4Education.vue";
import Footer from "@/components/Footer.vue";
import useScrollIndex from "@/composables/useScrollIndex";

const { sectionRefs, activeIndex, scrollToIndex } = useScrollIndex({
  indexNumber: 4,
  offset: 40,
});
</script>
