// API CALL
import axios from 'axios';
import { dateVisite } from '@/stores/setting/state';

export function apiPostAvancementUser(type: string) {
  axios
    .post('https://radiant-apparel-aad8de283e.strapiapp.com/api/avancement-users', {
      "data": {
        type,
        date: new Date(),
        datevisite: dateVisite.value,
      }
    }).then(response => {
      console.log('apiPostAvancementUser, type:', type, response); // TEST
    }).catch(error => {
      console.log('apiPostAvancementUser, ERROR type:', type, error); // TEST
    });
}