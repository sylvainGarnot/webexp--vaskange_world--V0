<template>
  <div class="vsk-dialog-container" v-if="dialogStepNumber !== -1">
    <div class="vsk-dialog-npc">
      <span class="vsk-dialog-npc-author">{{ closestCharacter!.name }}</span>
      <p class="vsk-dialog-npc-dialog">
        {{ dialog!.speech_written[dialogStepNumber] }}
      </p>
      <v-icon v-if="dialogStepNumber + 1 < dialog!.speech_written.length" class="vsk-dialog-npc-next-icon"
        icon="$vuetify" @click="dialogStepNumber++"></v-icon>
    </div>

    <TransitionGroup name="fade-top" tag="div">
      <WebExperienceCharacterDialogAnswer v-if="dialogStepNumber >= dialog!.speech_written.length - 1"
        @repeat="dialogStepNumber = 0" @leave="handleLeave()" @accepted="handleAccepted()" />
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useDialogStore } from "@/stores/dialog";
import { useCharacterStore } from "@/stores/character";
import { useItemStore } from "@/stores/item";
import type { itemInterface } from '@/stores/item/interface';
import WebExperienceCharacterDialogAnswer from "@/components/WebExperienceCharacterDialogAnswer.vue";


const characterStore = useCharacterStore();
const { closestCharacter } = storeToRefs(characterStore);

const dialogStore = useDialogStore();
const { dialog } = storeToRefs(dialogStore);

const itemStore = useItemStore();
const { items } = storeToRefs(itemStore);
const { onItemProvided } = itemStore;

const dialogStepNumber = ref(0);


// FUNCTION
function handleLeave() {
  dialogStepNumber.value = -1;
}

function handleAccepted() {
  if (dialog.value?.item_provided) {
    const item_provided = items.value.find(i => i.id === dialog.value?.item_provided);
    if (item_provided) {
      onItemProvided(item_provided as itemInterface);
      handleLeave();
    }
  }
}

</script>

<style lang="scss" scoped>
.vsk-dialog-container {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 40px 15%;

  .vsk-dialog-npc {
    position: relative;
    left: 0;
    bottom: 0;
    background-color: rgba(29, 27, 25, 0.9);
    color: white;
    border-radius: 180px;
    width: 100%;
    height: 180px;

    .vsk-dialog-npc-author {
      position: absolute;
      left: 20%;
      top: 0;
      transform: translate(-50%, -50%);
      font-size: 34px;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    }

    .vsk-dialog-npc-dialog {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 34px;
    }

    .vsk-dialog-npc-next-icon {
      position: absolute;
      left: 50%;
      bottom: -15px;
      font-size: 40px;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
      cursor: pointer;
      animation: bounce 2s ease infinite;
    }
  }
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(-50%) translateY(0);
  }

  40% {
    transform: translateX(-50%) translateY(-20px);
  }

  60% {
    transform: translateX(-50%) translateY(-10px);
  }
}
</style>
