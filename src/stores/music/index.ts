import { defineStore } from "pinia";
import { readonly } from 'vue';


import { music, lastMusic, musicVolume, isMusicPlaying } from './state';
import { toggleMusic, playMusic, pauseMusic, changeMusicByLocation, setMusicVolume } from './action';


export const useMusicStore = defineStore("Music", () => {
  
  return {
    music: readonly(music),
    lastMusic: readonly(lastMusic),
    musicVolume: readonly(musicVolume),
    isMusicPlaying: readonly(isMusicPlaying),
    
    toggleMusic,
    changeMusicByLocation,
    playMusic,
    pauseMusic,
    setMusicVolume,
  }
})