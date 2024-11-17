<template>
  <div class="vsk-thumbnail-triple mt-3" :style="`background-image: url(${backgroundUrl})`"
    :class="completed ? 'completed' : ''">
    <v-row no-gutters>
      <v-col class="vsk-thumbnail-triple--img-container" v-if="imagesUrl && imagesUrl.length > 0"
        :cols="12 / imagesUrl.length" align="center" v-for="imageUrl in imagesUrl">
        <div class="vsk-thumbnail-triple--img" :style="`background-image: url(${imageUrl})`"></div>
      </v-col>
    </v-row>

    <v-icon v-if="completed" class="vsk-thumbnail-triple--badge" size="large">mdi-star</v-icon>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  backgroundUrl: String,
  imagesUrl: Array,
  completed: Boolean,
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_global_variable.scss';

.vsk-thumbnail-triple {
  position: relative;
  height: 12vh;
  border-radius: $radiusValue;
  border: 2px solid $colorWhite;

  &.completed {
    border: 2px solid $colorGold;
  }

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .vsk-thumbnail-triple--img-container {
    height: 12vh;
    padding: $radiusValue;

    .vsk-thumbnail-triple--img {
      height: 100%;

      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;

      filter: drop-shadow(5px 10px 3px $colorBlackLight);
    }
  }

  .vsk-thumbnail-triple--badge {
    position: absolute;
    color: $colorGoldDark;
    right: -$radiusValue*1.1;
    top: -$radiusValue*1.6;
  }
}
</style>
