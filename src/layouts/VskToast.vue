<template>
  <div>
    <TransitionGroup name="list" tag="ul" class="vsk-toast-list-container">
      <li v-for="toast in toasts" :key="toast.timestamp">
        <div class="vsk-toast-container">
          <div class="vsk-toast">
            {{ toast.message }}
          </div>
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

</script>

<style lang="scss" scoped>
.vsk-toast-list-container {
  position: fixed;
  top: 9.2vh;
  width: 100%;

  li {
    margin-bottom: 5.6vh;

    .vsk-toast-container {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);

      border-radius: 0.8vh;
      background-color: rgba(29, 27, 25, 0.4);

      .vsk-toast {
        margin: 0.6vh;
        padding: 1.4vh 2.8vh;
        white-space: nowrap;

        border-radius: 0.8vh;
        border: solid 1px grey;
        background-color: rgba(29, 27, 25, 0.4);

        text-align: center;
        color: white;
        font-size: 3.2vh;
        font-weight: 500;
        line-height: 1;
      }
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
