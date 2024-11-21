import { ref } from 'vue';
import type { characterFoundInterface, characterInterface, currentCharacterInterface } from './interface';


export const currentCharacter = ref({} as currentCharacterInterface);

export const characters_found = ref([] as characterFoundInterface[]);

export const characters = ref([

  // ##### START PHONE -0- #####


  // ##### EP_WebXP_Start -1- #####
  // FIRST - PERSO
  {
    id: '10',
    name: 'first_perso',
    label: '',
    label_dialog: '',
    dialog: '10',
    location: '1',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },

  
  // ##### FOOTBALL -2- #####
  // FOOTBALL - PERSO
  {
    id: '20',
    name: 'football_perso',
    label: '',
    label_dialog: '',
    dialog: '20',
    location: '2',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // FOOTBALL - CRAMPON
  {
    id: '21',
    name: 'football_crampon',
    label: '',
    label_dialog: '',
    dialog: '21',
    location: '2',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // FOOTBALL - MAILLOT
  {
    id: '22',
    name: 'football_maillot',
    label: '',
    label_dialog: '',
    dialog: '22',
    location: '2',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // FOOTBALL - MAILLOT
  {
    id: '23',
    name: 'football_captain',
    label: '',
    label_dialog: '',
    dialog: '23',
    location: '2',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // FOOTBALL - EASTER
  {
    id: '29',
    name: 'football_easter',
    label: 'Code promo Scène finale',
    label_dialog: '',
    dialog: '',
    location: '2',
    is_hidden: true,
    image_url: '/images/character/color/easter_eggs_02.png',
    image_url_unfound: '/images/character/black&white&blur/easter_eggs_02.png',
  },


  // ##### BASEBALL -3- #####
  // BASEBALL - PERSO
  {
    id: '30',
    name: 'baseball_perso',
    label: '',
    label_dialog: '',
    dialog: '30',
    location: '3',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // BASEBALL - CASQUETTE
  {
    id: '31',
    name: 'baseball_casquette',
    label: '',
    label_dialog: '',
    dialog: '31',
    location: '3',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // BASEBALL - BATTE
  {
    id: '32',
    name: 'baseball_bat',
    label: '',
    label_dialog: '',
    dialog: '32',
    location: '3',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // BASEBALL - GANT
  {
    id: '33',
    name: 'baseball_gant',
    label: '',
    label_dialog: '',
    dialog: '33',
    location: '3',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // BASEBALL - EASTER
  {
    id: '39',
    name: 'baseball_easter',
    label: 'Code promo Baseball',
    label_dialog: '',
    dialog: '',
    location: '3',
    is_hidden: true,
    image_url: '/images/character/color/easter_eggs_03.png',
    image_url_unfound: '/images/character/black&white&blur/easter_eggs_03.png',
  },

  
  // ##### BASKET -4- #####
  // BASKET - PERSO
  {
    id: '40',
    name: 'basket_perso',
    label: '',
    label_dialog: '',
    dialog: '40',
    location: '4',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // BASKET - BANDEAU
  {
    id: '41',
    name: 'basket_bandeau',
    label: '',
    label_dialog: '',
    dialog: '41',
    location: '4',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // BASKET - CHAUSSURE
  {
    id: '42',
    name: 'basket_chaussure',
    label: '',
    label_dialog: '',
    dialog: '42',
    location: '4',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // BASKET - MANCHETTE
  {
    id: '43',
    name: 'basket_manchette',
    label: '',
    label_dialog: '',
    dialog: '43',
    location: '4',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // BASKET - EASTER
  {
    id: '49',
    name: 'basket_easter',
    label: 'Code promo Basket',
    label_dialog: '',
    dialog: '',
    location: '4',
    is_hidden: true,
    image_url: '/images/character/color/easter_eggs_04.png',
    image_url_unfound: '/images/character/black&white&blur/easter_eggs_04.png',
  },

  
  // ##### TENNIS -5- #####
  // TENNIS - PERSO
  {
    id: '50',
    name: 'tennis_perso',
    label: '',
    label_dialog: '',
    dialog: '50',
    location: '5',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // TENNIS - BANDEAU
  {
    id: '51',
    name: 'tennis_bandeau',
    label: '',
    label_dialog: '',
    dialog: '51',
    location: '5',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // TENNIS - CASQUETTE
  {
    id: '52',
    name: 'tennis_casquette',
    label: '',
    label_dialog: '',
    dialog: '52',
    location: '5',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // TENNIS - RAQUETTE
  {
    id: '53',
    name: 'tennis_raquette',
    label: '',
    label_dialog: '',
    dialog: '53',
    location: '5',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // TENNIS - EASTER
  {
    id: '59',
    name: 'tennis_easter',
    label: 'Code promo Tennis',
    label_dialog: '',
    dialog: '',
    location: '5',
    is_hidden: true,
    image_url: '/images/character/color/easter_eggs_05.png',
    image_url_unfound: '/images/character/black&white&blur/easter_eggs_05.png',
  },

  
  // ##### MMA -6- #####
  // MMA - PERSO (à replacer)
  {
    id: '60',
    name: 'mma_perso',
    label: '',
    label_dialog: '',
    dialog: '60',
    location: '6',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // MMA - BANDAGE
  {
    id: '61',
    name: 'mma_bandage',
    label: '',
    label_dialog: '',
    dialog: '61',
    location: '6',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // MMA - DENTIER
  {
    id: '62',
    name: 'mma_dentier',
    label: '',
    label_dialog: '',
    dialog: '62',
    location: '6',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // MMA - GANT
  {
    id: '63',
    name: 'mma_gant',
    label: '',
    label_dialog: '',
    dialog: '63',
    location: '6',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // MMA - EASTER
  {
    id: '69',
    name: 'mma_easter',
    label: 'Code promo MMA',
    label_dialog: '',
    dialog: '',
    location: '6',
    is_hidden: true,
    image_url: '/images/character/color/easter_eggs_06.png',
    image_url_unfound: '/images/character/black&white&blur/easter_eggs_06.png',
  },

  
  // ##### CYCLISME -7- #####
  // CYCLISME - PERSO
  {
    id: '70',
    name: 'cyclisme_perso',
    label: '',
    label_dialog: '',
    dialog: '70',
    location: '7',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // CYCLISME - CASQUE
  {
    id: '71',
    name: 'cyclisme_casque',
    label: '',
    label_dialog: '',
    dialog: '71',
    location: '7',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // CYCLISME - GONFLEUR
  {
    id: '72',
    name: 'cyclisme_gonfleur',
    label: '',
    label_dialog: '',
    dialog: '72',
    location: '7',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // CYCLISME - GOURDE
  {
    id: '73',
    name: 'cyclisme_gourde',
    label: '',
    label_dialog: '',
    dialog: '73',
    location: '7',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },


  // ##### HOCKEY -8- #####
  // HOCKEY - PERSO
  {
    id: '80',
    name: 'hockey_perso',
    label: '',
    label_dialog: '',
    dialog: '80',
    location: '8',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // HOCKEY - CASQUE
  {
    id: '81',
    name: 'hockey_casque',
    label: '',
    label_dialog: '',
    dialog: '81',
    location: '8',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // HOCKEY - CLUB
  {
    id: '82',
    name: 'hockey_club',
    label: '',
    label_dialog: '',
    dialog: '82',
    location: '8',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // HOCKEY - PATINS
  {
    id: '83',
    name: 'hockey_patins',
    label: '',
    label_dialog: '',
    dialog: '83',
    location: '8',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },

  
  // ##### RUGBY -9- #####
  // RUGBY - PERSO
  {
    id: '90',
    name: 'rugby_perso',
    label: '',
    label_dialog: '',
    dialog: '90',
    location: '9',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // RUGBY - BOUCLIER
  {
    id: '91',
    name: 'rugby_bouclier',
    label: '',
    label_dialog: '',
    dialog: '91',
    location: '9',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // RUGBY - CASQUE
  {
    id: '92',
    name: 'rugby_casque',
    label: '',
    label_dialog: '',
    dialog: '92',
    location: '9',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // RUGBY - TEE
  {
    id: '93',
    name: 'rugby_tee',
    label: '',
    label_dialog: '',
    dialog: '93',
    location: '9',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // RUGBY - EASTER
  {
    id: '99',
    name: 'rugby_easter',
    label: 'Code promo Rugby',
    label_dialog: '',
    dialog: '',
    location: '9',
    is_hidden: true,
    image_url: '/images/character/color/easter_eggs_09.png',
    image_url_unfound: '/images/character/black&white&blur/easter_eggs_09.png',
  },

  
  // ##### MONTAGNE -10- #####
  // MONTAGNE - PERSO
  {
    id: '100',
    name: 'montagne_perso',
    label: '',
    label_dialog: '',
    dialog: '100',
    location: '10',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // MONTAGNE - OXYGENE
  {
    id: '101',
    name: 'montagne_oxygene',
    label: '',
    label_dialog: '',
    dialog: '101',
    location: '10',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // MONTAGNE - PIOLET
  {
    id: '102',
    name: 'montagne_piolet',
    label: '',
    label_dialog: '',
    dialog: '102',
    location: '10',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // MONTAGNE - TENTE
  {
    id: '103',
    name: 'montagne_tente',
    label: '',
    label_dialog: '',
    dialog: '103',
    location: '10',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // MONTAGNE - DRAPEAU
  {
    id: '104',
    name: 'montagne_drapeau',
    label: '',
    label_dialog: '',
    dialog: '104',
    location: '10',
    is_hidden: false,
    image_url: '',
    image_url_unfound: '',
  },
  // MONTAGNE - EASTER
  {
    id: '109',
    name: 'montagne_easter',
    label: 'Code promo Montagne',
    label_dialog: 'YETI',
    dialog: '109',
    location: '10',
    is_hidden: true,
    image_url: '/images/character/color/easter_eggs_10.png',
    image_url_unfound: '/images/character/black&white&blur/easter_eggs_10.png',
  },

  
  // ##### EVREST #####

  
  // ##### SECRET END #####


] as characterInterface[]);