<template>
  <div>
    <v-dialog class="vsk-gift-v-dialog" v-model="isActive">
      <template v-slot:default="{ isActive }">
        <v-card class="vsk-gift-container">
          <div class="vsk-gift-content">
            <v-row no-gutters class="mt-1">
              <v-col cols="12">
                <div class="vsk-gift-current-dialog-speech">
                  <p v-for="line in currentDialog?.speech_written">
                    {{ line }}
                  </p>
                </div>
              </v-col>
            </v-row>

            <v-row no-gutters class="mt-5 mb-2">
              <v-col cols="4">
                <v-img class="vsk-gift-item-image" :src="itemProvidedByCurrentDialog?.image_url"></v-img>
              </v-col>
              <v-col cols="8">
                <v-card-title class="vsk-gift-item-name">
                  {{ itemProvidedByCurrentDialog?.name }}
                  <v-divider :thickness="1" class="border-opacity-50 mt-3" color="grey"></v-divider>
                </v-card-title>

                <v-card-text class="vsk-gift-item-description mt-1">
                  {{ itemProvidedByCurrentDialog?.description }}
                </v-card-text>
              </v-col>
            </v-row>
          </div>
        </v-card>

        <v-card-actions class="vsk-gift-close">
          <v-icon icon="$vuetify" @click="isActive.value = false"></v-icon>
        </v-card-actions>
      </template>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import { useDialogStore } from "@/stores/dialog";
import { useItemStore } from "@/stores/item";


const itemStore = useItemStore();
const { itemProvidedByCurrentDialog } = storeToRefs(itemStore);

const dialogStore = useDialogStore();
const { currentDialog } = storeToRefs(dialogStore);

const isActive = ref(true);

</script>

<style lang="scss" scoped>
.vsk-gift-v-dialog {
  width: 620px;
  font-size: 22px;

  .vsk-gift-container {
    border-radius: 12px;
    background-color: rgba(29, 27, 25, 0.8);

    .vsk-gift-content {
      margin: 10px;
      padding: 20px;
      border-radius: 12px;
      border: solid 1px grey;
      background-color: rgba(29, 27, 25, 0.8);

      .vsk-gift-current-dialog-speech {
        text-align: center;
        color: white;
        font-size: 1.8vh;
        font-weight: 500;
        line-height: 1.5;
      }

      .vsk-gift-item-image {
        width: 60%;
        left: 50%;
        transform: translateX(-50%);
      }

      .vsk-gift-item-name {
        color: white;
        font-size: 2.5vh;
        font-weight: 700;
        line-height: 1;
      }

      .vsk-gift-item-description {
        color: white;
        font-size: 1.3vh;
        font-weight: 300;
        line-height: 1;
      }
    }
  }

  .vsk-gift-close {
    color: white;
    position: absolute;
    left: 50%;
    bottom: -2.5vh;
    font-size: 2.5vh;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    animation: bounce 2s ease infinite;
    cursor: pointer;
  }
}
</style>
