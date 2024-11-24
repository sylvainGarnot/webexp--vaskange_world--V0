<template>
  <div>
    <v-dialog class="vsk-card-v-dialog" :modelValue="isActive" @update:modelValue="$event => onIsActiveUpdate($event)">
      <template v-slot:default>

        <v-card class="vsk-card-v-card">
          <div class="vsk-card-content">

            <v-row no-gutters>
              <v-carousel v-model="carouselStep" hide-delimiter-background>
                <v-carousel-item v-for="carouselItem in carouselItems" :key="carouselItem.name">
                  <slot :name="carouselItem.name"></slot>
                </v-carousel-item>
              </v-carousel>
            </v-row>
          </div>

          <v-icon class="vsk-card-close btn-click-animation" icon="$close" @click="close()"></v-icon>
        </v-card>

        <img v-if="carouselStep === carouselItems!.length - 1" class="vsk-card-close-footer btn-click-animation"
          src="/icon/fleche.png" @click="close()" />
      </template>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { ref } from 'vue';

const emit = defineEmits(['update:isActive', 'close', 'close-first-time'])

const props = defineProps({
  isActive: Boolean,
  carouselItems: Array as PropType<carouselItemInterface[]>,
})

const carouselStep = ref(0);
let closeOccuration = 0

interface carouselItemInterface {
  name: string,
}

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
  setTimeout(() => {
    carouselStep.value = 0
  }, 250);
}

</script>

<style lang="scss">
@import '@/assets/styles/_global_variable.scss';

.v-carousel {
  height: 54vh !important;
  max-height: 780px !important;

  .v-window__controls {
    .v-btn {
      opacity: 0.25;
      transition: opacity 350ms ease;

      &:hover {
        opacity: 1;
      }
    }

    @media (max-width: 599px) {
      .v-window__left {
        left: -15px;
      }

      .v-window__right {
        right: -15px;
      }
    }
  }

  .v-carousel__controls {
    bottom: $radiusValue !important;

    @media (max-width: 599px) {
      .v-carousel__controls__item {
        margin: 2px !important;
      }
    }
  }

  @media (max-width: 599px) {
    height: 62vh !important;
  }

  @media (min-width: 600px) {
    .v-carousel-item {
      margin: 0px calc(82.5px + $radiusValue);
    }
  }

}

img.vsk-card-close-footer {
  bottom: -4.2vh !important;
}
</style>
