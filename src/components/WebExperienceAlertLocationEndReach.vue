<template>
  <div>
    <VskCard :isActive="isLocationEndReach"
      @update:is-active="($event: boolean) => setIsLocationEndReach($event as boolean)">
      <template v-slot:content>

        <!-- TITRE-->
        <v-row no-gutters class="vsk-thumbnail-group-title mt-12">
          <v-col cols="12">
            <h3>test</h3>
          </v-col>
        </v-row>
      </template>
    </VskCard>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia'
import { useLocationStore } from "@/stores/location"
import VskCard from '@/layouts/VskCard.vue'

const locationStore = useLocationStore()
const { isLocationEndReach } = storeToRefs(locationStore)
const { setIsLocationEndReach } = locationStore
const router = useRouter()


// function updateIsActiveCard(event: boolean) {
//   if (!event) {
//     console.log('TETETETE')
//     router.push({ name: 'home' })
//     setIsLocationEndReach(false)
//   }
// }
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  color: white;
  font-size: 3.2vh;
}

.content {
  overflow-y: scroll;
  max-height: 45vh;
  border-top: solid 1px grey;

  div {
    width: 100%;
  }
}
</style>
