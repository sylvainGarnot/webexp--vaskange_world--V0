import { ref } from 'vue';
import type { dialogInterface } from './interface';

export const isDialogActive = ref(false as boolean);

export const isDialogRegleRead = ref(false as boolean);
export const isDialogMentionLegalActive = ref(false as boolean);

const speech_item_found = [
  'Bravo ! Tu as trouvé un nouvel objet ✅',
] 

export const dialogs = ref([

  // TEST
  // {
  //   id: '0',
  //   speech_written: [
  //     'Hello ! Il y a plusieurs objets ici à trouver.',
  //     'Si tu réussis à tous les réunir un lieu secret te sera accessible.',
  //     'Et si tu es encore plus curieux tu peux aussi trouver des codes cachés. Bonne chance !'
  //   ],
  //   item_provided: '',
  //   answers: ['1','0'],
  //   type: 'default',
  // },
  // {
  //   id: '9',
  //   speech_written: [
  //     'Félicitation !',
  //     'Regarde bien ces codes, ils vont te servir pour...',
  //   ],
  //   item_provided: '',
  //   answers: ['1','0'],
  //   type: 'default',
  // },


  // ##### START PHONE -0- #####


  // ##### EP_WebXP_Start -1- #####
  // FIRST - PERSO
  {
    id: '10',
    speech_written: [
      'Avant de commencer, tu dois certifier avoir plus de <i>18 ans</i> pour participer à l’expérience ✅<br>📎 Toutes les infos du jeu sont sur notre <a href="https://bit.ly/499OnyF">règlement</a>',
      '🤑 Cette course cache énoooormément de Freebets*… Tu veux en gagner ? <i>3 solutions</i> s’offrent à toi <br>*<span>Crédits de jeu non retirables</span>',
      '1. Trouve <i>tous</i> les items sportifs qui sont cachés le long du parcours. Il suffit de zoomer dessus pour les récupérer dans ton inventaire !',
      '1. Quand tu auras tout collecté, tu seras téléporté dans un <i>lieu secret</i> qui te fera participer à un grand <i>tirage au sort</i> 🍀',
      '2. Trouve les <i>codes promos</i> écris dans les différentes scènes. Tu vois un élément écrit quelque part ? Écris-le dans ton app’ Betclic, il renferme peut-être des Freebets* 📲 <br>*<span>Crédits de jeu non retirables</span>',
      '3. Enfin, RDV sur les réseaux sociaux de Betclic toute la journée pour avoir des indices et jouer à des <i>jeux exclusifs</i> 🎁',
      `Avant de partir… Tu dois être abonné aux <i>réseaux sociaux</i> suivants de Betclic pour pouvoir remporter des Freebets* <br>*<span>Crédits de jeu non retirables</span><br>
      <a target="_blank" href="https://www.instagram.com/betclicfrance/ "><img src="logo/instagram.png"/></a>
      <a target="_blank" href="https://www.tiktok.com/@betclicfrance "><img src="logo/tiktok.png"/></a>
      <a target="_blank" href="https://x.com/Betclic"><img src="logo/x.png"/></a>`,
      'Tu as toutes les infos bg : tu peux désormais <i>zoomer</i> dans l’app’ Betclic du téléphone et débuter ta course. <br><br> Bonne chance 💪',
    ],
    item_provided: '',
    answers: [],
    type: 'default--force--mention-legal',
    openOnZoom: true,
    isLarge: true,
  },

  
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
    openOnZoom: false,
    isLarge: false,
  },
  // FOOTBALL - CRAMPON
  {
    id: '21',
    speech_written: speech_item_found,
    item_provided: '21',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
  },
  // FOOTBALL - MAILLOT
  {
    id: '22',
    speech_written: speech_item_found,
    item_provided: '22',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
  },
  // FOOTBALL - CAPTAIN
  {
    id: '23',
    speech_written: speech_item_found,
    item_provided: '23',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
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
    openOnZoom: false,
    isLarge: false,
  },
  // BASEBALL - CASQUETTE
  {
    id: '31',
    speech_written: speech_item_found,
    item_provided: '31',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
  },
  // BASEBALL - BATTE
  {
    id: '32',
    speech_written: speech_item_found,
    item_provided: '32',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
  },
  // BASEBALL - GANT
  {
    id: '33',
    speech_written: speech_item_found,
    item_provided: '33',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
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
    openOnZoom: false,
    isLarge: false,
  },
  // BASKET - BANDEAU
  {
    id: '41',
    speech_written: speech_item_found,
    item_provided: '41',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
  },
  // BASKET - CHAUSSURE
  {
    id: '42',
    speech_written: speech_item_found,
    item_provided: '42',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
  },
  // BASKET - MANCHETTE
  {
    id: '43',
    speech_written: speech_item_found,
    item_provided: '43',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
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
    openOnZoom: false,
    isLarge: false,
  },
  // TENNIS - BANDEAU
  {
    id: '51',
    speech_written: speech_item_found,
    item_provided: '51',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
  },
  // TENNIS - CASQUETTE
  {
    id: '52',
    speech_written: speech_item_found,
    item_provided: '52',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
  },
  // TENNIS - RAQUETTE
  {
    id: '53',
    speech_written: speech_item_found,
    item_provided: '53',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
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
    openOnZoom: false,
    isLarge: false,
  },
  // MMA - BANDAGE 
  {
    id: '61',
    speech_written: speech_item_found,
    item_provided: '61',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
  },
  // MMA - DENTIER
  {
    id: '62',
    speech_written: speech_item_found,
    item_provided: '62',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
  },
  // MMA - GANT
  {
    id: '63',
    speech_written: speech_item_found,
    item_provided: '63',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
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
    openOnZoom: false,
    isLarge: false,
  },
  // CYCLISME - CASQUE
  {
    id: '71',
    speech_written: speech_item_found,
    item_provided: '71',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
  },
  // CYCLISME - GONFLEUR
  {
    id: '72',
    speech_written: speech_item_found,
    item_provided: '72',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
  },
  // CYCLISME - GOURDE
  {
    id: '73',
    speech_written: speech_item_found,
    item_provided: '73',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
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
    openOnZoom: false,
    isLarge: false,
  },
  // HOCKEY - CASQUE
  {
    id: '81',
    speech_written: speech_item_found,
    item_provided: '81',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
  },
  // HOCKEY - CLUB
  {
    id: '82',
    speech_written: speech_item_found,
    item_provided: '82',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
  },
  // HOCKEY - PATINS
  {
    id: '83',
    speech_written: speech_item_found,
    item_provided: '83',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
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
    openOnZoom: false,
    isLarge: false,
  },
  // RUGBY - BOUCLIER
  {
    id: '91',
    speech_written: speech_item_found,
    item_provided: '91',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
  },
  // RUGBY - CASQUE
  {
    id: '92',
    speech_written: speech_item_found,
    item_provided: '92',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
  },
  // RUGBY - TEE
  {
    id: '93',
    speech_written: speech_item_found,
    item_provided: '93',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
  },

  
  // ##### MONTAGNE -10- #####
  // MONTAGNE - OXYGENE
  {
    id: '101',
    speech_written: speech_item_found,
    item_provided: '101',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
  },
  // MONTAGNE - PIOLET
  {
    id: '102',
    speech_written: speech_item_found,
    item_provided: '102',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
  },
  // MONTAGNE - TENTE
  {
    id: '103',
    speech_written: speech_item_found,
    item_provided: '103',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
  },
  // MONTAGNE - DRAPEAU
  {
    id: '104',
    speech_written: speech_item_found,
    item_provided: '104',
    answers: [],
    type: 'gift',
    openOnZoom: true,
    isLarge: false,
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
    openOnZoom: false,
    isLarge: false,
  },


  // ##### SECRET END -99- #####
  // SECRET END - PERSO
  {
    id: '990',
    speech_written: [
      'HELLO : FIN DU JEU 0',
      'HELLO : FIN DU JEU 1',
      'HELLO : FIN DU JEU 2',
    ],
    item_provided: '',
    answers: [],
    type: 'secret-end',
    openOnZoom: false,
    isLarge: false,
  },

] as dialogInterface[]);