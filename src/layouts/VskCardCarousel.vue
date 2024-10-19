<template>
  <div>
    <v-dialog class="vsk-card-v-dialog" :modelValue="isActive"
      @update:modelValue="$event => $emit('update:isActive', $event)">
      <template v-slot:default>

        <v-card class="vsk-card-v-card">
          <div class="vsk-card-content">

            <!-- CONTENT -->
            <v-row no-gutters>
              <v-carousel :continuous="false" hide-delimiter-background>
                <template v-slot:prev="{ props }">
                </template>
                <template v-slot:next="{ props }">
                  <v-btn class="v-carousel-next-item" variant="elevated" @click="props.onClick">Next slide</v-btn>
                </template>
                <v-carousel-item v-for="carouselItem in carouselItems" :key="carouselItem.name">
                  <slot :name="carouselItem.name"></slot>
                </v-carousel-item>
              </v-carousel>
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
import type { PropType } from 'vue';

const emit = defineEmits(['update:isActive'])

const props = defineProps({
  isActive: Boolean,
  hasCloseFooter: Boolean,
  carouselItems: Array as PropType<carouselItemInterface[]>,
})


interface carouselItemInterface {
  name: string,
}

</script>

<style lang="scss" scoped>
.v-carousel-next-item {
  position: absolute;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);
}

.v-carousel__controls {
  //   bottom: 0;
}
</style>
