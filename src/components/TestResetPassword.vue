<template>
  <div>
    <form @submit.stop.prevent="test">
      <div>
        <label>
          Password
          <input v-model="password" type="password" />
        </label>
      </div>
      <div>
        <label>
          Password confirmation
          <input v-model="passwordConfirmation" type="password" />
        </label>
      </div>
      <button type="submit">
        forgotPassword
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router';

import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
const { resetPassword } = authStore;

const route = useRoute();


// DATA
const password = ref('');
const passwordConfirmation = ref('');
const code = ref('');


onMounted(() => {
  console.log('TestResetPassword mounted, route params', route.query); // TEST
  if (route.query.code) {
    code.value = route.query.code as string;
  } else {
    console.error('TestResetPassword mounted, no code in route params'); // TEST
  }
});

// METHODS
function test() {
  console.log('forgotPassword', code.value, password.value, passwordConfirmation.value); // TEST
  resetPassword(code.value, password.value, passwordConfirmation.value)
}
</script>