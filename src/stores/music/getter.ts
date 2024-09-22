import { computed } from 'vue';
import { musics, isMusicPlaying } from './state';
import { location, lastLocation } from '../location/state';
import type { musicInterface } from './interface';



export const music = computed(() => {
  // if (music?.value?.audio) {
  //   music.value.audio.pause();
  //   music.value.audio.currentTime = 0;
  // }
  let result = {} as musicInterface;
  if (musics?.value.length > 0 && location?.value?.musics.length > 0) {
    const random = Math.floor(Math.random() * location.value.musics.length)
    const randomMusicId = location.value.musics[random];
    result = musics.value.find(m => m.id === randomMusicId) as musicInterface;
    result = JSON.parse(JSON.stringify(result));
  } else {
    result = JSON.parse(JSON.stringify(musics.value[0]));
  }
  const audio = new Audio();
  audio.currentTime = 0;
  audio.preload = "auto";
  audio.loop = true;
  audio.src = `/src/assets/music/free/${result.file}.aac`;
  audio.volume = 1 as number;
  result.audio = audio;

  // if (isMusicPlaying.value) {
  //   result.audio.play();
  // }
  console.log('MUSIC', result.file);

  return result as musicInterface;
})

export const lastMusic = computed(() => {
  if (music?.value?.audio) {
    music.value.audio.pause();
    music.value.audio.currentTime = 0;
  }
  let result = {} as musicInterface;
  if (musics?.value.length > 0 && lastLocation?.value?.musics.length > 0) {
    const random = Math.floor(Math.random() * lastLocation.value.musics.length)
    const randomMusicId = lastLocation.value.musics[random];
    result = musics.value.find(m => m.id === randomMusicId) as musicInterface;
    result = JSON.parse(JSON.stringify(result));
  } else {
    result = JSON.parse(JSON.stringify(musics.value[0]));
  }
  const audio = new Audio();
  audio.preload = "auto";
  audio.loop = true;
  audio.src = `/src/assets/music/${result.file}.aac`;
  audio.volume = 1 as number;
  result.audio = audio;

  return result as musicInterface;
})
