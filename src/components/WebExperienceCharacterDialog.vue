<template>
  <div id="vsk-dialog" class="vsk-dialog--overlay" :class="classes" v-if="isActive">

    <!-- ILLUSTRATION -->
    <v-row v-if="isLarge && currentDialog!.speech_illustrations_url" no-gutters class="vsk-dialog--illustration">
      <div class="vsk-dialog--illustration-container">
        <img loading="lazy" :src="currentDialog.speech_illustrations_url[dialogStepNumber]" />
      </div>
    </v-row>

    <div class="vsk-dialog--container">
      <div class="vsk-dialog--npc">
        <span v-if="currentCharacter.label_dialog" class="vsk-dialog--npc-author">{{ currentCharacter!.label_dialog
          }}</span>
        <p class="vsk-dialog--npc-dialog" v-html="currentDialog?.speech_written[dialogStepNumber]">
        </p>

        <!-- LARGE MODE -->
        <div v-if="isLarge">
          <v-row no-gutters class="vsk-dialog--npc-next-icon--large-container">
            <v-col cols="6" align="center">
              <v-btn class="v-btn--transparent">
                <img src="/icon/fleche-left.png" @click="handlePreviousDialog()" />
              </v-btn>
            </v-col>
            <v-col cols="6" align="center">
              <v-btn class="v-btn--transparent">
                <img src="/icon/fleche-right.png" @click="handleNextDialog()">
              </v-btn>
            </v-col>
          </v-row>
        </div>

        <!-- DEFAULT MODE -->
        <v-row v-else class="vsk-dialog--npc-next-icon--container">
          <v-col cols="12" align="center">
            <v-btn class="v-btn--transparent">
              <img src="/icon/fleche.png" @click="handleNextDialog()" />
            </v-btn>
          </v-col>
        </v-row>

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
  playSound('son_bouton_click')
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
  playSound('son_bouton_click')
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


// ILLUSTRATION
.large {
  .vsk-dialog--illustration {
    position: fixed;
    inset: 0;
    top: 37.5% - 35%;
    height: 35%;

    @media (max-width: 599px) {
      top: 30% - 21.5%;
      height: 21.5%;
    }

    .vsk-dialog--illustration-container {
      height: 100%;

      img {
        border-radius: 3.5vh;
        padding: $radiusValue*2;
        width: auto;
        height: 100%;
        border: 0 solid;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        filter: drop-shadow(5px 10px 3px $colorBlackLight);
      }
    }
  }
}

// BULLE DIALOGUE
.large {
  .vsk-dialog--container {
    top: 37.5vh; // bottom: 15vh;

    @media (max-width: 599px) {
      top: 30vh; // bottom: 18.5vh;
    }
  }
}

.vsk-dialog--container {
  position: absolute;
  left: 0;
  bottom: 22.5vh; // bottom: 15vh;
  width: 100%;

  @media (max-width: 599px) {
    bottom: 22.5vh; // bottom: 18.5vh;
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
      font-size: 2.5vh;
    }

    .vsk-dialog--npc-next-icon--container {
      img {
        animation: bounceV 2s ease infinite;
      }
    }

    .vsk-dialog--npc-next-icon--large-container,
    .vsk-dialog--npc-next-icon--container {

      position: absolute;
      left: 50%;
      bottom: -4.2vh;
      transform: translateX(-50%);
    }
  }

  .vsk-dialog--count {
    position: absolute;
    right: 5%;
    bottom: 5%;

    color: $colorWhite;
    font-size: 2.8vh;
    font-weight: 700;
    text-shadow: $shadow;
  }
}

.vsk-dialog--overlay {

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
