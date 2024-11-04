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
    dialog: '0',
    location: '1',
    image_url: '/images/character/football_perso.png'
  },
  // FOOTBALL - CRAMPON OK!
  {
    id: '11',
    name: 'football_crampon',
    dialog: '0',
    location: '1',
    image_url: '/images/character/football_crampon.png'
  },
  // FOOTBALL - MAILLOT OK!
  {
    id: '12',
    name: 'football_maillot',
    dialog: '0',
    location: '1',
    image_url: '/images/character/football_maillot.png'
  },
  // FOOTBALL - EASTER OK! à replacer
  {
    id: '19',
    name: 'football_easter',
    dialog: '0',
    location: '1',
    image_url: '/images/character/football_easter.png'
  },


  // ##### BASEBALL #####
  // BASEBALL - PERSO OK!
  {
    id: '20',
    name: 'baseball_perso',
    dialog: '0',
    location: '2',
    image_url: '/images/character/baseball_perso.png'
  },
  // BASEBALL - BAT OK!
  {
    id: '21',
    name: 'baseball_bat',
    dialog: '0',
    location: '2',
    image_url: '/images/character/baseball_bat.png'
  },
  // BASEBALL - CASQUETTE OK!
  {
    id: '22',
    name: 'baseball_casquette',
    dialog: '0',
    location: '2',
    image_url: '/images/character/baseball_casquette.png'
  },
  // BASEBALL - GANT OK!
  {
    id: '23',
    name: 'baseball_gant',
    dialog: '0',
    location: '2',
    image_url: '/images/character/baseball_gant.png'
  },
  // // BASEBALL - EASTER BUG!
  {
    id: '29',
    name: 'baseball_easter',
    dialog: '0',
    location: '2',
    image_url: '/images/character/baseball_easter.png'
  },

  
  // ##### BASKET #####
  // BASKET - PERSO OK!
  {
    id: '30',
    name: 'basket_perso',
    dialog: '0',
    location: '3',
    image_url: '/images/character/basket_perso.png'
  },
  // BASKET - BANDEAU OK!
  {
    id: '31',
    name: 'basket_bandeau',
    dialog: '0',
    location: '3',
    image_url: '/images/character/basket_bandeau.png'
  },
  // BASKET - CHAUSSURE OK!
  {
    id: '32',
    name: 'basket_chaussure',
    dialog: '0',
    location: '3',
    image_url: '/images/character/basket_chaussure.png'
  },
  // BASKET - MANCHETTE OK!
  {
    id: '32',
    name: 'basket_manchette',
    dialog: '0',
    location: '3',
    image_url: '/images/character/basket_manchette.png'
  },
  // BASKET - EASTER OK!
  {
    id: '39',
    name: 'basket_easter',
    dialog: '0',
    location: '3',
    image_url: '/images/character/basket_easter.png'
  },

  
  // ##### TENNIS #####
  // TENNIS - PERSO BUG!
  {
    id: '40',
    name: 'tennis_perso',
    dialog: '0',
    location: '4',
    image_url: '/images/character/tennis_perso.png'
  },
  // TENNIS - EASTER BUG!
  {
    id: '49',
    name: 'tennis_easter',
    dialog: '0',
    location: '4',
    image_url: '/images/character/tennis_easter.png'
  },

  
  // ##### MMA #####
  // MMA - PERSO OK! à replacer
  {
    id: '50',
    name: 'mma_perso',
    dialog: '0',
    location: '5',
    image_url: '/images/character/mma_perso.png'
  },
  // MMA - BANDAGE BUG!
  {
    id: '51',
    name: 'mma_bandage',
    dialog: '0',
    location: '5',
    image_url: '/images/character/mma_bandage.png'
  },
  // MMA - DENTIER OK!
  {
    id: '52',
    name: 'mma_dentier',
    dialog: '0',
    location: '5',
    image_url: '/images/character/mma_dentier.png'
  },
  // MMA - GANT BUG!
  {
    id: '53',
    name: 'mma_gant',
    dialog: '0',
    location: '5',
    image_url: '/images/character/mma_gant.png'
  },
  // MMA - EASTER ??? not found
  {
    id: '59',
    name: 'mma_easter',
    dialog: '0',
    location: '5',
    image_url: '/images/character/mma_easter.png'
  },

  
  // ##### CYCLISME #####
  // CYCLISME - PERSO BUG!
  {
    id: '60',
    name: 'cyclisme_perso',
    dialog: '0',
    location: '6',
    image_url: '/images/character/cyclisme_perso.png'
  },
  // CYCLISME - CASQUE OK!
  {
    id: '61',
    name: 'cyclisme_casque',
    dialog: '0',
    location: '6',
    image_url: '/images/character/cyclisme_casque.png'
  },
  // CYCLISME - GONFLEUR BUG!
  {
    id: '62',
    name: 'cyclisme_gonfleur',
    dialog: '0',
    location: '6',
    image_url: '/images/character/cyclisme_gonfleur.png'
  },
  // CYCLISME - GOURDE OK!
  {
    id: '62',
    name: 'cyclisme_gourde',
    dialog: '0',
    location: '6',
    image_url: '/images/character/cyclisme_gourde.png'
  },
  // CYCLISME - EASTER ??? not found
  {
    id: '69',
    name: 'cyclisme_easter',
    dialog: '0',
    location: '6',
    image_url: '/images/character/cyclisme_easter.png'
  },


  // ##### HOCKEY #####
  // HOCKEY - PERSO OK!
  {
    id: '70',
    name: 'hockey_perso',
    dialog: '0',
    location: '7',
    image_url: '/images/character/hockey_perso.png'
  },
  // HOCKEY - CASQUE OK!
  {
    id: '71',
    name: 'hockey_casque',
    dialog: '0',
    location: '7',
    image_url: '/images/character/hockey_casque.png'
  },
  // HOCKEY - CLUB OK!
  {
    id: '72',
    name: 'hockey_club',
    dialog: '0',
    location: '7',
    image_url: '/images/character/hockey_club.png'
  },
  // HOCKEY - PATINS OK!
  {
    id: '73',
    name: 'hockey_patins',
    dialog: '0',
    location: '7',
    image_url: '/images/character/hockey_patins.png'
  },
  // HOCKEY - EASTER ??? not found
  {
    id: '79',
    name: 'hockey_easter',
    dialog: '0',
    location: '7',
    image_url: '/images/character/hockey_easter.png'
  },

  
  // ##### RUGBY #####
  // RUGBY - PERSO OK!
  {
    id: '80',
    name: 'rugby_perso',
    dialog: '0',
    location: '8',
    image_url: '/images/character/rugby_perso.png'
  },
  // RUGBY - BOUCLIER OK!
  {
    id: '81',
    name: 'rugby_bouclier',
    dialog: '0',
    location: '8',
    image_url: '/images/character/rugby_bouclier.png'
  },
  // RUGBY - CASQUE OK!
  {
    id: '82',
    name: 'rugby_casque',
    dialog: '0',
    location: '8',
    image_url: '/images/character/rugby_casque.png'
  },
  // RUGBY - TEE OK!
  {
    id: '83',
    name: 'rugby_tee',
    dialog: '0',
    location: '8',
    image_url: '/images/character/rugby_tee.png'
  },
  // RUGBY - EASTER OK!
  {
    id: '89',
    name: 'rugby_easter',
    dialog: '0',
    location: '8',
    image_url: '/images/character/rugby_easter.png'
  },

  
  // ##### MONTAGNE #####
  // MONTAGNE - PERSO OK!
  {
    id: '90',
    name: 'montagne_perso',
    dialog: '0',
    location: '9',
    image_url: '/images/character/montagne_perso.png'
  },
  // MONTAGNE - OXYGENE BUG!
  {
    id: '91',
    name: 'montagne_oxygene',
    dialog: '0',
    location: '9',
    image_url: '/images/character/montagne_oxygene.png'
  },
  // MONTAGNE - PIOLET OK!
  {
    id: '92',
    name: 'montagne_piolet',
    dialog: '0',
    location: '9',
    image_url: '/images/character/montagne_piolet.png'
  },
  // MONTAGNE - TENTE BUG!
  {
    id: '93',
    name: 'montagne_tente',
    dialog: '0',
    location: '9',
    image_url: '/images/character/montagne_tente.png'
  },
  // MONTAGNE - EASTER BUG! undone
  {
    id: '99',
    name: 'montagne_easter',
    dialog: '0',
    location: '9',
    image_url: '/images/character/montagne_easter.png'
  },

  
  // ##### EVREST #####

  
  // ##### SECRET END #####

  
  // // #####################
  // // TEST - VASKANGE WORLD
  // // #####################
  // {
  //   id: '1',
  //   name: 'jump-q1',
  //   dialog: '0',
  //   location: '1',
  //   image_url: '/images/character/Eson Island 🗿.PNG'
  // },
  // {
  //   id: '2',
  //   name: 'rick 🐝',
  //   dialog: '2',
  //   location: '4',
  //   image_url: '/images/character/Eson Island 🗿.PNG'
  // },
  // {
  //   id: '3',
  //   name: 'astro 1',
  //   dialog: '1',
  //   location: '1',
  //   image_url: '/images/character/Eson Island 🗿.PNG'
  // },
  // {
  //   id: '4',
  //   name: 'shop 🖼️',
  //   // dialog: '2',
  //   location: '1',
  //   image_url: '/images/character/Eson Island 🗿.PNG'
  // },
] as characterInterface[]);