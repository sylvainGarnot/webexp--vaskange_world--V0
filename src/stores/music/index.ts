import { defineStore } from "pinia";
import { readonly } from 'vue';


import { music, isMusicPlaying, volumeMusic } from './state';
// import { music, isMusicPlaying, volumeMusic, modeTempo, musicTempo, musicLast, musicsCache } from './state'; // TEST
import { toggleMusic, playMusic, pauseMusic, changeMusicByLocation, setVolumeMusic } from './action';


export const useMusicStore = defineStore("Music", () => {
  
  return {
    music: readonly(music),
    isMusicPlaying: readonly(isMusicPlaying),
    volumeMusic: readonly(volumeMusic),

    // modeTempo: readonly(modeTempo), // TEST
    // musicTempo: readonly(musicTempo), // TEST
    // musicLast: readonly(musicLast), // TEST
    // musicsCache: readonly(musicsCache), // TEST
    
    toggleMusic,
    changeMusicByLocation,
    playMusic,
    pauseMusic,
    setVolumeMusic,
  }
})