import { ref } from 'vue';
import type { dialogInterface } from './interface';

export const isDialogActive = ref(false as boolean);

const speech_item_found = [
  'Bravo ! Tu as trouvé un nouvel objet ✅',
] 

export const dialogs = ref([
  {
    id: '0',
    speech_written: [
      'Hello ! Il y a plusieurs objets ici à trouver.',
      'Si tu réussis à tous les réunir un lieu secret te sera accessible.',
      'Et si tu es encore plus curieux tu peux aussi trouver des codes cachés. Bonne chance !'
    ],
    item_provided: '',
    answers: ['1','0'],
    type: 'default',
  },
  {
    id: '9',
    speech_written: [
      'Félicitation !',
      'Regarde bien ces codes, ils vont te servir pour...',
    ],
    item_provided: '',
    answers: ['1','0'],
    type: 'default',
  },


  // START PHONE

  
  // ##### FOOTBALL -2- #####
  // FOOTBALL - PERSONNAGE
  {
    id: '20',
    speech_written: [
      'Suis la trajectoire du ballon pour tenter de trouver un code promo !'
    ],
    item_provided: '',
    answers: [],
    type: 'default',
  },
  // FOOTBALL - CRAMPON
  {
    id: '21',
    speech_written: speech_item_found,
    item_provided: '21',
    answers: [],
    type: 'gift',
  },
  // FOOTBALL - MAILLOT
  {
    id: '22',
    speech_written: speech_item_found,
    item_provided: '22',
    answers: [],
    type: 'gift',
  },
  // FOOTBALL - CAPTAIN
  {
    id: '23',
    speech_written: speech_item_found,
    item_provided: '23',
    answers: [],
    type: 'gift',
  },


  // ##### BASEBALL -3- #####
  // BASEBALL - PERSONNAGE
  {
    id: '30',
    speech_written: [
      'Oh j’ai jamais frappé une balle aussi fort,',
      'je pense qu’on la retrouvera jamais...'
    ],
    item_provided: '',
    answers: [],
    type: 'default',
  },
  // BASEBALL - CASQUETTE
  {
    id: '31',
    speech_written: speech_item_found,
    item_provided: '31',
    answers: [],
    type: 'gift',
  },
  // BASEBALL - BATTE
  {
    id: '32',
    speech_written: speech_item_found,
    item_provided: '32',
    answers: [],
    type: 'gift',
  },
  // BASEBALL - GANT
  {
    id: '33',
    speech_written: speech_item_found,
    item_provided: '33',
    answers: [],
    type: 'gift',
  },

  
  // ##### BASKET -4- #####
  // BASKET - PERSONNAGE
  {
    id: '40',
    speech_written: [
      'J’suis capable de shooter d’aussi loin que Steph Curry !'
    ],
    item_provided: '',
    answers: [],
    type: 'default',
  },
  // BASKET - BANDEAU
  {
    id: '41',
    speech_written: speech_item_found,
    item_provided: '41',
    answers: [],
    type: 'gift',
  },
  // BASKET - CHAUSSURE
  {
    id: '42',
    speech_written: speech_item_found,
    item_provided: '42',
    answers: [],
    type: 'gift',
  },
  // BASKET - MANCHETTE
  {
    id: '43',
    speech_written: speech_item_found,
    item_provided: '43',
    answers: [],
    type: 'gift',
  },


  // ##### TENNIS -5- #####
  // TENNIS - PERSONNAGE
  {
    id: '50',
    speech_written: [
      'Merci pour tout Isner… mais je sers clairement plus fort que toi !'
    ],
    item_provided: '',
    answers: [],
    type: 'default',
  },
  // TENNIS - BANDEAU
  {
    id: '51',
    speech_written: speech_item_found,
    item_provided: '51',
    answers: [],
    type: 'gift',
  },
  // TENNIS - CASQUETTE
  {
    id: '52',
    speech_written: speech_item_found,
    item_provided: '52',
    answers: [],
    type: 'gift',
  },
  // TENNIS - RAQUETTE
  {
    id: '53',
    speech_written: speech_item_found,
    item_provided: '53',
    answers: [],
    type: 'gift',
  },

  
  // ##### MMA -6- #####
  // MMA - PERSONNAGE
  {
    id: '60',
    speech_written: [
      'Des grands kicks comme Jon Jones !',
      'Je pense qu’on ne retrouvera jamais le bout d’arbre explosé…'
    ],
    item_provided: '',
    answers: [],
    type: 'default',
  },
  // MMA - BANDAGE 
  {
    id: '61',
    speech_written: speech_item_found,
    item_provided: '61',
    answers: [],
    type: 'gift',
  },
  // MMA - DENTIER
  {
    id: '62',
    speech_written: speech_item_found,
    item_provided: '62',
    answers: [],
    type: 'gift',
  },
  // MMA - GANT
  {
    id: '63',
    speech_written: speech_item_found,
    item_provided: '63',
    answers: [],
    type: 'gift',
  },

  
  // ##### CYCLISME -7- #####
  // CYCLISME - PERSONNAGE
  {
    id: '70',
    speech_written: [
      'Encore quelques kilomètres avant de voir le bout, il faut s’accrocher...',
      'il reste encore plein de Freebets à trouver !'
    ],
    item_provided: '',
    answers: [],
    type: 'default',
  },
  // CYCLISME - CASQUE
  {
    id: '71',
    speech_written: speech_item_found,
    item_provided: '71',
    answers: [],
    type: 'gift',
  },
  // CYCLISME - GONFLEUR
  {
    id: '72',
    speech_written: speech_item_found,
    item_provided: '72',
    answers: [],
    type: 'gift',
  },
  // CYCLISME - GOURDE
  {
    id: '73',
    speech_written: speech_item_found,
    item_provided: '73',
    answers: [],
    type: 'gift',
  },


  // ##### HOCKEY -8- #####
  // HOCKEY - PERSONNAGE
  {
    id: '80',
    speech_written: [
      'Avec mon palet préféré, aucune chance que je rate le but !'
    ],
    item_provided: '',
    answers: [],
    type: 'default',
  },
  // HOCKEY - CASQUE
  {
    id: '81',
    speech_written: speech_item_found,
    item_provided: '81',
    answers: [],
    type: 'gift',
  },
  // HOCKEY - CLUB
  {
    id: '82',
    speech_written: speech_item_found,
    item_provided: '82',
    answers: [],
    type: 'gift',
  },
  // HOCKEY - PATINS
  {
    id: '83',
    speech_written: speech_item_found,
    item_provided: '83',
    answers: [],
    type: 'gift',
  },

  
  // ##### RUGBY -9- #####
  // RUGBY - PERSONNAGE
  {
    id: '90',
    speech_written: [
      'J’ai jamais vu autant de vent... Je sais même pas où va finir le ballon'
    ],
    item_provided: '',
    answers: [],
    type: 'default',
  },
  // RUGBY - BOUCLIER
  {
    id: '91',
    speech_written: speech_item_found,
    item_provided: '91',
    answers: [],
    type: 'gift',
  },
  // RUGBY - CASQUE
  {
    id: '92',
    speech_written: speech_item_found,
    item_provided: '92',
    answers: [],
    type: 'gift',
  },
  // RUGBY - TEE
  {
    id: '93',
    speech_written: speech_item_found,
    item_provided: '93',
    answers: [],
    type: 'gift',
  },

  
  // ##### MONTAGNE -10- #####
  // MONTAGNE - OXYGENE
  {
    id: '101',
    speech_written: speech_item_found,
    item_provided: '101',
    answers: [],
    type: 'gift',
  },
  // MONTAGNE - PIOLET
  {
    id: '102',
    speech_written: speech_item_found,
    item_provided: '102',
    answers: [],
    type: 'gift',
  },
  // MONTAGNE - TENTE
  {
    id: '103',
    speech_written: speech_item_found,
    item_provided: '103',
    answers: [],
    type: 'gift',
  },
  // MONTAGNE - EASTER EGGS
  {
    id: '109',
    speech_written: [
      'GWAHAH GWAHAH'
    ],
    item_provided: '',
    answers: [],
    type: 'default',
  },
] as dialogInterface[]);