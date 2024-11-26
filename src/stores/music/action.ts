import { music, sounds, volumeMusic, musicLast, musicsCache, soundsCache, isMusicPlaying, musics, musicTempo, modeTempo } from './state';
import type { musicInterface, soundInterface } from './interface';
import { currentLocation, locations } from '../location/state';

let fadeOutMusicInterval = 0 as number;
let fadeInMusicInterval = 0 as number;

// PRIVATE
function initMusic() {
  // console.log('TEST INIT 1', new Date().getMilliseconds()); // TEST

  // pour safari iOS
  for (let index = 0; index < musics.value.length; index++) {
    const audio = new Audio() as HTMLAudioElement;
    audio.preload = "auto";
    audio.loop = true;
    audio.src = musics.value[index].file;
    audio.volume = volumeMusic.value as number;

    addMusicsCache({
      id: musics.value[index].id,
      file: musics.value[index].file,
      audio,
    } as musicInterface);
    // console.log('TEST INIT 2', index, new Date().getMilliseconds()); // TEST
  }

  if (modeTempo.value && !musicTempo?.value?.audio?.src) {
    const newMusicTempo = musics.value.find(m => m.id === 'music_tempo') as musicInterface
    setMusicTempo(newMusicTempo as musicInterface)
    setMusic(getRandomMusicLocation())
  } else if (!music?.value?.audio?.src) {
    setMusic(getRandomMusicLocation())
  }

  // console.log('TEST INIT 9', new Date().getMilliseconds()); // TEST
}

function addMusicsCache(input: musicInterface) {
  musicsCache.value.push(input as musicInterface);
}

function setMusic(input: musicInterface) {
  // console.log('TEST setMusic 0', new Date().getMilliseconds()); // TEST
  const musicCache = musicsCache.value.find(m => m.id === input.id);
  if (musicCache) {
    music.value = musicCache as musicInterface;
  } else {
    const audio = new Audio() as HTMLAudioElement;
    audio.preload = "auto";
    audio.loop = true;
    audio.src = input.file;
    audio.volume = volumeMusic.value as number;

    music.value = {
      id: input.id,
      file: input.file,
      audio,
    } as musicInterface;

    addMusicsCache(music.value as musicInterface);
  }
}

function setMusicTempo(input: musicInterface) {
  // console.log('TEST setMusicTempo 1'); // TEST
  const audio = new Audio() as HTMLAudioElement;
  audio.currentTime = 0;
  audio.preload = "auto";
  audio.loop = true;
  audio.src = input.file;
  audio.volume = volumeMusic.value as number;

  musicTempo.value = {
    id: input.id,
    file: input.file,
    audio,
  } as musicInterface;
  // console.log('TEST setMusicTempo 9'); // TEST
}

function getRandomMusicLocation() : musicInterface {
  let musicId = locations.value[0].musics[0]
  if (musics?.value.length > 0) {
    if (currentLocation?.value?.musics?.length > 0) {
      if (currentLocation?.value?.musics?.length > 1) {
        musicId = currentLocation.value.musics[
          Math.floor(Math.random() * currentLocation.value.musics.length)
        ];
      } else {
        musicId = currentLocation.value.musics[0]
      }
    } else if (locations?.value[0]?.musics?.length > 0) {
      if (locations?.value[0]?.musics?.length > 1) {
        musicId = locations.value[0].musics[
          Math.floor(Math.random() * locations.value[0].musics.length)
        ];
      } else {
        musicId = locations.value[0].musics[0]
      }
    }
  }
  if (musicId) {
    const music = musics.value.find(m => m.id === musicId) as musicInterface;
    if (music) {
      return music as musicInterface
    }
  }
  return musics.value[0] as musicInterface
}

function fadeOutMusic(input: musicInterface, duration: number) {
  const step = 0.01 as number;
  const interval = duration * step as number;

  if (fadeOutMusicInterval) {
    clearInterval(fadeOutMusicInterval);
    input.audio.pause();
    input.audio.volume = volumeMusic.value as number;
  }

  fadeOutMusicInterval = window.setInterval(() => {
    if (input.audio.volume > step) {
      input.audio.volume -= step as number;
    } else {
      clearInterval(fadeOutMusicInterval);
      fadeOutMusicInterval = 0 as number;
      input.audio.pause();
      input.audio.volume = volumeMusic.value as number;
    }
  }, interval);
}

