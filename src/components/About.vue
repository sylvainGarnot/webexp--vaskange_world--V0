<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12" class="mt-3" v-for="location in locations">
        <VskThumbnail :link="location.link" :title="location.title" :image="location.image" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import VskThumbnail from '@/layouts/VskThumbnail.vue'

const locations = ref([
  {
    title: 'Quest 1',
    image: 'images/support2.png',
    link: 'https://www.buymeacoffee.com/vaskange',
  },
  {
    title: 'Quest 2',
    image: 'images/shop2.png',
    link: 'https://www.inprnt.com/frames/vaskange/',
  },
])
</script>

<style lang="scss" scoped></style>
