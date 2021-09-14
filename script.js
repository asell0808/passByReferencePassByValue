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
// this is useful because it will save space in memory. 
// the downside is that if code is not organized, a future change can ruin a program

//----------------------
// another example
//----------------------

var c = [1,2,3,4,5];
var d = c;
d.push(182138476123);
console.log(d);
// arrays are objects, so c will have a changed value as well
console.log(c);

//----------------------
// another example
//----------------------
let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);

obj.c = 5;
console.log(clone);
// the cloned object was not affected because of Object.assign

let clone2 = {...obj};
console.log(clone2);
// this clone will not have been modified either

