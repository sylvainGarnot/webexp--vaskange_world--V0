import { ref } from 'vue';
import type { itemAcquiredInterface, itemInterface } from './interface';


export const items_acquired = ref([] as itemAcquiredInterface[]);

export const items = ref([


  // START PHONE


  // ##### FOOTBALL #####
  // FOOTBALL - CRAMPON
  {
    id: '11',
    name: 'Crampons de Football',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/football_crampon.png'
  },
  // FOOTBALL - MAILLOT
  {
    id: '12',
    name: 'Maillot de Football',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/football_maillot.png'
  },


  // ##### BASEBALL #####
  // BASEBALL - BAT
  {
    id: '21',
    name: 'Batte de Baseball',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/baseball_bat.png'
  },
  // BASEBALL - CASQUETTE
  {
    id: '22',
    name: 'Casquette de Baseball',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/baseball_casquette.png'
  },
  // BASEBALL - GANT
  {
    id: '23',
    name: 'Gant de Baseball',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/baseball_gant.png'
  },

  
  // ##### BASKET #####
  // BASKET - BANDEAU
  {
    id: '31',
    name: 'Bandeau',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/basket_bandeau.png'
  },
  // BASKET - CHAUSSURE
  {
    id: '32',
    name: 'Baskets',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/basket_chaussure.png'
  },
  // BASKET - MANCHETTE
  {
    id: '33',
    name: 'Manchons de Basket',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/basket_manchette.png'
  },

  
  // ##### TENNIS #####

  
  // ##### MMA #####
  // MMA - BANDAGE ULTRABUG!
  {
    id: '51',
    name: 'Bandage poignet',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/mma_bandage.png'
  },
  // MMA - DENTIER
  {
    id: '52',
    name: 'Protège dent',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/mma_dentier.png'
  },
  // MMA - GANT
  {
    id: '53',
    name: 'Gant de MMA',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/mma_gant.png'
  },

  
  // ##### CYCLISME #####
  // CYCLISME - CASQUE
  {
    id: '61',
    name: 'Casque de vélo',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/cyclisme_casque.png'
  },
  // CYCLISME - GONFLEUR ULTRABUG!
  {
    id: '62',
    name: 'Pompe à vélo',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/cyclisme_gonfleur.png'
  },
  // CYCLISME - GOURDE
  {
    id: '63',
    name: 'Gourde',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/cyclisme_gourde.png'
  },


  // ##### HOCKEY #####
  // HOCKEY - CASQUE
  {
    id: '71',
    name: 'Casque de Hockey',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/hockey_casque.png'
  },
  // HOCKEY - CLUB
  {
    id: '72',
    name: 'Club de Hockey',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/hockey_club.png'
  },
  // HOCKEY - PATINS
  {
    id: '73',
    name: 'Patins de Hockey',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/hockey_patins.png'
  },

  
  // ##### RUGBY #####
  // RUGBY - BOUCLIER
  {
    id: '81',
    name: 'Bouclier de percussion',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/rugby_bouclier.png'
  },
  // RUGBY - CASQUE ULTRABUG!
  {
    id: '82',
    name: 'Casque de Rugby',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/rugby_casque.png'
  },
  // RUGBY - TEE
  {
    id: '83',
    name: 'Tee de Rugby',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/rugby_tee.png'
  },

  
  // ##### MONTAGNE #####
  // MONTAGNE - OXYGENE ULTRABUG!
  {
    id: '91',
    name: "Bouteille d'Oxygene",
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/montagne_oxygene.png'
  },
  // MONTAGNE - PIOLET
  {
    id: '92',
    name: "Piolet d'escalade",
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    is_hidden: false,
    image_url: '/images/item/montagne_piolet.png'
  },
  // MONTAGNE - TENTE ULTRABUG!
  {
    id: '93',
    name: 'Tente',
    description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
    image_url: '/images/item/montagne_tente.png'
  },

  
  // // #####################
  // // TEST - VASKANGE WORLD
  // // #####################
  // {
  //   id: '0',
  //   name: 'Balon de Foot',
  //   description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
  //   image_url: '/images/item/boomerang.webp',
  // },
  // {
  //   id: '1',
  //   name: 'Balle de tennis',
  //   description: 'Trouve tout les objets cachés pour découvrir un lieu caché',
  //   image_url: '/images/item/boomerang.webp',
  // },
] as itemInterface[]);