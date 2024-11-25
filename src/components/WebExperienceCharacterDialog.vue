<template>
  <div id="vsk-dialog" class="vsk-dialog--overlay" :class="classes" v-if="isActive">
    <div class="vsk-dialog--container">
      <div class="vsk-dialog--npc">
        <span v-if="currentCharacter.label_dialog" class="vsk-dialog--npc-author">{{ currentCharacter!.label_dialog
          }}</span>
        <p class="vsk-dialog--npc-dialog" v-html="currentDialog?.speech_written[dialogStepNumber]">
        </p>

        <div v-if="isLarge">
          <v-row no-gutters class="vsk-dialog--npc-next-icon--large-container">
            <v-col cols="auto">
              <v-btn>
                <img src="/icon/fleche-left.png" @click="handlePreviousDialog()" />
              </v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn>
                <img src="/icon/fleche-right.png" @click="handleNextDialog()">
              </v-btn>
            </v-col>
          </v-row>
        </div>
        <img v-else class="vsk-dialog--npc-next-icon" src="/icon/fleche.png" @click="handleNextDialog()" />

        <div v-if="isLarge" class="vsk-dialog--count">
          <span>{{ dialogStepNumber + 1 }} / {{ currentDialog?.speech_written!.length }}</span>
        </div>

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
import { setIsDialogMentionLegalActive, setIsDialogRegleRead } from "@/stores/dialog/action";
import { isDialogRegleRead } from "@/stores/dialog/state";
import { playSound } from "@/stores/music/action";
// import type { itemInterface } from '@/stores/item/interface';
// import WebExperienceCharacterDialogAnswer from "@/components/WebExperienceCharacterDialogAnswer.vue";

const props = defineProps({
  type: String,
  isLarge: Boolean,
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
const timingBetweenStep = 750


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

const isReadingMandatory = computed(() => {
  return props.type?.includes('force') && locations_found.value.length <= 3 && items_acquired.value.length === 0 && !isDialogRegleRead.value
})

const classes = computed(() => {
  let result = ''
  if (isReadingMandatory.value) {
    result += 'overlay--active '
  }
  if (props.isLarge) {
    result += 'large '
  }
  return result
})


// LIFE CYCLE
onMounted(() => {
  window.addEventListener("keydown", handleKeydown);

  handleIsHandleNextDialogActive()

  if (currentDialog.value?.type.includes('mention-legal')) {
    setIsDialogMentionLegalActive(true)
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown)
  setIsDialogMentionLegalActive(false)
})



// FUNCTION
function handleLeave() {
  dialogStepNumber.value = -1;
  setIsDialogMentionLegalActive(false)

  setIsDialogRegleRead(true)
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

function handlePreviousDialog() {
  if (dialogStepNumber.value > 0) {
    dialogStepNumber.value--
  }
  playSound('son_bouton_1')
}

function handleNextDialog() {
  if (isHandleNextDialogActive.value) {
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
  playSound('son_bouton_1')
}

function handleIsHandleNextDialogActive() {
  if (isReadingMandatory.value) {
    isHandleNextDialogActive.value = false
    setTimeout(() => {
      isHandleNextDialogActive.value = true
    }, timingBetweenStep);
  }
}


function handleKeydown(event: any) {
  if (event.key === "Escape") {
    if (!isReadingMandatory.value) {
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
    bottom: 22vh;
    width: 100%;

    @media (max-width: 599px) {
      bottom: 32vh;
    }

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

      img.vsk-dialog--npc-next-icon {
        position: absolute;
        left: 50%;
        bottom: -4.2vh;
        cursor: pointer;
        animation: bounce 2s ease infinite;
        width: 6.5vh;
      }

      .vsk-dialog--npc-next-icon--large-container {
        position: absolute;
        left: 50%;
        bottom: -4.2vh;
        transform: translateX(-50%);

        .v-btn {
          background: transparent;
          box-shadow: none;
          height: auto;
        }

        img {
          margin: 0 20px;
          width: 6.5vh;
        }
      }
    }

    .vsk-dialog--count {
      position: absolute;
      right: 10%;
      bottom: 0;

      color: $colorWhite;
      font-size: 3.2vh;
      text-shadow: $shadow;
    }
  }

  &.overlay--active {
    position: fixed;
    overflow-y: scroll;
    inset: 0;
    background-color: $colorBlackLightUltra;
  }

  &.large {
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
    font-weight: 700;
  }

  i {
    color: $colorGold;
  }

  span {
    font-size: 1.4vh;
  }

  img {
    max-width: 75px;
    width: 6.5vh;
    margin: 20px 10px 0 10px;
  }
}
</style>
