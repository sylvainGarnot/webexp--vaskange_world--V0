import { ref } from 'vue';
import type { characterFoundInterface, characterInterface, currentCharacterInterface } from './interface';


export const currentCharacter = ref({} as currentCharacterInterface);

export const characters_found = ref([] as characterFoundInterface[]);

export const characters = ref([

  // ##### START PHONE -0- #####


  // ##### EP_WebXP_Start -1- #####

  
  // ##### FOOTBALL -2- #####
  // FOOTBALL - PERSO
  {
    id: '20',
    name: 'football_perso',
    label: '',
    dialog: '0',
    location: '2',
    is_hidden: false,
    image_url: ''
  },
  // FOOTBALL - CRAMPON
  {
    id: '21',
    name: 'football_crampon',
    label: '',
    dialog: '21',
    location: '2',
    is_hidden: false,
    image_url: ''
  },
  // FOOTBALL - MAILLOT
  {
    id: '22',
    name: 'football_maillot',
    label: '',
    dialog: '22',
    location: '2',
    is_hidden: false,
    image_url: ''
  },
  // FOOTBALL - EASTER (à replacer)
  {
    id: '29',
    name: 'football_easter',
    label: 'Football easter eggs',
    dialog: '9',
    location: '2',
    is_hidden: true,
    image_url: ''
  },


  // ##### BASEBALL -3- #####
  // BASEBALL - PERSO
  {
    id: '30',
    name: 'baseball_perso',
    label: '',
    dialog: '0',
    location: '3',
    is_hidden: false,
    image_url: ''
  },
  // BASEBALL - BAT
  {
    id: '31',
    name: 'baseball_bat',
    label: '',
    dialog: '31',
    location: '3',
    is_hidden: false,
    image_url: ''
  },
  // BASEBALL - CASQUETTE
  {
    id: '32',
    name: 'baseball_casquette',
    label: '',
    dialog: '32',
    location: '3',
    is_hidden: false,
    image_url: ''
  },
  // BASEBALL - GANT
  {
    id: '33',
    name: 'baseball_gant',
    label: '',
    dialog: '33',
    location: '3',
    is_hidden: false,
    image_url: ''
  },
  // BASEBALL - EASTER
  {
    id: '39',
    name: 'baseball_easter',
    label: '',
    dialog: '9',
    location: '3',
    is_hidden: true,
    image_url: ''
  },

  
  // ##### BASKET -4- #####
  // BASKET - PERSO
  {
    id: '40',
    name: 'basket_perso',
    label: '',
    dialog: '0',
    location: '4',
    is_hidden: false,
    image_url: ''
  },
  // BASKET - BANDEAU
  {
    id: '41',
    name: 'basket_bandeau',
    label: '',
    dialog: '41',
    location: '4',
    is_hidden: false,
    image_url: ''
  },
  // BASKET - CHAUSSURE
  {
    id: '42',
    name: 'basket_chaussure',
    label: '',
    dialog: '42',
    location: '4',
    is_hidden: false,
    image_url: ''
  },
  // BASKET - MANCHETTE
  {
    id: '43',
    name: 'basket_manchette',
    label: '',
    dialog: '43',
    location: '4',
    is_hidden: false,
    image_url: ''
  },
  // BASKET - EASTER
  {
    id: '49',
    name: 'basket_easter',
    label: '',
    dialog: '9',
    location: '4',
    is_hidden: true,
    image_url: ''
  },

  
  // ##### TENNIS -5- #####
  // TENNIS - PERSO
  {
    id: '50',
    name: 'tenis_perso',
    label: '',
    dialog: '0',
    location: '5',
    is_hidden: false,
    image_url: ''
  },
  // TENNIS - EASTER
  {
    id: '59',
    name: 'tenis_easter',
    label: '',
    dialog: '9',
    location: '5',
    is_hidden: true,
    image_url: ''
  },

  
  // ##### MMA -6- #####
  // MMA - PERSO (à replacer)
  {
    id: '60',
    name: 'mma_perso',
    label: '',
    dialog: '0',
    location: '6',
    is_hidden: false,
    image_url: ''
  },
  // MMA - BANDAGE
  {
    id: '61',
    name: 'mma_bandage',
    label: '',
    dialog: '61',
    location: '6',
    is_hidden: false,
    image_url: ''
  },
  // MMA - DENTIER
  {
    id: '62',
    name: 'mma_dentier',
    label: '',
    dialog: '62',
    location: '6',
    is_hidden: false,
    image_url: ''
  },
  // MMA - GANT
  {
    id: '63',
    name: 'mma_gant',
    label: '',
    dialog: '63',
    location: '6',
    is_hidden: false,
    image_url: ''
  },
  // MMA - EASTER
  {
    id: '69',
    name: 'mma_easter',
    label: '',
    dialog: '9',
    location: '6',
    is_hidden: true,
    image_url: ''
  },

  
  // ##### CYCLISME -7- #####
  // CYCLISME - PERSO inéxistant!
  {
    id: '70',
    name: 'cyclisme_perso',
    label: '',
    dialog: '0',
    location: '7',
    is_hidden: false,
    image_url: ''
  },
  // CYCLISME - CASQUE
  {
    id: '71',
    name: 'cyclisme_casque',
    label: '',
    dialog: '71',
    location: '7',
    is_hidden: false,
    image_url: ''
  },
  // CYCLISME - GONFLEUR
  {
    id: '72',
    name: 'cyclisme_gonfleur',
    label: '',
    dialog: '72',
    location: '7',
    is_hidden: false,
    image_url: ''
  },
  // CYCLISME - GOURDE
  {
    id: '73',
    name: 'cyclisme_gourde',
    label: '',
    dialog: '73',
    location: '7',
    is_hidden: false,
    image_url: ''
  },
  // CYCLISME - EASTER inéxistant!
  {
    id: '79',
    name: 'cyclisme_easter',
    label: '',
    dialog: '9',
    location: '7',
    is_hidden: true,
  },


  // ##### HOCKEY -8- #####
  // HOCKEY - PERSO
  {
    id: '80',
    name: 'hockey_perso',
    label: '',
    dialog: '0',
    location: '8',
    is_hidden: false,
    image_url: ''
  },
  // HOCKEY - CASQUE
  {
    id: '81',
    name: 'hockey_casque',
    label: '',
    dialog: '81',
    location: '8',
    is_hidden: false,
    image_url: ''
  },
  // HOCKEY - CLUB
  {
    id: '82',
    name: 'hockey_club',
    label: '',
    dialog: '82',
    location: '8',
    is_hidden: false,
    image_url: ''
  },
  // HOCKEY - PATINS
  {
    id: '83',
    name: 'hockey_patin',
    label: '',
    dialog: '83',
    location: '8',
    is_hidden: false,
    image_url: ''
  },
  // HOCKEY - EASTER inéxistant!
  {
    id: '89',
    name: 'hockey_easter',
    label: '',
    dialog: '9',
    location: '8',
    is_hidden: true,
    image_url: ''
  },

  
  // ##### RUGBY -9- #####
  // RUGBY - PERSO
  {
    id: '90',
    name: 'rugby_perso',
    label: '',
    dialog: '0',
    location: '9',
    is_hidden: false,
    image_url: ''
  },
  // RUGBY - BOUCLIER
  {
    id: '91',
    name: 'rugby_bouclier',
    label: '',
    dialog: '91',
    location: '9',
    is_hidden: false,
    image_url: ''
  },
  // RUGBY - CASQUE
  {
    id: '92',
    name: 'rugby_casque',
    label: '',
    dialog: '92',
    location: '9',
    is_hidden: false,
    image_url: ''
  },
  // RUGBY - TEE
  {
    id: '93',
    name: 'rugby_tee',
    label: '',
    dialog: '93',
    location: '9',
    is_hidden: false,
    image_url: ''
  },
  // RUGBY - EASTER
  {
    id: '99',
    name: 'rugby_easter',
    label: '',
    dialog: '9',
    location: '9',
    is_hidden: true,
    image_url: ''
  },

  
  // ##### MONTAGNE -10- #####
  // MONTAGNE - PERSO
  {
    id: '100',
    name: 'montagne_perso',
    label: '',
    dialog: '0',
    location: '10',
    is_hidden: false,
    image_url: ''
  },
  // MONTAGNE - OXYGENE
  {
    id: '101',
    name: 'montagne_oxygene',
    label: '',
    dialog: '101',
    location: '10',
    is_hidden: false,
    image_url: ''
  },
  // MONTAGNE - PIOLET
  {
    id: '102',
    name: 'montagne_piolet',
    label: '',
    dialog: '102',
    location: '10',
    is_hidden: false,
    image_url: ''
  },
  // MONTAGNE - TENTE
  {
    id: '103',
    name: 'montagne_tente',
    label: '',
    dialog: '103',
    location: '10',
    is_hidden: false,
    image_url: ''
  },
  // MONTAGNE - EASTER inéxistant!
  {
    id: '109',
    name: 'montagne_easter',
    label: '',
    dialog: '9',
    location: '10',
    is_hidden: true,
    image_url: '/images/character/montagne_easter.png'
  },

  
  // ##### EVREST #####

  
  // ##### SECRET END #####


] as characterInterface[]);