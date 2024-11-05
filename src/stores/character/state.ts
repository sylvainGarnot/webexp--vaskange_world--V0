import { ref } from 'vue';
import type { characterFoundInterface, characterInterface, currentCharacterInterface } from './interface';


export const currentCharacter = ref({} as currentCharacterInterface);

export const characters_found = ref([] as characterFoundInterface[]);

export const characters = ref([

  // START PHONE

  
  // ##### FOOTBALL #####
  // FOOTBALL - PERSO OK!
  {
    id: '10',
    name: 'football_perso',
    label: '',
    dialog: '0',
    location: '1',
    is_hidden: false,
    image_url: '/images/character/football_perso.png'
  },
  // FOOTBALL - CRAMPON OK!
  {
    id: '11',
    name: 'football_crampon',
    label: '',
    dialog: '0',
    location: '1',
    is_hidden: false,
    image_url: '/images/character/football_crampon.png'
  },
  // FOOTBALL - MAILLOT OK!
  {
    id: '12',
    name: 'football_maillot',
    label: '',
    dialog: '0',
    location: '1',
    is_hidden: false,
    image_url: '/images/character/football_maillot.png'
  },
  // FOOTBALL - EASTER OK! (à replacer)
  {
    id: '19',
    name: 'football_easter',
    label: 'Football easter eggs',
    dialog: '0',
    location: '1',
    is_hidden: true,
    image_url: '/images/character/football_easter.png'
  },


  // ##### BASEBALL #####
  // BASEBALL - PERSO OK!
  {
    id: '20',
    name: 'baseball_perso',
    label: '',
    dialog: '0',
    location: '2',
    is_hidden: false,
    image_url: '/images/character/baseball_perso.png'
  },
  // BASEBALL - BAT OK!
  {
    id: '21',
    name: 'baseball_bat',
    label: '',
    dialog: '0',
    location: '2',
    is_hidden: false,
    image_url: '/images/character/baseball_bat.png'
  },
  // BASEBALL - CASQUETTE OK!
  {
    id: '22',
    name: 'baseball_casquette',
    label: '',
    dialog: '0',
    location: '2',
    is_hidden: false,
    image_url: '/images/character/baseball_casquette.png'
  },
  // BASEBALL - GANT OK!
  {
    id: '23',
    name: 'baseball_gant',
    label: '',
    dialog: '0',
    location: '2',
    is_hidden: false,
    image_url: '/images/character/baseball_gant.png'
  },
  // // BASEBALL - EASTER ULTRABUG!
  {
    id: '29',
    name: 'baseball_easter',
    label: '',
    dialog: '0',
    location: '2',
    is_hidden: true,
    image_url: '/images/character/baseball_easter.png'
  },

  
  // ##### BASKET #####
  // BASKET - PERSO OK!
  {
    id: '30',
    name: 'basket_perso',
    label: '',
    dialog: '0',
    location: '3',
    is_hidden: false,
    image_url: '/images/character/basket_perso.png'
  },
  // BASKET - BANDEAU OK!
  {
    id: '31',
    name: 'basket_bandeau',
    label: '',
    dialog: '0',
    location: '3',
    is_hidden: false,
    image_url: '/images/character/basket_bandeau.png'
  },
  // BASKET - CHAUSSURE OK!
  {
    id: '32',
    name: 'basket_chaussure',
    label: '',
    dialog: '0',
    location: '3',
    is_hidden: false,
    image_url: '/images/character/basket_chaussure.png'
  },
  // BASKET - MANCHETTE OK!
  {
    id: '32',
    name: 'basket_manchette',
    label: '',
    dialog: '0',
    location: '3',
    is_hidden: false,
    image_url: '/images/character/basket_manchette.png'
  },
  // BASKET - EASTER OK!
  {
    id: '39',
    name: 'basket_easter',
    label: '',
    dialog: '0',
    location: '3',
    is_hidden: true,
    image_url: '/images/character/basket_easter.png'
  },

  
  // ##### TENNIS #####
  // TENNIS - PERSO OK!
  {
    id: '40',
    name: 'tenis_perso',
    label: '',
    dialog: '0',
    location: '4',
    is_hidden: false,
    image_url: '/images/character/tennis_perso.png'
  },
  // TENNIS - EASTER ULTRABUG!
  {
    id: '49',
    name: 'tenis_easter',
    label: '',
    dialog: '0',
    location: '4',
    is_hidden: true,
    image_url: '/images/character/tennis_easter.png'
  },

  
  // ##### MMA #####
  // MMA - PERSO OK! (à replacer)
  {
    id: '50',
    name: 'mma_perso',
    label: '',
    dialog: '0',
    location: '5',
    is_hidden: false,
    image_url: '/images/character/mma_perso.png'
  },
  // MMA - BANDAGE ULTRABUG!
  {
    id: '51',
    name: 'mma_bandage',
    label: '',
    dialog: '0',
    location: '5',
    is_hidden: false,
    image_url: '/images/character/mma_bandage.png'
  },
  // MMA - DENTIER OK!
  {
    id: '52',
    name: 'mma_dentier',
    label: '',
    dialog: '0',
    location: '5',
    is_hidden: false,
    image_url: '/images/character/mma_dentier.png'
  },
  // MMA - GANT inéxistant!
  {
    id: '53',
    name: 'mma_gant',
    label: '',
    dialog: '0',
    location: '5',
    is_hidden: false,
    image_url: '/images/character/mma_gant.png'
  },
  // MMA - EASTER ULTRABUG!
  {
    id: '59',
    name: 'mma_easter',
    label: '',
    dialog: '0',
    location: '5',
    is_hidden: true,
    image_url: '/images/character/mma_easter.png'
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
    image_url: '/images/character/cyclisme_perso.png'
  },
  // CYCLISME - CASQUE OK!
  {
    id: '61',
    name: 'cyclisme_casque',
    label: '',
    dialog: '0',
    location: '6',
    is_hidden: false,
    image_url: '/images/character/cyclisme_casque.png'
  },
  // CYCLISME - GONFLEUR ULTRABUG!
  {
    id: '62',
    name: 'cyclisme_gonfleur',
    label: '',
    dialog: '0',
    location: '6',
    is_hidden: false,
    image_url: '/images/character/cyclisme_gonfleur.png'
  },
  // CYCLISME - GOURDE OK!
  {
    id: '62',
    name: 'cyclisme_gourde',
    label: '',
    dialog: '0',
    location: '6',
    is_hidden: false,
    image_url: '/images/character/cyclisme_gourde.png'
  },
  // CYCLISME - EASTER introuvable!
  {
    id: '69',
    name: 'cyclisme_easter',
    label: '',
    dialog: '0',
    location: '6',
    is_hidden: true,
    image_url: '/images/character/cyclisme_easter.png'
  },


  // ##### HOCKEY #####
  // HOCKEY - PERSO OK!
  {
    id: '70',
    name: 'hockey_perso',
    label: '',
    dialog: '0',
    location: '7',
    is_hidden: false,
    image_url: '/images/character/hockey_perso.png'
  },
  // HOCKEY - CASQUE OK!
  {
    id: '71',
    name: 'hockey_casque',
    label: '',
    dialog: '0',
    location: '7',
    is_hidden: false,
    image_url: '/images/character/hockey_casque.png'
  },
  // HOCKEY - CLUB OK!
  {
    id: '72',
    name: 'hockey_club',
    label: '',
    dialog: '0',
    location: '7',
    is_hidden: false,
    image_url: '/images/character/hockey_club.png'
  },
  // HOCKEY - PATINS OK!
  {
    id: '73',
    name: 'hockey_patins',
    label: '',
    dialog: '0',
    location: '7',
    is_hidden: false,
    image_url: '/images/character/hockey_patins.png'
  },
  // HOCKEY - EASTER introuvable!
  {
    id: '79',
    name: 'hockey_easter',
    label: '',
    dialog: '0',
    location: '7',
    is_hidden: true,
    image_url: '/images/character/hockey_easter.png'
  },

  
  // ##### RUGBY #####
  // RUGBY - PERSO OK!
  {
    id: '80',
    name: 'rugby_perso',
    label: '',
    dialog: '0',
    location: '8',
    is_hidden: false,
    image_url: '/images/character/rugby_perso.png'
  },
  // RUGBY - BOUCLIER OK!
  {
    id: '81',
    name: 'rugby_bouclier',
    label: '',
    dialog: '0',
    location: '8',
    is_hidden: false,
    image_url: '/images/character/rugby_bouclier.png'
  },
  // RUGBY - CASQUE OK!
  {
    id: '82',
    name: 'rugby_casque',
    label: '',
    dialog: '0',
    location: '8',
    is_hidden: false,
    image_url: '/images/character/rugby_casque.png'
  },
  // RUGBY - TEE OK!
  {
    id: '83',
    name: 'rugby_tee',
    label: '',
    dialog: '0',
    location: '8',
    is_hidden: false,
    image_url: '/images/character/rugby_tee.png'
  },
  // RUGBY - EASTER OK!
  {
    id: '89',
    name: 'rugby_easter',
    label: '',
    dialog: '0',
    location: '8',
    is_hidden: true,
    image_url: '/images/character/rugby_easter.png'
  },

  
  // ##### MONTAGNE #####
  // MONTAGNE - PERSO OK!
  {
    id: '90',
    name: 'montagne_perso',
    label: '',
    dialog: '0',
    location: '9',
    is_hidden: false,
    image_url: '/images/character/montagne_perso.png'
  },
  // MONTAGNE - OXYGENE ULTRABUG!
  {
    id: '91',
    name: 'montagne_oxygene',
    label: '',
    dialog: '0',
    location: '9',
    is_hidden: false,
    image_url: '/images/character/montagne_oxygene.png'
  },
  // MONTAGNE - PIOLET OK!
  {
    id: '92',
    name: 'montagne_piolet',
    label: '',
    dialog: '0',
    location: '9',
    is_hidden: false,
    image_url: '/images/character/montagne_piolet.png'
  },
  // MONTAGNE - TENTE ULTRABUG!
  {
    id: '93',
    name: 'montagne_tente',
    label: '',
    dialog: '0',
    location: '9',
    is_hidden: false,
    image_url: '/images/character/montagne_tente.png'
  },
  // MONTAGNE - EASTER inéxistant!
  {
    id: '99',
    name: 'montagne_easter',
    label: '',
    dialog: '0',
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
  //   image_url: '/images/character/Eson Island 🗿.PNG'
  // },
  // {
  //   id: '2',
  //   name: 'rick 🐝'
  // label: '',
  // dialog: '2',
  //   location: '4',
  //   image_url: '/images/character/Eson Island 🗿.PNG'
  // },
  // {
  //   id: '3',
  //   name: 'astro 1'
  // label: '',
  // dialog: '1',
  //   location: '1',
  //   image_url: '/images/character/Eson Island 🗿.PNG'
  // },
  // {
  //   id: '4',
  //   name: 'shop 🖼️'
  // label: '', 
  // dialog: '2',
  //   location: '1',
  //   image_url: '/images/character/Eson Island 🗿.PNG'
  // },
] as characterInterface[]);