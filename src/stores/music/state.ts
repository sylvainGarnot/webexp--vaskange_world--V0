import { ref } from 'vue';
import type { musicInterface } from './interface';

export const music = ref({} as musicInterface);
export const musicTempo = ref({} as musicInterface);
export const musicLast = ref({} as musicInterface);
export const musicsCache = ref([] as musicInterface[]);

export const modeTempo = ref(true as boolean);
export const isMusicPlaying = ref(false as boolean);
export const volumeMusic = ref(0.5 as number);

export const musics = ref([
  {
    id: 'music_tempo',
    file: '/music/tempo/90bpm/90bpm_drum.mp3',
    audio: new Audio,
  },
  {
    id: '0',
    file: '/music/tempo/90bpm/90bpm_piano.mp3',
    // file: '/music/free/coccibar 🐞.aac',
    audio: new Audio,
  },
  {
    id: '1',
    file: '/music/tempo/90bpm/90bpm_piano.mp3',
    // file: '/music/free/fin quest 1 🔥.aac',
    audio: new Audio,
  },
  {
    id: '2',
    file: '/music/tempo/90bpm/90bpm_guitar.mp3',
    // file: '/music/free/matrix 📺.aac',
    audio: new Audio,
  },
  {
    id: '3',
    file: '/music/tempo/90bpm/90bpm_guitar.mp3',
    // file: '/music/free/star night club ⭐️.aac',
    audio: new Audio,
  },
  // {
  //   id: '4',
  //   // file: '/music/free/support city 🛖.aac',
  //   audio: new Audio,
  // },
  // {
  //   id: '5',
  //   // file: '/music/free/temple 🏯.aac',
  //   audio: new Audio,
  // },
  // {
  //   id: '6',
  //   // file: '/music/free/trésor 💰.aac',
  //   audio: new Audio,
  // },
] as musicInterface[]);