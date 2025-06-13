<template>
  <div>
    <form @submit.stop.prevent="handleSubmit">
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
import { ref } from "vue";
import axios from 'axios';

import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
const { setUser } = authStore;


// DATA
const email = ref('');
const password = ref('');
const error = ref(null);



// METHODS
function handleSubmit() {
  console.log('handleSubmit', email.value, password.value); // TEST

  axios.post(`https://peaceful-symphony-bc24703d57.strapiapp.com/api/auth/local`, {
    identifier: email.value,
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


// import { mapMutations } from 'vuex'
// export default {
//   data() {
//     return {
//       email: '',
//       password: '',
//       err: null,
//     }
//   },
//   methods: {
//     async handleSubmit() {
//       try {
//         const { jwt, user } = await this.$http.$post('auth/local', {
//           identifier: this.email,
//           password: this.password,
//         })
//         this.setUser({
//           jwt,
//           id: user.id,
//           username: user.username,
//         })
//         this.$router.push({
//           path: '/',
//         })
//       } catch (err) {
//         this.err = err.response?.data?.error
//       }
//     },
//     ...mapMutations({
//       setUser: 'auth/setUser',
//     }),
//   },
// }
</script>