<template>
  <div>
    <v-dialog class="vsk-card-v-dialog" :modelValue="isActive"
      @update:modelValue="$event => $emit('update:isActive', $event)" :class="hasList ? 'mode-list' : ''">
      <template v-slot:default>

        <v-card class="vsk-card-v-card" :class="hasList ? 'mode-list' : ''">
          <div class="vsk-card-content" :class="hasList ? 'mode-list' : ''">

            <!-- CONTENT -->
            <v-row no-gutters :class="hasList ? '' : 'my-12'">
              <slot name="content"></slot>
            </v-row>
          </div>

          <v-icon class="vsk-card-close" icon="$close" @click="$emit('update:isActive', false)"></v-icon>
        </v-card>

        <v-icon v-if="hasCloseFooter" class="vsk-card-close-footer" icon="$vuetify"
          @click="$emit('update:isActive', false)"></v-icon>
      </template>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['update:isActive'])

const props = defineProps({
  isActive: Boolean,
  hasList: Boolean,
  hasCloseFooter: Boolean,
})
</script>

<style lang="scss">
.vsk-card-v-dialog {
  width: 100%;
  max-width: 780px;

  &.mode-list {
    max-width: 540px;
  }

  .vsk-card-v-card {
    border-radius: 0.8vh;
    background-color: rgba(29, 27, 25, 0.8);

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
      border-radius: 0.8vh;
      border: solid 1px grey;
      background-color: rgba(29, 27, 25, 0.8);

    }

    .vsk-card-close {
      position: absolute;
      cursor: pointer;

      color: white;
      font-size: 4.2vh;
      border-radius: 0.8vh;
      transition: background-color 250ms ease-in;

      &:hover {
        background-color: grey;
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
    cursor: pointer;
    animation: bounce 2s ease infinite;

    color: white;
    font-size: 5.8vh;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    border-radius: 0.8vh;
    transition: background-color 250ms ease-in;

    &:hover {
      background-color: grey;
    }
  }
}
</style>
