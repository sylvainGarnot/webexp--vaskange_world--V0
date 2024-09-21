<template>
  <div id="theSettings">
    <v-row no-gutters class="pt-2 pr-3">
      <v-col v-if="route.name === 'home'" cols="4" class="pl-3">
        <SettingsSoundGlobal />
      </v-col>
      <v-col v-if="route.name === 'home'" cols="4" class="pl-3">
        <SettingsFullScreen />
      </v-col>
      <v-col cols="4" class="pl-3">
        <Settings />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import Settings from "@/components/Settings.vue";
import SettingsSoundGlobal from "@/components/SettingsSoundGlobal.vue";
import SettingsFullScreen from "@/components/SettingsFullScreen.vue";

import { useRoute } from 'vue-router';
const route = useRoute();

</script>

<style lang="scss" scoped>
#theSettings {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
