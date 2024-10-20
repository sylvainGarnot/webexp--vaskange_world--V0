import { music, lastMusic, musicsCache, isMusicPlaying, musics } from './state';
import type { musicInterface } from './interface';
import { currentLocation, locations } from '../location/state';

let fadeOutMusicInterval = 0 as number;
let fadeInMusicInterval = 0 as number;


// PRIVATE
function setMusic(input: musicInterface) {
  const musicCache = musicsCache.value.find(m => m.id === input.id);
  if (musicCache) {
    music.value = musicCache as musicInterface;
  } else {
    const audio = new Audio() as HTMLAudioElement;
    audio.currentTime = 0;
    audio.preload = "auto";
    audio.loop = true;
    audio.src = input.file;
    audio.volume = 1 as number;

    music.value = {
      id: input.id,
      file: input.file,
      audio,
    } as musicInterface;
    addMusicsCache(music.value as musicInterface);
  }
}

function addMusicsCache(input: musicInterface) {
  musicsCache.value.push(input as musicInterface);
}

function stopAllMusicExcept(input: musicInterface) {
  for (let index = 0; index < musicsCache.value.length; index++) {
    if (musicsCache.value[index].id !== input.id) {
      musicsCache.value[index].audio.pause();
      musicsCache.value[index].audio.currentTime = 0 as number;
    }
  };
}

function setRandomMusic() {
  let musicId;
  if (musics?.value.length > 0 && currentLocation?.value?.musics?.length > 0) {
    musicId = currentLocation.value.musics[
      Math.floor(Math.random() * currentLocation.value.musics.length)
    ];
  } else if (musics?.value.length > 0 && locations?.value[0]?.musics?.length > 0) {
    musicId = locations.value[0].musics[
      Math.floor(Math.random() * locations.value[0].musics.length)
    ];
  }
  if (musicId) {
    const music = musics.value.find(m => m.id === musicId) as musicInterface;
    if (music) {
      setMusic(music as musicInterface);
    }
  }
}

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
      stopAllMusicExcept(input as musicInterface);
    }
  }, interval);
}


// EXPORT
export function toggleMusic() {
  if (!isMusicPlaying.value) {
    playMusic()
  } else {
    pauseMusic()
  }
}

export function playMusic() {
  if (!isMusicPlaying.value) {
    if (!music?.value?.audio?.src) {
      setRandomMusic();
    }
    music.value.audio.play();
    isMusicPlaying.value = true;
  }
}

export function pauseMusic() {
  if (isMusicPlaying.value) {
    music.value.audio.pause();
    isMusicPlaying.value = false;
  }
}


export async function changeMusicByLocation(fadeDuration: number = 800) {
  if (isMusicPlaying.value) {

    lastMusic.value = music.value as musicInterface;
    setRandomMusic();

    console.log('TEST - changeMusicByLocation', music.value.file); // TEST

    await fadeOutMusic(lastMusic.value as musicInterface, fadeDuration as number);
    await fadeInMusic(music.value as musicInterface, fadeDuration as number);
  }
}
  