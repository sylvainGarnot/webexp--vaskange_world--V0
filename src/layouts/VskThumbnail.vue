<template>
  <div>
    <div class="vsk-thumbnail" @click="onClick()">
      <img :src="imageUrl" />
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const emit = defineEmits(['router-push'])

const props = defineProps({
  title: String,
  imageUrl: String,
  location: String,
  link: String,
})

function onClick() {
  if (route.query.location === props.location) {
    router.push({ name: 'home' });
    setTimeout(() => {
      router.push({ name: 'home', query: { location: props.location } });
    }, 100);
  } else {
    router.push({ name: 'home', query: { location: props.location } });
  }
  emit('router-push')
}
</script>

<style lang="scss" scoped>
.vsk-thumbnail,
.vsk-thumbnail img {
  border-radius: 0.8vh;
}

.vsk-thumbnail {
  width: 100%;
  height: 12vh;
  cursor: pointer;
  position: relative;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: white;
    font-family: 'Gill Sans';
    font-size: 2.8vh;
    font-weight: 700;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    white-space: nowrap;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 2px solid #9A843A;
  }
}
</style>
