import { ref } from 'vue';
import type { dialogInterface } from './interface';

export const isDialogActive = ref(false as boolean);

const speech_item_found = [
  'Bravo !',
  'Tu as trouvé un nouvel objet',
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

  
  // ##### FOOTBALL #####
  // FOOTBALL - CRAMPON
  {
    id: '11',
    speech_written: speech_item_found,
    item_provided: '11',
    answers: [],
    type: 'gift',
  },
  // FOOTBALL - MAILLOT
  {
    id: '12',
    speech_written: speech_item_found,
    item_provided: '12',
    answers: [],
    type: 'gift',
  },


  // ##### BASEBALL #####
  // BASEBALL - BAT
  {
    id: '21',
    speech_written: speech_item_found,
    item_provided: '21',
    answers: [],
    type: 'gift',
  },
  // BASEBALL - CASQUETTE
  {
    id: '22',
    speech_written: speech_item_found,
    item_provided: '22',
    answers: [],
    type: 'gift',
  },
  // BASEBALL - GANT
  {
    id: '23',
    speech_written: speech_item_found,
    item_provided: '23',
    answers: [],
    type: 'gift',
  },

  
  // ##### BASKET #####
  // BASKET - BANDEAU
  {
    id: '31',
    speech_written: speech_item_found,
    item_provided: '31',
    answers: [],
    type: 'gift',
  },
  // BASKET - CHAUSSURE
  {
    id: '32',
    speech_written: speech_item_found,
    item_provided: '32',
    answers: [],
    type: 'gift',
  },
  // BASKET - MANCHETTE
  {
    id: '33',
    speech_written: speech_item_found,
    item_provided: '33',
    answers: [],
    type: 'gift',
  },


  // ##### TENNIS #####

  
  // ##### MMA #####
  // MMA - BANDAGE 
  {
    id: '51',
    speech_written: speech_item_found,
    item_provided: '51',
    answers: [],
    type: 'gift',
  },
  // MMA - DENTIER
  {
    id: '52',
    speech_written: speech_item_found,
    item_provided: '52',
    answers: [],
    type: 'gift',
  },
  // MMA - GANT
  {
    id: '53',
    speech_written: speech_item_found,
    item_provided: '53',
    answers: [],
    type: 'gift',
  },

  
  // ##### CYCLISME #####
  // CYCLISME - CASQUE
  {
    id: '61',
    speech_written: speech_item_found,
    item_provided: '61',
    answers: [],
    type: 'gift',
  },
  // CYCLISME - GONFLEUR
  {
    id: '62',
    speech_written: speech_item_found,
    item_provided: '62',
    answers: [],
    type: 'gift',
  },
  // CYCLISME - GOURDE
  {
    id: '63',
    speech_written: speech_item_found,
    item_provided: '63',
    answers: [],
    type: 'gift',
  },


  // ##### HOCKEY #####
  // HOCKEY - CASQUE
  {
    id: '71',
    speech_written: speech_item_found,
    item_provided: '71',
    answers: [],
    type: 'gift',
  },
  // HOCKEY - CLUB
  {
    id: '72',
    speech_written: speech_item_found,
    item_provided: '72',
    answers: [],
    type: 'gift',
  },
  // HOCKEY - PATINS
  {
    id: '73',
    speech_written: speech_item_found,
    item_provided: '73',
    answers: [],
    type: 'gift',
  },

  
  // ##### RUGBY #####
  // RUGBY - BOUCLIER
  {
    id: '81',
    speech_written: speech_item_found,
    item_provided: '81',
    answers: [],
    type: 'gift',
  },
  // RUGBY - CASQUE
  {
    id: '82',
    speech_written: speech_item_found,
    item_provided: '82',
    answers: [],
    type: 'gift',
  },
  // RUGBY - TEE
  {
    id: '83',
    speech_written: speech_item_found,
    item_provided: '83',
    answers: [],
    type: 'gift',
  },

  
  // ##### MONTAGNE #####
  // MONTAGNE - OXYGENE
  {
    id: '91',
    speech_written: speech_item_found,
    item_provided: '91',
    answers: [],
    type: 'gift',
  },
  // MONTAGNE - PIOLET
  {
    id: '92',
    speech_written: speech_item_found,
    item_provided: '92',
    answers: [],
    type: 'gift',
  },
  // MONTAGNE - TENTE
  {
    id: '93',
    speech_written: speech_item_found,
    item_provided: '93',
    answers: [],
    type: 'gift',
  },
] as dialogInterface[]);