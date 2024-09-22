import { defineStore } from "pinia";
import { readonly } from 'vue';


import { music, lastMusic, isMusicPlaying, musics } from './state';
import { toggleMusic, changeMusicByLocation } from './action';


export const useMusicStore = defineStore("Music", () => {
  
  return {
    music: readonly(music),
    lastMusic: readonly(lastMusic),
    isMusicPlaying: readonly(isMusicPlaying),
    musics: readonly(musics),
    
    toggleMusic,
    changeMusicByLocation,
  }
})