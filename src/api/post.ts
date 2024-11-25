// API CALL
import axios from 'axios';


export function apiPostVisit() {
  console.log('TEST postVisit')

  /*
    axios
      // .get('https://joyful-bee-2518d744f7.strapiapp.com/api/avancement-users')
      .get('http://localhost:1337/api/secret-ends')
      .then(response => {
        console.log(response.data.data);
      })
  

  axios
    // .post('http://localhost:1337/api/secret-ends', {
    // .post('https://joyful-bee-2518d744f7.strapiapp.com/api/secret-ends', {
    .post('https://joyful-bee-2518d744f7.strapiapp.com/api/avancement-users', {
      "data": {
        type: 'premier-lieu',
        date: new Date,
        // identifiant: 'gdfgdfgdbhdfbn'
      }
    })
    .then(response => {
      console.log(response);
    });
  
  */
}

export function apiPostSecretEnd(input: string) {
  console.log('TEST apiPostSecretEnd')

  axios
    .post('https://joyful-bee-2518d744f7.strapiapp.com/api/secret-ends', {
      "data": {
        identifiant: input
      }
    })
    .then(response => {
      console.log(response);
    });
}