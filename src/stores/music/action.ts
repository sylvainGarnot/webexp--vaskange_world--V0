import { currentMusic, currentMusicName, isMusicPlaying, lastMusic, musicCaches } from './state';
import { musicVolume } from '../setting/state';

import { locationsGlossary } from '../location/state';
import type { locationsGlossaryInterface } from '../location/interface';


let fadeOutMusicInterval = 0 as number;
let fadeInMusicInterval = 0 as number;


// PRIVATE
function setCurrentMusic(locationName: string) {
  const locationGlossary = locationsGlossary.value.find((l) => l.name === locationName) as locationsGlossaryInterface;
  const musicsToArtist = locationGlossary?.musicsToArtist as string[];

  if (musicsToArtist && musicsToArtist.length > 0) {
    const randomArtist = musicsToArtist[Math.floor(Math.random() * musicsToArtist.length)] as string;
    const src = `/src/assets/music/${randomArtist}/${locationName}.aac` as string;
    console.log(`Loading music from : ${randomArtist} - ${locationName} - ${src}`); // TEST

    const musicCache = musicCaches.value.find((e) => e.src === src);
    if (musicCache) {
      currentMusic.value = musicCache as HTMLAudioElement;
    } else {
      const audio = new Audio();
      audio.preload = "auto";
      audio.loop = true as boolean;
      audio.src = src as string;
      audio.volume = musicVolume.value as number;
      addMusicCache(audio as HTMLAudioElement);

      audio.addEventListener("error", function (e) {
        console.error("Erreur de chargement audio", e);
        console.error("Audio source:", src);
      });
      currentMusic.value = audio as HTMLAudioElement;
      currentMusicName.value = locationName as string;
    }
  }
}

function addMusicCache(audio: HTMLAudioElement) {
  const newMusicCaches = Array.from(musicCaches.value) as HTMLAudioElement[];
  newMusicCaches.push(audio as HTMLAudioElement);
  setMusicCaches(newMusicCaches as HTMLAudioElement[]);
}

function setMusicCaches(audios: HTMLAudioElement[]) {
  musicCaches.value = audios as HTMLAudioElement[];
}

function setLastMusic(audio: HTMLAudioElement) {
  lastMusic.value = audio as HTMLAudioElement;
}

function stopAllMusicExcept(audio: HTMLAudioElement) {
  musicCaches.value.forEach(musicCache => {
    if (musicCache !== audio) {
      musicCache.pause();
      musicCache.currentTime = 0 as number;
    }
  });
}

function fadeOutMusic(audio: HTMLAudioElement, duration: number) {
  const step = 0.01 as number;
  const interval = duration * step as number;

  if (fadeOutMusicInterval) {
    clearInterval(fadeOutMusicInterval);
    audio.pause();
    audio.currentTime = 0 as number;
    audio.volume = 1 as number;
  }

  fadeOutMusicInterval = window.setInterval(() => {
    if (audio.volume > step) {
      audio.volume -= step as number;
    } else {
      clearInterval(fadeOutMusicInterval);
      fadeOutMusicInterval = 0 as number;
      audio.pause();
      audio.currentTime = 0 as number;
      audio.volume = 1 as number;
    }
  }, interval);
}

function fadeInMusic(audio: HTMLAudioElement, duration: number) {
  const step = 0.01 as number;
  const interval = duration * step as number;

  if (fadeInMusicInterval) {
    clearInterval(fadeInMusicInterval);
    audio.pause();
    audio.currentTime = 0 as number;
    audio.volume = 1 as number;
  }
  audio.volume = 0 as number;
  audio.play();

  fadeInMusicInterval = window.setInterval(() => {
    if (audio.volume < 1 - step) {
      audio.volume += step as number;
      musicVolume.value = audio.volume * 100 as number;
    } else {
      clearInterval(fadeInMusicInterval);
      fadeInMusicInterval = 0 as number;
      audio.volume = 1 as number;
      musicVolume.value = 100 as number;
      stopAllMusicExcept(audio as HTMLAudioElement);
    }
  }, interval);
}


// EXPORT
export function toggleMusic() {
  if (!isMusicPlaying.value) {
    if (!currentMusic.value.src) {
      setCurrentMusic("bureau 🏠" as string);
    }
    currentMusic.value.play();
    isMusicPlaying.value = true as boolean;
  } else {
    currentMusic.value.pause();
    lastMusic.value.pause();
    isMusicPlaying.value = false as boolean;
    isMusicPlaying.value = false as boolean;
  }
}


export async function changeMusicByLocationName(locationName: string, fadeDuration: number = 1800) {
  if (isMusicPlaying.value) {

    const locationGlossary = locationsGlossary.value.find((l) => l.name === locationName) as locationsGlossaryInterface;
    const musicsToArtist = locationGlossary?.musicsToArtist as string[];
    if (musicsToArtist && musicsToArtist.length > 0 && currentMusicName.value !== locationName) {

      setLastMusic(currentMusic.value as HTMLAudioElement);
      setCurrentMusic(locationName as string);
      await fadeOutMusic(lastMusic.value as HTMLAudioElement, fadeDuration as number);
      await fadeInMusic(currentMusic.value as HTMLAudioElement, fadeDuration as number);
    }
  }
}
  