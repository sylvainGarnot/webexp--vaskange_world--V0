// API CALL
import axios from 'axios';

export function apiPostAvancementUser(type: string) {
  axios
    .post('https://joyful-bee-2518d744f7.strapiapp.com/api/avancement-users', {
      "data": {
        type,
        date: new Date()
      }
    }).then(response => {
      console.log('apiPostAvancementUser, type:', type, response); // TEST
    }).catch(error => {
      console.log('apiPostAvancementUser, ERROR type:', type, error); // TEST
    });
}