module.exports = function  makeImportant(str, exclamation = str.length ){

	return  `${str}${ '!'.repeat(exclamation)}`;
}

    


