import { ref } from 'vue';
import type { musicInterface } from './interface';

export const music = ref({} as musicInterface);
export const lastMusic = ref({} as musicInterface);
export const musicsCache = ref([] as musicInterface[]);

export const isMusicPlaying = ref(false as boolean);

export const musics = ref([
  {
    id: '0',
    file: '/music/free/coccibar 🐞.aac',
    audio: new Audio,
  },
  {
    id: '1',
    file: '/music/free/fin quest 1 🔥.aac',
    audio: new Audio,
  },
  {
    id: '2',
    file: '/music/free/matrix 📺.aac',
    audio: new Audio,
  },
  {
    id: '3',
    file: '/music/free/star night club ⭐️.aac',
    audio: new Audio,
  },
  {
    id: '4',
    file: '/music/free/support city 🛖.aac',
    audio: new Audio,
  },
  {
    id: '5',
    file: '/music/free/temple 🏯.aac',
    audio: new Audio,
  },
  {
    id: '6',
    file: '/music/free/trésor 💰.aac',
    audio: new Audio,
  },
] as musicInterface[]);