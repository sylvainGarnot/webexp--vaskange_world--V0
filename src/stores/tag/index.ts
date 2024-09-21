import { defineStore } from "pinia";
import { readonly } from 'vue';


import { tags } from './state';
import { getTags } from './action';


export const useTagStore = defineStore("tag", () => {

  return {
    tags: readonly(tags),

    getTags,
  }
});
