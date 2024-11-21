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
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/football_crampon.png',
    image_url_unfound: '/images/item/black/football_crampon.png'
  },
  // FOOTBALL - MAILLOT
  {
    id: '22',
    name: "Maillot de l'Équipe de France",
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/football_maillot.png',
    image_url_unfound: '/images/item/black/football_maillot.png'
  },
  // FOOTBALL - MAILLOT
  {
    id: '23',
    name: 'Barssard de capitaine',
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/football_captain.png',
    image_url_unfound: '/images/item/black/football_captain.png'
  },


  // ##### BASEBALL -3- #####
  // BASEBALL - CASQUETTE
  {
    id: '31',
    name: 'Casquette de Baseball',
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/baseball_casquette.png',
    image_url_unfound: '/images/item/black/baseball_casquette.png'
  },
  // BASEBALL - BATTE
  {
    id: '32',
    name: 'Batte de Baseball',
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/baseball_batte.png',
    image_url_unfound: '/images/item/black/baseball_batte.png'
  },
  // BASEBALL - GANT
  {
    id: '33',
    name: 'Gant de Baseball',
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/baseball_gant.png',
    image_url_unfound: '/images/item/black/baseball_gant.png'
  },

  
  // ##### BASKET -4- #####
  // BASKET - BANDEAU
  {
    id: '41',
    name: 'Bandeau de Basket',
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/basket_bandeau.png',
    image_url_unfound: '/images/item/black/basket_bandeau.png'
  },
  // BASKET - CHAUSSURE
  {
    id: '42',
    name: 'Chaussure de Basket',
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/basket_chaussure.png',
    image_url_unfound: '/images/item/black/basket_chaussure.png'
  },
  // BASKET - MANCHETTE
  {
    id: '43',
    name: 'Manchon de Basket',
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/basket_manchette.png',
    image_url_unfound: '/images/item/black/basket_manchette.png'
  },

  
  // ##### TENNIS -5- #####
  // TENNIS - BANDEAU
  {
    id: '51',
    name: 'Bandeau de Tennis',
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/tennis_bandeau.png',
    image_url_unfound: '/images/item/black/tennis_bandeau.png'
  },
  // TENNIS - CASQUETTE
  {
    id: '52',
    name: 'Casquette de Tennis',
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/tennis_casquette.png',
    image_url_unfound: '/images/item/black/tennis_casquette.png'
  },
  // TENNIS - RAQUETTE
  {
    id: '53',
    name: 'Raquette de Tennis',
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/tennis_raquette.png',
    image_url_unfound: '/images/item/black/tennis_raquette.png'
  },

  
  // ##### MMA -6- #####
  // MMA - BANDAGE
  {
    id: '61',
    name: 'Bandage de MMA',
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/mma_bandage.png',
    image_url_unfound: '/images/item/black/mma_bandage.png'
  },
  // MMA - DENTIER
  {
    id: '62',
    name: 'Protège dents de MMA',
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/mma_dentier.png',
    image_url_unfound: '/images/item/black/mma_dentier.png'
  },
  // MMA - GANT
  {
    id: '63',
    name: 'Gant de MMA',
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/mma_gant.png',
    image_url_unfound: '/images/item/black/mma_gant.png'
  },

  
  // ##### CYCLISME -7- #####
  // CYCLISME - CASQUE
  {
    id: '71',
    name: 'Casque de Cyclisme',
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/cyclisme_casque.png',
    image_url_unfound: '/images/item/black/cyclisme_casque.png'
  },
  // CYCLISME - GONFLEUR
  {
    id: '72',
    name: 'Pompe à vélo',
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/cyclisme_gonfleur.png',
    image_url_unfound: '/images/item/black/cyclisme_gonfleur.png'
  },
  // CYCLISME - GOURDE
  {
    id: '73',
    name: 'Gourde de Cyclisme',
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/cyclisme_gourde.png',
    image_url_unfound: '/images/item/black/cyclisme_gourde.png'
  },


  // ##### HOCKEY -8- #####
  // HOCKEY - CASQUE
  {
    id: '81',
    name: 'Casque de Hockey',
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/hockey_casque.png',
    image_url_unfound: '/images/item/black/hockey_casque.png'
  },
  // HOCKEY - CLUB
  {
    id: '82',
    name: 'Crosse de Hockey',
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/hockey_club.png',
    image_url_unfound: '/images/item/black/hockey_club.png'
  },
  // HOCKEY - PATINS
  {
    id: '83',
    name: 'Patins à glace',
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/hockey_patin.png',
    image_url_unfound: '/images/item/black/hockey_patin.png'
  },

  
  // ##### RUGBY -9- #####
  // RUGBY - BOUCLIER
  {
    id: '91',
    name: 'Bouclier de Rugby',
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/rugby_bouclier.png',
    image_url_unfound: '/images/item/black/rugby_bouclier.png'
  },
  // RUGBY - CASQUE
  {
    id: '92',
    name: 'Casque de Rugby',
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/rugby_casque.png',
    image_url_unfound: '/images/item/black/rugby_casque.png'
  },
  // RUGBY - TEE
  {
    id: '93',
    name: 'Tee de Rugby',
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/rugby_tee.png',
    image_url_unfound: '/images/item/black/rugby_tee.png'
  },

  
  // ##### MONTAGNE -10- #####
  // MONTAGNE - OXYGENE
  {
    id: '101',
    name: "Bouteille d'oxygene",
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/montagne_oxygene.png',
    image_url_unfound: '/images/item/black/montagne_oxygene.png'
  },
  // MONTAGNE - PIOLET
  {
    id: '102',
    name: "Piolet d'alpinisme",
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/montagne_piolet.png',
    image_url_unfound: '/images/item/black/montagne_piolet.png'
  },
  // MONTAGNE - TENTE
  {
    id: '103',
    name: "Tente d'alpinisme",
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/montagne_tente.png',
    image_url_unfound: '/images/item/black/montagne_tente.png'
  },
  // MONTAGNE - DRAPEAU
  {
    id: '104',
    name: 'Drapeau Betclic',
    description: 'Il a été ajouté à ton inventaire. Trouve tous les objets cachés pour découvrir un lieu secret rempli de Freebets 😍',
    image_url: '/images/item/color/montagne_drapeau.png',
    image_url_unfound: '/images/item/black/montagne_drapeau.png'
  },

] as itemInterface[]);