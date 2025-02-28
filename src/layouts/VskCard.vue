<template>
  <div>
    <v-dialog class="vsk-card-v-dialog" :modelValue="isActive" @update:modelValue="$event => onIsActiveUpdate($event)"
      :class="hasList ? 'mode-list' : ''">
      <template v-slot:default>

        <v-card class="vsk-card-v-card" :class="hasList ? 'mode-list' : ''">
          <div class="vsk-card-content" :class="hasList ? 'mode-list' : ''">

            <!-- CONTENT -->
            <div :class="hasList ? '' : 'my-12'">
              <slot name="content"></slot>
            </div>
          </div>

          <v-icon v-if="hasCloseBtn" class="vsk-card-close btn-click-animation" icon="$close" @click="
            close()"></v-icon>
        </v-card>

        <img v-if="hasCloseFooter" class="vsk-card-close-footer btn-click-animation" src="/icon/fleche.png"
          @click="close()" />
      </template>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['update:isActive', 'close', 'close-first-time'])

const props = defineProps({
  isActive: Boolean,
  hasList: Boolean,
  hasCloseFooter: Boolean,
  hasCloseBtn: {
    type: Boolean,
    default: true,
  }
})

let closeOccuration = 0

function onIsActiveUpdate(event: boolean) {
  if (event) {
    emit('update:isActive', true)
  } else {
    close()
  }
}

function close() {
  emit('update:isActive', false)
  if (closeOccuration > 0) {
    emit('close')
  } else {
    emit('close')
    emit('close-first-time')
  }
  closeOccuration++
}

</script>

<style lang="scss">
@import '@/assets/styles/_global_variable.scss';

.vsk-card-v-dialog {
  width: 100%;
  max-width: 780px;

  &.mode-list {
    max-width: 540px;
  }

  .vsk-card-v-card {
    border-radius: 0.8vh !important;
    background-color: $colorBlackLightMax;

    overflow-y: hidden !important;
    width: 100%;

    &.mode-list {
      position: absolute;
      top: -50vh + 15vh;
    }

    .vsk-card-content {
      padding: 0 1vh;

      &.mode-list {
        padding: 0;
      }

      margin: 1vh;
      border-radius: $radiusValue;
      border: solid 1px $colorGrey;
      background-color: $colorBlackLightMax;

    }

    .vsk-card-close {
      position: absolute;

      color: $colorWhite;
      font-size: 4.2vh;
      border-radius: $radiusValue;

      cursor: pointer;
      transition: background-color 250ms ease-in;

      &:hover {
        background-color: $colorWhiteLightMax;
      }
    }

    .vsk-card-close {
      right: 1.35vh;
      top: 1.35vh;
    }
  }

  img.vsk-card-close-footer {
    position: absolute;
    left: 50%;
    bottom: -1.8vh;
    animation: bounce 2s ease infinite;
    width: 6.5vh;

    cursor: pointer;
    transition: background-color 250ms ease-in;
  }
}
</style>
