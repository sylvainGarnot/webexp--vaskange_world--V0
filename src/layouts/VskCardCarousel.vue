<template>
  <div>
    <v-dialog class="vsk-card-v-dialog" :modelValue="isActive" @update:modelValue="$event => onIsActiveUpdate($event)">
      <template v-slot:default>

        <v-card class="vsk-card-v-card">
          <div class="vsk-card-content">

            <v-row no-gutters>
              <v-carousel v-model="carouselStep" hide-delimiter-background>
                <template v-slot:prev="{ props }">
                </template>
                <template v-slot:next="{ props }">
                  <v-btn v-if="carouselStep < carouselItems!.length - 1" class="v-carousel-next-item" variant="elevated"
                    @click="props.onClick">{{ nextItemBtnLabel }}</v-btn>
                </template>
                <v-carousel-item v-for="carouselItem in carouselItems" :key="carouselItem.name">
                  <slot :name="carouselItem.name"></slot>
                </v-carousel-item>
              </v-carousel>
            </v-row>
          </div>

          <v-icon class="vsk-card-close" icon="$close" @click="close()"></v-icon>
        </v-card>

        <v-icon v-if="carouselStep === carouselItems!.length - 1" class="vsk-card-close-footer" icon="$vuetify"
          @click="close()"></v-icon>
      </template>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { ref } from 'vue';

const emit = defineEmits(['update:isActive', 'close'])

const props = defineProps({
  isActive: Boolean,
  carouselItems: Array as PropType<carouselItemInterface[]>,
  nextItemBtnLabel: String,
})

const carouselStep = ref(0);

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
  emit('close')
  setTimeout(() => {
    carouselStep.value = 0
  }, 250);
}

</script>

<style lang="scss">
.v-carousel {
  height: 600px !important;

  @media (max-width: 599px) {
    height: 680px !important;
  }
}

.v-carousel-next-item {
  position: absolute;
  bottom: 1.6vh;
  left: 50%;
  transform: translateX(-50%);
}

.v-carousel .v-carousel__controls {
  top: 0.8vh !important;
  left: 50% !important;
  transform: translateX(-50%);
  width: 50%;
}
</style>
