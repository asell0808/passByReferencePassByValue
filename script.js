
// Pass by value vs Pass by Reference
//----------------------
//Pass by value
//----------------------

var a = 5; // a now has an address of where the primitive value of 10 sits in memory 
var b = 10; // b now has an address of where the primitive value of 10 sits in memory

// primitive types are passed by value

b++;
console.log(a); //5
console.log(b); //6

var b = a;
// passes a new value to b, which would now contain the value of 5
// pass by value means the variables value is passed 
// in memory based on the change of the value



//------------------------
// Pass by Reference
//------------------------
let obj1 = {name: 'yao', password: '123'};
let obj2 = obj1;
// let obj2 = ''this is the address in memory where the value is located'';

obj2.password = 'easypeasy';

console.log(obj1);
console.log(obj2);

// this will change the password of obj1 and obj2 to have a value of easypeasy.








