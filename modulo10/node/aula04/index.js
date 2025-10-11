const fs = require('fs').promises;

const path = require('path');

fs.readdir(path.resolve(__dirname))
.then(files => console.log(files))
.catch(error => console.log(error));