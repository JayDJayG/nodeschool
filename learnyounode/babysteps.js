let len = process.argv;
let sum = 0;

len.forEach((element, index) =>{
 if(index >1) sum+= Number(element);
});

console.log(sum);
 
