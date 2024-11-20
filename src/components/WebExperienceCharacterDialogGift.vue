<template>
  <div>
    <VskCard v-model:isActive="isActive" @close="onClose()" has-close-footer>
      <template v-slot:content>
        <v-row no-gutters>
          <v-col cols="12" align="center">
            <div class="web-experience-character-dialog-gift-title">
              <p v-for="line in currentDialog?.speech_written">
                {{ line }}
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row no-gutters class="mt-9 mb-2">
          <v-col cols="4">
            <v-img class="web-experience-character-dialog-gift-item-image"
              :src="itemProvidedByCurrentDialog?.image_url">
            </v-img>
          </v-col>
          <v-col cols="8">
            <v-card-text align="center" class="web-experience-character-dialog-gift-item-name">
              {{ itemProvidedByCurrentDialog?.name }}
              <v-divider :thickness="1" class="border-opacity-50 mt-3" color="grey"></v-divider>
            </v-card-text>

            <v-card-text class="web-experience-character-dialog-gift-item-description mt-1">
              {{ itemProvidedByCurrentDialog?.description }}
            </v-card-text>
          </v-col>
        </v-row>

        <VskFirework v-if="isActive" />

      </template>
    </VskCard>
    <WebExperienceAlertAllItemAcquired v-model:isActive="webExperienceAlertAllItemAcquiredIsActive" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { storeToRefs } from 'pinia';

import { useDialogStore } from "@/stores/dialog";
import { useItemStore } from "@/stores/item";
import { useLocationStore } from "@/stores/location";

import VskCard from '@/layouts/VskCard.vue'
import VskFirework from "@/layouts/VskFirework.vue";
import WebExperienceAlertAllItemAcquired from "@/components/WebExperienceAlertAllItemAcquired.vue";
import type { itemInterface } from "@/stores/item/interface";

const itemStore = useItemStore();
const { itemProvidedByCurrentDialog, isAllItemsAcquired } = storeToRefs(itemStore);
const { onItemProvided } = itemStore;

const dialogStore = useDialogStore();
const { currentDialog } = storeToRefs(dialogStore);

const locationStore = useLocationStore();
const { isTheHiddenPlaceFound } = storeToRefs(locationStore);

const isActive = ref(true);
const webExperienceAlertAllItemAcquiredIsActive = ref(false)

onMounted(() => {
  onItemProvided(itemProvidedByCurrentDialog.value as itemInterface);
})

function onClose() {
  if (isAllItemsAcquired.value && !isTheHiddenPlaceFound.value) {
    webExperienceAlertAllItemAcquiredIsActive.value = true;
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_global_variable.scss';

.web-experience-character-dialog-gift-title {
  color: $colorWhite;
  font-size: 2.6vh;
  font-weight: 500;
  line-height: 1.5;
}

.web-experience-character-dialog-gift-item-image {
  width: 90%;
  max-width: 160px;
  left: 50%;
  transform: translateX(-50%);
}

.web-experience-character-dialog-gift-item-name {
  color: $colorWhite;
  font-size: 2.6vh;
  font-weight: 700;
  line-height: 1;

  word-wrap: break-word !important;
}

.web-experience-character-dialog-gift-item-description {
  color: $colorWhite;
  font-size: 1.6vh;
  font-weight: 300;
  line-height: 1;
}
</style>
