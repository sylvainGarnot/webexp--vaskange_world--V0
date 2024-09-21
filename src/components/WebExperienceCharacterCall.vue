<template>
  <div>
    <div v-if="!isActive" class="vsk-bookmark-toast-container"
      :style="`top: ${top}px; left: ${left}px; width: ${width}px; height: ${height}px;`">
      <div class="vsk-bookmark-toast-arrow-container"
        :style="`width: ${(width * 0.2 + 6) * 2}px; height: ${width * 0.4 + 6}px;`">
        <div class="vsk-bookmark-toast-arrow-border"
          :style="`border-left: ${width * 0.2 + 6}px solid transparent; border-right: ${width * 0.2 + 6}px solid transparent; border-top: ${width * 0.4 + 6}px solid black;`">
        </div>
        <div class="vsk-bookmark-toast-arrow"
          :style="`border-left: ${width * 0.2}px solid transparent; border-right: ${width * 0.2}px solid transparent; border-top: ${width * 0.4}px solid white;`">
        </div>
      </div>
      <div class="vsk-bookmark-toast-content" v-if="!isNearby">
        <span class="vsk-bookmark-toast-content-1"
          :style="`line-height: ${height}px; font-size: ${height * 0.3}px;`">Hello
          !!</span>
      </div>
      <div class="vsk-bookmark-toast-content" v-else>
        <span class="vsk-bookmark-toast-content-2"
          :style="`line-height: ${height * 0.75}px; font-size: ${height * 0.2}px;`">Wanna Talk ?</span>
        <v-btn variant="elevated" color="blue" prepend-icon="$vuetify" :style="`font-size: ${height * 0.075}px;`"
          @click="handleDialog()">
          Yes
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, watch } from 'vue';
import { storeToRefs } from 'pinia'

import { useEffectStore } from "@/stores/effect/index";
import { useDialogStore } from "@/stores/dialog/index";

const dialogStore = useDialogStore();
const { isActive } = storeToRefs(dialogStore);
const { setIsActive, setStepNumber } = useDialogStore();

const { playEffect } = useEffectStore();

const props = defineProps({
  top: Number,
  left: Number,
  width: Number,
  height: Number,
})

function handleDialog() {
  setIsActive(true);
  setStepNumber(0);
  playEffect('patu');
}


const isNearby = computed(() => {
  return props.width >= 250 as boolean;
})

watch(isNearby, value => {
  if (value) {
    playEffect('patu');
  }
});


</script>

<style lang="scss" scoped>
.vsk-bookmark-toast-container,
.vsk-bookmark-toast-arrow-container,
.vsk-bookmark-toast-arrow-border,
.vsk-bookmark-toast-arrow,
.vsk-bookmark-toast-content {
  position: absolute;
}

.vsk-bookmark-toast-container {
  border: solid 3px black;
  border-radius: 100%;

  .vsk-bookmark-toast-arrow-container {
    right: -15%;
    top: 65%;
    transform: rotate(-40deg);
    // border: solid 1px green; // TEST

    .vsk-bookmark-toast-arrow-border {}

    .vsk-bookmark-toast-arrow {
      top: 3px;
      left: 6px;
    }
  }

  .vsk-bookmark-toast-content {
    background-color: white;
    border-radius: 100%;
    width: 100%;
    height: 100%;
    text-align: center;

    .v-btn {
      top: -10%;
      width: 35%;
      height: 20%;
    }
  }
}
</style>
