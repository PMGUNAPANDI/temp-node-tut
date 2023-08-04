// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share mininum)

//4-names.js
const names = require('./4-names');
console.log(names);

//5-utils.js
const sayHi = require('./5-utils');
sayHi('Tarcin');
sayHi(names.guna);
sayHi(names.jeeva);

//6-alternative-flavor.js
const data = require('./6-alternative-flavor');
console.log(data);

//7-mind-grenade
require('./7-mind-grenade');