import { ref } from 'vue';
import type { characterFoundInterface, characterInterface, currentCharacterInterface } from './interface';


export const currentCharacter = ref({} as currentCharacterInterface);

export const characters_found = ref([] as characterFoundInterface[]);

export const characters = ref([

  // START PHONE

  
  // ##### FOOTBALL #####
  // FOOTBALL - PERSO
  {
    id: '10',
    name: 'football_perso',
    label: '',
    dialog: '0',
    location: '1',
    is_hidden: false,
    image_url: ''
  },
  // FOOTBALL - CRAMPON
  {
    id: '11',
    name: 'football_crampon',
    label: '',
    dialog: '11',
    location: '1',
    is_hidden: false,
    image_url: ''
  },
  // FOOTBALL - MAILLOT
  {
    id: '12',
    name: 'football_maillot',
    label: '',
    dialog: '12',
    location: '1',
    is_hidden: false,
    image_url: ''
  },
  // FOOTBALL - EASTER (à replacer)
  {
    id: '19',
    name: 'football_easter',
    label: 'Football easter eggs',
    dialog: '9',
    location: '1',
    is_hidden: true,
    image_url: ''
  },


  // ##### BASEBALL #####
  // BASEBALL - PERSO
  {
    id: '20',
    name: 'baseball_perso',
    label: '',
    dialog: '0',
    location: '2',
    is_hidden: false,
    image_url: ''
  },
  // BASEBALL - BAT
  {
    id: '21',
    name: 'baseball_bat',
    label: '',
    dialog: '21',
    location: '2',
    is_hidden: false,
    image_url: ''
  },
  // BASEBALL - CASQUETTE
  {
    id: '22',
    name: 'baseball_casquette',
    label: '',
    dialog: '22',
    location: '2',
    is_hidden: false,
    image_url: ''
  },
  // BASEBALL - GANT
  {
    id: '23',
    name: 'baseball_gant',
    label: '',
    dialog: '23',
    location: '2',
    is_hidden: false,
    image_url: ''
  },
  // BASEBALL - EASTER ULTRABUG!
  {
    id: '29',
    name: 'baseball_easter',
    label: '',
    dialog: '9',
    location: '2',
    is_hidden: true,
    image_url: ''
  },

  
  // ##### BASKET #####
  // BASKET - PERSO
  {
    id: '30',
    name: 'basket_perso',
    label: '',
    dialog: '0',
    location: '3',
    is_hidden: false,
    image_url: ''
  },
  // BASKET - BANDEAU
  {
    id: '31',
    name: 'basket_bandeau',
    label: '',
    dialog: '31',
    location: '3',
    is_hidden: false,
    image_url: ''
  },
  // BASKET - CHAUSSURE
  {
    id: '32',
    name: 'basket_chaussure',
    label: '',
    dialog: '32',
    location: '3',
    is_hidden: false,
    image_url: ''
  },
  // BASKET - MANCHETTE
  {
    id: '33',
    name: 'basket_manchette',
    label: '',
    dialog: '33',
    location: '3',
    is_hidden: false,
    image_url: ''
  },
  // BASKET - EASTER
  {
    id: '39',
    name: 'basket_easter',
    label: '',
    dialog: '9',
    location: '3',
    is_hidden: true,
    image_url: ''
  },

  
  // ##### TENNIS #####
  // TENNIS - PERSO
  {
    id: '40',
    name: 'tenis_perso',
    label: '',
    dialog: '0',
    location: '4',
    is_hidden: false,
    image_url: ''
  },
  // TENNIS - EASTER ULTRABUG!
  {
    id: '49',
    name: 'tenis_easter',
    label: '',
    dialog: '9',
    location: '4',
    is_hidden: true,
    image_url: ''
  },

  
  // ##### MMA #####
  // MMA - PERSO (à replacer)
  {
    id: '50',
    name: 'mma_perso',
    label: '',
    dialog: '0',
    location: '5',
    is_hidden: false,
    image_url: ''
  },
  // MMA - BANDAGE ULTRABUG!
  {
    id: '51',
    name: 'mma_bandage',
    label: '',
    dialog: '51',
    location: '5',
    is_hidden: false,
    image_url: ''
  },
  // MMA - DENTIER
  {
    id: '52',
    name: 'mma_dentier',
    label: '',
    dialog: '52',
    location: '5',
    is_hidden: false,
    image_url: ''
  },
  // MMA - GANT
  {
    id: '53',
    name: 'mma_gant',
    label: '',
    dialog: '53',
    location: '5',
    is_hidden: false,
    image_url: ''
  },
  // MMA - EASTER ULTRABUG!
  {
    id: '59',
    name: 'mma_easter',
    label: '',
    dialog: '9',
    location: '5',
    is_hidden: true,
    image_url: ''
  },

  
  // ##### CYCLISME #####
  // CYCLISME - PERSO inéxistant!
  {
    id: '60',
    name: 'cyclisme_perso',
    label: '',
    dialog: '0',
    location: '6',
    is_hidden: false,
    image_url: ''
  },
  // CYCLISME - CASQUE
  {
    id: '61',
    name: 'cyclisme_casque',
    label: '',
    dialog: '61',
    location: '6',
    is_hidden: false,
    image_url: ''
  },
  // CYCLISME - GONFLEUR ULTRABUG!
  {
    id: '62',
    name: 'cyclisme_gonfleur',
    label: '',
    dialog: '62',
    location: '6',
    is_hidden: false,
    image_url: ''
  },
  // CYCLISME - GOURDE
  {
    id: '63',
    name: 'cyclisme_gourde',
    label: '',
    dialog: '63',
    location: '6',
    is_hidden: false,
    image_url: ''
  },
  // CYCLISME - EASTER inéxistant!
  {
    id: '69',
    name: 'cyclisme_easter',
    label: '',
    dialog: '9',
    location: '6',
    is_hidden: true,
  },


  // ##### HOCKEY #####
  // HOCKEY - PERSO
  {
    id: '70',
    name: 'hockey_perso',
    label: '',
    dialog: '0',
    location: '7',
    is_hidden: false,
    image_url: ''
  },
  // HOCKEY - CASQUE
  {
    id: '71',
    name: 'hockey_casque',
    label: '',
    dialog: '71',
    location: '7',
    is_hidden: false,
    image_url: ''
  },
  // HOCKEY - CLUB
  {
    id: '72',
    name: 'hockey_club',
    label: '',
    dialog: '72',
    location: '7',
    is_hidden: false,
    image_url: ''
  },
  // HOCKEY - PATINS
  {
    id: '73',
    name: 'hockey_patins',
    label: '',
    dialog: '73',
    location: '7',
    is_hidden: false,
    image_url: ''
  },
  // HOCKEY - EASTER inéxistant!
  {
    id: '79',
    name: 'hockey_easter',
    label: '',
    dialog: '9',
    location: '7',
    is_hidden: true,
    image_url: ''
  },

  
  // ##### RUGBY #####
  // RUGBY - PERSO
  {
    id: '80',
    name: 'rugby_perso',
    label: '',
    dialog: '0',
    location: '8',
    is_hidden: false,
    image_url: ''
  },
  // RUGBY - BOUCLIER
  {
    id: '81',
    name: 'rugby_bouclier',
    label: '',
    dialog: '81',
    location: '8',
    is_hidden: false,
    image_url: ''
  },
  // RUGBY - CASQUE
  {
    id: '82',
    name: 'rugby_casque',
    label: '',
    dialog: '82',
    location: '8',
    is_hidden: false,
    image_url: ''
  },
  // RUGBY - TEE
  {
    id: '83',
    name: 'rugby_tee',
    label: '',
    dialog: '83',
    location: '8',
    is_hidden: false,
    image_url: ''
  },
  // RUGBY - EASTER
  {
    id: '89',
    name: 'rugby_easter',
    label: '',
    dialog: '9',
    location: '8',
    is_hidden: true,
    image_url: ''
  },

  
  // ##### MONTAGNE #####
  // MONTAGNE - PERSO
  {
    id: '90',
    name: 'montagne_perso',
    label: '',
    dialog: '0',
    location: '9',
    is_hidden: false,
    image_url: ''
  },
  // MONTAGNE - OXYGENE ULTRABUG!
  {
    id: '91',
    name: 'montagne_oxygene',
    label: '',
    dialog: '91',
    location: '9',
    is_hidden: false,
    image_url: ''
  },
  // MONTAGNE - PIOLET
  {
    id: '92',
    name: 'montagne_piolet',
    label: '',
    dialog: '92',
    location: '9',
    is_hidden: false,
    image_url: ''
  },
  // MONTAGNE - TENTE ULTRABUG!
  {
    id: '93',
    name: 'montagne_tente',
    label: '',
    dialog: '93',
    location: '9',
    is_hidden: false,
    image_url: ''
  },
  // MONTAGNE - EASTER inéxistant!
  {
    id: '99',
    name: 'montagne_easter',
    label: '',
    dialog: '9',
    location: '9',
    is_hidden: true,
    image_url: '/images/character/montagne_easter.png'
  },

  
  // ##### EVREST #####

  
  // ##### SECRET END #####

  
  // // #####################
  // // TEST - VASKANGE WORLD
  // // #####################
  // {
  //   id: '1',
  //   name: 'jump-q1'
  // label: '',
  // dialog: '0',
  //   location: '1',
  // },
  // {
  //   id: '2',
  //   name: 'rick 🐝'
  // label: '',
  // dialog: '2',
  //   location: '4',
  // },
  // {
  //   id: '3',
  //   name: 'astro 1'
  // label: '',
  // dialog: '1',
  //   location: '1',
  // },
  // {
  //   id: '4',
  //   name: 'shop 🖼️'
  // label: '', 
  // dialog: '2',
  //   location: '1',
  // },
] as characterInterface[]);