<template>
  <div class="vsk-thumbnail-card mt-3">
    <v-row no-gutters class="mt-2">
      <v-col cols="4">
        <v-img class="vsk-thumbnail-card-image" :src="imageUrl">
        </v-img>
      </v-col>
      <v-col cols="8">
        <v-card-title class="vsk-thumbnail-card-title">
          {{ title }}
          <v-divider :thickness="1" class="border-opacity-50 mt-3" color="grey"></v-divider>
        </v-card-title>
        <v-card-text class="vsk-thumbnail-card-description mt-1">
          {{ description }}
        </v-card-text>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  imageUrl: String,
  description: String,
})
</script>

<style lang="scss" scoped>
.vsk-thumbnail-card {
  width: 100%;
  height: 12vh;
  border-radius: 0.8vh;
  position: relative;
  border: solid 1px grey;

  .vsk-thumbnail-card-image {
    width: 75%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .vsk-thumbnail-card-title {
    color: white;
    font-size: 2.3vh;
    font-weight: 700;
    line-height: 1;
  }

  .vsk-thumbnail-card-description {
    color: white;
    font-size: 1.4vh;
    font-weight: 300;
    line-height: 1.2;
  }

}
</style>
