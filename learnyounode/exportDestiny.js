let path = process.argv[2];
let endFile = `.${process.argv[3]}`;
let callBack = process.argv[4];


let myModule = require('./export');

myModule.callFromAway(path, endFile, callBack);
