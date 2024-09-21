<template>
  <div id="menu" :class="route.name === 'home' ? 'is-home' : ''">
    <v-row no-gutters>
      <v-col v-for="element in menuElements" :cols="isCurrentRoute(element.route) ? '4' : '2'" class="menu-element"
        :class="isCurrentRoute(element.route) ? 'active' : ''" @click="router.push({ name: element.route })">
        <v-icon v-if="isCurrentRoute(element.route)" icon="mdi-chevron-left"
          class="menu-element-arrow menu-element-arrow-left"></v-icon>
        <img class="menu-element-img" :src="`src/assets/${element.image}`" />
        <v-badge class="menu-element-badge" color="error" content="6" inline></v-badge>
        <v-icon v-if="isCurrentRoute(element.route)" class="menu-element-arrow menu-element-arrow-right"
          icon="mdi-chevron-right"></v-icon>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useSwipeEvents } from "./TheMenuSwipeEvents.js";

const route = useRoute();
const router = useRouter();

const menuElements = ref([
  {
    image: 'icones/home-kawai.png',
    route: 'inventory',
  },
  {
    image: 'icones/map.png',
    route: 'quest',
  },
  {
    image: 'icones/joystick.png',
    route: 'home',
  },
  {
    image: 'icones/map.png',
    route: 'map',
  },
  {
    image: 'icones/home-kawai.png',
    route: 'shop',
  },
])

function isCurrentRoute(r) {
  if (r === route.name) {
    return true;
  }
  return false;
}

useSwipeEvents();

window.addEventListener("swipeLeft", () => {
  router.push({ name: route.meta.leftRouteName })
}, false);
window.addEventListener("swipeRight", () => {
  router.push({ name: route.meta.rightRouteName })
}, false);


</script>

<style lang="scss" scoped>
#menu {
  .menu-element {
    cursor: pointer;
    background-color: #666666;
    border-top: solid 1px white;
    border-left: solid 1px white;
    border-right: solid 1px white;
  }

  &.is-home {
    .menu-element {
      border-top: 0;
    }
  }
}

#menu {
  bottom: 0;
  width: 100%;
  height: 100%;

  .v-row,
  .menu-element {
    height: 100%;
    position: relative;
  }

  .menu-element,
  .menu-element .menu-element-arrow {
    transition: all 0.25s ease;
  }

  .menu-element {

    &.active {
      background-color: #333333;

      .menu-element-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 48px;
        color: white;

        &.menu-element-arrow-left {
          left: 0;
        }

        &.menu-element-arrow-right {
          right: 0;
        }
      }
    }

    .menu-element-img {
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .menu-element-badge {
      position: absolute;
      right: 5px;
      top: 10%;
    }
  }
}
</style>
