let arg = process.argv;
let fs = require('fs');
let bufferIO = fs.readFileSync(`${arg[0]}`); 


console.log(bufferIO);


