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
    image_url: '/images/location/color/poker.jpg',
    image_url_unfound: '/images/location/black&white&blur/poker.jpg',
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
    image_url: '/images/location/color/start.jpg',
    image_url_unfound: '/images/location/black&white&blur/start.jpg',
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
    image_url: '/images/location/color/football.jpg',
    image_url_unfound: '/images/location/black&white&blur/football.jpg',
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
    image_url: '/images/location/color/baseball.jpg',
    image_url_unfound: '/images/location/black&white&blur/baseball.jpg',
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
    image_url: '/images/location/color/basket.jpg',
    image_url_unfound: '/images/location/black&white&blur/basket.jpg',
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
    image_url: '/images/location/color/tennis.jpg',
    image_url_unfound: '/images/location/black&white&blur/tennis.jpg',
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
    image_url: '/images/location/color/mma.jpg',
    image_url_unfound: '/images/location/black&white&blur/mma.jpg',
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
    image_url: '/images/location/color/cyclisme.jpg',
    image_url_unfound: '/images/location/black&white&blur/cyclisme.jpg',
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
    image_url: '/images/location/color/hockey.jpg',
    image_url_unfound: '/images/location/black&white&blur/hockey.jpg',
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
    image_url: '/images/location/color/rugby.jpg',
    image_url_unfound: '/images/location/black&white&blur/rugby.jpg',
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
    image_url: '/images/location/color/everest.jpg',
    image_url_unfound: '/images/location/black&white&blur/everest.jpg',
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
  //   image_url: '/images/location/color/???.jpg',
  //   image_url_unfound: '/images/location/black&white&blur/???.jpg',
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
    image_url: '/images/location/color/secretend.jpg',
    image_url_unfound: '/images/location/black&white&blur/secretend.jpg',
    upper_location: '0',
    is_hidden: true,
    musics: ['2','3'],
  },
  
] as locationInterface[]);