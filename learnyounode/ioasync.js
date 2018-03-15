let arg = process.argv[2];
let fs = require('fs');

 fs.readFile(`${arg}`, function (err, data){
	if(err) console.log(err);
	console.log(data.toString().split('\n').length -1);
});    




