<template>
  <div>
    <form @submit.stop.prevent="login">
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
      <button type="submit">
        Log In
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from 'axios';

import { useAuthStore } from "@/stores/auth";
import type { userInterface } from "@/stores/auth/interface";
const authStore = useAuthStore();
const { setUser } = authStore;


// DATA
const email = ref('');
const password = ref('');
const error = ref(null);


onMounted(() => {
  console.log('TestLogin mounted localStorage', localStorage); // TEST

  if (localStorage.getItem('jwt')) {
    setUser({
      jwt: localStorage.getItem('jwt') || '',
      id: localStorage.getItem('id') || '',
      username: localStorage.getItem('username') || '',
      email: localStorage.getItem('email') || '',
      createdAt: localStorage.getItem('createdAt') || '',
    } as userInterface);
    console.log('TestLogin mounted, user already logged in'); // TEST
  }
});


// METHODS
function login() {
  console.log('login', email.value, password.value); // TEST

  axios.post(`https://peaceful-symphony-bc24703d57.strapiapp.com/api/auth/local`, {
    identifier: email.value,
    password: password.value,
  })
    .then(response => {
      console.log('login, SUCCESS', response); // TEST
      setUser({
        jwt: response.data.jwt,
        id: response.data.user.id,
        username: response.data.user.username,
        email: response.data.user.email,
        createdAt: response.data.user.createdAt,
      } as userInterface)
    })
    .catch(error => {
      console.log('login, ERROR', error.response?.data?.error.message); // TEST
      error = error.response?.data?.error
    })
}
</script>