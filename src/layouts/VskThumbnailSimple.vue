<template>
  <div class="vsk-thumbnail mt-3" :class="link ? 'active' : ''" @click="onClick()">
    <div v-if="link" class="vsk-thumbnail--background-layout"></div>
    <img loading="lazy" class="vsk-thumbnail--background" :class="completed ? 'completed' : ''" :src="backgroundUrl" />

    <v-row v-if="imagesUrl && imagesUrl.length > 0" no-gutters class="vsk-thumbnail--img-container-row">
      <v-col class="vsk-thumbnail--img-container-col" v-if="imagesUrl && imagesUrl.length > 0"
        :cols="12 / imagesUrl.length" align="center" v-for="imageUrl in imagesUrl">
        <div class="vsk-thumbnail--img" :style="`background-image: url(${imageUrl})`"></div>
      </v-col>
    </v-row>

    <div class="vsk-thumbnail--title"><span>{{ title }}</span></div>
    <span v-if="description" class="vsk-thumbnail--description">{{ description }}</span>

    <v-icon v-if="completed" class="vsk-thumbnail--badge" size="large">mdi-star</v-icon>
  </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import { playSound } from '@/stores/music/action';
const router = useRouter();
const route = useRoute();
const emit = defineEmits(['router-push'])

const props = defineProps({
  title: String,
  description: String,
  link: String,
  backgroundUrl: String,
  imagesUrl: Array,
  completed: Boolean,
})

function onClick() {
  playSound('son_bouton_teleportation')
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
@import '@/assets/styles/_global_variable.scss';

.vsk-thumbnail,
.vsk-thumbnail img,
.vsk-thumbnail .vsk-thumbnail--background,
.vsk-thumbnail .vsk-thumbnail--background-layout {
  border-radius: $radiusValue;
}

.vsk-thumbnail {
  width: 100%;
  height: 14vh;
  position: relative;

  .vsk-thumbnail--title {
    position: absolute;
    top: 0;
    left: 0;
    padding-left: $radiusValue;
  }

  span.vsk-thumbnail--description {
    position: absolute;
    bottom: 0.4vh;
    right: 0.4vh;

    background-color: $colorBlackLightMax;
    border-radius: $radiusValue;
    padding: 0 1vh;

    color: $colorWhite;
    font-size: 1.5vh;
    font-weight: 500;
  }

  img.vsk-thumbnail--background {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .vsk-thumbnail--background-layout {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: background-color 250ms ease-in;

    &:hover {
      background-color: $colorWhiteLightMax;
    }
  }
}

// ACTIVE
.vsk-thumbnail.active {
  .vsk-thumbnail--title {
    color: $colorWhite;
    font-size: 2.5vh;
    font-weight: 700;
    text-shadow: $shadow;
    white-space: nowrap;
  }

  img.vsk-thumbnail--background {
    border: 2px solid $colorWhite;

    &.completed {
      border: 2px solid $colorGold;
    }
  }

  .vsk-thumbnail--img-container-row {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 70%;
    width: 70%;

    .vsk-thumbnail--img-container-col {

      .vsk-thumbnail--img {
        height: 100%;

        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;

        filter: drop-shadow(5px 10px 3px $colorBlackLight);
      }
    }
  }

  .vsk-thumbnail--badge {
    position: absolute;
    color: $colorGoldDark;
    right: -$radiusValue*1.1;
    top: -$radiusValue*1.6;
  }
}

// NOT ACTIVE
.vsk-thumbnail {
  .vsk-thumbnail--title {
    color: $colorWhite;
    font-size: 1.8vh;
    font-weight: 700;
    text-shadow: $shadow;
    white-space: nowrap;
  }

  img.vsk-thumbnail--background {
    border: 2px solid $colorGrey;
  }
}
</style>
