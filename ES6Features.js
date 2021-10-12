//"use strict"
//ES5 Example
var name='Philly P' + '\nCaruthers';
console.log(name);
//ES6 Example
var name2=`Phillip
                 Caruthers`;
console.log(name2);
var person={firstName:'Philly',lastName:'Caruthers',age:28}
console.log(person);
function helpo(){
    var help='I Need somebody, help!';
    console.log(help)
}
helpo();

//Hoisting
x=10;
console.log(x);