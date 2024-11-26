import { ref } from 'vue';
import type { musicInterface } from './interface';

export const music = ref({} as musicInterface);
export const musicTempo = ref({} as musicInterface);
export const musicLast = ref({} as musicInterface);
export const musicsCache = ref([] as musicInterface[]);
export const soundsCache = ref([] as musicInterface[]);

export const modeTempo = ref(true as boolean);
export const isMusicPlaying = ref(false as boolean);
export const volumeMusic = ref(1 as number);

export const sounds = ref([
  {
    id: 'son_bouton_click',
    file: '/music/SD_Bouton_1_Click.mp3',
    audio: new Audio,
  },
  {
    id: 'son_bouton_item',
    file: '/music/SD_Bouton_2_Objet.mp3',
    audio: new Audio,
  },
  {
    id: 'son_bouton_ihm',
    file: '/music/SD_Bouton_3_Inventaire.mp3',
    audio: new Audio,
  },
  {
    id: 'son_bouton_teleportation',
    file: '/music/SD_Bouton_4_Teleportation.mp3',
    audio: new Audio,
  },
] as musicInterface[])

export const musics = ref([
  {
    id: 'music_tempo',
    file: '/music/MUSIC.mp3',
    audio: new Audio,
  },
  {
    id: '1',
    file: '/music/SD_Ambiance_1_Rue.mp3',
    // file: '/music/free/temple 🏯.aac', // TEST
    audio: new Audio,
  },
  {
    id: '2',
    file: '/music/SD_Ambiance_2_Foot.mp3',
    // file: '/music/free/temple 🏯.aac', // TEST
    audio: new Audio,
  },
  {
    id: '3',
    file: '/music/SD_Ambiance_3_Baseball.mp3',
    // file: '/music/free/temple 🏯.aac', // TEST
    audio: new Audio,
  },
  {
    id: '4',
    file: '/music/SD_Ambiance_4_Basket.mp3',
    // file: '/music/free/temple 🏯.aac', // TEST
    audio: new Audio,
  },
  {
    id: '5',
    file: '/music/SD_Ambiance_5_Tennis.mp3',
    // file: '/music/free/temple 🏯.aac', // TEST
    audio: new Audio,
  },
  {
    id: '6',
    file: '/music/SD_Ambiance_6_Boxe.mp3',
    // file: '/music/free/temple 🏯.aac', // TEST
    audio: new Audio,
  },
  {
    id: '7',
    file: '/music/SD_Ambiance_7_Cyclisme.mp3',
    // file: '/music/free/temple 🏯.aac', // TEST
    audio: new Audio,
  },
  {
    id: '8',
    file: '/music/SD_Ambiance_8_Rugby.mp3',
    // file: '/music/free/temple 🏯.aac', // TEST
    audio: new Audio,
  },
  {
    id: '9',
    file: '/music/SD_Ambiance_9_Hockey.mp3',
    // file: '/music/free/temple 🏯.aac', // TEST
    audio: new Audio,
  },
  {
    id: '10',
    file: '/music/SD_Ambiance_10_Montagne.mp3',
    // file: '/music/free/temple 🏯.aac', // TEST
    audio: new Audio,
  },
] as musicInterface[]);