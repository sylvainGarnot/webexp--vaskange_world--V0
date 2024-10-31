import { defineStore } from "pinia";
import { readonly } from 'vue';


import { music, musicLast, volumeMusic, isMusicPlaying } from './state';
import { toggleMusic, playMusic, pauseMusic, changeMusicByLocation, setVolumeMusic } from './action';


export const useMusicStore = defineStore("Music", () => {
  
  return {
    music: readonly(music),
    musicLast: readonly(musicLast),
    volumeMusic: readonly(volumeMusic),
    isMusicPlaying: readonly(isMusicPlaying),
    
    toggleMusic,
    changeMusicByLocation,
    playMusic,
    pauseMusic,
    setVolumeMusic,
  }
})