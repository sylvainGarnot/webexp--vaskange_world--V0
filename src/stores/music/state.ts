import { ref } from 'vue';
import type { musicInterface } from './interface';

export const music = ref({} as musicInterface);
export const lastMusic = ref({} as musicInterface);
export const musicsCache = ref([] as musicInterface[]);

export const isMusicPlaying = ref(false as boolean);

export const musics = ref([
  {
    id: '0',
    file: 'coccibar 🐞',
    audio: new Audio,
  },
  {
    id: '1',
    file: 'fin quest 1 🔥',
    audio: new Audio,
  },
  {
    id: '2',
    file: 'matrix 📺',
    audio: new Audio,
  },
  {
    id: '3',
    file: 'star night club ⭐️',
    audio: new Audio,
  },
  {
    id: '4',
    file: 'support city 🛖',
    audio: new Audio,
  },
  {
    id: '5',
    file: 'temple 🏯',
    audio: new Audio,
  },
  {
    id: '6',
    file: 'trésor 💰',
    audio: new Audio,
  },
] as musicInterface[]);