let inputs = process.argv.slice(2);
let result = inputs.map(x => x.slice(0,1));
console.log(`[${inputs}] becomes \"${result.join('')}\"`);
