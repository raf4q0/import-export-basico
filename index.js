const helloWorld = require('./message');
const calculator = require('./calculator');

console.log('Mi mensaje del día', helloWorld);
console.log('El resultado de la suma: ', calculator.add(1, 2));
console.log('El resultado de la resta: ', calculator.subtract(4, 2));
