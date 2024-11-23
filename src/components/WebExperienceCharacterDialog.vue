<template>
  <div id="vsk-dialog" class="vsk-dialog--overlay" :class="isOverlayActive ? 'overlay--active' : ''" v-if="isActive">
    <div class="vsk-dialog--container">
      <div class="vsk-dialog--npc">
        <span v-if="currentCharacter.label_dialog" class="vsk-dialog--npc-author">{{ currentCharacter!.label_dialog
          }}</span>
        <p class="vsk-dialog--npc-dialog" v-html="currentDialog?.speech_written[dialogStepNumber]">
        </p>
        <v-icon v-if="isHandleNextDialogActive" class="vsk-dialog--npc-next-icon btn-click-animation" icon="$vuetify"
          @click="handleNextDialog()"></v-icon>

        <!-- <TransitionGroup name="fade-top" tag="div">
        <WebExperienceCharacterDialogAnswer v-if="isAnswersActive" @repeat="handleNextDialog()" @leave="handleLeave()"
          @accepted="handleAccepted()" />
      </TransitionGroup> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { storeToRefs } from 'pinia';
import { useDialogStore } from "@/stores/dialog";
import { useCharacterStore } from "@/stores/character";
import { useItemStore } from "@/stores/item";
import { locations_found } from "@/stores/location/state";
// import type { itemInterface } from '@/stores/item/interface';
// import WebExperienceCharacterDialogAnswer from "@/components/WebExperienceCharacterDialogAnswer.vue";

const props = defineProps({
  type: String,
})

const characterStore = useCharacterStore();
const { currentCharacter } = storeToRefs(characterStore);

const dialogStore = useDialogStore();
const { currentDialog } = storeToRefs(dialogStore);

const itemStore = useItemStore();
const { items, items_acquired } = storeToRefs(itemStore);
// const { onItemProvided } = itemStore;


// DATA
const dialogStepNumber = ref(0);
const isHandleNextDialogActive = ref(true)
const timingBetweenStep = 850


// COMPUTED
const isActive = computed(() => {
  return dialogStepNumber.value !== -1;
})
const isAnswersActive = computed(() => {
  return currentDialog.value && dialogStepNumber.value + 1 >= currentDialog.value.speech_written!.length;
})
const isLastStepReach = computed(() => {
  if (currentDialog.value) {
    return dialogStepNumber.value >= currentDialog.value.speech_written.length - 1
  }
  return false
})
const isOverlayActive = computed(() => {
  return props.type === 'default--force' && (locations_found.value.length > 2 || items_acquired.value.length > 0)
})


// LIFE CYCLE
onMounted(() => {
  window.addEventListener("keydown", handleKeydown);

  handleIsHandleNextDialogActive()
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown)
})



// FUNCTION
function handleLeave() {
  dialogStepNumber.value = -1;
}

// function handleAccepted() {
//   if (currentDialog.value?.item_provided) {
//     const item_provided = items.value.find(i => i.id === currentDialog.value?.item_provided);
//     if (item_provided) {
//       onItemProvided(item_provided as itemInterface);
//       handleLeave();
//     }
//   }
// }

function handleNextDialog() {
  handleIsHandleNextDialogActive()
  if (currentDialog.value) {
    if (!isLastStepReach.value) {
      dialogStepNumber.value++
    } else {
      // dialogStepNumber.value = 
      handleLeave()
    }
  }
}

function handleIsHandleNextDialogActive() {
  if (props.type?.includes('force')) {
    isHandleNextDialogActive.value = false
    setTimeout(() => {
      isHandleNextDialogActive.value = true
    }, timingBetweenStep);
  }
}


function handleKeydown(event: any) {
  if (event.key === "Escape") {
    if (!props.type?.includes('force')) {
      handleLeave()
    } else if (isLastStepReach.value) {
      handleLeave()
    }
  }
  if (event.key === " " && isHandleNextDialogActive.value) {
    handleNextDialog()
  }
  if (event.key === "Enter" && isHandleNextDialogActive.value) {
    handleNextDialog()
  }
}

</script>

<style lang="scss" scoped>
@import '@/assets/styles/_global_variable.scss';

.vsk-dialog--overlay {

  .vsk-dialog--container {
    position: absolute;
    left: 0;
    bottom: 20vh;
    width: 100%;

    .vsk-dialog--npc {
      position: relative;
      left: 50%;
      transform: translateX(-50%);

      width: 96vw;
      max-width: 780px;
      height: 18vh;
      border-radius: 18vh;
      background-color: $colorBlackLight;

      .vsk-dialog--npc-author {
        position: absolute;
        left: 21%;
        transform: translate(-50%, -50%);

        color: $colorWhite;
        font-size: 3.2vh;
        text-shadow: $shadow;
      }

      .vsk-dialog--npc-dialog {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        text-align: center;

        color: $colorWhite;
        font-size: 2.85vh;
      }

      .vsk-dialog--npc-next-icon {
        position: absolute;
        left: 50%;
        bottom: -3.4vh;
        cursor: pointer;
        animation: bounce 2s ease infinite;

        color: $colorWhite;
        font-size: 5.8vh;
        text-shadow: $shadow;

        cursor: pointer;
        transition: background-color 250ms ease-in;
        border-radius: $radiusValue;

        &:hover {
          background-color: $colorWhiteLightMax;
        }
      }
    }
  }

  &.overlay--active {
    position: fixed;
    overflow-y: scroll;
    inset: 0;
    background-color: $colorBlackLightUltra;

    .vsk-dialog--npc {
      max-width: 1380px;
      max-height: 350px;
      height: 35vh;
      border-radius: 12vh;
    }
  }
}
</style>

<style lang="scss">
@import '@/assets/styles/_global_variable.scss';

.vsk-dialog--npc-dialog {
  a {
    color: $colorGrey !important;
  }

  img {
    max-width: 75px;
    width: 6.5vh;
    margin: 20px 10px 0 10px;
  }
}
</style>
