<template>
  <div>
    <div id="body-container">
      <WebExperience />
      <TheMenu />
      <VskToast />
    </div>
  </div>
</template>

<script setup>
import WebExperience from "@/components/WebExperience.vue";
import TheMenu from "@/layouts/TheMenu.vue";
import VskToast from "@/layouts/VskToast.vue";
</script>

<style scoped lang="scss">
#body-container {
  /* border: solid 1px red; */
  overflow-y: scroll;
  background-color: #666666;
}
</style>
