<template>
  <div>
    <div class="vsk-thumbnail" @click="router.push({ name: 'home', query: { location: location } })">
      <img :src="`src/assets/${image}`" />
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
  title: String,
  image: String,
  location: String,
  link: String,
})
</script>

<style lang="scss" scoped>
.vsk-thumbnail,
.vsk-thumbnail img {
  border-radius: 10px;
}

.vsk-thumbnail {
  width: 100%;
  height: 11vh;
  cursor: pointer;
  position: relative;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 2px solid #9A843A;
  }
}
</style>
