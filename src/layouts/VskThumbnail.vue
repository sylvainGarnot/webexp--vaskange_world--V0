<template>
  <div class="vsk-thumbnail mt-3" @click="onClick()">
    <div v-if="link" class="vsk-thumbnail-background"></div>
    <img :src="imageUrl" />
    <span class="title">{{ title }}</span>
    <span v-if="description" class="description">{{ description }}</span>
  </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const emit = defineEmits(['router-push'])

const props = defineProps({
  title: String,
  description: String,
  imageUrl: String,
  link: String,
})

function onClick() {
  if (props.link) {
    if (route.query.location === props.link) {
      router.push({ name: 'home' });
      setTimeout(() => {
        router.push({ name: 'home', query: { location: props.link } });
      }, 100);
    } else {
      router.push({ name: 'home', query: { location: props.link } });
    }
    emit('router-push')
  }
}
</script>

<style lang="scss" scoped>
.vsk-thumbnail,
.vsk-thumbnail img,
.vsk-thumbnail .vsk-thumbnail-background {
  border-radius: 0.8vh;
}

.vsk-thumbnail {
  width: 100%;
  height: 12vh;
  position: relative;

  span.title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: white;
    font-size: 2.8vh;
    font-weight: 700;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    white-space: nowrap;
  }

  span.description {
    position: absolute;
    bottom: 0.4vh;
    right: 0.4vh;

    background-color: rgba(29, 27, 25, 0.8);
    border-radius: 0.8vh;
    padding: 0 1vh;

    color: white;
    font-size: 1.5vh;
    font-weight: 500;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 2px solid #9A843A;
  }

  .vsk-thumbnail-background {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: background-color 250ms ease-in;

    &:hover {
      background-color: rgba(255, 255, 255, 0.454);
    }
  }
}
</style>
