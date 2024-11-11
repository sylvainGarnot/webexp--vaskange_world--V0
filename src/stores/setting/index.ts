import { defineStore } from "pinia";
import { readonly } from 'vue';

import { isFullscreen, cookies } from './state';
import { setIsFullscreen, toggleFullscreen, getCookies } from './action';

export const useSettingStore = defineStore("Setting", () => {
  
  return {
    isFullscreen: readonly(isFullscreen),
    cookies: readonly(cookies),

    setIsFullscreen,
    toggleFullscreen,
    getCookies,
  }
})