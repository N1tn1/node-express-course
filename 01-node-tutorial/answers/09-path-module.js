const path = require('path');
const parts = ['Users', 'node-express-course','09-path-module.js']
let result = path.join(...parts);
console.log(result);