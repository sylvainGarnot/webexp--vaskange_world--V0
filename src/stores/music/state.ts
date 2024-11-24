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
  
    // TEST
    // file: '/music/free/coccibar 🐞.aac',
    // file: '/music/free/fin quest 1 🔥.aac',
    // file: '/music/free/matrix 📺.aac',
    // file: '/music/free/star night club ⭐️.aac',
    // file: '/music/free/support city 🛖.aac',
    // file: '/music/free/temple 🏯.aac',
    // file: '/music/free/trésor 💰.aac',
  {
    id: 'music_tempo',
    file: '/music/JMDF_Musique_V1.mp3',
    audio: new Audio,
  },
  {
    id: '0',
    file: '/music/SD_Ambiance_Test_1.mp3',
    // file: '/music/free/trésor 💰.aac', // TEST
    audio: new Audio,
  },
  {
    id: '1',
    file: '/music/SD_Ambiance_Test_2.mp3',
    // file: '/music/free/temple 🏯.aac', // TEST
    audio: new Audio,
  },
] as musicInterface[]);