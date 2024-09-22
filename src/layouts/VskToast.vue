<template>
  <div>
    <TransitionGroup name="list" tag="ul" class="vsk-toast-container">
      <li v-for="toast in toasts" :key="toast.timestamp">
        <div class="vsk-toast" :class="`vsk-toast-${toast.type}`"
          :style="`background-color: ${getBackgroundColor(toast.type)}`">
          {{ toast.message }}
        </div>
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useToastStore } from "@/stores/toast";

const toastStore = useToastStore();

const { toasts } = storeToRefs(toastStore);

function getBackgroundColor(type: string) {
  if (type === 'success') { return 'green' }
  else if (type === 'info') { return 'blue' }
  else if (type === 'warning') { return 'orange' }
  else if (type === 'error') { return 'red' }
};
</script>

<style lang="scss" scoped>
.vsk-toast-container {
  z-index: 2000;
  position: fixed;
  top: 100px;
  left: 0;
  width: 100%;

  li {
    margin-bottom: 55px;
    align-content: center;

    .vsk-toast {
      z-index: 2000;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);

      min-width: 320px;
      border-radius: 5px;
      padding: 8px 40px;
      border: solid 1px white;
      text-align: center;
      font-family: 'Gill Sans';
      color: white;
      font-size: 32px;
    }
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
