<template>
  <div id="TheSettings">
    <v-row no-gutters class="pt-4">
      <v-col cols="6" class="pr-4">
        <SettingsSoundGlobal />
      </v-col>
      <v-col cols="6" class="pr-4">
        <SettingsFullScreen />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import SettingsSoundGlobal from "@/components/SettingsSoundGlobal.vue";
import SettingsFullScreen from "@/components/SettingsFullScreen.vue";
</script>

<style lang="scss" scoped>
#TheSettings {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
