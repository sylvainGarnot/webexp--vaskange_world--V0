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
    label: 'Poker',
    message: 'Poker',
    image_url: '/images/location/color/location_00.png',
    image_url_unfound: '/images/location/black&white/location_00.png',
    upper_location: '',
    is_hidden: false,
    musics: ['2','3'],
  },

  // EP_WebXP_Start -1-
  {
    id: '1',
    name: 'EP_WebXP_Start',
    label: 'Start',
    message: 'Start',
    image_url: '/images/location/color/location_01.png',
    image_url_unfound: '/images/location/black&white/location_01.png',
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
    image_url: '/images/location/color/location_02.png',
    image_url_unfound: '/images/location/black&white/location_02.png',
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
    image_url: '/images/location/color/location_03.png',
    image_url_unfound: '/images/location/black&white/location_03.png',
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
    image_url: '/images/location/color/location_04.png',
    image_url_unfound: '/images/location/black&white/location_04.png',
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
    image_url: '/images/location/color/location_05.png',
    image_url_unfound: '/images/location/black&white/location_05.png',
    upper_location: '4',
    is_hidden: false,
    musics: ['0','1'],
  },

  // MMA -6-
  {
    id: '6',
    name: 'mma',
    label: 'Mma',
    message: 'Mma',
    image_url: '/images/location/color/location_06.png',
    image_url_unfound: '/images/location/black&white/location_06.png',
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
    image_url: '/images/location/color/location_07.png',
    image_url_unfound: '/images/location/black&white/location_07.png',
    upper_location: '6',
    is_hidden: false,
    musics: ['0','1'],
  },

  // HOCKEY -8-
  {
    id: '8',
    name: 'hockey',
    label: 'Hockey',
    message: 'Hockey',
    image_url: '/images/location/color/location_08.png',
    image_url_unfound: '/images/location/black&white/location_08.png',
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
    image_url: '/images/location/color/location_09.png',
    image_url_unfound: '/images/location/black&white/location_09.png',
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
    image_url: '/images/location/color/location_10.png',
    image_url_unfound: '/images/location/black&white/location_10.png',
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
  //   image_url_unfound: '/images/location/black&white/???.png',
  //   upper_location: '10',
  //   is_hidden: false,
  //   musics: ['0','1'],
  // },

  // SECRET END -99-
  {
    id: '99',
    name: 'secret_end',
    label: 'fin secrète',
    message: 'fin secrète',
    image_url: '/images/location/color/location_99.png',
    image_url_unfound: '/images/location/black&white/location_99.png',
    upper_location: '0',
    is_hidden: true,
    musics: ['2','3'],
  },
  
] as locationInterface[]);