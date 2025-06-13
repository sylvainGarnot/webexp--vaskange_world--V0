// import cookieparser from 'cookie-parser'

// export const actions = {
//   nuxtServerInit({ commit }, { req }) {
//     if (req && req.headers && req.headers.cookie) {
//       const parsed = cookieparser.parse(req.headers.cookie)
//       const user = (parsed.user && JSON.parse(parsed.user)) || null
//       const cart = (parsed.cart && JSON.parse(parsed.cart)) || []
//       commit('auth/setUser', user)
//       commit('cart/setItems', cart)
//     }
//   },
// }

import { defineStore } from "pinia";
import { readonly } from 'vue'; // TEST


import { user } from './state'; // TEST
import { setUser } from './action';


export const useAuthStore = defineStore("Auth", () => {
  
  return {
    currentBookmark: readonly(user),

    setUser,
  }
})