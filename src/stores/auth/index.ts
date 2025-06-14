import { defineStore } from "pinia";
import { readonly } from 'vue'; // TEST


import { user } from './state'; // TEST
import { setUser, logout, forgotPassword, resetPassword } from './action';


export const useAuthStore = defineStore("Auth", () => {
  
  return {
    user: readonly(user),

    setUser,
    logout,
    forgotPassword,
    resetPassword
  }
})