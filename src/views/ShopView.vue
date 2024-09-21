<template>
  <div class="container px-9 mt-15">
    <v-row no-gutters>
      <h2>Magasin :</h2>
      <Shop />
    </v-row>
    <v-row no-gutters class="mt-15 pb-15">
      <h2>À Propos :</h2>
      <About />
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import Shop from '@/components/Shop.vue'
import About from '@/components/About.vue'

</script>

<style lang="scss" scoped></style>
