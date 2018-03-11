module.exports = function average(...args) {
        let result = 0;
	let len = args.length
	args.forEach(function (value) {
            result += value;
        });
	return result / len;
    };

    



