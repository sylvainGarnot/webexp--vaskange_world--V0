import { ref } from 'vue';
import type { locationInterface, locationFoundInterface } from './interface';

export const currentLocation = ref({} as locationFoundInterface);

export const isLocationIsChanging = ref(false as boolean);
export const isLocationEndReach = ref(false as boolean);
export const locationEndName = ref('start_phone' as string);


export const locations_found = ref([] as locationFoundInterface[]);

// "EP_WebXP_Start"
export const locations = ref([

  // START PHONE -0-
  {
    id: '0',
    name: 'start_phone',
    label: 'Téléphone',
    message: 'Téléphone',
    image_url: '/images/location/color/poker.png',
    image_url_unfound: '/images/location/black&white&blur/poker.png',
    upper_location: '',
    is_hidden: false,
    musics: ['2','3'],
  },

  // EP_WebXP_Start -1-
  {
    id: '1',
    name: 'EP_WebXP_Start',
    label: 'Départ',
    message: 'Départ',
    image_url: '/images/location/color/start.png',
    image_url_unfound: '/images/location/black&white&blur/start.png',
    upper_location: '0',
    is_hidden: false,
    musics: ['0','1'],
  },
  
  // FOOTBALL -2-
  {
    id: '2',
    name: 'football',
    label: 'Football',
    message: 'Football',
    image_url: '/images/location/color/football.png',
    image_url_unfound: '/images/location/black&white&blur/football.png',
    upper_location: '1',
    is_hidden: false,
    musics: ['2','3'],
  },

  // BASEBALL -3-
  {
    id: '3',
    name: 'baseball',
    label: 'Baseball',
    message: 'Baseball',
    image_url: '/images/location/color/baseball.png',
    image_url_unfound: '/images/location/black&white&blur/baseball.png',
    upper_location: '2',
    is_hidden: false,
    musics: ['0','1'],
  },

  // BASKET -4-
  {
    id: '4',
    name: 'basket',
    label: 'Basket',
    message: 'Basket',
    image_url: '/images/location/color/basket.png',
    image_url_unfound: '/images/location/black&white&blur/basket.png',
    upper_location: '3',
    is_hidden: false,
    musics: ['2','3'],
  },

  // TENNIS -5-
  {
    id: '5',
    name: 'tennis',
    label: 'Tennis',
    message: 'Tennis',
    image_url: '/images/location/color/tennis.png',
    image_url_unfound: '/images/location/black&white&blur/tennis.png',
    upper_location: '4',
    is_hidden: false,
    musics: ['0','1'],
  },

  // MMA -6-
  {
    id: '6',
    name: 'mma',
    label: 'MMA',
    message: 'MMA',
    image_url: '/images/location/color/mma.png',
    image_url_unfound: '/images/location/black&white&blur/mma.png',
    upper_location: '5',
    is_hidden: false,
    musics: ['2','3'],
  },

  // CYCLISME -7-
  {
    id: '7',
    name: 'cyclisme',
    label: 'Cyclisme',
    message: 'Cyclisme',
    image_url: '/images/location/color/cyclisme.png',
    image_url_unfound: '/images/location/black&white&blur/cyclisme.png',
    upper_location: '6',
    is_hidden: false,
    musics: ['0','1'],
  },

  // HOCKEY -8-
  {
    id: '8',
    name: 'hockey',
    label: 'Hockey sur glace',
    message: 'Hockey sur glace',
    image_url: '/images/location/color/hockey.png',
    image_url_unfound: '/images/location/black&white&blur/hockey.png',
    upper_location: '7',
    is_hidden: false,
    musics: ['2','3'],
  },

  // RUGBY -9-
  {
    id: '9',
    name: 'rugby',
    label: 'Rugby',
    message: 'Rugby',
    image_url: '/images/location/color/rugby.png',
    image_url_unfound: '/images/location/black&white&blur/rugby.png',
    upper_location: '8',
    is_hidden: false,
    musics: ['2','3'],
  },

  // MONTAGNE -10-
  {
    id: '10',
    name: 'montagne',
    label: 'Montagne',
    message: 'Montagne',
    image_url: '/images/location/color/everest.png',
    image_url_unfound: '/images/location/black&white&blur/everest.png',
    upper_location: '9',
    is_hidden: false,
    musics: ['0','1'],
  },

  // EVREST -11-
  // {
  //   id: '11',
  //   name: 'evrest',
  //   label: 'Evrest',
  //   message: 'Evrest',
  //   image_url: '/images/location/color/???.png',
  //   image_url_unfound: '/images/location/black&white&blur/???.png',
  //   upper_location: '10',
  //   is_hidden: false,
  //   musics: ['0','1'],
  // },

  // SECRET END -99-
  {
    id: '99',
    name: 'secret_end',
    label: 'Remise des prix',
    message: 'Remise des prix',
    image_url: '/images/location/color/secretend.png',
    image_url_unfound: '/images/location/black&white&blur/secretend.png',
    upper_location: '0',
    is_hidden: true,
    musics: ['2','3'],
  },
  
] as locationInterface[]);