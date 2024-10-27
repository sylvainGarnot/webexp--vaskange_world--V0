<template>
  <div>
    <v-dialog class="vsk-card-v-dialog" :modelValue="isActive" @update:modelValue="$event => onIsActiveUpdate($event)"
      :class="hasList ? 'mode-list' : ''">
      <template v-slot:default>

        <v-card class="vsk-card-v-card" :class="hasList ? 'mode-list' : ''">
          <div class="vsk-card-content" :class="hasList ? 'mode-list' : ''">

            <!-- CONTENT -->
            <v-row no-gutters :class="hasList ? '' : 'my-12'">
              <slot name="content"></slot>
            </v-row>
          </div>

          <v-icon class="vsk-card-close btn-click-animation" icon="$close" @click="
            close()"></v-icon>
        </v-card>

        <v-icon v-if="hasCloseFooter" class="vsk-card-close-footer btn-click-animation" icon="$vuetify"
          @click="close()"></v-icon>
      </template>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['update:isActive', 'close'])

const props = defineProps({
  isActive: Boolean,
  hasList: Boolean,
  hasCloseFooter: Boolean,
})

function onIsActiveUpdate(event: boolean) {
  if (event) {
    emit('update:isActive', true)
  } else {
    close()
  }
}

function close() {
  emit('update:isActive', false)
  emit('close')
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

  .vsk-card-close-footer {
    position: absolute;
    left: 50%;
    bottom: -1.8vh;
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
</style>
