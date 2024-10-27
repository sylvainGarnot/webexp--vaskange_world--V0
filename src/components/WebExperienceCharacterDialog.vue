<template>
  <div id="vsk-dialog" class="vsk-dialog-container" v-if="isActive" @keyup.enter="handleNextDialog()">
    <div class="vsk-dialog-npc">
      <span class="vsk-dialog-npc-author">{{ currentCharacter!.name }}</span>
      <p class="vsk-dialog-npc-dialog">
        {{ currentDialog?.speech_written[dialogStepNumber] }}
      </p>
      <v-icon v-if="!isAnswersActive" class="vsk-dialog-npc-next-icon btn-click-animation" icon="$vuetify"
        @click="handleNextDialog()"></v-icon>

      <TransitionGroup name="fade-top" tag="div">
        <WebExperienceCharacterDialogAnswer v-if="isAnswersActive" @repeat="dialogStepNumber = 0" @leave="handleLeave()"
          @accepted="handleAccepted()" />
      </TransitionGroup>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { storeToRefs } from 'pinia';
import { useDialogStore } from "@/stores/dialog";
import { useCharacterStore } from "@/stores/character";
import { useItemStore } from "@/stores/item";
import type { itemInterface } from '@/stores/item/interface';
import WebExperienceCharacterDialogAnswer from "@/components/WebExperienceCharacterDialogAnswer.vue";


const characterStore = useCharacterStore();
const { currentCharacter } = storeToRefs(characterStore);

const dialogStore = useDialogStore();
const { currentDialog } = storeToRefs(dialogStore);

const itemStore = useItemStore();
const { items } = storeToRefs(itemStore);
const { onItemProvided } = itemStore;


// DATA
const dialogStepNumber = ref(0);


// COMPUTED
const isActive = computed(() => {
  return dialogStepNumber.value !== -1;
})
const isAnswersActive = computed(() => {
  return currentDialog.value && dialogStepNumber.value + 1 >= currentDialog.value.speech_written!.length;
})


// LIFE CYCLE
onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown)
})



// FUNCTION
function handleLeave() {
  dialogStepNumber.value = -1;
}

function handleAccepted() {
  if (currentDialog.value?.item_provided) {
    const item_provided = items.value.find(i => i.id === currentDialog.value?.item_provided);
    if (item_provided) {
      onItemProvided(item_provided as itemInterface);
      handleLeave();
    }
  }
}

function handleNextDialog() {
  if (currentDialog.value && dialogStepNumber.value + 1 < currentDialog.value.speech_written!.length) {
    dialogStepNumber.value++
  }
}

function handleKeydown(event: any) {
  if (event.key === "Escape") {
    handleLeave()
  }
}

</script>

<style lang="scss" scoped>
.vsk-dialog-container {
  position: absolute;
  left: 0;
  bottom: 20vh;
  width: 100%;

  .vsk-dialog-npc {
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    width: 96vw;
    max-width: 780px;
    height: 18vh;
    border-radius: 18vh;
    background-color: rgba(29, 27, 25, 0.9);

    .vsk-dialog-npc-author {
      position: absolute;
      left: 21%;
      transform: translate(-50%, -50%);

      color: white;
      font-size: 3.2vh;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    }

    .vsk-dialog-npc-dialog {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      text-align: center;

      color: white;
      font-size: 3.2vh;
    }

    .vsk-dialog-npc-next-icon {
      position: absolute;
      left: 50%;
      bottom: -3.4vh;
      cursor: pointer;
      animation: bounce 2s ease infinite;

      color: white;
      font-size: 5.8vh;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);

      cursor: pointer;
      transition: background-color 250ms ease-in;
      border-radius: 0.8vh;

      &:hover {
        background-color: rgba(255, 255, 255, 0.454);
      }
    }
  }
}
</style>
