import { music, lastMusic, isMusicPlaying, musics } from './state';
import type { musicInterface } from './interface';
import type { locationInterface } from '../location/interface';

let fadeOutMusicInterval = 0 as number;
let fadeInMusicInterval = 0 as number;


// PRIVATE
function setMusic(input: musicInterface) {

  // lastMusic.value = JSON.parse(JSON.stringify(music.value)) as musicInterface;
  // lastMusic.value.audio.pause();
  // lastMusic.value.audio.currentTime = 0;

  const audio = new Audio() as HTMLAudioElement;
  audio.currentTime = 0;
  audio.preload = "auto";
  audio.loop = true;
  audio.src = `/src/assets/music/free/${input.file}.aac`;
  audio.volume = 1 as number;
  music.value = {
    id: input.id,
    file: input.file,
    audio,
  };

  // if (!isMusicPlaying.value) {
  //   music.value.audio.play();
  // }
}

// function setLastMusic(input: musicInterface) {
//   const audio = new Audio() as HTMLAudioElement;
//   audio.currentTime = 0;
//   audio.preload = "auto";
//   audio.loop = true;
//   audio.src = `/src/assets/music/free/${input.file}.aac`;
//   audio.volume = 1 as number;
//   lastMusic.value = {
//     id: input.id,
//     file: input.file,
//     audio,
//   };
// }

function fadeOutMusic(input: musicInterface, duration: number) {
  const step = 0.01 as number;
  const interval = duration * step as number;

  if (fadeOutMusicInterval) {
    clearInterval(fadeOutMusicInterval);
    input.audio.pause();
    input.audio.currentTime = 0 as number;
    input.audio.volume = 1 as number;
  }

  fadeOutMusicInterval = window.setInterval(() => {
    if (input.audio.volume > step) {
      input.audio.volume -= step as number;
    } else {
      clearInterval(fadeOutMusicInterval);
      fadeOutMusicInterval = 0 as number;
      input.audio.pause();
      input.audio.currentTime = 0 as number;
      input.audio.volume = 1 as number;
    }
  }, interval);
}

function fadeInMusic(input: musicInterface, duration: number) {
  const step = 0.01 as number;
  const interval = duration * step as number;

  if (fadeInMusicInterval) {
    clearInterval(fadeInMusicInterval);
    input.audio.pause();
    input.audio.currentTime = 0 as number;
    input.audio.volume = 1 as number;
  }
  input.audio.volume = 0 as number;
  input.audio.play();

  fadeInMusicInterval = window.setInterval(() => {
    if (input.audio.volume < 1 - step) {
      input.audio.volume += step as number;
    } else {
      clearInterval(fadeInMusicInterval);
      fadeInMusicInterval = 0 as number;
      input.audio.volume = 1 as number;
      // lastMusic.value.audio.pause();
      // lastMusic.value.audio.currentTime = 0 as number;
    }
  }, interval);
}


// EXPORT
export function toggleMusic() {
  if (!isMusicPlaying.value) {
    if (!music?.value?.audio?.src) {
      setMusic(musics.value[0] as musicInterface);
    }
    music.value.audio.play();
    isMusicPlaying.value = true;
  } else {
    music.value.audio.pause();
    isMusicPlaying.value = false;
  }
}


export async function changeMusicByLocation(location: locationInterface, fadeDuration: number = 1800) {
  if (isMusicPlaying.value) {

    // lastMusic.value = JSON.parse(JSON.stringify(music.value)) as musicInterface;
    lastMusic.value = music.value as musicInterface;
    lastMusic.value.audio.pause();
    lastMusic.value.audio.currentTime = 0;
    // setLastMusic(music.value as musicInterface);

    if (musics?.value.length > 0 && location?.musics.length > 0) {
      const randomNumber = Math.floor(Math.random() * location.musics.length)
      const randomMusicId = location.musics[randomNumber];
      setMusic(musics.value.find(m => m.id === randomMusicId) as musicInterface);
    } else {
      setMusic(musics.value[0] as musicInterface);
    }

    music.value.audio.play();

    // await fadeOutMusic(lastMusic.value as musicInterface, fadeDuration as number);
    // await fadeInMusic(music.value as musicInterface, fadeDuration as number);
  }
}
  