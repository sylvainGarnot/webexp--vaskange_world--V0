import { defineStore } from "pinia";
import { readonly } from 'vue';

import { isFullscreen, effectVolume, musicVolume } from './state';
import { setIsFullscreen, setEffectVolume, setMusicVolume } from './action';

export const useSettingStore = defineStore("setting", () => {
  
  return {
    isFullscreen: readonly(isFullscreen),
    effectVolume: readonly(effectVolume),
    musicVolume: readonly(musicVolume),

    setIsFullscreen,
    setEffectVolume,
    setMusicVolume
  }
})