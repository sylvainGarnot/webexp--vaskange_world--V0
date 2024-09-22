import { defineStore } from "pinia";
import { readonly } from 'vue';

import { isFullscreen } from './state';
import { setIsFullscreen, toggleFullscreen } from './action';

export const useSettingStore = defineStore("setting", () => {
  
  return {
    isFullscreen: readonly(isFullscreen),

    setIsFullscreen,
    toggleFullscreen,
  }
})