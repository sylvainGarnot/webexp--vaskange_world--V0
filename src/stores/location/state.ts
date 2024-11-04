import { ref } from 'vue';
import type { locationInterface, locationFoundInterface } from './interface';

export const currentLocation = ref({} as locationFoundInterface);

export const isLocationIsChanging = ref(false as boolean);
export const isLocationEndReach = ref(false as boolean);
export const locationEndName = ref('start_phone' as string);


export const locations_found = ref([] as locationFoundInterface[]);


export const locations = ref([

  // START PHONE
  {
    id: '0',
    name: 'start_phone',
    message: 'Start',
    image_url: '/images/location/file.PNG',
    upper_location: '',
    is_hidden_place: false,
    musics: ['0','1'],
  },

  // FOOTBALL
  {
    id: '1',
    name: 'football',
    message: 'Football',
    image_url: '/images/location/file.PNG',
    upper_location: '0',
    is_hidden_place: false,
    musics: ['2','3'],
  },

  // BASEBALL
  {
    id: '2',
    name: 'baseball',
    message: 'Baseball',
    image_url: '/images/location/file.PNG',
    upper_location: '1',
    is_hidden_place: false,
    musics: ['0','1'],
  },

  // BASKET
  {
    id: '3',
    name: 'basket',
    message: 'Basket',
    image_url: '/images/location/file.PNG',
    upper_location: '2',
    is_hidden_place: false,
    musics: ['2','3'],
  },

  // TENNIS
  {
    id: '4',
    name: 'tenis',
    message: 'Tennis',
    image_url: '/images/location/file.PNG',
    upper_location: '3',
    is_hidden_place: false,
    musics: ['0','1'],
  },

  // MMA
  {
    id: '5',
    name: 'mma',
    message: 'Mma',
    image_url: '/images/location/file.PNG',
    upper_location: '4',
    is_hidden_place: false,
    musics: ['2','3'],
  },

  // CYCLISME
  {
    id: '6',
    name: 'cyclisme',
    message: 'Cyclisme',
    image_url: '/images/location/file.PNG',
    upper_location: '5',
    is_hidden_place: false,
    musics: ['0','1'],
  },

  // HOCKEY
  {
    id: '7',
    name: 'hockey',
    message: 'Hockey',
    image_url: '/images/location/file.PNG',
    upper_location: '6',
    is_hidden_place: false,
    musics: ['2','3'],
  },

  // RUGBY
  {
    id: '8',
    name: 'rugby',
    message: 'Rugby',
    image_url: '/images/location/file.PNG',
    upper_location: '7',
    is_hidden_place: false,
    musics: ['2','3'],
  },

  // MONTAGNE
  {
    id: '9',
    name: 'montagne',
    message: 'Montagne',
    image_url: '/images/location/file.PNG',
    upper_location: '8',
    is_hidden_place: false,
    musics: ['0','1'],
  },

  // EVREST
  {
    id: '10',
    name: 'evrest',
    message: 'Evrest',
    image_url: '/images/location/file.PNG',
    upper_location: '9',
    is_hidden_place: false,
    musics: ['0','1'],
  },

  // SECRET END
  {
    id: '99',
    name: 'secret_end',
    message: 'fin secrète',
    image_url: '/images/location/file.PNG',
    upper_location: '??',
    is_hidden_place: true,
    musics: ['2','3'],
  },

    // TEST - VASKANGE WORLD
//   {
//     id: "1",
//     name: "bureau 🏠",
//     message: 'Welcome Home 🏠',
//     image_url: '/images/location/big bang 🪐.PNG',
//     upper_location: '17b',
//     is_hidden_place: false,
//     musics: ['0','1'],
//   },
//   {
//     id: "2",
//     name: "fin quest 1 🔥",
//     message: 'Secret SPA 🔥💧🌱☁️',
//     image_url: '/images/location/big bang 🪐.PNG',
//     upper_location: '1',
//     is_hidden_place: false,
//     musics: ['0','1'],
//   },
//   {
//     id: "3",
//     name: "boite de nuit insectes 🪲🪩",
//     message: 'Boite de nuit insectes 🪲🪩',
//     image_url: '/images/location/big bang 🪐.PNG',
//     upper_location: '1',
//     is_hidden_place: false,
//     musics: ['0','1'],
//   },
  
//   // HOLIDAYS
//   {
//     id: "4",
//     name: "prairie 🌳",
//     message: 'Prairie 🌳',
//     image_url: '/images/location/rock-world2.PNG',
//     upper_location: '1',
//     is_hidden_place: false,
//     musics: ['2','3'],
//   },
//   {
//     id: "5",
//     name: "vac-mer 🏝️",
//     message: 'Holiday World 🏝️',
//     image_url: '/images/location/big bang 🪐.PNG',
//     upper_location: '4',
//     is_hidden_place: false,
//     musics: ['0','1'],
//   },
//   {
//     id: "6",
//     name: "snorkeling 🐠",
//     message: 'Snorkeling 🐠',
//     image_url: '/images/location/Eson Island 🗿.PNG',
//     upper_location: '5',
//     is_hidden_place: false,
//     musics: ['4','5'],
//   },
//   {
//     id: "7",
//     name: "meduses 🪼",
//     message: 'Meduses 🪼',
//     image_url: '/images/location/Eson Island 🗿.PNG',
//     upper_location: '6',
//     is_hidden_place: false,
//     musics: ['0','1'],
//   },
//   {
//     id: "8",
//     name: "monstre marin 🦕",
//     message: 'Monstre marin 🦕',
//     image_url: '/images/location/Eson Island 🗿.PNG',
//     upper_location: '7',
//     is_hidden_place: false,
//     musics: ['0','1'],
//   },
//   {
//     id: "9",
//     name: "cocciland 🐞",
//     message: 'Cocciland 🐞',
//     image_url: '/images/location/rock-world2.PNG',
//     upper_location: '5',
//     is_hidden_place: false,
//     musics: ['0','1'],
//   },
//   {
//     id: "10",
//     name: "carte cachette 📜",
//     message: 'Treasure map 📜',
//     image_url: '/images/location/grotte 🐳.PNG',
//     upper_location: '9',
//     is_hidden_place: false,
//     musics: ['0','1'],
//   },
//   {
//     id: "11",
//     name: "trésor 💰",
//     message: 'You found the treasure!! 💰',
//     image_url: '/images/location/grotte 🐳.PNG',
//     upper_location: '6',
//     is_hidden_place: false,
//     musics: ['0','1'],
//   },
//   {
//     id: "12",
//     name: "cantine coccinelle 🕌",
//     message: 'The Holiday House 🕌',
//     image_url: '/images/location/grotte 🐳.PNG',
//     upper_location: '5',
//     is_hidden_place: false,
//     musics: ['0','1'],
//   },
  
//   // QUEST 3
//   {
//     id: "13",
//     name: "ile dragon 🐉",
//     message: 'Dragon Island 🐉',
//     image_url: '/images/location/grotte 🐳.PNG',
//     upper_location: '12',
//     is_hidden_place: false,
//     musics: ['0','1'],
//   },
//   {
//     id: "14",
//     name: "temple 🏯",
//     message: 'The Infinite Temple 🛕',
//     image_url: '/images/location/rock-world2.PNG',
//     upper_location: '13',
//     is_hidden_place: false,
//     musics: ['0','1'],
//   },

//   // SPACE
//   {
//     id: "15",
//     name: "endding",
//     message: 'THE END',
//     image_url: '/images/location/oatly end.PNG',
//     upper_location: '',
//     is_hidden_place: false,
//     musics: ['0','1'],
//   },
//   {
//     id: "16",
//     name: "big bang 🪐",
//     message: 'Big bang 🪐',
//     image_url: '/images/location/oatly end.PNG',
//     upper_location: '15',
//     is_hidden_place: false,
//     musics: ['0','1'],
//   },
//   {
//     id: "0",
//     name: "galaxie ✨",
//     message: 'Galaxie ✨ - Space World 💫',
//     image_url: '/images/location/oatly end.PNG',
//     upper_location: '16',
//     is_hidden_place: false,
//     musics: ['0','1'],
//   },
//   {
//     id: "17",
//     name: "univers 🌀",
//     message: 'Univers 🌀',
//     image_url: '/images/location/oatly end.PNG',
//     upper_location: '17',
//     is_hidden_place: false,
//     musics: ['0','1'],
//   },
//   {
//     id: "18",
//     name: "star night club ⭐️",
//     message: 'Star night club ⭐️',
//     image_url: '/images/location/partager 💌.PNG',
//     upper_location: '17b',
//     is_hidden_place: true,
//     musics: ['0','1'],
//   },
//   {
//     id: "19",
//     name: "coccibar 🐞",
//     message: 'Coccibar 🐞',
//     image_url: '/images/location/partager 💌.PNG',
//     upper_location: '17b',
//     is_hidden_place: false,
//     musics: ['0','1'],
//   },
  
//   // Support
//   {
//     id: "20",
//     name: "support city 🛖",
//     message: "Rock'n World 🎸",
//     image_url: '/images/location/partager 💌.PNG',
//     upper_location: '1',
//     is_hidden_place: false,
//     musics: ['0','1'],
//   },
//   {
//     id: "21",
//     name: "matrix 📺",
//     message: 'Matrix 📺',
//     image_url: '/images/location/rock-world2.PNG',
//     upper_location: '20',
//     is_hidden_place: false,
//     musics: ['0','1'],
//   },
  
] as locationInterface[]);