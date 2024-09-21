import { defineStore } from "pinia";
import { readonly } from 'vue';


import { currentMusic, isMusicPlaying, lastMusic, musicCaches } from './state';
import { currentMusicName } from './getter';
import { toggleMusic } from './action';


export const useMusicStore = defineStore("music", () => {
  
  return {
    currentMusic: readonly(currentMusic),
    isMusicPlaying: readonly(isMusicPlaying),
    lastMusic: readonly(lastMusic),
    musicCaches: readonly(musicCaches),

    currentMusicName: readonly(currentMusicName),
    
    toggleMusic,
  }
})