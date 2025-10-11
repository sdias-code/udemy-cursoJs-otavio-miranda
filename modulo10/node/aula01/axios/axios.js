const axios = require('axios');

axios('https://jsonplaceholder.typicode.com/posts')
.then( response => console.log(response.data))
.catch(error => console.log(error));

