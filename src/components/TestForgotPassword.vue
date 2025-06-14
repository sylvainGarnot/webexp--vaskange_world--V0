<template>
  <div>
    <form @submit.stop.prevent="test">
      <div>
        <label>
          Email
          <input v-model="email" type="email" />
        </label>
      </div>
      <button type="submit">
        forgotPassword
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
const { forgotPassword } = authStore;


// DATA
const email = ref('');



// METHODS
function test() {
  console.log('forgotPassword', email.value); // TEST
  forgotPassword(email.value)
}
</script>