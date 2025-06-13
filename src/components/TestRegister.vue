<template>
  <div class="container">

    <div>
      <form @submit.stop.prevent="handleSubmit">
        <div>
          <label>
            Username
            <input v-model="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Email
            <input v-model="email" type="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input v-model="password" type="password" />
          </label>
        </div>
        <button>
          Register
        </button>
      </form>
    </div>

  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import axios from 'axios';

import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
const { setUser } = authStore;


// DATA
const username = ref('');
const email = ref('');
const password = ref('');
const error = ref(null);



// METHODS
function handleSubmit() {
  console.log('handleSubmit', username.value, email.value, password.value); // TEST

  axios.post(`https://peaceful-symphony-bc24703d57.strapiapp.com/api/auth/local/register`, {
    username: username.value,
    email: email.value,
    password: password.value,
  })
  .then(response => {
    console.log('handleSubmit, SUCCESS', response); // TEST
    setUser({
      jwt: response.data.jwt,
      user: response.data.user,
    })
  })
  .catch(error => {
    console.log('handleSubmit, ERROR', error.response?.data?.error.message); // TEST
    error = error.response?.data?.error
  })
}
</script>