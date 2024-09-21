<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12" class="mt-3" v-for="location in locations">
        <VskThumbnail :location="location.name" :title="location.title" :image="location.image" />
      </v-col>
    </v-row>

    <v-row no-gutters class="mt-6">
      <div>
        <p class="text-center">
          secret places 🕵️:
        </p>
      </div>
      <v-col cols="12" class="mt-1" v-for="location in secret_locations">
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
    title: 'Home',
    image: 'images/home.png',
    name: 'bureau 🏠',
  },
  {
    title: 'Rocks',
    image: 'images/rock-world2.png',
    name: 'galaxie ✨',
  },
  {
    title: 'Holidays',
    image: 'images/holiday.png',
    name: 'prairie 🌳',
  },
  {
    title: 'Space',
    image: 'images/space.png',
    name: 'galaxie ✨',
  },
])
const secret_locations = ref([
  {
    title: 'Explore to find secret places!',
    image: 'images/q3 start.png',
    name: 'galaxie ✨',
  },
])
</script>

<style lang="scss" scoped>
p {
  color: rgb(139, 139, 139);
}
</style>
