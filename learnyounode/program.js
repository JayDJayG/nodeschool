/*
let path = process.argv[2];
let endFile = `.${process.argv[3]}`;
let fs = require('fs');
*/

function solutionNS ( path, endFile, callback){
	
fs.readdir(`${path}`, function (error, data){
	
	if (error)console.log(error);
	
	let arrFiltered = data.filter(str => str.endsWith(endFile));
	
	for (let i = 0; i < arrFiltered.length; i++){
		console.log(arrFiltered[i]);	
	};
});
};



