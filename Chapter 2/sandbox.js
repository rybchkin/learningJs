let firstName = 'Valery';
let lastName = 'Rybfchkin'; //difining 2 string variables. Could be overwritten with any data type, though it requires the let before. At first it resets the value, then it adds the new one. 
// Making js a loosly typed lang. In contrast to Ruby, and Pythong, which are strongly typed. 

lastName = 'Rybochkin';
let fullName = firstName + ' ' + lastName; //string concutination

let result = firstName[0];
console.log(result); // returns the 1st character of the firstName string. Starts from 0, since the js is a zero-based programmimg language

let secondResult = firstName.indexOf('a'); //searches for the actual character within the string
console.log('Letter a is a letter number ',secondResult + 1);

console.log(fullName, fullName.length); // .length isn't actually a method, it's a property. Method is basically a data type specifi function, but a property 
// doesn't need to calculate anything

console.log(fullName.toUpperCase()); // applying data type specific methods doesn't effect the initial variable