<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12" class="mt-3" v-for="location in locations">
        <VskThumbnail :location="location.name" :title="location.title" :image="location.image" />
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
    image: 'images/quest1.png',
    name: 'galaxie ✨',
  },
  {
    title: 'Quest 2',
    image: 'images/quest2.png',
    name: 'galaxie ✨',
  },
  {
    title: 'Quest 3',
    image: 'images/quest3_hide.png',
    name: 'galaxie ✨',
  },
  {
    title: 'Quest 4',
    image: 'images/quest4.png',
    name: 'galaxie ✨',
  },
])
</script>

<style lang="scss" scoped></style>
