<template>
  <div class="vsk-thumbnail-triple mt-3" :style="`background-image: url(${backgroundUrl})`">
    <v-row no-gutters>
      <v-col class="vsk-thumbnail-triple--img-container" v-if="imagesUrl && imagesUrl.length > 0"
        :cols="12 / imagesUrl.length" align="center" v-for="imageUrl in imagesUrl">
        <div class="vsk-thumbnail-triple--img" :style="`background-image: url(${imageUrl})`"></div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  backgroundUrl: String,
  imagesUrl: Array,
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_global_variable.scss';

.vsk-thumbnail-triple {
  height: 12vh;
  border: 2px solid $colorGold;
  border-radius: $radiusValue;

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
}
</style>
