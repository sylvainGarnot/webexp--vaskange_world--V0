import { defineStore } from "pinia";
import { readonly } from 'vue';


import { id, name, mail, registration, last_connection, image, experience, gold, gem } from './state';
import { login, logout } from './action';


export const usePlayerStore = defineStore("player", () => {

  return {
    id: readonly(id),
    name: readonly(name),
    mail: readonly(mail),
    registration: readonly(registration),
    last_connection: readonly(last_connection),
    image: readonly(image),
    experience: readonly(experience),
    gold: readonly(gold),
    gem: readonly(gem),

    login,
    logout
  }
});
