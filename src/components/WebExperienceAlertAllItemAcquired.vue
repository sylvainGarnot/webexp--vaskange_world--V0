<template>
  <div>
    <VskCard :isActive="isActive" @update:isActive="($event: boolean) => $emit('update:isActive', $event as boolean)">
      <template v-slot:content>

        <v-row no-gutters class="message mt-4">
          <v-col cols="12" align="center">
            <h3>Félicitations !</h3>
          </v-col>
          <v-col cols="12" align="center">
            <p>Vous avez trouvé tout les secrets de ce jeu</p>
            <p>Vous pouvez maintenant aller dans la zone final</p>
            <p>en cliquant sur ce lien ci-dessous</p>
            <p>Des récompenses vous attendent</p>
          </v-col>
        </v-row>

        <v-row no-gutters class="links mt-12 mx-12">
          <VskThumbnail :title="theHiddenPlace?.name" :imageUrl="`${theHiddenPlace?.image_url}`"
            :link="theHiddenPlace?.name" @router-push="$emit('update:isActive', false)" />
        </v-row>
      </template>
    </VskCard>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useLocationStore } from "@/stores/location";

import VskCard from '@/layouts/VskCard.vue'
import VskThumbnail from '@/layouts/VskThumbnail.vue'

const emit = defineEmits(['update:isActive'])

const props = defineProps({
  isActive: Boolean,
})

const locationStore = useLocationStore();
const { theHiddenPlace } = storeToRefs(locationStore);

</script>

<style lang="scss" scoped>
.message {
  color: white;

  h3 {
    font-size: 4.6vh;
  }

  p {
    font-size: 2.1vh;
  }
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
