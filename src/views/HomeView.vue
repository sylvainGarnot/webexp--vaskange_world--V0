<template>
  <div>
    <!-- <WebExperience />
    <TheMenu />
    <Guide />
    <Transition>
      <MentionLegal v-if="isDialogMentionLegalActive" />
    </Transition> -->

    <ExperienceEnded />
  </div>
</template>

<script setup>
// import WebExperience from "@/components/WebExperience.vue";
// import TheMenu from "@/layouts/TheMenu.vue";
// import Guide from "@/components/Guide.vue";
// import MentionLegal from "@/components/MentionLegal.vue";

// import { isDialogMentionLegalActive } from "@/stores/dialog/state";


import ExperienceEnded from "@/components/ExperienceEnded.vue";
import { onMounted } from "vue";

onMounted(() => {
})
</script>

<style scoped lang="scss"></style>
