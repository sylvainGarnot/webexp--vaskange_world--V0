import { ref } from 'vue';
import type { itemAcquiredInterface, itemInterface } from './interface';


export const items_acquired = ref([] as itemAcquiredInterface[]);

export const items = ref([


  // ##### START PHONE -0- #####


  // ##### EP_WebXP_Start -1- #####


  // ##### FOOTBALL -2- #####
  // FOOTBALL - CRAMPON
  {
    id: '21',
    name: 'Crampons de Football',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/football_crampon.png',
    image_url_unfound: '/images/item/black&white/football_crampon.png'
  },
  // FOOTBALL - MAILLOT
  {
    id: '22',
    name: 'Maillot de Football',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/football_maillot.png',
    image_url_unfound: '/images/item/black&white/football_maillot.png'
  },
  // FOOTBALL - MAILLOT
  {
    id: '23',
    name: 'Football Capitaine',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/football_captain.png',
    image_url_unfound: '/images/item/black&white/football_captain.png'
  },


  // ##### BASEBALL -3- #####
  // BASEBALL - BAT
  {
    id: '31',
    name: 'Batte de Baseball',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/baseball_bat.png',
    image_url_unfound: '/images/item/black&white/baseball_bat.png'
  },
  // BASEBALL - CASQUETTE
  {
    id: '32',
    name: 'Casquette de Baseball',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/baseball_casquette.png',
    image_url_unfound: '/images/item/black&white/baseball_casquette.png'
  },
  // BASEBALL - GANT
  {
    id: '33',
    name: 'Gant de Baseball',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/baseball_gant.png',
    image_url_unfound: '/images/item/black&white/baseball_gant.png'
  },

  
  // ##### BASKET -4- #####
  // BASKET - BANDEAU
  {
    id: '41',
    name: 'Bandeau',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/basket_bandeau.png',
    image_url_unfound: '/images/item/black&white/basket_bandeau.png'
  },
  // BASKET - CHAUSSURE
  {
    id: '42',
    name: 'Baskets',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/basket_chaussure.png',
    image_url_unfound: '/images/item/black&white/basket_chaussure.png'
  },
  // BASKET - MANCHETTE
  {
    id: '43',
    name: 'Manchons de Basket',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/basket_manchette.png',
    image_url_unfound: '/images/item/black&white/basket_manchette.png'
  },

  
  // ##### TENNIS -5- #####
  // TENNIS - BANDEAU
  {
    id: '51',
    name: 'Bandeau',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/tennis_bandeau.png',
    image_url_unfound: '/images/item/black&white/tennis_bandeau.png'
  },
  // TENNIS - CASQUETTE
  {
    id: '52',
    name: 'Casquette',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/tennis_casquette.png',
    image_url_unfound: '/images/item/black&white/tennis_casquette.png'
  },
  // TENNIS - RAQUETTE
  {
    id: '53',
    name: 'Raquette',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/tennis_raquette.png',
    image_url_unfound: '/images/item/black&white/tennis_raquette.png'
  },

  
  // ##### MMA -6- #####
  // MMA - BANDAGE
  {
    id: '61',
    name: 'Bandage poignet',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/mma_bandage.png',
    image_url_unfound: '/images/item/black&white/mma_bandage.png'
  },
  // MMA - DENTIER
  {
    id: '62',
    name: 'Protège dent',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/mma_dentier.png',
    image_url_unfound: '/images/item/black&white/mma_dentier.png'
  },
  // MMA - GANT
  {
    id: '63',
    name: 'Gant de MMA',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/mma_gant.png',
    image_url_unfound: '/images/item/black&white/mma_gant.png'
  },

  
  // ##### CYCLISME -7- #####
  // CYCLISME - CASQUE
  {
    id: '71',
    name: 'Casque de vélo',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/cyclisme_casque.png',
    image_url_unfound: '/images/item/black&white/cyclisme_casque.png'
  },
  // CYCLISME - GONFLEUR
  {
    id: '72',
    name: 'Pompe à vélo',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/cyclisme_gonfleur.png',
    image_url_unfound: '/images/item/black&white/cyclisme_gonfleur.png'
  },
  // CYCLISME - GOURDE
  {
    id: '73',
    name: 'Gourde',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/cyclisme_gourde.png',
    image_url_unfound: '/images/item/black&white/cyclisme_gourde.png'
  },


  // ##### HOCKEY -8- #####
  // HOCKEY - CASQUE
  {
    id: '81',
    name: 'Casque de Hockey',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/hockey_casque.png',
    image_url_unfound: '/images/item/black&white/hockey_casque.png'
  },
  // HOCKEY - CLUB
  {
    id: '82',
    name: 'Club de Hockey',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/hockey_club.png',
    image_url_unfound: '/images/item/black&white/hockey_club.png'
  },
  // HOCKEY - PATINS
  {
    id: '83',
    name: 'Patins de Hockey',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/hockey_patin.png',
    image_url_unfound: '/images/item/black&white/hockey_patin.png'
  },

  
  // ##### RUGBY -9- #####
  // RUGBY - BOUCLIER
  {
    id: '91',
    name: 'Bouclier de percussion',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/rugby_bouclier.png',
    image_url_unfound: '/images/item/black&white/rugby_bouclier.png'
  },
  // RUGBY - CASQUE
  {
    id: '92',
    name: 'Casque de Rugby',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/rugby_casque.png',
    image_url_unfound: '/images/item/black&white/rugby_casque.png'
  },
  // RUGBY - TEE
  {
    id: '93',
    name: 'Tee de Rugby',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/rugby_tee.png',
    image_url_unfound: '/images/item/black&white/rugby_tee.png'
  },

  
  // ##### MONTAGNE -10- #####
  // MONTAGNE - OXYGENE
  {
    id: '101',
    name: "Bouteille d'Oxygene",
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/montagne_oxygene.png',
    image_url_unfound: '/images/item/black&white/montagne_oxygene.png'
  },
  // MONTAGNE - PIOLET
  {
    id: '102',
    name: "Piolet d'escalade",
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/color/montagne_piolet.png',
    image_url_unfound: '/images/item/black&white/montagne_piolet.png'
  },
  // MONTAGNE - TENTE
  {
    id: '103',
    name: 'Tente',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    image_url: '/images/item/color/montagne_tente.png',
    image_url_unfound: '/images/item/black&white/montagne_tente.png'
  },

] as itemInterface[]);