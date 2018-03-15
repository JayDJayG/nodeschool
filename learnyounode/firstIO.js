let arg = process.argv;
let fs = require('fs');
let bufferIO = fs.readFileSync(`${arg[2]}`).toString().split('\n'); 


console.log(bufferIO.length - 1);


