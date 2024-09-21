<template>
  <div>
    <div id="body-container">
      <WebExperience />
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition || ''" mode="default">
          <component :is="Component" :key="route.path"></component>
        </transition>
      </router-view>
    </div>
    <div id="menu-container">
      <TheMenu />
    </div>
    <TheUserInfo />
    <TheSettings />
  </div>
</template>

<script setup>
import TheMenu from "@/layouts/TheMenu.vue";
import TheUserInfo from "@/layouts/TheUserInfo.vue";
import TheSettings from "./layouts/TheSettings.vue";
import WebExperience from "@/components/WebExperience.vue";
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

router.beforeEach((to, from) => {
  // console.log('TEST ROUTE beforeEach FROM', from.name, from.meta.transition, from.meta.order) // TEST
  // console.log('TEST ROUTE beforeEach TO', to.name, to.meta.transition, to.meta.order) // TEST
  if (from.meta.order < to.meta.order) {
    to.meta.transition = 'slide-right'
  }
  else {
    to.meta.transition = 'slide-left'
  }
})
</script>

<style scoped lang="scss">
#body-container {
  /* border: solid 1px red; */
  overflow-y: scroll;
  height: 90vh;
  background-color: #666666;
}

#menu-container {
  /* border: solid 1px blue; */
  height: 10vh;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.15s ease-out;
}

.slide-right-enter-to,
.slide-right-enter-from,
.slide-right-leave-to,
.slide-right-leave-from,
.slide-left-enter-to,
.slide-left-enter-from,
.slide-left-leave-to,
.slide-left-leave-from {
  position: absolute;
}

.slide-left-enter-from {
  left: -100%;
}

.slide-left-enter-to {
  left: 0;
}

.slide-left-leave-from {
  right: 0;
}

.slide-left-leave-to {
  right: -100%;
}


.slide-right-enter-from {
  right: -100%;
}

.slide-right-enter-to {
  right: 0;
}

.slide-right-leave-from {
  left: 0;
}

.slide-right-leave-to {
  left: -100%;
}
</style>
