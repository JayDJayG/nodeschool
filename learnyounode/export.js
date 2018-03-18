module.exports = function callFromAway ( path, endFile, callback){
	
fs.readdir(`${path}`, function (error, data){
	
	if (error) return callback(error);
	
	let arrFiltered = data.filter(str => str.endsWith(endFile));
	
	for (let i = 0; i < arrFiltered.length; i++){
		console.log(arrFiltered[i]);	
	};

callback(null, data);

});

};
