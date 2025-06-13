import { defineStore } from "pinia";
import { readonly } from 'vue'; // TEST


import { user } from './state'; // TEST
import { setUser } from './action';


export const useAuthStore = defineStore("Auth", () => {
  
  return {
    user: readonly(user),

    setUser,
  }
})