function fadeInMusic(input: musicInterface, duration: number) {
  const step = 0.01 as number;
  const interval = duration * step as number;

  if (fadeInMusicInterval) {
    clearInterval(fadeInMusicInterval);
    input.audio.pause();
    input.audio.volume = volumeMusic.value as number;
  }
  input.audio.volume = 0 as number;
  input.audio.play();
  input.audio.currentTime = musicTempo.value.audio.currentTime; // ATTENTION !!

  fadeInMusicInterval = window.setInterval(() => {
    if (input.audio.volume < volumeMusic.value - step) {
      input.audio.volume += step as number;
    } else {
      clearInterval(fadeInMusicInterval);
      fadeInMusicInterval = 0 as number;
      input.audio.volume = volumeMusic.value as number;
      stopAllMusicExcept(input as musicInterface);
    }
  }, interval);
}

function stopAllMusicExcept(input: musicInterface) {
  for (let index = 0; index < musicsCache.value.length; index++) {
    if (musicsCache.value[index].id !== input.id) {
      musicsCache.value[index].audio.pause();
      musicsCache.value[index].audio.currentTime = 0 as number; // TO DELETE
    }
  };
}


// EXPORT
export function toggleMusic() {
  if (!isMusicPlaying.value) {
    playMusic()
  } else {
    pauseMusic()
  }
}

export async function playMusic() {
  if (!isMusicPlaying.value) {
    if (!music?.value?.audio?.src || (modeTempo.value && !musicTempo?.value?.audio?.src)) {
      // console.log('TEST INIT A', new Date().getMilliseconds()); // TEST
      initMusic()
      // console.log('TEST INIT B', new Date().getMilliseconds()); // TEST
    }
    
    if (modeTempo?.value) {
      // console.log('TEST PLAY musicTempo', musicTempo.value.audio.currentTime, new Date().getMilliseconds()); // TEST
      musicTempo.value.audio.play();
    }
    music.value.audio.play();
    music.value.audio.currentTime = musicTempo.value.audio.currentTime; // ATTENTION !!
    // console.log('TEST PLAY music', music.value.audio.currentTime, new Date().getMilliseconds()); // TEST
    isMusicPlaying.value = true;
  }
}

export function pauseMusic() {
  if (isMusicPlaying.value) {
    music.value.audio.pause();
    if (modeTempo.value) {
      musicTempo.value.audio.pause();
    }
    isMusicPlaying.value = false;
  }
}

export async function changeMusicByLocation(fadeDuration: number = 5000) {

  // console.log('TEST - changeMusicByLocation'); // TEST

  // MODE : une seule musique tout les 3 lieux
  if (!music.value.id || music.value.id !== currentLocation?.value?.musics[0]) {
    musicLast.value = music.value as musicInterface;

    setMusic(getRandomMusicLocation())

    if (isMusicPlaying.value) {
      await fadeOutMusic(musicLast.value as musicInterface, fadeDuration as number);
      await fadeInMusic(music.value as musicInterface, fadeDuration as number);
    }
  }
}

export function setVolumeMusic(input: number) {
  volumeMusic.value = input as number;
  music.value.audio.volume = input as number;
  musicTempo.value.audio.volume = input as number;
};

function addSoundsCache(input: soundInterface) {
  soundsCache.value.push(input as soundInterface);
}

export async function playSound(inputId: string) {
  const soundInput = sounds.value.find(s => s.id === inputId)

  if (soundInput) {
    const soundCache = soundsCache.value.find(s => s.id === soundInput.id);
    if (soundCache) {
      soundCache.audio.currentTime = 0
      soundCache.audio.volume = volumeMusic.value as number
      soundCache.audio.play()
    } else {
      const audio = new Audio() as HTMLAudioElement;
      audio.preload = "auto"
      audio.loop = false
      audio.src = soundInput.file
      audio.currentTime = 0
      audio.volume = volumeMusic.value as number
      audio.play()

      addSoundsCache({
        id: soundInput.id,
        file: soundInput.file,
        audio,
      } as soundInterface);
    }
  }
}