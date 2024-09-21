import { ref } from 'vue';
import type { locationInterface } from './interface';

export const location = ref(null as unknown as locationInterface);

export const locations_found = ref([
  {
    id: '1',
    name: "bureau 🏠",
    message: 'Welcome Home 🏠',
    is_hidden_place: false,
    upper_location: '9',
    character: '1',
  },
] as locationInterface[]);

// export const locations_found = ref([
//   {
//     id: "1",
//     name: "bureau 🏠",
//     message: {
//       en: 'Welcome Home 🏠',
//     },
//     upper_location: 'galaxie ✨',
//     is_hidden_place: false,
//     character: "1",
//     musicsToArtist: ["melano", "weedy"],
//   },
//   {
//     id: "2",
//     name: "fin quest 1 🔥",
//     message: {
//       en: 'Secret SPA 🔥💧🌱☁️',
//     },
//     upper_location: 'bureau 🏠',
//     is_hidden_place: false,
//     character: "1",
//     musicsToArtist: ["free"],
//   },
//   {
//     id: "3",
//     name: "boite de nuit insectes 🪲🪩",
//     message: {
//       en: '',
//     },
//     upper_location: 'bureau 🏠',
//     is_hidden_place: false,
//     character: "1",
//     musicsToArtist: ["melano"],
//   },
  
//   // HOLIDAYS
//   {
//     id: "4",
//     name: "prairie 🌳",
//     message: {
//       en: '',
//     },
//     upper_location: 'bureau 🏠',
//     is_hidden_place: false,
//     character: "1",
//     musicsToArtist: ["melano", "weedy"],
//   },
//   {
//     id: "5",
//     name: "vac-mer 🏝️",
//     message: {
//       en: 'Holiday World 🏝️',
//     },
//     upper_location: 'prairie 🌳',
//     is_hidden_place: false,
//     character: "1",
//     musicsToArtist: ["melano", "weedy"],
//   },
//   {
//     id: "6",
//     name: "snorkeling 🐠",
//     message: {
//       en: '',
//     },
//     upper_location: 'vac-mer 🏝️',
//     is_hidden_place: false,
//     character: "1",
//     musicsToArtist: ["melano", "weedy"],
//   },
//   {
//     id: "7",
//     name: "meduses 🪼",
//     message: {
//       en: '',
//     },
//     upper_location: 'snorkeling 🐠',
//     is_hidden_place: false,
//     character: "1",
//     musicsToArtist: ["melano"],
//   },
//   {
//     id: "8",
//     name: "monstre marin 🦕",
//     message: {
//       en: '',
//     },
//     upper_location: 'meduses 🪼',
//     is_hidden_place: false,
//     character: "1",
//     musicsToArtist: ["melano", "weedy"],
//   },
  
//   // QUEST 1
//   {
//     id: "9",
//     name: "jump-q1",
//     message: {
//       en: 'Quest 1',
//     },
//     upper_location: 'bureau 🏠',
//     is_hidden_place: false,
//     character: "1",
//     musicsToArtist: [],
//     dialog: {
//       en: 'hey veux tu commencer la quête UNO ?'
//     }
//   },
  
//   // QUEST 2
//   {
//     id: "9",
//     name: "rick 🐝",
//     message: {
//       en: 'You found Rick 🐝',
//     },
//     upper_location: 'prairie 🌳',
//     is_hidden_place: false,
//     character: "1",
//     musicsToArtist: ["melano"],
//     dialog: {
//       en: 'hey, il faut que tu me sauves',
//     }
//   },
//   {
//     id: "9",
//     name: "cocciland 🐞",
//     message: {
//       en: 'Cocciland 🐞',
//     },
//     upper_location: 'vac-mer 🏝️',
//     is_hidden_place: true,
//     character: "1",
//     musicsToArtist: ["melano", "weedy"],
//   },
//   {
//     id: "9",
//     name: "carte cachette 📜",
//     message: {
//       en: 'Treasure map 📜',
//     },
//     upper_location: 'cocciland 🐞',
//     is_hidden_place: true,
//     character: "1",
//     musicsToArtist: ["melano", "weedy"],
//   },
//   {
//     id: "9",
//     name: "trésor 💰",
//     message: {
//       en: 'You found the treasure!! 💰',
//     },
//     upper_location: 'snorkeling 🐠',
//     is_hidden_place: false,
//     character: "1",
//     musicsToArtist: ["free"],
//   },
//   {
//     id: "9",
//     name: "cantine coccinelle 🕌",
//     message: {
//       en: 'The Holiday House 🕌',
//     },
//     upper_location: 'vac-mer 🏝️',
//     is_hidden_place: false,
//     character: "1",
//     musicsToArtist: ["melano"],
//   },
  
//   // QUEST 3
//   {
//     id: "9",
//     name: "ile dragon 🐉",
//     message: {
//       en: 'Dragon Island 🐉',
//     },
//     upper_location: 'cantine coccinelle 🕌',
//     is_hidden_place: false,
//     character: "1",
//     musicsToArtist: ["melano", "weedy"],
//   },
//   {
//     id: "9",
//     name: "temple 🏯",
//     message: {
//       en: 'The Infinite Temple 🛕',
//     },
//     upper_location: 'ile dragon 🐉',
//     is_hidden_place: true,
//     character: "1",
//     musicsToArtist: ["free"],
//   },
  
//   // QUEST 4
//   {
//     id: "9",
//     name: "astro 1",
//     message: {
//       en: 'Quête no 4 !',
//     },
//     upper_location: 'bureau 🏠',
//     is_hidden_place: false,
//   },

//   // SPACE
//   {
//     id: "9",
//     name: "endding",
//     message: {
//       en: 'THE END',
//     },
//     upper_location: '',
//     is_hidden_place: false,
//     character: "1",
//     musicsToArtist: ["melano"],
//   },
//   {
//     id: "9",
//     name: "big bang 🪐",
//     message: {
//       en: 'Big bang 🪐',
//     },
//     upper_location: 'ending',
//     is_hidden_place: false,
//     character: "1",
//     musicsToArtist: ["melano"],
//   },
//   {
//     id: "9",
//     name: "galaxie ✨",
//     message: {
//       en: 'Space World 💫',
//     },
//     upper_location: 'big bang 🪐',
//     is_hidden_place: false,
//     character: "1",
//     musicsToArtist: ["melano", "weedy"],
//   },
//   {
//     id: "9",
//     name: "star night club ⭐️",
//     message: {
//       en: 'Star night club ⭐️',
//     },
//     upper_location: 'galaxie ✨',
//     is_hidden_place: false,
//     character: "1",
//     musicsToArtist: ["free"],
//   },
//   {
//     id: "9",
//     name: "coccibar 🐞",
//     message: {
//       en: '',
//     },
//     upper_location: 'galaxie ✨',
//     is_hidden_place: false,
//     character: "1",
//     musicsToArtist: ["free"],
//   },
  
//   // Support
//   {
//     id: "9",
//     name: "support city 🛖",
//     message: {
//       en: "Rock'n World 🎸",
//     },
//     upper_location: 'bureau 🏠',
//     is_hidden_place: false,
//     character: "1",
//     musicsToArtist: ["free"],
//   },
//   {
//     id: "9",
//     name: "matrix 📺",
//     message: {
//       en: '',
//     },
//     upper_location: 'support city 🛖',
//     is_hidden_place: false,
//     character: "1",
//     musicsToArtist: ["free"],
//   },
// ] as locationInterface[]);