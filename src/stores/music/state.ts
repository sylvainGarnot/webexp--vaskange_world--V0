import { ref } from 'vue';
import type { musicInterface } from './interface';

export const music = ref({} as musicInterface);
export const musicTempo = ref({} as musicInterface);
export const musicLast = ref({} as musicInterface);
export const musicsCache = ref([] as musicInterface[]);
export const volumeMusic = ref(0.5 as number);

export const modeTempo = ref(true as boolean);


export const isMusicPlaying = ref(false as boolean);

export const musics = ref([
  {
    id: '0',
    file: '/music/tempo/90bpm/90bpm_piano.mp3',
    // file: '/music/free/coccibar 🐞.aac',
    // file: 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA',
    audio: new Audio,
  },
  {
    id: '1',
    file: '/music/tempo/90bpm/90bpm_piano.mp3',
    // file: '/music/free/fin quest 1 🔥.aac',
    // file: 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA',
    audio: new Audio,
  },
  {
    id: '2',
    file: '/music/tempo/90bpm/90bpm_guitar.mp3',
    // file: '/music/free/matrix 📺.aac',
    // file: 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA',
    audio: new Audio,
  },
  {
    id: '3',
    file: '/music/tempo/90bpm/90bpm_guitar.mp3',
    // file: '/music/free/star night club ⭐️.aac',
    // file: 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA',
    audio: new Audio,
  },
  {
    id: '4',
    file: '/music/tempo/90bpm/90bpm_piano.mp3',
    // file: '/music/free/support city 🛖.aac',
    // file: 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA',
    audio: new Audio,
  },
  {
    id: '5',
    file: '/music/tempo/90bpm/90bpm_piano.mp3',
    // file: '/music/free/temple 🏯.aac',
    // file: 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA',
    audio: new Audio,
  },
  {
    id: '6',
    file: '/music/tempo/90bpm/90bpm_piano.mp3',
    // file: '/music/free/trésor 💰.aac',
    // file: 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA',
    audio: new Audio,
  },
  {
    id: 'music_tempo',
    file: '/music/tempo/90bpm/90bpm_drum.mp3',
    // file: 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA',
    audio: new Audio,
  },
] as musicInterface[]);